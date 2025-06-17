"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const ComingSoonPage = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: "📧",
      title: "AI Workforce Newsletter",
      description: "Weekly insights on AI-powered workforce transformation, learning strategies, and industry trends.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: "🚀",
      title: "Product Updates",
      description: "Stay informed about new features, improvements, and exciting developments in our AI platform.",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: "📰",
      title: "Industry News",
      description: "Curated news and analysis about the future of work, AI adoption, and corporate learning.",
      color: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-100"></div>
      
      <motion.div 
        ref={ref}
        className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Status Badge */}
          <motion.div 
            className="inline-flex items-center space-x-3 px-4 py-2 bg-orange-500/30 backdrop-blur-sm border border-orange-500/50 rounded-full shadow-lg mb-8"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse shadow-sm shadow-orange-400/50"></div>
            <span className="text-sm font-semibold text-white" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>COMING SOON</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[0.9] tracking-tight mb-6"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600
            }}
          >
            Stay <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-red-500 animate-text-shimmer">Connected</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto"
            variants={itemVariants}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
          >
            We&apos;re working on something amazing to keep you updated with the latest in AI workforce transformation
          </motion.p>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <motion.div 
            className="bg-slate-900/30 rounded-2xl p-8 mb-12 border border-slate-700/30"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold text-white mb-6" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
              What to Expect
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-400 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Weekly Newsletter</h4>
                  <p className="text-slate-400 text-sm">Curated insights and trends delivered every Tuesday</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-400 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Product Updates</h4>
                  <p className="text-slate-400 text-sm">Real-time notifications about new features and improvements</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-400 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Industry News</h4>
                  <p className="text-slate-400 text-sm">Breaking news and analysis from the AI workforce space</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Notify Me Section */}
          <motion.div 
                          className="bg-gradient-to-r from-orange-500/10 via-red-400/10 to-red-500/5 border border-orange-500/30 rounded-2xl p-8 animate-flowing-gradient-slow"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
              Get Notified When We Launch
            </h3>
            <p className="text-slate-300 mb-6 max-w-md mx-auto" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>
              Be the first to know when our newsletter and updates go live. We&apos;ll send you a quick notification.
            </p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact">
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-orange-400 via-red-400 to-red-500 text-white font-semibold rounded-full shadow-xl hover:from-orange-500 hover:to-red-600 transition-all duration-300 animate-flowing-gradient"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
                >
                  Contact Us for Updates
                </motion.button>
              </Link>
              
              <Link href="/">
                <motion.button
                  className="px-6 py-3 bg-transparent border border-slate-600 text-slate-300 font-medium rounded-full hover:border-slate-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Home
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Launch Timeline */}
          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <p className="text-slate-400 text-sm mb-2" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>
              Expected Launch
            </p>
            <p className="text-white font-semibold text-lg" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
              Q2 2025
            </p>
          </motion.div>

        </div>
      </motion.div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 lg:w-64 h-32 lg:h-64 border border-orange-800/20 rotate-45 opacity-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 lg:w-48 h-24 lg:h-48 border border-red-700/15 rotate-12 opacity-10"></div>
    </section>
  );
};

export default ComingSoonPage; 