"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaYoutube, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.footer 
      className="w-full bg-black py-8 px-6 sm:px-12 lg:px-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
          variants={containerVariants}
        >
          {/* Left side - Copyright and Terms */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
            variants={iconVariants}
          >
            <p className="text-gray-400 text-sm text-center sm:text-left">
              Copyright © {currentYear} Adivirtus AI. All rights reserved.
            </p>
            
            <motion.a
              href="#"
              className="text-gray-400 text-sm hover:text-white transition-colors duration-300 border-b border-transparent hover:border-gray-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Terms of Service
            </motion.a>
          </motion.div>

          {/* Center - Social Icons and Logo */}
          <motion.div 
            className="flex items-center gap-6"
            variants={iconVariants}
          >
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <motion.a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                variants={iconVariants}
                whileHover="hover"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </motion.a>
              
              <motion.a
                href="#"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                variants={iconVariants}
                whileHover="hover"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </motion.a>
              
              <motion.a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                variants={iconVariants}
                whileHover="hover"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </motion.a>
            </div>

            {/* Logo - Letter A */}
            <motion.div 
              className="w-8 h-8 bg-white text-black rounded-lg flex items-center justify-center font-bold text-lg"
              variants={iconVariants}
              whileHover={{
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.5 }
              }}
            >
              A
            </motion.div>
          </motion.div>

          {/* Right side - Made with passion */}
          <motion.div 
            className="flex items-center gap-2 text-gray-400 text-sm"
            variants={iconVariants}
          >
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                color: ["#9CA3AF", "#EF4444", "#9CA3AF"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaHeart className="text-red-400" />
            </motion.div>
            <span>passion</span>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 