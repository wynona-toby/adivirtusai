"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const tags = [
    "Agentic AI Architecture",
    "SMB First Design", 
    "Outcome Obsessed"
  ];

  return (
    <section id="about" className="relative min-h-screen bg-black overflow-hidden py-20 lg:py-32">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-100"></div>
      
      <motion.div 
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center space-x-3 px-4 py-2 bg-pink-500/30 backdrop-blur-sm border border-pink-500/50 rounded-full shadow-lg mx-auto mb-6"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse shadow-sm shadow-pink-400/50"></div>
            <span className="text-sm font-semibold text-white" style={{ fontFamily: '"TT Hoves", -apple-system, BlinkMacSystemFont, sans-serif' }}>ABOUT</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[0.9] tracking-tight mb-8"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600
            }}
          >
            Adivirtus AI: Transforming Workforce Learning Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">Agentic AI</span>
          </motion.h2>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {/* Mission Statement */}
          <motion.div 
            className="mb-16"
            variants={itemVariants}
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 leading-relaxed text-center mb-12 px-4"
               style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>
              At Adivirtus AI, we believe every employee deserves personalized growth opportunities, and every business deserves to unlock their team&apos;s full potential. Founded with a vision to democratize world-class upskilling for small and medium businesses, we&apos;re revolutionizing how companies develop their most valuable asset—their people.
            </p>

            {/* Tags */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              {tags.map((tag, index) => (
                <motion.div
                  key={index}
                  className="px-6 py-3 bg-pink-500/20 border border-pink-500/30 rounded-full hover:border-rose-400/50 transition-all duration-300"
                  variants={tagVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-white font-medium text-sm sm:text-base" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>{tag}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About; 