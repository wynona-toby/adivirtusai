"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import SalesCalModal from './SalesCalModal';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSalesCalModalOpen, setIsSalesCalModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty('--mouse-x', `${x}px`);
        containerRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
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

  const benefits = [
    {
      title: "1 Month Free Trial",
      description: "Full access to all AI-powered features with no commitment required. Experience the complete platform at no cost.",
      tag: "Free Access",
      hoverDescription: "Get unrestricted access to all premium features including AI assessments, personalized learning paths, and analytics dashboard for a full month."
    },
    {
      title: "Dedicated Support Team",
      description: "Direct access to our expert team for seamless implementation, training, and ongoing technical support.",
      tag: "Expert Support",
      hoverDescription: "Work directly with our AI learning specialists to optimize your platform setup and maximize team engagement from day one."
    },
    {
      title: "Shape Product Development",
      description: "Your feedback directly influences our roadmap. Help us build the future of AI-powered workforce development.",
      tag: "Product Input",
      hoverDescription: "Join exclusive feedback sessions with our product team and see your suggestions implemented in future releases."
    }
  ];

  return (
    <section 
      id="pricing" 
      ref={containerRef}
      className="group relative min-h-screen bg-black overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 2xl:py-32"
    >
      {/* Subtle Grid Pattern with Spotlight Effect */}
      <div className="absolute inset-0 z-0 opacity-100 
        bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] 
        bg-[size:40px_40px] sm:bg-[size:50px_50px] lg:bg-[size:60px_60px] 
        [mask-image:radial-gradient(600px_at_var(--mouse-x)_var(--mouse-y),white,transparent)]
        group-hover:opacity-100 transition-opacity duration-700"
      ></div>
      
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
          {/* Pilot Badge with Gradient Style */}
          <motion.div 
            className="inline-flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-blue-500/30 backdrop-blur-sm border border-blue-500/50 rounded-full shadow-lg mx-auto mb-4 sm:mb-6 md:mb-8"
            variants={itemVariants}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse shadow-sm shadow-blue-400/50"></div>
            <span 
              className="text-xs sm:text-sm md:text-base font-semibold text-white tracking-wide" 
              style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
            >
              EXCLUSIVE PILOT ACCESS
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-white leading-[0.9] tracking-tight mb-4 sm:mb-6 md:mb-8"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600
            }}
          >
            Shape the Future of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">AI-Powered Learning</span>
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto px-2 sm:px-4" 
            variants={itemVariants}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
          >
            We&apos;re working with select organizations to perfect our AI workforce transformation platform. Join our exclusive pilot program to gain early access and help define the future of corporate training.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          variants={itemVariants}
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          {/* CTA Button - Matching Hero Component Style */}
          <motion.button
            className="group px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-full shadow-xl relative overflow-hidden w-full sm:w-auto max-w-sm sm:max-w-none text-sm sm:text-base md:text-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
            onClick={() => setIsSalesCalModalOpen(true)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-400 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.5, opacity: 0.1 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 flex items-center justify-center">
              Contact Sales for Pilot Access
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          {/* Footer Text */}
          <motion.p 
            className="text-slate-400 text-xs sm:text-sm md:text-base mt-6 sm:mt-8 md:mt-10 max-w-lg mx-auto px-4 sm:px-0" 
            variants={itemVariants}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
          >
            Limited spots available. Join the waitlist and we&apos;ll reach out when we&apos;re ready for your organization.
          </motion.p>
        </motion.div>
      </motion.div>
      
      {/* Sales Cal.com Modal */}
      <SalesCalModal 
        isOpen={isSalesCalModalOpen} 
        onClose={() => setIsSalesCalModalOpen(false)} 
      />
    </section>
  );
};

// BenefitCard Component - Matching Features component style
const BenefitCard = ({ benefit }: { benefit: { title: string; description: string; tag: string; hoverDescription: string; } }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="h-full"
      variants={{
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
      }}
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className={`relative rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 h-full overflow-hidden transition-all duration-200 ease-out border ${
        isHovered 
          ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-blue-400/50 shadow-2xl shadow-black/50'
          : 'bg-[#101010] border-slate-700/30 hover:border-slate-600/50'
      }`}>
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <motion.div 
              className={`px-2 sm:px-3 py-1 rounded-full text-white text-xs sm:text-sm font-semibold transition-all duration-200 ease-out ${
                isHovered ? 'bg-white/20 backdrop-blur-sm scale-105' : 'bg-blue-500/30'
              }`}
              animate={{
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
            >
              {benefit.tag}
            </motion.div>
          </div>
          
          {/* Title */}
          <motion.h4 
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4 leading-tight"
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
            animate={{
              scale: isHovered ? 1.01 : 1
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {benefit.title}
          </motion.h4>
          
          {/* Content container - grows to fill space */}
          <div className="flex-1 relative min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]">
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
                className="text-sm sm:text-base text-slate-400 leading-relaxed"
                style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
              >
                {benefit.description}
              </p>
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
                className="text-sm sm:text-base text-white/95 leading-relaxed"
                style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
              >
                {benefit.hoverDescription}
              </p>
            </motion.div>
          </div>
          
          {/* Hover action */}
          <motion.div
            className="mt-3 sm:mt-4 flex items-center space-x-1 sm:space-x-2"
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 8,
              scale: isHovered ? 1 : 0.95
            }}
            transition={{ duration: 0.2, delay: isHovered ? 0.1 : 0, ease: "easeOut" }}
          >
            <span 
              className="text-white/80 text-xs sm:text-sm font-medium"
              style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
            >
              Learn more
            </span>
            <motion.svg 
              className="w-3 h-3 sm:w-4 sm:h-4 text-white/80" 
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

export default Pricing; 