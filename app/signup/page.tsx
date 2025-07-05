import { SignupForm } from "@/components/Signup";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Signup() {
  return (
    <div>
            <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-200 pt-15">

    <SignupForm /> 
        </div>
        <Footer />
    </div>
    
  );
}