import React from 'react';
import { LOCATIONS } from '../../../constants/locations';

/**
 * LocationMap
 * Renders an interactive world map with clickable location pins.
 * 
 * @param {Function} onPinClick - Optional callback when a pin is clicked (handles scrolling by default).
 */
export default function LocationMap({ onPinClick }) {
  const handlePinClick = (location) => {
    const targetId = `loc-${location.slug}`;
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (onPinClick) onPinClick(location);
  };

  return (
    <div className="relative w-full overflow-hidden mb-12">
      <div className="relative inline-block w-full">
        {/* Map Background */}
        <img 
          src="https://cdn.chemtradeasia.com/product-websites/maps-desktop.webp" 
          alt="Tradeasia Global Presence Map"
          className="w-full h-auto block"
        />

        {/* Location Pins */}
        {LOCATIONS.map((loc) => (
          <div 
            key={loc.id}
            className={`absolute w-3 h-3 bg-[#6f96d1] rounded-full cursor-pointer group pin ${loc.pinClass}`}
            style={{ 
              top: loc.coords.top, 
              left: loc.coords.left,
              transform: 'translate(-50%, -50%)' 
            }}
            onClick={() => handlePinClick(loc)}
          >
            {/* Pulse Animation - using absolute inset-0 to match parent size perfectly */}
            <div 
              className="absolute inset-0 bg-[#6f96d1] rounded-full opacity-75" 
              style={{ 
                animation: 'custom-pulse 1.3s ease-in-out infinite',
                // Center the transform for the scale effect
                transformOrigin: 'center'
              }}
            ></div>

            {/* Label - Positioned with specific offsets */}
            <span 
              className="absolute inline-block bg-white px-2.5 py-0.5 rounded-full text-[#0a205c] text-[16px] font-normal border-2 border-[#e5e7e9] shadow-[4.8px_4.8px_12px_rgba(0,0,0,0.1)] whitespace-nowrap -translate-y-1/2 transition-shadow group-hover:shadow-md pointer-events-none"
              style={{ 
                left: loc.labelOffset?.x || "-53px", 
                top: loc.labelOffset?.y || "-25px" 
              }}
            >
              {loc.country}
            </span>
          </div>
        ))}
      </div>
      
      {/* Pulse Keyframes Definition */}
      <style>{`
        @keyframes custom-pulse {
          0% { transform: scale(1); opacity: 0.75; }
          100% { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
