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

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[0.9] tracking-tight mb-6"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600
            }}
          >
            Engineered with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">ambition</span>
          </motion.h1>

          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl px-4 lg:px-0"
            variants={itemVariants}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
          >
            Adivirtus AI is built for ambitious AI projects. You can integrate it with your existing tech stack and scale it as you grow. 
            We've implemented sophisticated and top-notch security measures and protocols to protect your data.
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
              className="grid grid-cols-2 gap-8 sm:gap-10 max-w-xs mx-auto lg:mx-0"
              variants={itemVariants}
            >
              {/* Slack */}
              <motion.div 
                className="flex items-center justify-center"
                variants={logoVariants}
                whileHover="hover"
              >
                <svg className="h-10 w-auto" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                className="flex items-center justify-center"
                variants={logoVariants}
                whileHover="hover"
              >
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.158A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005z" fill="#2684FF"/>
                  <path d="M24 11.513H12.429a5.218 5.218 0 0 1 5.232 5.215h2.13v2.158A5.215 5.215 0 0 1 25.005 24V12.518A1.005 1.005 0 0 1 24 11.513z" fill="#2684FF"/>
                  <path d="M12.429 0H1.429A5.218 5.218 0 0 1 6.661 5.215h2.13v2.158A5.215 5.215 0 0 1 14.005 12.518V1.005A1.005 1.005 0 0 1 12.429 0z" fill="#2684FF"/>
                </svg>
              </motion.div>

              {/* Notion */}
              <motion.div 
                className="flex items-center justify-center"
                variants={logoVariants}
                whileHover="hover"
              >
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.747-.887l-15.177.887c-.56.047-.748.327-.748.934zm14.337-.14c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.222-.187z" fill="white"/>
                </svg>
              </motion.div>

              {/* Asana */}
              <motion.div 
                className="flex items-center justify-center"
                variants={logoVariants}
                whileHover="hover"
              >
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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