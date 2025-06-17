"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Orb from '../../blocks/Backgrounds/Orb/Orb';

const AthenaPage = () => {
  const ref = useRef(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const handleOrbHover = () => {
    setIsHovering(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play().catch(console.error);
    }
  };

  const handleOrbLeave = () => {
    setIsHovering(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return (
    <section id="athena" className="relative min-h-screen bg-black overflow-hidden">
      {/* Hidden audio element */}
      <audio ref={audioRef} preload="auto">
        <source src="/Athena.mp3" type="audio/mpeg" />
      </audio>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-100"></div>
      
      <motion.div 
        ref={ref}
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <motion.div 
              className="space-y-8"
              variants={leftVariants}
            >
              {/* Header Badge */}
              <motion.div 
                className="inline-flex items-center space-x-3 px-4 py-2 bg-sky-500/30 backdrop-blur-sm border border-sky-500/50 rounded-full shadow-lg"
                variants={leftVariants}
              >
                <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse shadow-sm shadow-sky-400/50"></div>
                <span className="text-sm font-semibold text-white" style={{ fontFamily: '"TT Hoves", -apple-system, BlinkMacSystemFont, sans-serif' }}>AI L&D ADVISOR</span>
              </motion.div>

              {/* Main Title */}
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[0.9] tracking-tight"
                variants={leftVariants}
                style={{ 
                  fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 600
                }}
              >
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-blue-400 animate-text-shimmer">Athena</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.h2 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium"
                variants={leftVariants}
                style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
              >
                Your AI Learning & Development Advisor
              </motion.h2>

              {/* Description */}
              <motion.p 
                className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl px-4 lg:px-0"
                variants={leftVariants}
                style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
              >
                Chat or video call with your AI Learning & Development Advisor anytime. Get instant guidance on skill development, training strategies, and workforce growth - like having an expert L&D consultant available 24/7 to help your team reach their potential.
              </motion.p>

              {/* Features List */}
              <motion.div 
                className="space-y-4"
                variants={leftVariants}
              >
                {[
                  "Instant Skill Gap Insights",
                  "Strategic L&D Planning",
                  "Training Needs Identification (TNI)",
                  "Training Planning",
                  "24/7 Expert L&D Consultation"
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-300 text-sm sm:text-base">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>


            </motion.div>

            {/* Right Side - Orb */}
            <motion.div 
              className="flex items-center justify-center"
              variants={rightVariants}
            >
              <div className="relative">
                {/* Orb Container with Hover Wrapper */}
                <div 
                  className="relative max-w-lg mx-auto cursor-pointer"
                  style={{ width: '100%', height: '400px' }}
                  data-responsive-height="sm:h-96 md:h-[500px] lg:h-[600px]"
                  onMouseEnter={handleOrbHover}
                  onMouseLeave={handleOrbLeave}
                >
                  <Orb
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                  />
                  
                  {/* Center Text Overlay */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: isHovering ? 1 : 0.7, 
                      scale: isHovering ? 1.1 : 1 
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <span 
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
                      style={{ 
                        fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
                        fontWeight: 600,
                        textShadow: "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)"
                      }}
                    >
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-400 animate-text-shimmer">
                        Athena
                      </span>
                    </span>
                  </motion.div>
                </div>
                
                {/* Floating Elements Around Orb */}
                <motion.div 
                  className="absolute top-16 left-8 w-3 h-3 bg-purple-400 rounded-full opacity-60"
                  animate={{ 
                    y: [0, -20, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <motion.div 
                  className="absolute bottom-20 right-12 w-2 h-2 bg-blue-400 rounded-full opacity-70"
                  animate={{ 
                    y: [0, 15, 0],
                    opacity: [0.7, 0.9, 0.7]
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div 
                  className="absolute top-32 right-6 w-1.5 h-1.5 bg-slate-400 rounded-full opacity-50"
                  animate={{ 
                    x: [0, 10, 0],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AthenaPage; 