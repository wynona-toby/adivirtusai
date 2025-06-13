"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DarkModeExtensionDetector: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Skip if user has already dismissed
    const dismissed = localStorage.getItem('darkModeExtensionDismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    const detectDarkModeExtension = () => {
      // Common dark mode extension detection methods
      const detectionMethods = [
        // Method 1: Check for common extension classes on document/html
        () => {
          const html = document.documentElement;
          const body = document.body;
          const extensionClasses = [
            'dark-reader',
            'darkreader',
            'dark-mode',
            'nightmode',
            'night-mode',
            'dark-theme',
            'invert-colors'
          ];
          
          return extensionClasses.some(className => 
            html.classList.contains(className) || 
            body.classList.contains(className)
          );
        },

        // Method 2: Check for extension attributes
        () => {
          const html = document.documentElement;
          const extensionAttributes = [
            'data-darkreader-mode',
            'data-darkreader-scheme',
            'data-dark-reader',
            'data-nightmode',
            'data-dark-mode'
          ];
          
          return extensionAttributes.some(attr => html.hasAttribute(attr));
        },

        // Method 3: Check for injected styles
        () => {
          const styleSheets = Array.from(document.styleSheets);
          return styleSheets.some(sheet => {
            try {
              return sheet.ownerNode && 
                     (sheet.ownerNode as HTMLElement).id?.includes('dark') ||
                     (sheet.ownerNode as HTMLElement).className?.includes('dark');
            } catch (e) {
              return false;
            }
          });
        },

        // Method 4: Check for filter modifications on body/html
        () => {
          const html = document.documentElement;
          const body = document.body;
          const htmlStyle = window.getComputedStyle(html);
          const bodyStyle = window.getComputedStyle(body);
          
          const hasFilter = htmlStyle.filter !== 'none' || bodyStyle.filter !== 'none';
          const hasInvert = htmlStyle.filter.includes('invert') || bodyStyle.filter.includes('invert');
          
          return hasFilter && hasInvert;
        },

        // Method 5: Check for meta tags added by extensions
        () => {
          const metaTags = document.querySelectorAll('meta[name*="dark"], meta[name*="theme"]');
          return Array.from(metaTags).some(meta => 
            meta.getAttribute('content')?.includes('dark') ||
            meta.getAttribute('name')?.includes('dark-reader')
          );
        }
      ];

      return detectionMethods.some(method => {
        try {
          return method();
        } catch (e) {
          return false;
        }
      });
    };

    // Initial check
    const checkExtension = () => {
      if (detectDarkModeExtension()) {
        setShowNotification(true);
      }
    };

    // Check after a small delay to allow extensions to load
    const timeoutId = setTimeout(checkExtension, 1000);

    // Also check on DOM mutations (when extensions modify the page)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' || mutation.type === 'childList') {
          if (detectDarkModeExtension()) {
            setShowNotification(true);
          }
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['class', 'style', 'data-darkreader-mode', 'data-darkreader-scheme']
    });

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  const handleDismiss = () => {
    setShowNotification(false);
    setIsDismissed(true);
    localStorage.setItem('darkModeExtensionDismissed', 'true');
  };

  const handleRemindLater = () => {
    setShowNotification(false);
    // Don't set localStorage, so it can show again on next visit
  };

  if (isDismissed || !showNotification) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-4 right-4 z-[9999] max-w-sm"
        initial={{ opacity: 0, x: 100, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: 100, scale: 0.9 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          delay: 2 // Show after 2 seconds to not be too intrusive
        }}
      >
        {/* Notification Card */}
        <motion.div
          className="bg-gradient-to-br from-amber-500/95 to-orange-600/95 backdrop-blur-lg border border-amber-400/30 rounded-2xl shadow-2xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {/* Header Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 pointer-events-none" />
          
          <div className="relative p-5">
            {/* Icon and Title */}
            <div className="flex items-start space-x-3 mb-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-5 h-5 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" 
                    />
                  </svg>
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm leading-tight">
                  Dark Mode Extension Detected
                </h3>
              </div>
              
              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="flex-shrink-0 p-1 hover:bg-white/20 rounded-lg transition-colors duration-200"
              >
                <svg 
                  className="w-4 h-4 text-white/80 hover:text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>

            {/* Message */}
            <p className="text-white/90 text-xs leading-relaxed mb-4">
              For the best experience on our site, please consider disabling your dark mode extension. Our design is already optimized for dark theme! ✨
            </p>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <motion.button
                onClick={handleDismiss}
                className="flex-1 px-3 py-2 bg-white/20 hover:bg-white/30 text-white text-xs font-medium rounded-lg transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Got it!
              </motion.button>
              
              <motion.button
                onClick={handleRemindLater}
                className="flex-1 px-3 py-2 bg-transparent hover:bg-white/10 text-white/80 text-xs font-medium rounded-lg border border-white/20 transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Remind later
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DarkModeExtensionDetector; 