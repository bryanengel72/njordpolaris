import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Video Container */}
      {/* Hero Video Container */}
      <div className="w-full relative">
        <div className="relative w-full overflow-hidden">
          <img
            src="https://zgfooiszwnzzwerznwwy.supabase.co/storage/v1/object/public/website-assets/Metal%20on%20belt.jpeg"
            alt="Hero image showing metal on belt"
            className="w-full h-auto block object-cover"
            style={{ display: 'block' }}
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src="https://zgfooiszwnzzwerznwwy.supabase.co/storage/v1/object/public/website-assets/Njord%20Polaris,%20Inc.%20FF-01.png"
              alt="Njord Polaris Logo"
              className="w-2/3 max-w-sm md:max-w-md lg:max-w-lg h-auto"
            />
          </div>
        </div>
      </div>

      {/* Hero Text Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-24 w-full reveal">
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