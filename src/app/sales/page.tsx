"use client";

import { motion } from 'framer-motion';
import React from 'react';

function CaseStudyCard({ item, variants }: { item: any, variants: any }) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <motion.div
      variants={variants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] } }}
      className={`flex flex-col items-center relative rounded-2xl p-8 shadow-lg text-center transition-all duration-300 border overflow-hidden ${
        isHovered
          ? `bg-gradient-to-br ${item.hoverBg} ${item.hoverBorder} shadow-2xl shadow-black/50`
          : 'bg-[#101010] border-slate-700/50 hover:border-slate-600/50'
      }`}
    >
      {/* Heading */}
      <div className="text-5xl font-bold mb-2">
        {item.percent}
      </div>
      {/* Subheading */}
      <div className="text-lg font-semibold text-blue-300 mb-4">
        {item.sub}
      </div>
      {/* Body */}
      <div className="text-slate-300 mb-6">
        {item.body}
      </div>
      {/* Tags section */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {item.tags.map((tag: { label: string; color: string }, i: number) => (
          <span
            key={i}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${tag.color} text-white/90`}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
          >
            {tag.label}
          </span>
        ))}
      </div>
      {/* Button */}
      <button className="group relative px-6 py-3 bg-transparent text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden border border-blue-500 hover:border-blue-400 flex items-center justify-center gap-2">
        <span>View Case Study</span>
        {/* Upward trend icon */}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6-6 4 4 8-8" />
        </svg>
      </button>
    </motion.div>
  );
}

export default function SalesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{marginBottom: '100px'}}>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,31,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,31,0.3)_1px,transparent_1px)] bg-[size:60px_60px] opacity-100"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12"
          >
            {/* Left: Headline & Subtext */}
            <div className="flex-1 text-center lg:text-left">
            <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[0.9] tracking-tight mb-8"
            variants={fadeInUp}
            style={{ 
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600,
              lineHeight: '1.2'
            }}
          >
                Agentic AI That Delivers <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Measurable Learning ROI
                </span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Adivirtus helps enterprises drive smarter workforce development through AI-driven skill mapping, personalized learning journeys, and real-time analytics.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <button className="group relative px-8 py-4 bg-transparent text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-[1px] rounded-xl bg-black/80 backdrop-blur-sm"></span>
                  <span className="relative z-10 flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Book a Free Demo</span>
                  </span>
                </button>
                <button className="group relative px-8 py-4 bg-transparent text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden border border-slate-600 hover:border-slate-400">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Join our Pilot Program</span>
                  </span>
                </button>
              </motion.div>
            </div>
            {/* Right: Stat Cards */}
            <motion.div
              variants={fadeInUp}
              className="flex-1 w-full max-w-md grid grid-cols-2 gap-4 lg:gap-6">
              {[
                { value: '94%', label: 'Engagement Rate' },
                { value: '1k+', label: 'Happy Customers' },
                { value: '23+', label: 'AI Agents' },
                { value: '+34%', label: 'ROI Increase' },
              ].map((stat, idx) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-slate-900/70 to-slate-800/70 border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-base text-slate-300 font-medium text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

    {/* Tech Giants Carousel Section */}
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-black" style={{marginBottom: '100px'}}>
        <div className="max-w-7xl mx-auto">
        <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[0.9] tracking-tight mb-8"
            variants={fadeInUp}
            style={{ 
              fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
              fontWeight: 600,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              textAlign: 'center',
              marginBottom: '100px',
            }}
          >
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 animate-text-shimmer"> Tech-Industry Giants</span>
          </motion.h2>
          <div className="relative overflow-hidden w-full">
            <div className="carousel-track flex items-center gap-12 animate-slide-x whitespace-nowrap">
              {[
                'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'IBM', 'Oracle', 'Salesforce', 'Adobe', 'Intel', 'Cisco', 'SAP', 'Dell', 'Nvidia', 'Zoom', 'ServiceNow', 'Workday', 'Snowflake', 'Atlassian', 'Shopify'
              ].map((name, idx) => (
                <span
                  key={idx}
                  className="text-lg sm:text-xl font-semibold text-slate-200 px-6 py-2 rounded-lg bg-slate-900/60 border border-slate-700/40 shadow-md mx-2 inline-block"
                >
                  {name}
                </span>
              ))}
              {/* Duplicate for infinite effect */}
              {[
                'Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'IBM', 'Oracle', 'Salesforce', 'Adobe', 'Intel', 'Cisco', 'SAP', 'Dell', 'Nvidia', 'Zoom', 'ServiceNow', 'Workday', 'Snowflake', 'Atlassian', 'Shopify'
              ].map((name, idx) => (
                <span
                  key={"dup-" + idx}
                  className="text-lg sm:text-xl font-semibold text-slate-200 px-6 py-2 rounded-lg bg-slate-900/60 border border-slate-700/40 shadow-md mx-2 inline-block"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <style jsx>{`
          .animate-slide-x {
            animation: slideX 30s linear infinite;
          }
          @keyframes slideX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black" style={{marginBottom: '100px'}}>
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center mb-14"
            variants={fadeInUp}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
          >
            Proven results, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 animate-text-shimmer">backed by data</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { percent: '34%', sub: 'Avg increase in ROI', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa.', tags: [ { label: 'Enterprise', color: 'bg-blue-500/30' } ], hoverBg: 'from-blue-500/90 to-blue-600/90', hoverBorder: 'border-blue-400/50' },
              { percent: '94%', sub: 'Avg engagement rate', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa.', tags: [ { label: 'EdTech', color: 'bg-purple-500/30' }, { label: 'AI', color: 'bg-blue-400/30' } ], hoverBg: 'from-purple-500/90 to-purple-600/90', hoverBorder: 'border-purple-400/50' },
              { percent: '23+', sub: 'AI agents deployed', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa.', tags: [ { label: 'SMB', color: 'bg-emerald-500/30' } ], hoverBg: 'from-emerald-500/90 to-emerald-600/90', hoverBorder: 'border-emerald-400/50' },
            ].map((item, idx) => (
              <CaseStudyCard key={idx} item={item} variants={fadeInUp}/>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center mb-14"
            variants={fadeInUp}
            style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
          >
            Flexible Pricing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 animate-text-shimmer">for Every Team</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {[
              { name: 'Free Plan', price: '$0/mo', highlighted: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', features: ['Lorem ipsum dolor sit', 'Consectetur adipiscing', 'Elit pellentesque'] },
              { name: 'Standard Plan', price: '$50/mo', highlighted: true, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', features: ['Lorem ipsum dolor sit', 'Consectetur adipiscing', 'Elit pellentesque'], recommended: true },
              { name: 'Pro Plan', price: '$100/mo', highlighted: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', features: ['Lorem ipsum dolor sit', 'Consectetur adipiscing', 'Elit pellentesque'] },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-8 shadow-lg transition-all duration-300 border flex flex-col ${
                  plan.highlighted
                    ? 'border-blue-500/80 bg-[#101010]'
                    : 'border-slate-700/50 bg-[#0A0A0A]'
                }`}
              >
                <h3 className="text-lg font-medium text-slate-300 text-left mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white text-left mb-4">{plan.price}</div>
                <p className="text-sm text-slate-400 text-left mb-8">{plan.description}</p>
                
                <div className="flex-grow">
                  <h4 className="font-semibold text-white text-left mb-4">Includes:</h4>
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {plan.recommended && (
                  <div className="mt-8 text-center">
                    <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Blue promo div */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-center"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-semibold text-white text-center sm:text-left mb-4 sm:mb-0 pl-8">
              Be at the frontier of development
            </h3>
            <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-lg shrink-0 mr-8">
              Book Demo Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              Ready to Transform Your Sales?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-300 mb-8"
            >
              Join thousands of companies that have revolutionized their sales process with AI-powered insights and training.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="group relative px-8 py-4 bg-transparent text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-[1px] rounded-xl bg-black/80 backdrop-blur-sm"></span>
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Contact Sales Team</span>
                </span>
              </button>
              
              <button className="group relative px-8 py-4 bg-transparent text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden border border-slate-600 hover:border-slate-400">
                <span className="relative z-10 flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Watch Demo</span>
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
}
