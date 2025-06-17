"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CalModal from './CalModal';
import SalesCalModal from './SalesCalModal';

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isCalModalOpen, setIsCalModalOpen] = useState(false);
  const [isSalesCalModalOpen, setIsSalesCalModalOpen] = useState(false);

  useEffect(() => {
    // Check if we've already shown the popup in this session
    const hasShownInSession = sessionStorage.getItem('exitIntentShown');
    if (hasShownInSession) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the page and we haven't shown it yet
      if (e.clientY <= 0 && !hasShown && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    // Add event listener for mouse leave
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleContactClick = () => {
    setIsCalModalOpen(true);
    setIsVisible(false);
  };

  const handleDemoClick = () => {
    setIsSalesCalModalOpen(true);
    setIsVisible(false);
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />

            {/* Popup Content */}
            <motion.div
              className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 animate-flowing-gradient-slow rounded-3xl"></div>
              <div className="absolute inset-[1px] bg-gradient-to-br from-slate-900/95 to-slate-800/95 rounded-3xl"></div>

              {/* Close button */}
              <motion.button
                onClick={handleClose}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-200 z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <div className="relative z-10 p-8">
                {/* Icon */}
                <motion.div
                  className="flex justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center animate-flowing-gradient">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  className="text-2xl sm:text-3xl font-semibold text-white text-center mb-4 leading-tight"
                  style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Wait! Don&apos;t miss out on
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-text-shimmer">
                    AI-Powered Training
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-slate-300 text-center mb-8 leading-relaxed"
                  style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Before you go, discover how our AI can transform your workforce training. Join our exclusive pilot program or get a personalized demo.
                </motion.p>

                {/* Action buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {/* Demo Button */}
                  <motion.button
                    onClick={handleDemoClick}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 text-white font-semibold rounded-xl shadow-xl relative overflow-hidden animate-flowing-gradient"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 animate-flowing-gradient-fast"
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Book Demo</span>
                    </span>
                  </motion.button>

                  {/* Contact Button */}
                  <motion.button
                    onClick={handleContactClick}
                    className="flex-1 px-6 py-3 bg-transparent border-2 border-slate-600/50 hover:border-blue-400/50 text-white font-semibold rounded-xl transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>Contact Us</span>
                    </span>
                  </motion.button>
                </motion.div>

                {/* Small disclaimer */}
                <motion.p
                  className="text-slate-500 text-xs text-center mt-6"
                  style={{ fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Join 1000+ companies already transforming their workforce with AI
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Existing Modals */}
      <CalModal 
        isOpen={isCalModalOpen} 
        onClose={() => setIsCalModalOpen(false)} 
      />
      <SalesCalModal 
        isOpen={isSalesCalModalOpen} 
        onClose={() => setIsSalesCalModalOpen(false)} 
      />
    </>
  );
};

export default ExitIntentPopup; 