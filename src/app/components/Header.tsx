"use client";

import { useState } from 'react';

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Athena", href: "#athena" },
  { label: "Security", href: "#security" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sm:fixed sm:top-0 sm:left-0 sm:right-0 sm:z-50 sm:bg-black/20 sm:backdrop-blur-sm
                       max-sm:relative max-sm:bg-black max-sm:z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-lg">Adivirtus AI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-white hover:text-blue-400 transition-colors duration-200 text-sm font-medium cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleNavClick('#contact')}
              className="text-white hover:text-blue-400 transition-colors duration-200 text-sm font-medium px-4 py-2 border border-white/20 rounded-lg hover:border-blue-400/40"
            >
              Contact Us
            </button>
            <button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 text-sm font-medium px-4 py-2 rounded-lg">
              Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                suppressHydrationWarning={true}
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-md rounded-lg mt-2">
              {navigationItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-blue-400 block px-3 py-2 text-sm font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-white/20 pt-3 mt-3 space-y-2">
                <button 
                  onClick={() => handleNavClick('#contact')}
                  className="w-full text-white hover:text-blue-400 transition-colors duration-200 text-sm font-medium px-3 py-2 border border-white/20 rounded-lg hover:border-blue-400/40"
                >
                  Contact Us
                </button>
                <button className="w-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 text-sm font-medium px-3 py-2 rounded-lg">
                  Demo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}