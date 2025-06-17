"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CaseStudiesPage = () => {
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

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-100"></div>
      
      <motion.div 
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center space-x-3 px-4 py-2 bg-blue-500/30 backdrop-blur-sm border border-blue-500/50 rounded-full shadow-lg mx-auto mb-6"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-sm shadow-blue-400/50"></div>
            <span className="text-sm font-semibold text-white" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>MVP PILOT PROGRAM</span>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[0.9] tracking-tight mb-6"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600
            }}
          >
            Case Studies & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-400 animate-text-shimmer">Pilot Program</span>
          </motion.h1>

          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
            variants={itemVariants}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
          >
            We&apos;re currently in our MVP pilot stage, working with forward-thinking organizations to refine and perfect our AI-powered workforce development platform.
          </motion.p>
        </motion.div>

        {/* MVP Pilot Section */}
        <motion.div 
          className="mb-20 text-center"
          variants={itemVariants}
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-cyan-600/5 border border-blue-500/30 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto animate-flowing-gradient-slow">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
              Join Our Pilot Program
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>
              As we&apos;re in the MVP pilot stage, we&apos;re offering <span className="text-blue-400 font-semibold">Adivirtus AI completely free for one month</span> to organizations willing to provide feedback and help us shape the future of workforce development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Early Access</h3>
                <p className="text-slate-400 text-sm">Get first access to cutting-edge AI workforce tools</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Shape the Product</h3>
                <p className="text-slate-400 text-sm">Your feedback directly influences our development</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Free Trial</h3>
                <p className="text-slate-400 text-sm">Full platform access for 30 days at no cost</p>
              </div>
            </div>

            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-cyan-400 text-white font-semibold rounded-full shadow-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 animate-flowing-gradient"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
            >
              Apply for Pilot Program
            </motion.button>
          </div>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div 
          className="text-center"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
            Case Studies Coming Soon
          </h2>
          
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>
            We&apos;re currently working with our pilot partners to gather comprehensive data and results. Detailed case studies will be published here as we complete our pilot phase.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Tech Startup",
                description: "50-employee company improving skill assessments",
                status: "In Progress"
              },
              {
                title: "Manufacturing Firm", 
                description: "200-employee organization enhancing training programs",
                status: "Starting Soon"
              },
              {
                title: "Consulting Agency",
                description: "75-employee team optimizing workforce development",
                status: "In Progress"
              }
            ].map((study, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-700/30 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">{study.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{study.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                  {study.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          className="mt-16 text-center bg-slate-900/30 rounded-2xl p-8"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold text-white mb-4">Interested in Participating?</h3>
          <p className="text-slate-400 mb-6">Contact us to learn more about our pilot program and how your organization can benefit from early access to Adivirtus AI.</p>
          <motion.button
            className="px-6 py-3 bg-transparent border border-blue-400 text-blue-400 font-semibold rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CaseStudiesPage; 