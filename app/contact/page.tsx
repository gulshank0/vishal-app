import ContactCard from "@/components/Contact";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
export default function ContactPage() {
  return (
    <div>
      <Navbar />
    <div className="flex flex-col min-h-screen bg-black text-white pt-10">
      <ContactCard />
      <div>
        <Footer />
      </div>
    </div>
    </div>
  );
}