"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  contactType: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      reset();
      setSubmitStatus('idle');
    }
  }, [isOpen, reset]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        company: data.company || 'Not specified',
        subject: data.subject,
        message: data.message,
        contact_type: data.contactType,
        to_name: 'Adivirtus AI Team',
        current_time: new Date().toLocaleString(),
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
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
            className="relative bg-black rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 pb-6">
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  Contact Us
                </h2>
                <p className="text-sm text-slate-300 mt-1">
                  Get in touch with our team
                </p>
              </div>
              
              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-3 hover:bg-slate-900/50 rounded-full transition-all duration-200 group"
              >
                <svg
                  className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors"
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

            {/* Form Content */}
            <div className="px-8 pb-8 max-h-[calc(90vh-120px)] overflow-y-auto">
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-300">Thank you for contacting us. We&apos;ll get back to you soon!</p>
                </motion.div>
              ) : (
                                 <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                      {/* Contact Type */}
                   <div>
                     <label className="block text-sm font-medium text-slate-400 mb-3">
                       What can we help you with?
                     </label>
                     <div className="relative group">
                       <select
                         {...register('contactType', { required: 'Please select a contact type' })}
                         className="w-full px-5 py-4 bg-[#0A0A0C] border-0 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/30 hover:bg-[#0F0F11] transition-all duration-200 outline-none appearance-none cursor-pointer pr-12 text-sm sm:text-base"
                       >
                         <option value="" className="bg-[#0A0A0C] text-slate-400 py-3">Select an option</option>
                         <option value="demo" className="bg-[#0A0A0C] text-white py-3 hover:bg-slate-800">🎯 Request a Demo</option>
                         <option value="sales" className="bg-[#0A0A0C] text-white py-3 hover:bg-slate-800">💼 Sales Inquiry</option>
                         <option value="support" className="bg-[#0A0A0C] text-white py-3 hover:bg-slate-800">🛠️ Technical Support</option>
                         <option value="partnership" className="bg-[#0A0A0C] text-white py-3 hover:bg-slate-800">🤝 Partnership</option>
                         <option value="general" className="bg-[#0A0A0C] text-white py-3 hover:bg-slate-800">💬 General Question</option>
                       </select>
                       
                       {/* Custom dropdown arrow */}
                       <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                         <div className="bg-slate-800/30 rounded-lg p-1 group-hover:bg-slate-700/40 transition-colors duration-200">
                           <svg 
                             className="w-4 h-4 text-slate-400 group-hover:text-slate-300 transition-all duration-200 group-focus-within:rotate-180" 
                             fill="none" 
                             stroke="currentColor" 
                             viewBox="0 0 24 24"
                           >
                             <path 
                               strokeLinecap="round" 
                               strokeLinejoin="round" 
                               strokeWidth={2.5} 
                               d="M19 9l-7 7-7-7" 
                             />
                           </svg>
                         </div>
                       </div>
                     </div>
                     {errors.contactType && (
                       <p className="mt-2 text-sm text-red-400">{errors.contactType.message}</p>
                     )}
                   </div>

                                     {/* Name and Email Row */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-sm font-medium text-slate-400 mb-3">
                         Full Name *
                       </label>
                       <input
                         type="text"
                         {...register('name', { required: 'Name is required' })}
                         className="w-full px-5 py-4 bg-[#0A0A0C] border-0 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 outline-none"
                         placeholder="John Doe"
                       />
                       {errors.name && (
                         <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                       )}
                     </div>

                     <div>
                       <label className="block text-sm font-medium text-slate-400 mb-3">
                         Email Address *
                       </label>
                       <input
                         type="email"
                         {...register('email', { 
                           required: 'Email is required',
                           pattern: {
                             value: /\S+@\S+\.\S+/,
                             message: 'Please enter a valid email'
                           }
                         })}
                         className="w-full px-5 py-4 bg-[#0A0A0C] border-0 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 outline-none"
                         placeholder="john@company.com"
                       />
                       {errors.email && (
                         <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                       )}
                     </div>
                   </div>

                                     {/* Company and Subject Row */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                       <label className="block text-sm font-medium text-slate-400 mb-3">
                         Company
                       </label>
                       <input
                         type="text"
                         {...register('company')}
                         className="w-full px-5 py-4 bg-[#0A0A0C] border-0 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 outline-none"
                         placeholder="Your Company"
                       />
                     </div>

                     <div>
                       <label className="block text-sm font-medium text-slate-400 mb-3">
                         Subject *
                       </label>
                       <input
                         type="text"
                         {...register('subject', { required: 'Subject is required' })}
                         className="w-full px-5 py-4 bg-[#0A0A0C] border-0 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 outline-none"
                         placeholder="How can we help?"
                       />
                       {errors.subject && (
                         <p className="mt-2 text-sm text-red-400">{errors.subject.message}</p>
                       )}
                     </div>
                   </div>

                                     {/* Message */}
                   <div>
                     <label className="block text-sm font-medium text-slate-400 mb-3">
                       Message *
                     </label>
                     <textarea
                       rows={5}
                       {...register('message', { required: 'Message is required' })}
                       className="w-full px-5 py-4 bg-[#0A0A0C] border-0 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 resize-none outline-none"
                       placeholder="Tell us more about your needs..."
                     />
                     {errors.message && (
                       <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
                     )}
                   </div>

                                     {/* Submit Button */}
                   <div className="flex justify-end space-x-4 pt-6">
                     <button
                       type="button"
                       onClick={onClose}
                       className="px-6 py-3 text-slate-400 hover:text-white transition-all duration-200 rounded-xl hover:bg-slate-900/30"
                     >
                       Cancel
                     </button>
                     
                     <motion.button
                       type="submit"
                       disabled={isSubmitting}
                       className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-xl shadow-lg hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                     >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </div>

                                     {submitStatus === 'error' && (
                     <div className="mt-6 p-4 bg-red-500/10 border-0 rounded-xl">
                       <p className="text-red-400 text-sm">
                         Failed to send message. Please try again or contact us directly.
                       </p>
                     </div>
                   )}
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal; 