"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CardSwap, { Card } from '../CardSwap/CardSwap';

// Card configurations
const cardConfigs = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Built with cutting-edge technology stack for unmatched performance and reliability.",
    status: "Active",
    borderColor: "rgba(59, 130, 246, 0.2)",
    gradientFrom: "blue-500/5",
    gradientTo: "blue-500/10",
    iconBg: "blue-500/20",
    iconBorder: "rgba(59, 130, 246, 0.3)",
    statusColor: "blue-400",
    statusIcon: <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
  },
  {
    icon: "🎯",
    title: "Pixel Perfect",
    description: "Fluid animations powered by GSAP with frame-perfect timing and smooth transitions.",
    status: "Optimized",
    borderColor: "rgba(16, 185, 129, 0.2)",
    gradientFrom: "emerald-500/5",
    gradientTo: "emerald-500/10",
    iconBg: "emerald-500/20",
    iconBorder: "rgba(16, 185, 129, 0.3)",
    statusColor: "emerald-400",
    statusIcon: (
      <div className="flex space-x-1">
        <div className="w-1 h-3 sm:h-4 bg-emerald-500 rounded-full animate-pulse"></div>
        <div className="w-1 h-4 sm:h-6 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
        <div className="w-1 h-2 sm:h-3 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
      </div>
    )
  },
  {
    icon: "🎨",
    title: "Fully Flexible",
    description: "Completely customizable and adaptable to match your brand and design system perfectly.",
    status: "Themed",
    borderColor: "rgba(147, 51, 234, 0.2)",
    gradientFrom: "purple-500/5",
    gradientTo: "purple-500/10",
    iconBg: "purple-500/20",
    iconBorder: "rgba(147, 51, 234, 0.3)",
    statusColor: "purple-400",
    statusIcon: (
      <div className="flex space-x-1">
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-500 rounded-full"></div>
        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full"></div>
      </div>
    )
  }
];

const Feature: React.FC = () => {
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

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="w-full min-h-screen bg-black flex items-center justify-between relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Left side - Text content */}
      <motion.div 
        className="flex-1 max-w-3xl pl-6 sm:pl-12 lg:pl-20 pr-6 sm:pr-12 z-10"
        variants={textVariants}
      >
        <motion.div
          className="inline-flex items-center px-4 py-2 bg-gray-900 border border-gray-700 rounded-full mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-gray-300 text-sm font-medium">✨ New Feature</span>
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
          variants={textVariants}
        >
          <span className="block">Card stacks have</span>
          <span className="text-white">never looked</span>
          <span className="block">so good</span>
        </motion.h1>

        <motion.p 
          className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
          variants={textVariants}
        >
          Experience fluid, buttery-smooth card animations that bring your interface to life.
          <span className="block mt-2 text-lg text-gray-400">Just look at it go!</span>
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          variants={textVariants}
        >
          <motion.button
            className="px-8 py-4 bg-white text-black font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:border-gray-400 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Cards section */}
      <motion.div 
        className="absolute right-0 top-[40%] transform -translate-y-[50%] translate-x-[30%] sm:translate-x-[15%] md:translate-x-[10%] lg:translate-x-[20%] xl:translate-x-[10%]"
        variants={cardVariants}
      >
        <div className="relative">
          <div className="w-[400px] h-[500px] sm:w-[480px] sm:h-[580px] md:w-[550px] md:h-[650px] lg:w-[600px] lg:h-[700px] xl:w-[700px] xl:h-[800px]">
            <CardSwap
              cardDistance={70}
              verticalDistance={80}
              delay={4000}
              pauseOnHover={true}
              width="100%"
              height="85%"
              skewAmount={8}
              easing="elastic"
            >
              {cardConfigs.map((config, index) => (
                <Card key={index}>
                  <div 
                    className="p-6 sm:p-8 h-full flex flex-col justify-between text-white bg-black shadow-2xl relative overflow-hidden rounded-xl will-change-transform transform-gpu"
                    style={{
                      boxShadow: `
                        0 0 0 1px ${config.borderColor},
                        0 20px 25px -5px rgba(0, 0, 0, 0.1),
                        0 10px 10px -5px rgba(0, 0, 0, 0.04)
                      `
                    }}
                  >
                    {/* Background effects */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-${config.gradientFrom} via-transparent to-${config.gradientTo} rounded-xl`}></div>
                    <div className={`absolute ${index === 0 ? 'top-0 right-0' : index === 1 ? 'bottom-0 left-0' : 'top-1/2 right-0'} w-24 h-24 ${index === 1 ? 'w-32 h-32' : index === 2 ? 'w-28 h-28' : ''} bg-${config.gradientFrom.split('/')[0]}/10 rounded-full blur-2xl`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div 
                          className={`w-10 h-10 sm:w-12 sm:h-12 bg-${config.iconBg} rounded-xl flex items-center justify-center backdrop-blur-sm`}
                          style={{ boxShadow: `0 0 0 1px ${config.iconBorder}` }}
                        >
                          <span className="text-xl sm:text-2xl">{config.icon}</span>
                        </div>
                        <div className={`text-xs uppercase tracking-wider text-${config.statusColor} font-medium`}>
                          {config.title.includes('Reliable') ? 'Reliable' : config.title.includes('Smooth') ? 'Smooth' : 'Customizable'}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">{config.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {config.description}
                      </p>
                    </div>

                    <div className="relative z-10">
                      <div className={`flex items-center space-x-2 text-${config.statusColor}`}>
                        {config.statusIcon}
                        <span className="text-xs sm:text-sm">{config.status}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Feature; 