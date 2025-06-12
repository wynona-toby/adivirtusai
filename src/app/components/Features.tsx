"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Features = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const allFeatures = [
    {
      title: "AI-Driven Assessments & Skill Gap Analysis",
      description: "Discover your exact skill gaps in minutes with our adaptive AI assessments. Our intelligent system evaluates technical, soft, and cognitive skills to create a comprehensive skill profile, identifying precisely what you need to learn next.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" suppressHydrationWarning={true}>
          <circle cx="12" cy="12" r="10" stroke="#3B82F6" strokeWidth="2" fill="none" suppressHydrationWarning={true}/>
          <circle cx="12" cy="12" r="6" fill="#3B82F6" suppressHydrationWarning={true}/>
          <circle cx="12" cy="12" r="2" fill="white" suppressHydrationWarning={true}/>
        </svg>
      )
    },
    {
      title: "Personalized Learning Roadmaps",
      description: "Get a custom learning journey designed just for you. Our AI automatically curates the best content from across the web, sequences it perfectly for your learning style, and adapts the pace based on your progress and availability.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" suppressHydrationWarning={true}>
          <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="#3B82F6" suppressHydrationWarning={true}/>
          <path d="M12 6L13.5 10.5L18 11L15 14L15.75 18.5L12 16.25L8.25 18.5L9 14L6 11L10.5 10.5L12 6Z" fill="white" suppressHydrationWarning={true}/>
        </svg>
      )
    },
    {
      title: "Real-Time HR Analytics Dashboard",
      description: "See your team's skill gaps, training progress, and business impact at a glance. Track ROI in real-time and get predictive insights on future skill needs to stay ahead of industry demands.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" suppressHydrationWarning={true}>
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="#3B82F6" strokeWidth="2" fill="none" suppressHydrationWarning={true}/>
          <rect x="6" y="14" width="3" height="4" fill="#3B82F6" suppressHydrationWarning={true}/>
          <rect x="10" y="10" width="3" height="8" fill="#3B82F6" suppressHydrationWarning={true}/>
          <rect x="14" y="6" width="3" height="12" fill="#3B82F6" suppressHydrationWarning={true}/>
          <circle cx="7.5" cy="12" r="1" fill="white" suppressHydrationWarning={true}/>
          <circle cx="11.5" cy="8" r="1" fill="white" suppressHydrationWarning={true}/>
          <circle cx="15.5" cy="4" r="1" fill="white" suppressHydrationWarning={true}/>
        </svg>
      )
    },
    {
      title: "Strategic Insights Engine",
      description: "Visualize organizational competencies with interactive heatmaps, monitor training effectiveness, and receive automated reports that benchmark your team against industry standards.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" suppressHydrationWarning={true}>
          <path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16Z" stroke="#3B82F6" strokeWidth="2" fill="#3B82F6" suppressHydrationWarning={true}/>
          <rect x="5" y="8" width="14" height="8" fill="white" suppressHydrationWarning={true}/>
          <rect x="7" y="10" width="2" height="4" fill="#3B82F6" suppressHydrationWarning={true}/>
          <rect x="10" y="11" width="2" height="3" fill="#3B82F6" suppressHydrationWarning={true}/>
          <rect x="13" y="9" width="2" height="5" fill="#3B82F6" suppressHydrationWarning={true}/>
          <rect x="16" y="12" width="2" height="2" fill="#3B82F6" suppressHydrationWarning={true}/>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="relative min-h-screen bg-[#0A0A0B] overflow-hidden py-20 lg:py-32" suppressHydrationWarning={true}>
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50"></div>
      
      <motion.div 
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-1 sm:px-2 lg:px-3"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center space-x-3 px-4 py-2 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-full shadow-lg mx-auto mb-6"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-sm shadow-blue-400/50"></div>
            <span className="text-sm font-semibold text-slate-300" style={{ fontFamily: '"TT Hoves", -apple-system, BlinkMacSystemFont, sans-serif' }}>INTELLIGENT FEATURES</span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.85] tracking-tight mb-6"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 700
            }}
          >
            Built for <span className="text-blue-400">Everyone</span>
          </motion.h2>

          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal"
            variants={itemVariants}
          >
            From individual learners to enterprise teams, our AI-powered platform adapts to your needs
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="space-y-6 lg:space-y-8"
          variants={itemVariants}
        >
          {/* First Row: 65% - 35% */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <motion.div
              className="lg:w-[65%]"
              variants={cardVariants}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="relative bg-[#101010] backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full overflow-hidden transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center text-2xl mb-4">
                      {allFeatures[0].icon}
                    </div>
                    <motion.div 
                      className="text-slate-600 group-hover:text-slate-400 transition-colors duration-300"
                      initial={{ x: 0, opacity: 0.7 }}
                      whileHover={{ x: 4, opacity: 1 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" suppressHydrationWarning={true}>
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" suppressHydrationWarning={true} />
                      </svg>
                    </motion.div>
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 group-hover:text-slate-100 transition-colors duration-300">
                    {allFeatures[0].title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {allFeatures[0].description}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-[35%]"
              variants={cardVariants}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="relative bg-[#101010] backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full overflow-hidden transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center text-2xl mb-4">
                      {allFeatures[1].icon}
                    </div>
                    <motion.div 
                      className="text-slate-600 group-hover:text-slate-400 transition-colors duration-300"
                      initial={{ x: 0, opacity: 0.7 }}
                      whileHover={{ x: 4, opacity: 1 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" suppressHydrationWarning={true}>
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" suppressHydrationWarning={true} />
                      </svg>
                    </motion.div>
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 group-hover:text-slate-100 transition-colors duration-300">
                    {allFeatures[1].title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {allFeatures[1].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Row: 35% - 65% */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <motion.div
              className="lg:w-[35%]"
              variants={cardVariants}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="relative bg-[#101010] backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full overflow-hidden transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center text-2xl mb-4">
                      {allFeatures[2].icon}
                    </div>
                    <motion.div 
                      className="text-slate-600 group-hover:text-slate-400 transition-colors duration-300"
                      initial={{ x: 0, opacity: 0.7 }}
                      whileHover={{ x: 4, opacity: 1 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" suppressHydrationWarning={true}>
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" suppressHydrationWarning={true} />
                      </svg>
                    </motion.div>
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 group-hover:text-slate-100 transition-colors duration-300">
                    {allFeatures[2].title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {allFeatures[2].description}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-[65%]"
              variants={cardVariants}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className="relative bg-[#101010] backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full overflow-hidden transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center text-2xl mb-4">
                      {allFeatures[3].icon}
                    </div>
                    <motion.div 
                      className="text-slate-600 group-hover:text-slate-400 transition-colors duration-300"
                      initial={{ x: 0, opacity: 0.7 }}
                      whileHover={{ x: 4, opacity: 1 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" suppressHydrationWarning={true}>
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" suppressHydrationWarning={true} />
                      </svg>
                    </motion.div>
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 group-hover:text-slate-100 transition-colors duration-300">
                    {allFeatures[3].title}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {allFeatures[3].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle background geometric elements */}
      <div className="absolute top-1/3 left-1/6 w-40 lg:w-80 h-40 lg:h-80 border border-slate-800/10 rotate-12 opacity-5"></div>
      <div className="absolute bottom-1/4 right-1/6 w-32 lg:w-64 h-32 lg:h-64 border border-slate-700/10 rotate-45 opacity-5"></div>
      <div className="absolute top-2/3 right-1/3 w-24 lg:w-48 h-24 lg:h-48 border border-slate-800/10 rotate-12 opacity-5"></div>
    </section>
  );
};

export default Features; 