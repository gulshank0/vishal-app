"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const { data: session } = useSession()
  const pathname = usePathname()
  const [token, setToken] = React.useState<string | null>(null)

  React.useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])

  React.useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <div className="fixed top-0 z-50 w-full flex justify-center pt-4">
      <nav className="rounded-full w-11/12 max-w-5xl border-b bg-black bg-opacity-100 backdrop-blur dark:bg-zinc-950/90 transition-all">
        <div className="mx-auto px-6">
          <div className="flex h-16 md:h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.jpeg" alt="Logo" width={60} height={80} className="h-10 w-auto rounded" />
              <span className="hidden sm:block text-xl font-bold text-white">
                Vaishanavi Press
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              <ul className="flex space-x-5">
                {menuItems.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className={`text-base font-medium transition-colors ${
                        pathname === href
                          ? "text-white font-semibold"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pl-4 border-l border-gray-700 flex items-center space-x-3">
                {token || session?.user ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      localStorage.removeItem("token")
                      signOut()
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/signup">Signup</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>

            {/* Mobile menu toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
                className="text-white hover:text-gray-300 focus:outline-none p-2"
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden absolute top-16 left-0 md:top-16 w-full bg-black/95 backdrop-blur z-40 transition-all duration-300 ease-in-out rounded-b-3xl ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col h-full p-6 space-y-6 overflow-y-auto">
            <ul className="flex-grow space-y-4">
              {menuItems.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 text-lg pl-3 rounded transition ${
                      pathname === href
                        ? "text-white font-semibold border-l-4 border-primary"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-6 mt-6 border-t border-gray-700 space-y-4">
              {token || session?.user ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    localStorage.removeItem("token")
                    signOut()
                    setMenuOpen(false)
                  }}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button asChild variant="outline" className="w-full" onClick={() => setMenuOpen(false)}>
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full" onClick={() => setMenuOpen(false)}>
                    <Link href="/signup">Signup</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
