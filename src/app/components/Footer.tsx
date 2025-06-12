"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const footerSections = [
    {
      title: "Platform",
      links: [
        "AI Assessments",
        "Learning Roadmaps",
        "Analytics Dashboard",
        "Strategic Insights",
        "Virtual CHRO"
      ]
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "API Reference",
        "Case Studies",
        "Webinars",
        "Blog"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "News",
        "Press",
        "Contact"
      ]
    },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Cookie Policy",
        "GDPR",
        "Security"
      ]
    }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" suppressHydrationWarning={true}>
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" suppressHydrationWarning={true} />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" suppressHydrationWarning={true}>
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" suppressHydrationWarning={true} />
        </svg>
      )
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" suppressHydrationWarning={true}>
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" suppressHydrationWarning={true} />
        </svg>
      )
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" suppressHydrationWarning={true}>
          <path fillRule="evenodd" d="M2.166 4.999A11.854 11.854 0 001 8.018 59.925 59.925 0 001 16.35c.124.95.722 1.798 1.635 2.205.436.194.895.294 1.365.298H16c.47-.004.929-.104 1.365-.298.913-.407 1.511-1.255 1.635-2.205A59.925 59.925 0 0019 8.018a11.854 11.854 0 00-1.166-3.019C17.262 4.089 16.5 3.5 15.634 3.5H4.366C3.5 3.5 2.738 4.09 2.166 5z" clipRule="evenodd" suppressHydrationWarning={true} />
          <path d="M8.23 14.846l4.482-2.598L8.23 9.65v5.196z" suppressHydrationWarning={true} />
        </svg>
      )
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" suppressHydrationWarning={true}>
          <path fillRule="evenodd" d="M12.017 0H7.983C3.58 0 0 3.58 0 7.983v4.034C0 16.42 3.58 20 7.983 20h4.034C16.42 20 20 16.42 20 12.017V7.983C20 3.58 16.42 0 12.017 0zM18 12.017c0 3.312-2.688 6-6 6H7.983c-3.312 0-6-2.688-6-6V7.983c0-3.312 2.688-6 6-6h4.034c3.312 0 6 2.688 6 6v4.034z" clipRule="evenodd" suppressHydrationWarning={true} />
          <path d="M9.982 4.819c-2.797 0-5.064 2.267-5.064 5.064s2.267 5.064 5.064 5.064 5.064-2.267 5.064-5.064-2.267-5.064-5.064-5.064zM9.982 13.084a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM15.191 4.15a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" suppressHydrationWarning={true} />
        </svg>
      )
    }
  ];

  return (
    <footer className="relative bg-[#0A0A0B] border-t border-slate-800/50" suppressHydrationWarning={true}>
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
          {/* Logo Section */}
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-lg">Adivirtus AI</span>
            </div>
          </motion.div>

          {/* Footer Links Sections */}
          {footerSections.map((section, index) => (
            <motion.div 
              key={section.title}
              className={section.title === "Subscribe" ? "lg:col-span-1" : "lg:col-span-1"}
              variants={itemVariants}
            >
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Subscribe Section */}
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Subscribe
            </h3>
            <ul className="space-y-3 mb-6">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Newsletter</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Updates</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Product News</a></li>
            </ul>
            
            {/* Email Subscription */}
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <motion.button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-slate-800/50 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          variants={itemVariants}
        >
          {/* Copyright */}
          <p className="text-slate-400 text-sm">
            © 2025 Adivirtus AI, Mumbai, India
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href="#"
                className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800/50 rounded-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 