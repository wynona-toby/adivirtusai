"use client";

import { useState } from 'react';

const navigationItems = [
  { label: "Pricing", href: "/pricing" },
  { label: "Info", href: "/info" },
  { label: "Community", href: "/community" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium px-4 py-2 border border-white/20 rounded-lg hover:border-white/40">
              Contact Us
            </button>
            <button className="bg-white text-black hover:bg-gray-100 transition-colors duration-200 text-sm font-medium px-4 py-2 rounded-lg">
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
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-gray-300 block px-3 py-2 text-sm font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-white/20 pt-3 mt-3 space-y-2">
                <button className="w-full text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium px-3 py-2 border border-white/20 rounded-lg hover:border-white/40">
                  Contact Us
                </button>
                <button className="w-full bg-white text-black hover:bg-gray-100 transition-colors duration-200 text-sm font-medium px-3 py-2 rounded-lg">
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