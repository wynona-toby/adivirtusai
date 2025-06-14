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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 8
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, rotate: -5 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="security" className="relative min-h-screen bg-black overflow-hidden py-12 lg:py-16">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-100"></div>
      
      {/* Animated background particles */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-blue-500/5"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-blue-500/5"
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div 
          className="text-left mb-8 lg:mb-12 max-w-4xl"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center space-x-3 px-4 py-2 bg-purple-500/30 backdrop-blur-sm border border-purple-500/50 rounded-full shadow-lg mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-sm shadow-purple-400/50"></div>
            <span className="text-sm font-semibold text-white" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>ENTERPRISE READY</span>
          </motion.div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[0.9] tracking-tight mb-6"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600
            }}
          >
            Future-Ready Security with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Tech Stack Integration</span>
          </motion.h2>

          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl px-4 lg:px-0"
            variants={itemVariants}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
          >
            Adivirtus AI is built for ambitious AI projects. You can integrate it with your existing tech stack and scale it as you grow. 
            We&apos;ve implemented sophisticated and top-notch security measures and protocols to protect your data.
          </motion.p>
        </motion.div>

        {/* Security Section */}
        <motion.div 
          className="mb-12 lg:mb-16"
          variants={sectionVariants}
        >
          <div className="mb-8">
            <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">SECURITY</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight"
                variants={itemVariants}
                style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
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
                  <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>Enterprise-grade and battle-tested security</h3>
                  <p className="text-slate-400 leading-relaxed" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 300 }}>
                    measures and protocols to protect your data.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <p className="text-slate-400 leading-relaxed" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 300 }}>
                    All our systems are built with security in mind and are constantly monitored and audited.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Content - Security Badges */}
            <motion.div 
              className="flex items-center justify-start gap-6 max-w-xs mx-auto lg:mx-0"
              variants={itemVariants}
            >
              {/* SOC Badge */}
              <motion.div 
                className="w-24 h-24 bg-[#101010]/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/20"
                variants={badgeVariants}
                whileHover="hover"
              >
                <span className="text-blue-400 font-bold text-lg">SOC</span>
              </motion.div>

              {/* SOC 2 Badge */}
              <motion.div 
                className="w-24 h-24 bg-[#101010]/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/20"
                variants={badgeVariants}
                whileHover="hover"
              >
                <span className="text-blue-400 font-bold text-lg">SOC 2</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Integrations Section */}
        <motion.div 
          variants={sectionVariants}
        >
          <div className="mb-4">
            <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">INTEGRATIONS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
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
              className="grid grid-cols-4 grid-rows-2 gap-8 sm:gap-10 max-w-lg mx-auto lg:mx-0"
              variants={itemVariants}
            >
              {/* Row 1 */}
              {/* Microsoft Teams */}
              <motion.div 
                className="flex items-center justify-center"
                variants={logoVariants}
                whileHover="hover"
              >
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.625 5.25H15.75c-.621 0-1.125.504-1.125 1.125v4.5c0 .621.504 1.125 1.125 1.125h4.875c.621 0 1.125-.504 1.125-1.125v-4.5c0-.621-.504-1.125-1.125-1.125z" fill="#5059C9"/>
                  <path d="M13.5 3.75H3.375c-.621 0-1.125.504-1.125 1.125v10.125c0 .621.504 1.125 1.125 1.125H13.5c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125z" fill="#7B83EB"/>
                  <circle cx="18.75" cy="15.75" r="2.25" fill="#5059C9"/>
                </svg>
              </motion.div>

              {/* Google Workspace */}
              <motion.div 
                className="flex items-center justify-center"
                variants={logoVariants}
                whileHover="hover"
              >
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </motion.div>

              {/* Microsoft 365 */}
              <motion.div 
                className="flex items-center justify-center"
                variants={logoVariants}
                whileHover="hover"
              >
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2h9v9H2V2z" fill="#FF8C00"/>
                  <path d="M13 2h9v9h-9V2z" fill="#00BCF2"/>
                  <path d="M2 13h9v9H2v-9z" fill="#00B04F"/>
                  <path d="M13 13h9v9h-9v-9z" fill="#FFB900"/>
                </svg>
              </motion.div>

              {/* Slack */}
              <motion.div 
                className="flex items-center justify-center"
                variants={logoVariants}
                whileHover="hover"
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

              {/* Row 2 */}
              {/* BambooHR */}
              <motion.div 
                className="flex items-center justify-center"
                variants={logoVariants}
                whileHover="hover"
              >
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#68BC45"/>
                  <path d="M8 8h8v2H8V8zm0 3h8v2H8v-2zm0 3h6v2H8v-2z" fill="#68BC45"/>
                </svg>
              </motion.div>

              {/* Zoho People */}
              <motion.div 
                className="flex items-center justify-center"
                variants={logoVariants}
                whileHover="hover"
              >
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#E94B3C"/>
                  <path d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" fill="white"/>
                  <path d="M12 14c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z" fill="white"/>
                </svg>
              </motion.div>

              {/* Workday */}
              <motion.div 
                className="flex items-center justify-center"
                variants={logoVariants}
                whileHover="hover"
              >
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#F68B1F"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#F68B1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </motion.div>

              {/* Canvas */}
              <motion.div 
                className="flex items-center justify-center"
                variants={logoVariants}
                whileHover="hover"
              >
                <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#E13F29"/>
                  <path d="M8 8h8v8H8V8z" fill="white"/>
                  <path d="M10 10h4v4h-4v-4z" fill="#E13F29"/>
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