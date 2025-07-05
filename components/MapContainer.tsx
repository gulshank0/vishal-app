'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import { Map } from 'leaflet';

export default function MapComponent() {
  const mapInstanceRef = useRef<Map | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only run this effect on the client side
    const initializeMap = async () => {
      try {
        // Import Leaflet dynamically
        const L = await import('leaflet');
        
        // Check if the map element exists and hasn't been initialized
        const mapElement = document.getElementById('map');
        
        if (mapElement && !mapInstanceRef.current) {
          // Create the map
          const map = L.map('map').setView([26.0565, 83.1837], 13); // These are approximate coords for Azamgarh
          
          // Store the map instance
          mapInstanceRef.current = map;
          
          // Add the tile layer
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);
          
          // Add a marker
          const marker = L.marker([26.0565, 83.1837]).addTo(map)
            .bindPopup('Vishal Printers Pvt. Ltd.<br/>Palhana, Azamgarh, U.P.276202')
            .openPopup();
            
          // Fix icon issues
          const icon = L.icon({
            iconUrl: '/marker-icon.png',
            iconRetinaUrl: '/marker-icon-2x.png',
            shadowUrl: '/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          });
          
          marker.setIcon(icon);
        }
      } catch (error) {
        console.error("Failed to initialize map:", error);
      }
    };

    // Initialize the map
    initializeMap();
    
    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div id="map" className="h-full w-full"></div>;
}