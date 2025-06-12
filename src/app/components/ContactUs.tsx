"use client";

import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section id="contact" className="relative min-h-screen bg-[#0A0A0B] overflow-hidden py-20 lg:py-32">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50"></div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="mx-auto max-w-7xl px-1 sm:px-2 lg:px-3 py-12 sm:py-16 lg:py-20 text-center">
          {/* Status Indicator */}
          <motion.div 
            className="inline-flex items-center space-x-3 px-4 py-2 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-full shadow-lg mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm shadow-emerald-400/50"></div>
            <span className="text-sm font-semibold text-slate-300" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>LET'S CONNECT</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[0.85] tracking-tight"
                style={{ 
                  fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 600
                }}>
              <span className="block text-white">Join the</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mt-2">Movement</span>
            </h1>
          </motion.div>
          
          {/* Description */}
          <motion.div 
            className="mb-12 max-w-3xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed font-normal"
               style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>
              Unlock the future of corporate upskilling and learning with us
            </p>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-light"
               style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 300 }}>
              Ready to transform your workforce? Let's discuss how our agentic AI solutions can revolutionize your team's learning journey.
            </p>
          </motion.div>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-8 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full shadow-xl relative overflow-hidden w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.1 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 flex items-center justify-center">
                Contact Us
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
            
            <motion.button
              className="group px-6 py-4 bg-transparent text-white font-semibold rounded-full relative overflow-hidden w-full sm:w-auto flex items-center justify-center"
              whileHover={{ 
                scale: 1.05,
                y: -3
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Animated gradient border */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/80 to-blue-400/80 animate-pulse-slow opacity-80"></span>
              
              {/* Inner background with blur */}
              <span className="absolute inset-[2px] rounded-full bg-[#101828]/90 backdrop-blur-md z-0"></span>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <svg 
                  className="w-5 h-5 text-blue-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span className="text-blue-100">View Demo</span>
              </span>
              
              {/* Hover effect */}
              <motion.span
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/30 to-blue-400/30 z-0 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
          
          {/* Feature highlights or stats */}
          <motion.div 
            className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-2xl lg:text-3xl font-semibold text-white font-mono mb-2" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>24/7</div>
              <div className="text-sm text-slate-400" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 300 }}>Support Available</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="text-2xl lg:text-3xl font-semibold text-blue-400 font-mono mb-2" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>&lt;24h</div>
              <div className="text-sm text-slate-400" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 300 }}>Response Time</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className="text-2xl lg:text-3xl font-semibold text-emerald-400 font-mono mb-2" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>100%</div>
              <div className="text-sm text-slate-400" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 300 }}>Success Rate</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Subtle background geometric elements */}
      <div className="absolute top-1/4 left-1/4 w-32 lg:w-64 h-32 lg:h-64 border border-slate-800/20 rotate-45 opacity-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 lg:w-48 h-24 lg:h-48 border border-slate-700/15 rotate-12 opacity-10"></div>
    </section>
  );
} 