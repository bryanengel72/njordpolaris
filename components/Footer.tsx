import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001D00] text-white py-12 border-t border-[#001D00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-medium tracking-widest uppercase text-white" style={{ fontFamily: "'Copperplate Gothic Light', 'Copperplate', 'Copperplate Gothic', serif" }}>Njord Polaris</h3>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Njord Polaris. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;