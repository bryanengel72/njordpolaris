import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Video Container */}
      <div className="w-full bg-gray-50 relative" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/4Uq1MsovMqc?autoplay=1&mute=1&loop=1&playlist=4Uq1MsovMqc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Njord Polaris Hero Video"
          allow="autoplay; encrypted-media"
          style={{ border: 'none' }}
        />
        <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
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