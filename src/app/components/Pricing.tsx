"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Pricing = () => {
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

  const pricingPlans = [
    {
      name: "Basic",
      price: "$99",
      description: "Best for small business owners, startups who needs AI-powered skill assessment for their team.",
      features: [
        "AI Skill Assessments",
        "Basic Analytics Dashboard",
        "Up to 50 employees",
        "Email Support"
      ],
      isPopular: false
    },
    {
      name: "Premium",
      price: "$199",
      description: "Best for medium business owners who need comprehensive AI-powered workforce development.",
      features: [
        "Advanced AI Assessments",
        "Personalized Learning Roadmaps",
        "Real-time Analytics Dashboard",
        "Up to 200 employees",
        "Priority Support",
        "Strategic Insights Engine"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      description: "Best for large companies who need complete AI-powered workforce transformation.",
      features: [
        "Full AI Suite Access",
        "Virtual CHRO AI Agent",
        "Unlimited employees",
        "Custom Integrations",
        "24/7 Dedicated Support",
        "Advanced Analytics & Reporting"
      ],
      isPopular: false
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#0A0A0B] overflow-hidden py-16 sm:py-20 lg:py-32">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50"></div>
      
      <motion.div 
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-24 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center space-x-3 px-4 py-2 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-full shadow-lg mx-auto mb-6"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-sm shadow-blue-400/50"></div>
            <span className="text-sm font-semibold text-slate-300" style={{ fontFamily: '"TT Hoves", -apple-system, BlinkMacSystemFont, sans-serif' }}>FLEXIBLE PRICING</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.9] tracking-tight mb-4 sm:mb-6"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 700
            }}
          >
            Make the wise decision for your <span className="text-blue-400">business</span>
          </motion.h2>

          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Choose from our affordable 3 packages designed to scale with your workforce needs
          </motion.p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <div className={`relative overflow-hidden rounded-2xl p-6 sm:p-8 h-full transition-all duration-300 ${
                plan.isPopular 
                  ? 'bg-[#101010] border-2 border-blue-500' 
                  : 'bg-[#101010] border border-slate-700/50 hover:border-slate-600/50'
              }`}>
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="relative z-10 pt-2">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-slate-400 text-lg ml-2">/month</span>
                  </div>
                  
                  <p className="text-sm sm:text-base leading-relaxed mb-8 text-slate-400 min-h-[3rem]">
                    {plan.description}
                  </p>

                  <motion.button
                    className={`w-full py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 mb-8 ${
                      plan.isPopular
                        ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900'
                        : 'border-2 border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 focus:ring-slate-500 focus:ring-offset-slate-900'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>

                  <p className="text-base font-semibold mb-4 text-white">
                    What's included:
                  </p>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm sm:text-base text-slate-300">
                        <svg className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Pricing; 