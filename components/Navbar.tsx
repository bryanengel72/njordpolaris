import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/#about' },
    { name: 'Products', path: '/products-services#products' },
    { name: 'Services', path: '/products-services#services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    // Exact match for root
    if (path === '/' && location.pathname === '/' && !location.hash) return true;
    
    // Check if path matches current pathname
    const [pathRoute, pathHash] = path.split('#');
    if (location.pathname === pathRoute) {
      if (!pathHash) return true; // It matches the page
      if (location.hash === `#${pathHash}`) return true; // It matches the specific section
    }
    
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="text-xl tracking-[0.2em] font-medium text-[#001D00] uppercase"
              onClick={() => setIsOpen(false)}
            >
              Njord Polaris
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.path) 
                    ? 'text-black font-semibold' 
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium ${
                  isActive(link.path)
                    ? 'text-black bg-gray-50'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;