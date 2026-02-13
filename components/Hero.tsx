import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Video Container */}
      {/* Hero Video Container */}
      <div className="w-full relative">
        <div className="relative w-full overflow-hidden">
          <video
            className="w-full h-auto block object-cover"
            autoPlay
            muted
            loop
            playsInline
            style={{ display: 'block' }}
          >
            <source src="https://zgfooiszwnzzwerznwwy.supabase.co/storage/v1/object/public/website-assets/Molten.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
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