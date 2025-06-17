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
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-lg">Adivirtus AI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-white hover:text-blue-400 transition-colors duration-200 text-sm font-medium cursor-pointer px-2 py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Button - Contact Us Only */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => handleNavClick('#contact')}
              className="group relative px-4 py-2 bg-transparent text-white font-medium rounded-lg transition-all duration-300 overflow-hidden"
            >
              {/* Animated gradient border */}
                              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-cyan-400/50 opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-flowing-gradient-slow"></span>
              
              {/* Inner background */}
              <span className="absolute inset-[1px] rounded-lg bg-black/80 backdrop-blur-sm"></span>
              
              {/* Button content */}
              <span className="relative z-10 text-sm flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Contact Us</span>
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none p-2"
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
                  className="text-white hover:text-blue-400 block px-3 py-2 text-sm font-medium w-full text-left transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-white/20 pt-3 mt-3">
                <button 
                  onClick={() => handleNavClick('#contact')}
                  className="w-full relative bg-transparent text-white font-medium px-3 py-2 rounded-lg transition-all duration-300 overflow-hidden group"
                >
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-cyan-400/30 animate-flowing-gradient"></span>
                  <span className="absolute inset-[1px] rounded-lg bg-black/80"></span>
                  <span className="relative z-10 text-sm flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Contact Us</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}