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
            <span className="text-sm font-semibold text-slate-300" style={{ fontFamily: '"TT Hoves", -apple-system, BlinkMacSystemFont, sans-serif' }}>LET'S CONNECT</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.85] tracking-tight"
                style={{ 
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 700
                }}>
              <span className="block text-white">Join the</span>
              <span className="block text-blue-400 mt-2">Movement</span>
            </h1>
          </motion.div>
          
          {/* Description */}
          <motion.div 
            className="mb-12 max-w-3xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed font-normal">
              Unlock the future of corporate upskilling and learning with us
            </p>
            <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
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
              className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600/50 text-slate-200 font-semibold rounded-full hover:border-slate-400/50 relative overflow-hidden w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(51, 65, 85, 0.7)",
                borderColor: "rgba(148, 163, 184, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-slate-500/20 opacity-0 group-hover:opacity-100 rounded-full"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View Demo</span>
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
              <div className="text-2xl lg:text-3xl font-bold text-white font-mono mb-2">24/7</div>
              <div className="text-sm text-slate-400">Support Available</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-blue-400 font-mono mb-2">&lt;24h</div>
              <div className="text-sm text-slate-400">Response Time</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-emerald-400 font-mono mb-2">100%</div>
              <div className="text-sm text-slate-400">Success Rate</div>
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