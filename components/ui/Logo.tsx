import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image 
        src="/logo.png" // Path relative to the public folder
        alt="Logo"
        width={80} // Equivalent to w-40
        height={60} // Equivalent to h-15
        className="h-10 w-30 rounded-xl"
      />
    </div>
  );
}