"use client";

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const CareerPage = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const departments = ["All", "Engineering", "Product", "Design", "Marketing", "Operations"];

  const jobPositions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Lead the development of our AI-powered assessment algorithms and machine learning models.",
      requirements: ["5+ years experience in AI/ML", "Python, TensorFlow, PyTorch", "Experience with NLP and computer vision"],
      isHot: true
    },
    {
      title: "Frontend React Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time", 
      description: "Build beautiful, responsive user interfaces for our AI platform using React and Next.js.",
      requirements: ["3+ years React experience", "TypeScript, Next.js", "Modern CSS frameworks"],
      isHot: false
    },
    {
      title: "Product Manager - AI Solutions",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time",
      description: "Drive product strategy and roadmap for our AI-powered workforce development platform.",
      requirements: ["5+ years product management", "Experience with AI/ML products", "Strong analytical skills"],
      isHot: true
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Design intuitive and engaging user experiences for our AI-powered platform.",
      requirements: ["4+ years UX/UI design", "Figma, Adobe Creative Suite", "Experience with design systems"],
      isHot: false
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain scalable infrastructure for our AI platform and ensure high availability.",
      requirements: ["3+ years DevOps experience", "AWS, Docker, Kubernetes", "CI/CD pipeline expertise"],
      isHot: false
    },
    {
      title: "Marketing Growth Manager",
      department: "Marketing",
      location: "Remote / Austin",
      type: "Full-time",
      description: "Drive user acquisition and growth strategies for our AI-powered workforce solutions.",
      requirements: ["4+ years growth marketing", "B2B SaaS experience", "Data-driven approach"],
      isHot: false
    }
  ];

  const filteredJobs = selectedDepartment === "All" 
    ? jobPositions 
    : jobPositions.filter(job => job.department === selectedDepartment);

  return (
    <PageTransition>
      <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-100"></div>
      
      <motion.div 
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center space-x-3 px-4 py-2 bg-pink-500/30 backdrop-blur-sm border border-pink-500/50 rounded-full shadow-lg mx-auto mb-6"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse shadow-sm shadow-pink-400/50"></div>
            <span className="text-sm font-semibold text-white" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>JOIN OUR TEAM</span>
          </motion.div>

          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[0.9] tracking-tight mb-6"
            variants={itemVariants}
            style={{ 
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600
            }}
          >
            Build the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-rose-500 animate-text-shimmer">AI-powered</span> workforce
          </motion.h1>

          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto px-4"
            variants={itemVariants}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
          >
            Join our mission to revolutionize how organizations develop and manage their workforce with cutting-edge AI technology. Work with brilliant minds and make a global impact.
          </motion.p>
        </motion.div>

        {/* Department Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={itemVariants}
        >
          {departments.map((dept) => (
            <motion.button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedDepartment === dept
                  ? 'bg-gradient-to-r from-pink-400 via-rose-400 to-rose-500 text-white shadow-lg animate-flowing-gradient'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {dept}
            </motion.button>
          ))}
        </motion.div>

        {/* Job Listings */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {filteredJobs.map((job, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >

              
              <div className="relative overflow-hidden rounded-2xl p-6 sm:p-8 h-full bg-[#101010] transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs font-medium">
                          {job.department}
                        </span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                          {job.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4 text-slate-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm">{job.location}</span>
                  </div>
                  
                  <p className="text-sm sm:text-base leading-relaxed mb-6 text-slate-300" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}>
                    {job.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-slate-400">
                          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    className="w-auto mx-auto py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-pink-400 via-rose-400 to-rose-500 text-white hover:from-pink-500 hover:to-rose-600 focus:ring-pink-500 focus:ring-offset-slate-900 shadow-lg hover:shadow-xl block animate-flowing-gradient"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
                  >
                    Apply Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Culture Section */}
        <motion.div 
          className="mt-20 text-center"
          variants={itemVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-6" style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}>
            Why work with us?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "🚀",
                title: "Innovation First",
                description: "Work on cutting-edge AI technology that's shaping the future of work"
              },
              {
                icon: "🌍",
                title: "Global Impact",
                description: "Help organizations worldwide transform their workforce with AI"
              },
              {
                icon: "🏆",
                title: "Growth & Learning",
                description: "Continuous learning opportunities and career advancement"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-700/30"
                variants={cardVariants}
                whileHover={{ y: -3 }}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
    </PageTransition>
  );
};

export default CareerPage; 