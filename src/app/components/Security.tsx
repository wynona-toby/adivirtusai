"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Security = () => {
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

  const sectionVariants = {
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

  return (
    <section className="relative min-h-screen bg-[#0A0A0B] overflow-hidden py-20 lg:py-32">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50"></div>
      
      <motion.div 
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div 
          className="text-left mb-16 lg:mb-24 max-w-4xl"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight mb-6"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 700
            }}
          >
            Engineered with <br />ambition
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl"
            variants={itemVariants}
          >
            Adivirtus AI is built for ambitious AI projects. You can integrate it with your existing tech stack and scale it as you grow. 
            We've implemented sophisticated and top-notch security measures and protocols to protect your data.
          </motion.p>
        </motion.div>

        {/* Security Section */}
        <motion.div 
          className="mb-20 lg:mb-32"
          variants={sectionVariants}
        >
          <div className="mb-8">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">SECURITY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                Enterprise-grade security
                <motion.span 
                  className="inline-block ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </motion.h2>

              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <h3 className="text-lg font-semibold text-white mb-2">Enterprise-grade and battle-tested security</h3>
                  <p className="text-slate-400 leading-relaxed">
                    measures and protocols to protect your data.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <p className="text-slate-400 leading-relaxed">
                    All our systems are built with security in mind and are constantly monitored and audited.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Content - Security Badges */}
            <motion.div 
              className="flex items-center justify-center lg:justify-end space-x-8"
              variants={itemVariants}
            >
              {/* SOC Badge */}
              <motion.div 
                className="w-24 h-24 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-slate-700/50"
                whileHover={{ scale: 1.05, borderColor: "rgba(148, 163, 184, 0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold text-lg">SOC</span>
              </motion.div>

              {/* SOC 2 Badge */}
              <motion.div 
                className="w-24 h-24 bg-slate-800/50 rounded-2xl flex flex-col items-center justify-center border border-slate-700/50"
                whileHover={{ scale: 1.05, borderColor: "rgba(148, 163, 184, 0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold text-sm">SOC</span>
                <span className="text-white font-bold text-lg">2</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Integrations Section */}
        <motion.div 
          variants={sectionVariants}
        >
          <div className="mb-8">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">INTEGRATIONS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                Integrate with your tech stack
                <motion.span 
                  className="inline-block ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </motion.h2>

              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <p className="text-slate-400 leading-relaxed">
                    Adivirtus AI integrates with your existing tech stack and multiple integrations that slot seamlessly into your workflows and pipelines.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <p className="text-slate-400 leading-relaxed">
                    Even when you connect to external data sources, all data stays on your existing infrastructure and data sources.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Content - Integration Logos */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={itemVariants}
            >
              {/* AWS */}
              <motion.div 
                className="h-16 bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-700/50 px-4"
                whileHover={{ scale: 1.05, borderColor: "rgba(148, 163, 184, 0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <svg className="h-8 w-16" viewBox="0 0 120 30" fill="currentColor">
                  <path className="text-slate-300" d="M30.343 19.523c-3.46 2.555-8.483 3.91-12.817 3.91-6.063 0-11.524-2.244-15.65-5.971-.324-.293-.034-.693.355-.465 4.45 2.59 9.956 4.15 15.646 4.15 3.836 0 8.058-.796 11.938-2.443.586-.249 1.077.385.528.819"/>
                  <path className="text-slate-300" d="M31.663 17.997c-.442-.566-2.93-.268-4.047-.135-.34.041-.391-.255-.086-.469 1.982-1.394 5.238-1.002 5.616-.53.377.475-.099 3.77-1.983 5.343-.288.241-.563.113-.435-.206.418-1.044 1.357-3.37.935-4.003"/>
                </svg>
              </motion.div>

              {/* Cloud Service */}
              <motion.div 
                className="h-16 bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-700/50"
                whileHover={{ scale: 1.05, borderColor: "rgba(148, 163, 184, 0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <svg className="h-8 w-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.002 4.002 0 003 15z" />
                </svg>
              </motion.div>

              {/* API */}
              <motion.div 
                className="h-16 bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-700/50"
                whileHover={{ scale: 1.05, borderColor: "rgba(148, 163, 184, 0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-slate-300 font-bold text-lg">API</span>
              </motion.div>

              {/* Slack-style */}
              <motion.div 
                className="h-16 bg-slate-800/50 rounded-xl flex items-center justify-center border border-slate-700/50"
                whileHover={{ scale: 1.05, borderColor: "rgba(148, 163, 184, 0.6)" }}
                transition={{ duration: 0.3 }}
              >
                <svg className="h-8 w-8 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.521-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.523 2.521h-2.521V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.521A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.523v-2.521h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Security; 