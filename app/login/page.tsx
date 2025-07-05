'use client';

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import  {Navbar} from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Login() {
  const router = useRouter();
  const session = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ password: "", showPassword: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: password.password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      if (data.token || session.data?.user) {
        localStorage.setItem("token", data.token);
      }

      router.push("/");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow bg-black relative overflow-hidden py-6 sm:py-8 md:py-12">
        {/* Background Gradient - More responsive positioning */}
        <div className="absolute w-[150%] h-[150%] md:w-full md:h-full -left-1/4 md:-left-1/2 top-0 rounded-full bg-gradient-to-br from-blue-900 to-black opacity-70" />

        {/* Welcome Section (Tablet and Desktop only) */}
        <div className="hidden md:block absolute z-10 left-[5%] top-[40%] lg:left-[15%] text-center max-w-xs sm:max-w-md lg:max-w-2xl">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-white animate-gradient-x">
            HELLO, WELCOME!!
          </h1>
        </div>

        {/* Login Form - Better responsive layout */}
        <div className="min-h-[80vh] w-full flex justify-center md:justify-end items-center px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-gradient-to-b from-gray-950 rounded-2xl p-5 sm:p-6 md:p-8 border border-white/20 backdrop-blur-sm bg-opacity-80">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-4 sm:mb-6">Login to your Account</h2>

            {/* Mobile Register Prompt - Improved spacing */}
            <div className="md:hidden text-center mb-4 sm:mb-6">
              <p className="text-white/90 mb-2">Do not have an account?</p>
              <button
                type="button"
                onClick={() => router.push("/signup")}
                className="px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 w-full"
              >
                Register
              </button>
            </div>

            {/* Form - Better spacing for mobile */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter Email"
                className="w-full rounded-xl bg-black/50 text-white px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-white/10 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <div className="relative">
                <input
                  type={password.showPassword ? "text" : "password"}
                  value={password.password}
                  onChange={(e) => setPassword({ ...password, password: e.target.value })}
                  required
                  placeholder="Password"
                  className="w-full rounded-xl bg-black/50 text-white px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-white/10 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 pr-10"
                />
                <div
                  onClick={() => setPassword({ ...password, showPassword: !password.showPassword })}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                >
                  {password.showPassword ? "🙈" : "👁️"}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => router.push("/auth/forgot-password")}
                  className="text-sm hover:cursor-pointer text-white hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gray-900 hover:cursor-pointer text-white font-medium py-2.5 sm:py-3 rounded-md hover:bg-slate-900 transition"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {/* Auth Buttons - Better responsive grid */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => signIn()}
                  className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 w-full bg-gray-900 rounded-md text-gray-100 hover:cursor-pointer font-medium shadow hover:bg-slate-900 text-sm sm:text-base"
                >
                  <span>Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/auth/otp-login")}
                  className="px-3 sm:px-4 py-2.5 sm:py-3 w-full bg-gray-900 rounded-md text-gray-100 font-medium shadow hover:cursor-pointer hover:bg-slate-900 text-sm sm:text-base"
                >
                  OTP Login
                </button>
              </div>

              {/* Bottom Register Link */}
              <p className="text-center text-white text-xs sm:text-sm mt-3 sm:mt-4">
                Don't have an account?{" "}
                <Link href="/signup" className="underline text-cyan-400">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
