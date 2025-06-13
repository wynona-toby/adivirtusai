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
        { name: "AI Assessments", href: "/#features" },
        { name: "Learning Roadmaps", href: "/#features" },
        { name: "Analytics Dashboard", href: "/#features" },
        { name: "Strategic Insights", href: "/#features" },
        { name: "Virtual CHRO", href: "/athena" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Case Studies", href: "/case-studies", highlight: true }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/#about" },
        { name: "Careers", href: "/career", highlight: true },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Contact", href: "/#contact" }
      ]
    },
    {
      title: "Founder",
      links: [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/aditya-kamble-entrepreneur", highlight: true },
        { name: "Instagram", href: "https://www.instagram.com/thegodofcomputers/" },
        { name: "Twitter", href: "https://x.com/adityaknotfound" },
        { name: "Personal Website", href: "https://thegodofcomputers.com/" }
      ]
    }
  ];



  return (
    <footer className="relative bg-black border-t border-slate-800/50" suppressHydrationWarning={true}>
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-100"></div>
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-12">
          {/* Logo Section */}
          <motion.div 
            className="sm:col-span-2 lg:col-span-1"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold text-lg">Adivirtus AI</span>
            </div>
          </motion.div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <motion.div 
              key={section.title}
              className="lg:col-span-1"
              variants={itemVariants}
            >
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className={`text-sm transition-colors duration-200 ${
                        link.highlight 
                          ? 'text-blue-400 hover:text-blue-300' 
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Subscribe Section */}
          <motion.div 
            className="sm:col-span-2 lg:col-span-1"
            variants={itemVariants}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
              Subscribe
            </h3>
            <ul className="space-y-3">
              <li><a href="/coming-soon" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Newsletter</a></li>
              <li><a href="/coming-soon" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Updates</a></li>
              <li><a href="/coming-soon" className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">Product News</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-slate-800/50 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          variants={itemVariants}
        >
          {/* Copyright */}
          <p className="text-slate-400 text-sm text-center sm:text-left">
            © 2025 Adivirtus AI, Mumbai, India
          </p>

          {/* Social Links */}
          <div className="flex space-x-3 sm:space-x-4">
            <motion.a
              href="https://x.com/adityaknotfound"
              className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800/50 rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" suppressHydrationWarning={true}>
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" suppressHydrationWarning={true} />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/aditya-kamble-entrepreneur"
              className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800/50 rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" suppressHydrationWarning={true}>
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" suppressHydrationWarning={true} />
              </svg>
            </motion.a>
                         <motion.a
               href="https://thegodofcomputers.com/"
               className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800/50 rounded-lg"
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               aria-label="Website"
               target="_blank"
               rel="noopener noreferrer"
             >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" suppressHydrationWarning={true}>
                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" suppressHydrationWarning={true} />
               </svg>
             </motion.a>
             <motion.a
               href="https://www.youtube.com/@Adivirtus"
               className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800/50 rounded-lg"
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               aria-label="YouTube"
               target="_blank"
               rel="noopener noreferrer"
             >
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" suppressHydrationWarning={true}>
                 <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" suppressHydrationWarning={true} />
               </svg>
             </motion.a>
            <motion.a
              href="https://www.instagram.com/thegodofcomputers/"
              className="text-slate-400 hover:text-white transition-colors duration-200 p-2 hover:bg-slate-800/50 rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" suppressHydrationWarning={true}>
                <path fillRule="evenodd" d="M12.017 0H7.983C3.58 0 0 3.58 0 7.983v4.034C0 16.42 3.58 20 7.983 20h4.034C16.42 20 20 16.42 20 12.017V7.983C20 3.58 16.42 0 12.017 0zM18 12.017c0 3.312-2.688 6-6 6H7.983c-3.312 0-6-2.688-6-6V7.983c0-3.312 2.688-6 6-6h4.034c3.312 0 6 2.688 6 6v4.034z" clipRule="evenodd" suppressHydrationWarning={true} />
                <path d="M9.982 4.819c-2.797 0-5.064 2.267-5.064 5.064s2.267 5.064 5.064 5.064 5.064-2.267 5.064-5.064-2.267-5.064-5.064-5.064zM9.982 13.084a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zM15.191 4.15a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" suppressHydrationWarning={true} />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 