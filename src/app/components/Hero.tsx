"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Main Hero Component
export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className="relative min-h-screen bg-[#0A0A0B] overflow-hidden flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50"></div>
      
      {/* Main Content Container - Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-1 sm:px-2 lg:px-3 py-12 sm:py-16 lg:py-20 text-center">
        <motion.div className="space-y-8 lg:space-y-10" variants={itemVariants}>
          
          {/* Status Indicator */}
          <motion.button 
            className="inline-flex items-center space-x-3 px-4 py-2 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-full shadow-lg mx-auto hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/act'}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-sm shadow-blue-400/50"></div>
            <span className="text-sm font-semibold text-slate-300" style={{ fontFamily: '"TT Hoves", -apple-system, BlinkMacSystemFont, sans-serif' }}>ACT 3</span>
          </motion.button>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.85] tracking-tight"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 700
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block"
            >
              Transform Your Workforce
            </motion.span>
            <motion.span 
              className="text-blue-400 block"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
            >
              with Agentic AI
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal"
            variants={itemVariants}
          >
            Adaptive skill assessments, personalized learning roadmaps, and real-time analytics - all powered by autonomous AI agents
          </motion.p>

          {/* Supporting Text */}
          <motion.p 
            className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto font-light"
            variants={itemVariants}
          >
            Experience the future of corporate training where intelligent agents work continuously to identify skill gaps, create personalized learning paths, and optimize team performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-8 justify-center items-center"
            variants={itemVariants}
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
                Experience Agentic AI
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
              className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600/50 text-slate-200 font-semibold rounded-full hover:border-blue-400/50 relative overflow-hidden w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(51, 65, 85, 0.7)",
                borderColor: "rgba(59, 130, 246, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-full"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View Demo</span>
            </motion.button>
          </motion.div>

          {/* Optional: Feature highlights or stats */}
          <motion.div 
            className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-white font-mono mb-2">23+</div>
              <div className="text-sm text-slate-400">AI Agents</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-blue-400 font-mono mb-2">94%</div>
              <div className="text-sm text-slate-400">Engagement Rate</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-emerald-400 font-mono mb-2">+34%</div>
              <div className="text-sm text-slate-400">ROI Increase</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle background geometric elements */}
      <div className="absolute top-1/4 left-1/4 w-32 lg:w-64 h-32 lg:h-64 border border-slate-800/20 rotate-45 opacity-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 lg:w-48 h-24 lg:h-48 border border-slate-700/15 rotate-12 opacity-10"></div>
    </motion.section>
  );
}