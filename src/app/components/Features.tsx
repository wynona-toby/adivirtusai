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

  const employeeFeatures = [
    {
      title: "AI-Driven Assessments & Skill Gap Analysis",
      description: "Discover your exact skill gaps in minutes with our adaptive AI assessments. Our intelligent system evaluates technical, soft, and cognitive skills to create a comprehensive skill profile, identifying precisely what you need to learn next.",
      icon: "🎯",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Personalized Learning Roadmaps",
      description: "Get a custom learning journey designed just for you. Our AI automatically curates the best content from across the web, sequences it perfectly for your learning style, and adapts the pace based on your progress and availability.",
      icon: "🚀",
      gradient: "from-emerald-500/20 to-blue-500/20"
    }
  ];

  const hrFeatures = [
    {
      title: "Real-Time HR Analytics Dashboard",
      description: "See your team's skill gaps, training progress, and business impact at a glance. Track ROI in real-time and get predictive insights on future skill needs to stay ahead of industry demands.",
      icon: "📊",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      title: "Strategic Insights Engine",
      description: "Visualize organizational competencies with interactive heatmaps, monitor training effectiveness, and receive automated reports that benchmark your team against industry standards.",
      icon: "🎯",
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Virtual CHRO AI Agent",
      description: "Chat or video call with your AI Chief Human Resources Officer anytime. Get instant strategic advice, training recommendations, and answers to complex HR questions - like having an expert CHRO available 24/7.",
      icon: "🤖",
      gradient: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#0A0A0C] overflow-hidden py-20 lg:py-32">
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
            <span className="block">Built for</span>
            <span className="block text-blue-400">Everyone</span>
          </motion.h2>

          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal"
            variants={itemVariants}
          >
            From individual learners to enterprise teams, our AI-powered platform adapts to your needs
          </motion.p>
        </motion.div>

        {/* For Employees Section */}
        <motion.div 
          className="mb-20 lg:mb-32"
          variants={itemVariants}
        >
          <motion.div 
            className="flex items-center justify-center mb-12"
            variants={itemVariants}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent flex-1 max-w-16 sm:max-w-20"></div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mx-4 sm:mx-6 text-center"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>For Employees</h3>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent flex-1 max-w-16 sm:max-w-20"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {employeeFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="relative bg-[#0A0A0C] backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 h-full overflow-hidden">
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl border border-slate-600/50"></div>
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 group-hover:text-slate-100 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Subtle Arrow */}
                    <motion.div 
                      className="absolute top-6 sm:top-8 right-6 sm:right-8 text-slate-600 group-hover:text-slate-400 transition-colors duration-300"
                      initial={{ x: 0, opacity: 0.7 }}
                      whileHover={{ x: 4, opacity: 1 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* For HR & Leadership Section */}
        <motion.div 
          variants={itemVariants}
        >
          <motion.div 
            className="flex items-center justify-center mb-12"
            variants={itemVariants}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent flex-1 max-w-16 sm:max-w-20"></div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mx-4 sm:mx-6 text-center"
                style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>For HR & Leadership</h3>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent flex-1 max-w-16 sm:max-w-20"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {hrFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className="relative bg-[#0A0A0C] backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8 h-full overflow-hidden">
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 rounded-2xl border border-slate-600/50"></div>
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 group-hover:text-slate-100 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Subtle Arrow */}
                    <motion.div 
                      className="absolute top-6 sm:top-8 right-6 sm:right-8 text-slate-600 group-hover:text-slate-400 transition-colors duration-300"
                      initial={{ x: 0, opacity: 0.7 }}
                      whileHover={{ x: 4, opacity: 1 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
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