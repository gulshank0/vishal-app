'use client';

import dynamic from 'next/dynamic';

// Import MapComponent with no SSR
const MapContainerWithNoSSR = dynamic(
  () => import('./MapContainer'),
  { 
    ssr: false, // This is crucial - prevents server-side rendering
    loading: () => (
      <div className="h-full w-full flex items-center justify-center bg-gray-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-sm text-gray-300">Loading map...</p>
        </div>
      </div>
    )
  }
);

export default function LiveMap() {
  return <MapContainerWithNoSSR />;
}
