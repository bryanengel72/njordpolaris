import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Image Container */}
      <div className="w-full h-[60vh] md:h-[80vh] bg-gray-200 relative overflow-hidden">
        <img 
          src="https://picsum.photos/seed/molten1/1920/1080" 
          alt="Molten metal pouring in industrial factory" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Hero Text Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            One Planet.<br />
            Limited Resources.<br />
            Infinite Growth.
          </h1>
          <div className="w-24 h-1 bg-gray-900 mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;