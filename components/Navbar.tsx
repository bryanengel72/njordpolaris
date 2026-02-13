import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
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
    <nav className="sticky top-0 z-50 bg-[#001D00] text-white shadow-sm border-b border-[#001D00]">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="flex items-center group"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-xl tracking-[0.2em] font-bold text-white uppercase" style={{ fontFamily: "'Copperplate Gothic Light', 'Copperplate', 'Copperplate Gothic', serif" }}>
                Njord Polaris
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${isActive(link.path)
                  ? 'text-[#001D00] bg-white font-semibold'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
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
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#001D00] border-t border-white/10 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded text-base font-medium ${isActive(link.path)
                  ? 'text-[#001D00] bg-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
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