"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SalesCalModal from './SalesCalModal';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSalesCalModalOpen, setIsSalesCalModalOpen] = useState(false);

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

  // Commented out pricing plans - currently in pilot phase
  /*
  const pricingPlans = [
    {
      name: "INITIUM",
      subtitle: "(Basic)",
      price: "$99",
      description: "Perfect for small businesses and startups beginning their AI-powered workforce transformation journey.",
      features: [
        "Up to 150 employees",
        "AI-powered adaptive skill assessments",
        "Personalized learning roadmaps",
        "Real-time skill gap analysis",
        "Team competency dashboards",
        "Basic integrations (HRIS, Slack, Teams)",
        "Performance tracking & progress reports",
        "Mobile access",
        "Standard email support",
        "1-week free trial"
      ],
      isPopular: false,
      buttonStyle: "secondary"
    },
    {
      name: "PROGRESSUS",
      subtitle: "(Pro)",
      price: "$199",
      description: "Ideal for growing companies ready to scale their workforce development with advanced analytics and insights.",
      features: [
        "Everything in INITIUM, plus:",
        "Up to 300 employees",
        "Advanced analytics & benchmarking",
        "ROI measurement tools",
        "Priority integrations (15+ platforms)",
        "Custom learning path templates",
        "Manager insights dashboard",
        "Automated progress nudges",
        "Priority support (24-48hr response)",
        "Quarterly business impact reports"
      ],
      isPopular: true,
      buttonStyle: "primary"
    },
    {
      name: "APEX",
      subtitle: "(Enterprise)",
      price: "Custom",
      description: "Comprehensive solution for large enterprises requiring maximum customization and dedicated support.",
      features: [
        "Everything in PROGRESSUS, plus:",
        "Unlimited employees",
        "White-label customization",
        "Custom integrations & API access",
        "Dedicated customer success manager",
        "Advanced security & compliance",
        "Custom reporting & data exports",
        "On-site training & implementation",
        "24/7 premium support",
        "Custom pricing based on requirements"
      ],
      isPopular: false,
      buttonStyle: "secondary"
    }
  ];
  */

  return (
    <section id="pricing" className="relative min-h-screen bg-black overflow-hidden py-20 lg:py-32">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-100"></div>
      
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
            className="inline-flex items-center space-x-3 px-4 py-2 bg-pink-500/30 backdrop-blur-sm border border-pink-500/50 rounded-full shadow-lg mx-auto mb-6"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse shadow-sm shadow-pink-400/50"></div>
            <span className="text-sm font-semibold text-white" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>PILOT PROGRAM</span>
          </motion.div>

          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white leading-[0.9] tracking-tight mb-4 sm:mb-6"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600
            }}
          >
            We're Currently <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500">Piloting</span>
          </motion.h2>

          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl mx-auto px-4"
            variants={itemVariants}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
          >
            Join our exclusive pilot program and be among the first to experience the future of AI-powered workforce transformation
          </motion.p>
        </motion.div>

        {/* Pilot Program Card */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={cardVariants}
        >
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-pink-400/10 to-rose-500/5 border border-pink-400/30 text-center">
            <div className="relative z-10">
              {/* Pilot Badge */}
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-400/20 to-rose-500/20 backdrop-blur-sm border border-pink-400/50 rounded-full shadow-lg mb-8">
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse shadow-sm shadow-pink-400/50"></div>
                <span className="text-base font-semibold text-white" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
                  EXCLUSIVE PILOT ACCESS
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
                Get Early Access
              </h3>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>
                We're working with select organizations to perfect our AI-powered workforce transformation platform. Join our pilot program and help shape the future.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30" style={{ backgroundColor: '#0A0A0C' }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">1 Month Free Trial</h4>
                  <p className="text-slate-400 text-sm">Full access to all features with no commitment</p>
                </div>

                <div className="backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30" style={{ backgroundColor: '#0A0A0C' }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Dedicated Support</h4>
                  <p className="text-slate-400 text-sm">Direct access to our team for implementation and training</p>
                </div>

                <div className="backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30" style={{ backgroundColor: '#0A0A0C' }}>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">Shape the Future</h4>
                  <p className="text-slate-400 text-sm">Your feedback directly influences our roadmap</p>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                className="inline-flex items-center px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-pink-400 to-rose-500 text-white font-semibold rounded-full shadow-xl text-lg relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(244, 114, 182, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
                onClick={() => setIsSalesCalModalOpen(true)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-300 to-rose-400 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center">
                  Contact Sales for Pilot Access
                  <motion.span
                    className="ml-3 inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>

              <p className="text-slate-400 text-sm mt-6 max-w-md mx-auto" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>
                Limited spots available. Join the waitlist and we'll reach out when we're ready for your organization.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Commented out original pricing cards */}
        {/*
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
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-pink-400 to-rose-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`relative overflow-hidden rounded-3xl p-6 sm:p-8 h-full transition-all duration-300 ${
                plan.isPopular 
                  ? 'bg-gradient-to-b from-pink-400/10 to-rose-500/5 border border-pink-400/30' 
                  : 'bg-[#101010] border border-slate-700/30'
              }`}>
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 text-white" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
                    {plan.name}
                  </h3>
                  {plan.subtitle && (
                    <p className="text-sm text-slate-400 mb-3" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>
                      {plan.subtitle}
                    </p>
                  )}
                  
                  <div className="mb-6">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
                      {plan.price}
                    </span>
                    <span className="text-slate-400 text-lg ml-2" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 300 }}>
                      {plan.price === "Custom" ? "" : "/employee/year"}
                    </span>
                  </div>
                  
                  <p className="text-sm sm:text-base leading-relaxed mb-8 text-slate-400 min-h-[3rem]" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>
                    {plan.description}
                  </p>

                  {plan.buttonStyle === "primary" ? (
                    <motion.button
                      className="w-full py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 mb-8 bg-gradient-to-r from-pink-400 to-rose-500 text-white hover:from-pink-500 hover:to-rose-600 focus:ring-pink-400 focus:ring-offset-slate-900 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
                    >
                      Get Started
                    </motion.button>
                  ) : (
                    <motion.button
                      className="w-full py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 mb-8 bg-slate-800/50 border border-slate-600/50 text-white hover:bg-slate-700/50 hover:border-slate-500/50 focus:ring-slate-500 focus:ring-offset-slate-900 backdrop-blur-sm"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
                    >
                      Get Started
                    </motion.button>
                  )}

                  <p className="text-base font-semibold mb-4 text-white" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
                    What's included:
                  </p>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm sm:text-base text-slate-300" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>
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
        */}
      </motion.div>
      
      {/* Sales Cal.com Modal */}
      <SalesCalModal 
        isOpen={isSalesCalModalOpen} 
        onClose={() => setIsSalesCalModalOpen(false)} 
      />
    </section>
  );
};

export default Pricing; 