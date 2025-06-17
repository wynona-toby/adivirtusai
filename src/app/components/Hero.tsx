"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import CalModal from './CalModal';
import SalesCalModal from './SalesCalModal';

// Main Hero Component
export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);
  const [isSalesCalModalOpen, setIsSalesCalModalOpen] = useState(false);

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
    <>
    <motion.section 
      ref={ref}
      className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-100"></div>
      
      {/* Main Content Container - Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[0.9] tracking-tight"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block"
            >
              Transform Workforce Learning
            </motion.span>
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-text-shimmer block leading-[1.2] pb-2"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
              style={{ lineHeight: '1.2' }}
            >
              with Agentic AI Training
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal px-4"
            variants={itemVariants}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
          >
            Adaptive skill assessments, personalized learning roadmaps, and real-time analytics - all powered by autonomous AI agents
          </motion.p>

          {/* Supporting Text */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto px-4"
            variants={itemVariants}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
          >
            Experience the future of corporate training where intelligent agents work continuously to identify skill gaps, create personalized learning paths, and optimize team performance.
          </motion.p>

          {/* CIBA Backed Tag */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              {/* CIBA Backed Tag */}
              <motion.div
                className="inline-flex items-center space-x-3 px-4 py-2.5 bg-slate-900/70 backdrop-blur-sm border border-slate-600/40 rounded-lg shadow-lg hover:border-slate-500/60 transition-all duration-300"
                animate={{
                  y: [0, -8, 0],
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  scale: { type: "spring", stiffness: 400, damping: 17 },
                  boxShadow: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <div className="flex-shrink-0">
                  <Image
                    src="/ciba.png"
                    alt="CIBA"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <span 
                  className="text-sm font-semibold text-slate-200"
                  style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
                >
                  CIBA Backed
                </span>
              </motion.div>

              {/* Enterprise Security Tag */}
              <motion.div
                className="inline-flex items-center space-x-3 px-4 py-2.5 bg-emerald-900/40 backdrop-blur-sm border border-emerald-600/40 rounded-lg shadow-lg hover:border-emerald-500/60 transition-all duration-300"
                animate={{
                  y: [0, -8, 0],
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 10px 25px rgba(16, 185, 129, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  y: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  },
                  scale: { type: "spring", stiffness: 400, damping: 17 },
                  boxShadow: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <div className="flex-shrink-0">
                  <svg 
                    className="w-6 h-6 text-emerald-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
                    />
                  </svg>
                </div>
                <span 
                  className="text-sm font-semibold text-emerald-200"
                  style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
                >
                  Enterprise Security
                </span>
              </motion.div>

              {/* Enterprise Ready Tag */}
              <motion.div
                className="inline-flex items-center space-x-3 px-4 py-2.5 bg-blue-900/40 backdrop-blur-sm border border-blue-600/40 rounded-lg shadow-lg hover:border-blue-500/60 transition-all duration-300"
                animate={{
                  y: [0, -8, 0],
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  },
                  scale: { type: "spring", stiffness: 400, damping: 17 },
                  boxShadow: { type: "spring", stiffness: 400, damping: 17 }
                }}
              >
                <div className="flex-shrink-0">
                  <svg 
                    className="w-6 h-6 text-blue-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                    />
                  </svg>
                </div>
                <span 
                  className="text-sm font-semibold text-blue-200"
                  style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
                >
                  Enterprise Ready
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-8 justify-center items-center max-w-lg mx-auto"
            variants={itemVariants}
          >
                          <motion.button
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 text-white font-semibold rounded-full shadow-xl relative overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none text-sm sm:text-base animate-flowing-gradient"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => setIsSalesCalModalOpen(true)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 animate-flowing-gradient-fast"
                  transition={{ duration: 0.3 }}
                />
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0.1 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative z-10 flex items-center justify-center">
                Try Free
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
              className="group px-5 sm:px-6 py-3 sm:py-4 bg-transparent text-white font-semibold rounded-full relative overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none flex items-center justify-center text-sm sm:text-base"
              whileHover={{ 
                scale: 1.05,
                y: -3
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => setIsCalModalOpen(true)}
            >
              {/* Animated gradient border */}
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/80 via-cyan-400/80 to-blue-500/80 animate-pulse-slow opacity-80 animate-flowing-gradient-slow"></span>
              
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
                <span className="text-blue-100">Book Demo</span>
              </span>
              
              {/* Hover effect */}
              <motion.span
                                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-600/30 z-0 shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-flowing-gradient"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Feature highlights or stats */}
          <motion.div 
            className="pt-8 sm:pt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-md sm:max-w-2xl mx-auto px-4"
            variants={itemVariants}
          >
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white font-mono mb-1 sm:mb-2" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>23+</div>
              <div className="text-xs sm:text-sm text-slate-400" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>AI Agents</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-blue-400 font-mono mb-1 sm:mb-2" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>94%</div>
              <div className="text-xs sm:text-sm text-slate-400" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>Engagement Rate</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-emerald-400 font-mono mb-1 sm:mb-2" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>+34%</div>
              <div className="text-xs sm:text-sm text-slate-400" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>ROI Increase</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle background geometric elements */}
      <div className="absolute top-1/4 left-1/4 w-32 lg:w-64 h-32 lg:h-64 border border-slate-800/20 rotate-45 opacity-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 lg:w-48 h-24 lg:h-48 border border-slate-700/15 rotate-12 opacity-10"></div>
    </motion.section>
    
    {/* Cal.com Modal */}
    <CalModal 
      isOpen={isCalModalOpen} 
      onClose={() => setIsCalModalOpen(false)} 
    />
    
    {/* Sales Cal.com Modal */}
    <SalesCalModal 
      isOpen={isSalesCalModalOpen} 
      onClose={() => setIsSalesCalModalOpen(false)} 
    />
    </>
  );
}