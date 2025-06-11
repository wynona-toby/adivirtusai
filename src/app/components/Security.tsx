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
    <section id="security" className="relative min-h-screen bg-[#0A0A0B] overflow-hidden py-20 lg:py-32">
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
          <motion.div 
            className="inline-flex items-center space-x-3 px-4 py-2 bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-full shadow-lg mb-6"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-sm shadow-blue-400/50"></div>
            <span className="text-sm font-semibold text-slate-300" style={{ fontFamily: '"TT Hoves", -apple-system, BlinkMacSystemFont, sans-serif' }}>ENTERPRISE READY</span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight mb-6"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 700
            }}
          >
            Engineered with <br /><span className="text-blue-400">ambition</span>
          </motion.h1>

          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl"
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
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">SECURITY</span>
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
                  className="inline-block ml-2 text-blue-400"
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
                className="w-24 h-24 bg-[#101010] rounded-2xl flex items-center justify-center border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-blue-400 font-bold text-lg">SOC</span>
              </motion.div>

              {/* SOC 2 Badge */}
              <motion.div 
                className="w-24 h-24 bg-[#101010] rounded-2xl flex flex-col items-center justify-center border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-blue-400 font-bold text-sm">SOC</span>
                <span className="text-blue-400 font-bold text-lg">2</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Integrations Section */}
        <motion.div 
          variants={sectionVariants}
        >
          <div className="mb-8">
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">INTEGRATIONS</span>
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
                  className="inline-block ml-2 text-blue-400"
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
              className="grid grid-cols-2 gap-8 lg:gap-12"
              variants={itemVariants}
            >
              {/* Slack */}
              <motion.div 
                className="flex items-center justify-center p-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="h-12 w-auto" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M27.2 80.3c0 7.3-5.9 13.2-13.2 13.2S.8 87.6.8 80.3s5.9-13.2 13.2-13.2h13.2v13.2z" fill="#E01E5A"/>
                  <path d="M33.8 80.3c0-7.3 5.9-13.2 13.2-13.2s13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2s-13.2-5.9-13.2-13.2v-33z" fill="#E01E5A"/>
                  <path d="M47 27.2c-7.3 0-13.2-5.9-13.2-13.2S39.7.8 47 .8s13.2 5.9 13.2 13.2v13.2H47z" fill="#36C5F0"/>
                  <path d="M47 33.8c7.3 0 13.2 5.9 13.2 13.2S54.3 60.2 47 60.2H14c-7.3 0-13.2-5.9-13.2-13.2S6.7 33.8 14 33.8h33z" fill="#36C5F0"/>
                  <path d="M99.8 47c0-7.3 5.9-13.2 13.2-13.2s13.2 5.9 13.2 13.2-5.9 13.2-13.2 13.2H99.8V47z" fill="#2EB67D"/>
                  <path d="M93.2 47c0 7.3-5.9 13.2-13.2 13.2S66.8 54.3 66.8 47V14c0-7.3 5.9-13.2 13.2-13.2S93.2 6.7 93.2 14v33z" fill="#2EB67D"/>
                  <path d="M80 99.8c7.3 0 13.2 5.9 13.2 13.2s-5.9 13.2-13.2 13.2-13.2-5.9-13.2-13.2V99.8H80z" fill="#ECB22E"/>
                  <path d="M80 93.2c-7.3 0-13.2-5.9-13.2-13.2S72.7 66.8 80 66.8h33c7.3 0 13.2 5.9 13.2 13.2S120.3 93.2 113 93.2H80z" fill="#ECB22E"/>
                </svg>
              </motion.div>

              {/* Jira */}
              <motion.div 
                className="flex items-center justify-center p-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.158A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005z" fill="#2684FF"/>
                  <path d="M24 11.513H12.429a5.218 5.218 0 0 1 5.232 5.215h2.13v2.158A5.215 5.215 0 0 1 25.005 24V12.518A1.005 1.005 0 0 1 24 11.513z" fill="#2684FF"/>
                  <path d="M12.429 0H1.429A5.218 5.218 0 0 1 6.661 5.215h2.13v2.158A5.215 5.215 0 0 1 14.005 12.518V1.005A1.005 1.005 0 0 1 12.429 0z" fill="#2684FF"/>
                </svg>
              </motion.div>

              {/* Notion */}
              <motion.div 
                className="flex items-center justify-center p-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.747-.887l-15.177.887c-.56.047-.748.327-.748.934zm14.337-.14c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.222-.187z" fill="white"/>
                </svg>
              </motion.div>

              {/* Asana */}
              <motion.div 
                className="flex items-center justify-center p-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" stroke="#F06A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M17 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" stroke="#F06A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M7 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" stroke="#F06A6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
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