import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-900 py-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-medium tracking-widest uppercase" style={{ fontFamily: "'Copperplate Gothic Light', 'Copperplate', 'Copperplate Gothic', serif" }}>Njord Polaris</h3>
          </div>
          <div className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Njord Polaris. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;