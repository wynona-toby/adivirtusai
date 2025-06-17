"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

        {/* Mobile Navigation Menu - Enhanced */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="px-2 pt-4 pb-4 space-y-1 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl mt-3 shadow-2xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-white hover:text-blue-400 hover:bg-blue-500/10 block px-4 py-3 text-sm font-medium w-full text-left transition-all duration-200 rounded-xl group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      <span>{item.label}</span>
                    </div>
                  </motion.button>
                ))}
                
                <motion.div 
                  className="border-t border-slate-600/50 pt-4 mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <motion.button 
                    onClick={() => handleNavClick('#contact')}
                    className="w-full relative bg-transparent text-white font-medium px-4 py-3 rounded-xl transition-all duration-300 overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 animate-flowing-gradient-slow"></span>
                    <span className="absolute inset-[1px] rounded-xl bg-gradient-to-r from-slate-800/90 to-slate-900/90"></span>
                    <span className="relative z-10 text-sm flex items-center justify-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>Contact Us</span>
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}