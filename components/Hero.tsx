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
            className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] block object-cover object-bottom"
            style={{ display: 'block' }}
          />
          <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-4 md:p-8">
            <img
              src="https://pub-e275050976b44ce6a57233bbbfab851a.r2.dev/Njord%20Polaris%2C%20Inc%401.5x.png"
              alt="Njord Polaris White Logo"
              className="w-auto h-auto max-w-[80%] max-h-[80%] drop-shadow-lg opacity-90 object-contain"
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