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
      tag: "AI Assessment",
      tagColor: "bg-blue-500",
      textColor: "text-blue-400",
      keywords: ["adaptive AI assessments", "intelligent system", "skill profile"]
    },
    {
      title: "Personalized Learning Roadmaps",
      description: "Get a custom learning journey designed just for you. Our AI automatically curates the best content from across the web, sequences it perfectly for your learning style, and adapts the pace based on your progress and availability.",
      tag: "Smart Learning",
      tagColor: "bg-emerald-500",
      textColor: "text-emerald-400",
      keywords: ["custom learning journey", "AI automatically curates", "learning style"]
    },
    {
      title: "Real-Time HR Analytics Dashboard",
      description: "See your team's skill gaps, training progress, and business impact at a glance. Track ROI in real-time and get predictive insights on future skill needs to stay ahead of industry demands.",
      tag: "Analytics",
      tagColor: "bg-purple-500",
      textColor: "text-purple-400",
      keywords: ["real-time", "predictive insights", "business impact"]
    },
    {
      title: "Strategic Insights Engine",
      description: "Visualize organizational competencies with interactive heatmaps, monitor training effectiveness, and receive automated reports that benchmark your team against industry standards.",
      tag: "Strategy",
      tagColor: "bg-orange-500",
      textColor: "text-orange-400",
      keywords: ["interactive heatmaps", "automated reports", "benchmark"]
    }
  ];

  const highlightKeywords = (text: string, keywords: string[], textColor: string) => {
    let highlightedText = text;
    keywords.forEach((keyword: string) => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      highlightedText = highlightedText.replace(regex, `<span class="${textColor}">$1</span>`);
    });
    return highlightedText;
  };

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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[0.85] tracking-tight mb-6"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600
            }}
          >
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Everyone</span>
          </motion.h2>

          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal"
            variants={itemVariants}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
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
              <div className="relative bg-[#101010] backdrop-blur-sm rounded-3xl p-6 sm:p-8 h-full overflow-hidden transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`px-3 py-1 ${allFeatures[0].tagColor} rounded-full text-white text-xs font-semibold`}
                      variants={itemVariants}
                    >
                      {allFeatures[0].tag}
                    </motion.div>
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 group-hover:text-slate-100 transition-colors duration-300"
                      style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
                    {allFeatures[0].title}
                  </h4>
                  <p 
                    className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300"
                    style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 300 }}
                    dangerouslySetInnerHTML={{ 
                      __html: highlightKeywords(allFeatures[0].description, allFeatures[0].keywords, allFeatures[0].textColor) 
                    }}
                  />
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
              <div className="relative bg-[#101010] backdrop-blur-sm rounded-3xl p-6 sm:p-8 h-full overflow-hidden transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`px-3 py-1 ${allFeatures[1].tagColor} rounded-full text-white text-xs font-semibold`}
                      variants={itemVariants}
                    >
                      {allFeatures[1].tag}
                    </motion.div>
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 group-hover:text-slate-100 transition-colors duration-300"
                      style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
                    {allFeatures[1].title}
                  </h4>
                  <p 
                    className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300"
                    style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 300 }}
                    dangerouslySetInnerHTML={{ 
                      __html: highlightKeywords(allFeatures[1].description, allFeatures[1].keywords, allFeatures[1].textColor) 
                    }}
                  />
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
              <div className="relative bg-[#101010] backdrop-blur-sm rounded-3xl p-6 sm:p-8 h-full overflow-hidden transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`px-3 py-1 ${allFeatures[2].tagColor} rounded-full text-white text-xs font-semibold`}
                      variants={itemVariants}
                    >
                      {allFeatures[2].tag}
                    </motion.div>
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 group-hover:text-slate-100 transition-colors duration-300"
                      style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
                    {allFeatures[2].title}
                  </h4>
                  <p 
                    className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300"
                    style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 300 }}
                    dangerouslySetInnerHTML={{ 
                      __html: highlightKeywords(allFeatures[2].description, allFeatures[2].keywords, allFeatures[2].textColor) 
                    }}
                  />
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
              <div className="relative bg-[#101010] backdrop-blur-sm rounded-3xl p-6 sm:p-8 h-full overflow-hidden transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className={`px-3 py-1 ${allFeatures[3].tagColor} rounded-full text-white text-xs font-semibold`}
                      variants={itemVariants}
                    >
                      {allFeatures[3].tag}
                    </motion.div>
                  </div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-4 group-hover:text-slate-100 transition-colors duration-300"
                      style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
                    {allFeatures[3].title}
                  </h4>
                  <p 
                    className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300"
                    style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 300 }}
                    dangerouslySetInnerHTML={{ 
                      __html: highlightKeywords(allFeatures[3].description, allFeatures[3].keywords, allFeatures[3].textColor) 
                    }}
                  />
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