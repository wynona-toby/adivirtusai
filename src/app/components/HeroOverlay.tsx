"use client";

import React from 'react';

interface HeroOverlayProps {
  x?: number; // Horizontal position as percentage (0-100)
  y?: number; // Vertical position as percentage (0-100)
  width?: number; // Width as percentage (0-100)
  height?: number; // Height as percentage (0-100)
}

const HeroOverlay: React.FC<HeroOverlayProps> = ({ 
  x = 50, 
  y = 50, 
  width = 40, 
  height = 20 
}) => {
  return (
    <div 
      className="absolute z-20 pointer-events-none
                 2xl:relative 2xl:z-20
                 max-2xl:lg:absolute max-2xl:lg:z-20
                 max-lg:absolute max-lg:z-20"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${width}%`,
        height: `${height}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Blue background container with text */}
      <div className="w-full h-full bg-blue-600 rounded-lg shadow-2xl flex items-center justify-center 
                     2xl:px-6 2xl:py-4
                     max-2xl:lg:px-2 max-2xl:lg:py-2 
                     max-2xl:lg:md:px-4 max-2xl:lg:md:py-3
                     max-2xl:lg:lg:px-5 max-2xl:lg:lg:py-3
                     max-lg:px-1 max-lg:py-1
                     max-lg:sm:px-2 max-lg:sm:py-2
                     max-lg:md:px-3 max-lg:md:py-2">
        <div className="text-center">
          <h1 className="font-bold text-white tracking-tight
                         2xl:text-2xl 2xl:sm:text-3xl 2xl:md:text-4xl 2xl:lg:text-5xl 2xl:xl:text-6xl
                         max-2xl:lg:text-lg max-2xl:lg:sm:text-xl max-2xl:lg:md:text-2xl max-2xl:lg:lg:text-3xl max-2xl:lg:xl:text-4xl
                         max-lg:text-sm max-lg:sm:text-base max-lg:md:text-lg max-lg:lg:text-xl max-lg:xl:text-2xl">
            HR dashboard
          </h1>
          
          {/* Optional subtitle */}
          <div className="mt-2 opacity-90">
            <p className="font-light text-white/80 tracking-wide
                         2xl:text-sm 2xl:sm:text-base 2xl:md:text-lg
                         max-2xl:lg:text-xs max-2xl:lg:sm:text-sm max-2xl:lg:md:text-base
                         max-lg:text-xs max-lg:sm:text-xs max-lg:md:text-sm">
              Streamline your workforce management
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOverlay; 