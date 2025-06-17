"use client";

import React, { useRef, useState } from 'react';
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
      hoverDescription: "Experience revolutionary AI assessment technology that goes beyond traditional testing. Our adaptive algorithms learn from each interaction, providing increasingly accurate skill evaluations and personalized recommendations that evolve with your progress.",
      tag: "AI Assessment",
      tagColor: "bg-blue-500/30",
      textColor: "text-blue-400",
      hoverBg: "from-blue-500/90 to-blue-600/90",
      hoverBorder: "border-blue-400/50",
      keywords: ["adaptive AI assessments", "intelligent system", "skill profile"]
    },
    {
      title: "Personalized Learning Roadmaps",
      description: "Get a custom learning journey designed just for you. Our AI automatically curates the best content from across the web, sequences it perfectly for your learning style, and adapts the pace based on your progress and availability.",
      hoverDescription: "Transform your learning with AI-powered personalization that understands your unique style, pace, and goals. Dynamic content curation ensures you always have the most relevant, up-to-date materials tailored specifically to your career trajectory.",
      tag: "Smart Learning",
      tagColor: "bg-emerald-500/30",
      textColor: "text-emerald-400",
      hoverBg: "from-emerald-500/90 to-emerald-600/90",
      hoverBorder: "border-emerald-400/50",
      keywords: ["custom learning journey", "AI automatically curates", "learning style"]
    },
    {
      title: "Real-Time HR Analytics Dashboard",
      description: "See your team's skill gaps, training progress, and business impact at a glance. Track ROI in real-time and get predictive insights on future skill needs to stay ahead of industry demands.",
      hoverDescription: "Unlock powerful workforce intelligence with comprehensive analytics that reveal hidden patterns in your team's development. Predictive modeling helps you anticipate skill shortages and make data-driven decisions for strategic workforce planning.",
      tag: "Analytics",
      tagColor: "bg-purple-500/30",
      textColor: "text-purple-400",
      hoverBg: "from-purple-500/90 to-purple-600/90",
      hoverBorder: "border-purple-400/50",
      keywords: ["real-time", "predictive insights", "business impact"]
    },
    {
      title: "Strategic Insights Engine",
      description: "Visualize organizational competencies with interactive heatmaps, monitor training effectiveness, and receive automated reports that benchmark your team against industry standards.",
      hoverDescription: "Gain strategic advantage with enterprise-grade insights that turn learning data into competitive intelligence. Advanced benchmarking and trend analysis help you position your organization as an industry leader in talent development.",
      tag: "Strategy",
      tagColor: "bg-orange-500/30",
      textColor: "text-orange-400",
      hoverBg: "from-orange-500/90 to-orange-600/90",
      hoverBorder: "border-orange-400/50",
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

  interface Feature {
    tag: string;
    title: string;
    description: string;
    hoverDescription: string;
    keywords: string[];
    textColor: string;
    tagColor: string;
    hoverBg: string;
    hoverBorder: string;
  }

  const FeatureCard = ({ feature, className }: { feature: Feature, className: string }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.div
        className={className}
        variants={cardVariants}
        whileHover={{ 
          y: -8,
          scale: 1.02,
          transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className={`relative rounded-2xl sm:rounded-3xl p-3 sm:p-5 lg:p-6 xl:p-8 h-full overflow-hidden transition-all duration-200 ease-out border ${
          isHovered 
            ? `bg-gradient-to-br ${feature.hoverBg} ${feature.hoverBorder} shadow-2xl shadow-black/50`
            : 'bg-[#101010] border-slate-700/30 hover:border-slate-600/50'
        }`}>
          
          <div className="relative z-10 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-2 sm:mb-3 lg:mb-4">
              <motion.div 
                className={`px-2 sm:px-3 py-1 rounded-full text-white text-[10px] sm:text-xs font-semibold transition-all duration-200 ease-out ${
                  isHovered ? 'bg-white/20 backdrop-blur-sm scale-105' : feature.tagColor
                }`}
                animate={{
                  scale: isHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {feature.tag}
              </motion.div>
            </div>
            
            {/* Title */}
            <motion.h4 
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight"
              style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
              animate={{
                scale: isHovered ? 1.01 : 1
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {feature.title}
            </motion.h4>
            
            {/* Content container - grows to fill space */}
            <div className="flex-1 relative min-h-[100px] sm:min-h-[120px] lg:min-h-[140px]">
              {/* Default description */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: isHovered ? 0 : 1,
                  y: isHovered ? -5 : 0
                }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <p 
                  className="text-[11px] sm:text-xs md:text-sm lg:text-base text-slate-400 leading-relaxed"
                  style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
                  dangerouslySetInnerHTML={{ 
                    __html: highlightKeywords(feature.description, feature.keywords, feature.textColor) 
                  }}
                />
              </motion.div>
              
              {/* Hover description */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 5
                }}
                transition={{ duration: 0.2, delay: isHovered ? 0.05 : 0, ease: "easeOut" }}
              >
                <p 
                  className="text-[11px] sm:text-xs md:text-sm lg:text-base text-white/95 leading-relaxed"
                  style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
                >
                  {feature.hoverDescription}
                </p>
              </motion.div>
            </div>
            
            {/* Hover action */}
            <motion.div
              className="mt-3 sm:mt-4 lg:mt-6 flex items-center space-x-1 sm:space-x-2"
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 8,
                scale: isHovered ? 1 : 0.95
              }}
              transition={{ duration: 0.2, delay: isHovered ? 0.1 : 0, ease: "easeOut" }}
            >
              <span className="text-white/80 text-[10px] sm:text-xs lg:text-sm font-medium">Learn more</span>
              <motion.svg 
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-white/80" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ x: isHovered ? [0, 2, 0] : 0 }}
                transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="features" className="relative min-h-screen bg-black overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 2xl:py-32" suppressHydrationWarning={true}>
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px] lg:bg-[size:60px_60px] opacity-100"></div>
      
      <motion.div 
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-orange-500/30 backdrop-blur-sm border border-orange-500/50 rounded-full shadow-lg mx-auto mb-3 sm:mb-4 md:mb-6"
            variants={itemVariants}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full animate-pulse shadow-sm shadow-orange-400/50"></div>
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-white" style={{ fontFamily: '"TT Hoves", -apple-system, BlinkMacSystemFont, sans-serif' }}>INTELLIGENT FEATURES</span>
          </motion.div>

          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-white leading-[0.9] tracking-tight mb-3 sm:mb-4 md:mb-6"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600
            }}
          >
                            Personalized Learning & Skill Gap <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-500 animate-text-shimmer">Analysis</span>
          </motion.h2>

          <motion.p 
            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal px-2 sm:px-4"
            variants={itemVariants}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
          >
            AI agents deliver learning roadmaps and skill assessments to transform workforce training with future-ready solutions
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8"
          variants={itemVariants}
        >
          {/* First Row: Responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <FeatureCard feature={allFeatures[0]} className="md:col-span-2 lg:col-span-2" />
            <FeatureCard feature={allFeatures[1]} className="md:col-span-2 lg:col-span-1" />
          </div>

          {/* Second Row: Responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <FeatureCard feature={allFeatures[2]} className="md:col-span-2 lg:col-span-1" />
            <FeatureCard feature={allFeatures[3]} className="md:col-span-2 lg:col-span-2" />
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle background geometric elements - hidden on mobile and tablet */}
      <div className="hidden xl:block absolute top-1/3 left-1/6 w-40 lg:w-60 xl:w-80 h-40 lg:h-60 xl:h-80 border border-slate-800/10 rotate-12 opacity-5"></div>
      <div className="hidden xl:block absolute bottom-1/4 right-1/6 w-32 lg:w-48 xl:w-64 h-32 lg:h-48 xl:h-64 border border-slate-700/10 rotate-45 opacity-5"></div>
      <div className="hidden xl:block absolute top-2/3 right-1/3 w-24 lg:w-36 xl:w-48 h-24 lg:h-36 xl:h-48 border border-slate-800/10 rotate-12 opacity-5"></div>
    </section>
  );
};

export default Features; 