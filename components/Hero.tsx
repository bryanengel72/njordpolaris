import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Image Container */}
      <div className="w-full h-[60vh] md:h-[80vh] bg-gray-200 relative overflow-hidden">
        <img
          src="https://zgfooiszwnzzwerznwwy.supabase.co/storage/v1/object/public/website-assets/oil_tank.jpg"
          alt="Crude oil tank"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Hero Text Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12 md:py-24 w-full reveal">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
            One Planet.<br />
            Limited Resources.<br />
            Infinite Growth.
          </h1>
          <div className="w-24 h-1 bg-[#001D00] mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;