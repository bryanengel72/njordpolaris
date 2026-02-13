import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001D00] text-white py-12 border-t border-[#001D00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img
              src="https://zgfooiszwnzzwerznwwy.supabase.co/storage/v1/object/public/website-assets/Njord%20Polaris_White.svg"
              alt="Njord Polaris"
              className="h-10 w-auto"
            />
          </div>
          <div className="text-white text-sm">
            &copy; {new Date().getFullYear()} Njord Polaris. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;