"use client";
import Image from 'next/image';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic'; // Add this import

// Import Map with no SSR
const MapWithNoSSR = dynamic(
  () => import('./Map'),
  { 
    ssr: false,
    loading: () => (
      <div className="h-48 w-full flex items-center justify-center bg-gray-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-sm text-gray-300">Loading map...</p>
        </div>
      </div>
    )
  }
);

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-10 text-white w-full py-10">
      <div className="container-fluid max-w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Information */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Logo" width={80} height={60} className="h-10 w-auto" />
              <span className="font-bold text-2xl">Vishal Printers Pvt. Ltd.</span>
            </div>
            <p className="text-sm flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              Palhana, Azamgarh
               U.P.276202 
            </p>
            <div className="text-sm space-y-1">
              <p className='flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:office@rbasedservices.in" className="hover:underline">office@printingservices.in</a>
              </p>
              <p className='flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:rbasedservices@outlook.com" className="hover:underline">printingservices@outlook.com</a>
              </p>
              <p className='flex items-center space-x-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:printingservice@gmail.com" className="hover:underline">printingservice@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Column 2: Contact Us */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-2xl">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>8005390053, 7017879339</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>office@printingservices.in</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>U.P. , India</span>
              </p>
            </div>
          </div>

          {/* Column 3: Map */}
          <div className="flex flex-col space-y-4">
            <h3 className="flex items-center font-bold text-2xl">Visit Us</h3>
            <div className="w-90 h-48 bg-gray-800 rounded overflow-hidden">
            <MapWithNoSSR />
            </div>
          </div>

          {/* Column 4: Reach Out (Google Form) */}
            <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-2xl">Subscribe Newsletter</h3>
            <p className="text-sm mb-2">Stay updated with our latest news, services and offers.</p>
            <form className="flex flex-col space-y-3">
              <div>
              <input
                type="email"
                placeholder="Your email address"
                className="w-70 px-4 py-2 bg-muted border border-gray-700 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-slate-950"
                required
              />
              </div>
               <button
                type="button"
                className="relative group/btn flex space-x-2 items-center justify-center px-4 w-40 text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 hover:cursor-pointer dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                
              >

             <span className=" text-neutral-700 dark:text-neutral-300 text-lg">  

                Subscribe
              </span>

              <BottomGradient />
              </button>
            </form>
              <div className="flex items-center space-x-2 mb-4">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-5 w-5 rounded border-gray-700 hover:cursor-pointer focus:ring-2 focus:ring-gray-900 text-blue-400"
                  required
                />
                <label htmlFor="consent" className="text-gray-300 text-sm mr-7">
                  Yes, I would like to receive communications by email. 
                </label>
              </div>
            
            </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-10 bg-black text-center text-sm">
          <p>© {new Date().getFullYear()} Vishal Printers Pvt. Ltd.. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
