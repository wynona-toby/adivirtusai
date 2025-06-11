"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Orb from '../../blocks/Backgrounds/Orb/Orb';

const AthenaPage = () => {
  const ref = useRef(null);
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

  return (
    <section className="relative min-h-screen bg-[#0A0A0B] overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50"></div>
      
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
                className="inline-flex items-center space-x-3 px-4 py-2 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-full shadow-lg"
                variants={leftVariants}
              >
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-sm shadow-purple-400/50"></div>
                <span className="text-sm font-semibold text-slate-300" style={{ fontFamily: '"TT Hoves", -apple-system, BlinkMacSystemFont, sans-serif' }}>VIRTUAL CHRO</span>
              </motion.div>

              {/* Main Title */}
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.85] tracking-tight"
                variants={leftVariants}
                style={{ 
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                  fontWeight: 700
                }}
              >
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Athena</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.h2 
                className="text-xl sm:text-2xl lg:text-3xl text-slate-300 font-medium"
                variants={leftVariants}
              >
                Your AI Chief Human Resources Officer
              </motion.h2>

              {/* Description */}
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl"
                variants={leftVariants}
              >
                Chat or video call with your AI Chief Human Resources Officer anytime. Get instant strategic advice, training recommendations, and answers to complex HR questions - like having an expert CHRO available 24/7.
              </motion.p>

              {/* Features List */}
              <motion.div 
                className="space-y-4"
                variants={leftVariants}
              >
                {[
                  "24/7 availability for strategic HR guidance",
                  "Instant training and development recommendations",
                  "Complex HR question resolution",
                  "Data-driven workforce insights",
                  "Personalized leadership coaching"
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

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-6"
                variants={leftVariants}
              >
                <motion.button
                  className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-xl relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 flex items-center justify-center">
                    Start Chat with Athena
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
                  className="group px-8 py-4 bg-slate-800/50 backdrop-blur-sm border-2 border-slate-600/50 text-slate-200 font-semibold rounded-full hover:border-slate-400/50 relative overflow-hidden"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(51, 65, 85, 0.7)",
                    borderColor: "rgba(148, 163, 184, 0.6)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10">Video Call Demo</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side - Orb */}
            <motion.div 
              className="flex items-center justify-center"
              variants={rightVariants}
            >
              <div className="relative">
                {/* Orb Container */}
                <div style={{ width: '100%', height: '600px', position: 'relative' }} className="max-w-lg mx-auto">
                  <Orb
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    hue={280} // Purple-blue hue to match the theme
                    forceHoverState={false}
                  />
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