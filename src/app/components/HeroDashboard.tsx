"use client";

import React from 'react';
import { motion } from 'framer-motion';

const HeroDashboard: React.FC = () => {
  return (
    <motion.div 
      className="relative w-full max-w-lg mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      
      {/* Main Dashboard Container */}
      <motion.div 
        className="relative bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-gray-800/60 backdrop-blur-2xl border border-gray-700/30 rounded-3xl p-6 shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0ACD]/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-white font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Team Growth Dashboard
            </h3>
            <div className="flex items-center gap-2">
              <motion.div 
                className="w-3 h-3 bg-[#0A0ACD] rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <span className="text-gray-400 text-sm font-medium">Live</span>
            </div>
          </div>

          {/* Enhanced Skill Matrix */}
          <div className="space-y-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm font-medium">JavaScript Proficiency</span>
                <span className="text-[#0A0ACD] font-bold text-sm">87%</span>
              </div>
              <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-[#0A0ACD] to-blue-400 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "87%" }}
                  transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm font-medium">Cloud Architecture</span>
                <span className="text-emerald-400 font-bold text-sm">92%</span>
              </div>
              <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1.2, delay: 1.0, ease: "easeOut" }}
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-sm font-medium">AI/ML Implementation</span>
                <span className="text-purple-400 font-bold text-sm">74%</span>
              </div>
              <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                <motion.div 
                  className="bg-gradient-to-r from-purple-500 to-purple-400 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "74%" }}
                  transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </div>

          {/* Enhanced Learning Paths */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <motion.div 
              className="bg-gradient-to-br from-[#0A0ACD]/10 to-[#0A0ACD]/5 backdrop-blur-sm rounded-2xl p-5 border border-[#0A0ACD]/20 hover:border-[#0A0ACD]/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-[#0A0ACD] rounded-full"></div>
                <span className="text-white text-sm font-semibold">Active Paths</span>
              </div>
              <motion.div 
                className="text-3xl font-bold text-[#0A0ACD]"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5, type: "spring" }}
              >
                24
              </motion.div>
              <div className="text-gray-400 text-xs font-medium">+12% this week</div>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 backdrop-blur-sm rounded-2xl p-5 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-white text-sm font-semibold">Completed</span>
              </div>
              <motion.div 
                className="text-3xl font-bold text-emerald-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
              >
                156
              </motion.div>
              <div className="text-gray-400 text-xs font-medium">+8% this week</div>
            </motion.div>
          </div>

          {/* Enhanced Team Members */}
          <div className="space-y-4">
            <h4 className="text-gray-300 font-bold text-sm mb-4">Recent Activity</h4>
            
            <motion.div 
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-800/40 to-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-[#0A0ACD] to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">A</span>
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-medium">Alex completed React Advanced</div>
                <div className="text-gray-400 text-xs">2 hours ago</div>
              </div>
              <div className="text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded-lg">+15 pts</div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-800/40 to-gray-800/20 backdrop-blur-sm rounded-2xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7, duration: 0.6 }}
              whileHover={{ scale: 1.02, x: 5 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">S</span>
              </div>
              <div className="flex-1">
                <div className="text-white text-sm font-medium">Sarah started ML Fundamentals</div>
                <div className="text-gray-400 text-xs">5 hours ago</div>
              </div>
              <div className="text-[#0A0ACD] text-xs font-bold bg-[#0A0ACD]/10 px-2 py-1 rounded-lg">New Path</div>
            </motion.div>
          </div>
        </div>
        
      </motion.div>

      {/* Enhanced Floating Analytics Card */}
      <motion.div 
        className="absolute -top-8 -right-8 bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-2xl border border-amber-500/30 rounded-2xl p-5 shadow-2xl"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 2.0, duration: 0.8, type: "spring" }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <div className="text-center">
          <motion.div 
            className="text-amber-400 text-3xl font-black"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 2.5 }}
          >
            35%
          </motion.div>
          <div className="text-gray-300 text-xs font-semibold">Faster Growth</div>
        </div>
      </motion.div>

      {/* Enhanced Floating Completion Rate */}
      <motion.div 
        className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-2xl border border-emerald-500/30 rounded-2xl p-4 shadow-2xl"
        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 2.2, duration: 0.8, type: "spring" }}
        whileHover={{ scale: 1.1, rotate: -5 }}
      >
        <div className="flex items-center gap-3">
          <motion.div 
            className="w-10 h-10 bg-emerald-500/20 rounded-2xl flex items-center justify-center"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-5 h-5 bg-emerald-500 rounded-full"></div>
          </motion.div>
          <div>
            <motion.div 
              className="text-emerald-400 font-black text-lg"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 2.8 }}
            >
              94%
            </motion.div>
            <div className="text-gray-400 text-xs font-semibold">Completion</div>
          </div>
        </div>
      </motion.div>
      
    </motion.div>
  );
};

export default HeroDashboard; 