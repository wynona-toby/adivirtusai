"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cal, { getCalApi } from "@calcom/embed-react";

interface CalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalModal: React.FC<CalModalProps> = ({ isOpen, onClose }) => {
  // Initialize Cal.com when modal opens
  useEffect(() => {
    if (isOpen) {
      getCalApi().then((cal) => {
        cal("ui", {
          "styles": {
            "branding": {
              "brandColor": "#3b82f6"
            }
          },
          "hideEventTypeDetails": false
        });
      });
    }
  }, [isOpen]);

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="relative bg-black rounded-2xl shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-hidden border border-slate-700"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Book a Demo
                </h2>
                <p className="text-sm text-slate-300 mt-1">
                  Schedule a 30-minute demo of our AI platform
                </p>
              </div>
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-800 rounded-full transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 text-slate-400 hover:text-white"
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

            {/* Cal.com Embed */}
            <div className="p-6 h-[600px] bg-black">
              <Cal
                calLink="aditya-kamble/30min"
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "scroll"
                }}
                config={{
                  "layout": "month_view",
                  "theme": "dark"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CalModal; 