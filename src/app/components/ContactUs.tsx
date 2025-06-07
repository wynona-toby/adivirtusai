"use client";

import { motion } from "framer-motion";
import BeamBackground from "./BeamBackground";
import SplitText from "./SplitText";

// Button configurations
const buttons = [
  {
    type: 'secondary',
    text: 'Contact Us',
    className: "group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 text-white",
    hoverEffects: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)"
    }
  },
  {
    type: 'primary',
    text: 'Demo',
    className: "group relative overflow-hidden bg-white text-black",
    hoverEffects: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(255, 255, 255, 0.25), 0 10px 10px -5px rgba(255, 255, 255, 0.1)"
    }
  }
];

// Decorative elements configuration
const decorativeElements = [
  {
    position: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    size: "w-96 h-96",
    gradient: "from-blue-500/10 to-purple-500/10"
  },
  {
    position: "top-1/4 right-1/4",
    size: "w-64 h-64",
    gradient: "from-purple-500/5 to-pink-500/5"
  },
  {
    position: "bottom-1/4 left-1/4",
    size: "w-80 h-80",
    gradient: "from-cyan-500/5 to-blue-500/5"
  }
];

export default function ContactUs() {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-black">
      {/* Beam Background */}
      <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
        <BeamBackground 
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={0}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <SplitText 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-white leading-none"
              delay={0.3}
              duration={0.03}
              by="chars"
            >
              join the
            </SplitText>
            <SplitText 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight text-white leading-none mt-2"
              delay={0.8}
              duration={0.03}
              by="chars"
            >
              movement
            </SplitText>
          </div>
          
          {/* Description */}
          <div className="mb-12 max-w-2xl mx-auto">
            <SplitText 
              className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed"
              delay={1.3}
              duration={0.04}
              by="words"
            >
              unlock the future of corporate upskilling and learning with us
            </SplitText>
          </div>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {buttons.map((button) => (
              <motion.button 
                key={button.text}
                className={`${button.className} px-10 py-4 rounded-2xl text-lg font-medium min-w-[200px] shadow-2xl`}
                whileHover={button.hoverEffects}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className={`relative z-10 ${button.type === 'primary' ? 'font-semibold' : ''}`}>
                  {button.text}
                </span>
                
                {/* Button hover effects */}
                {button.type === 'secondary' && (
                  <>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 rounded-2xl"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                )}
                
                {button.type === 'primary' && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 rounded-2xl"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Decorative elements */}
                     {decorativeElements.map((element, idx) => (
             <div 
               key={idx}
               className={`absolute ${element.position} ${element.size} bg-gradient-to-r ${element.gradient} rounded-full blur-${idx === 0 ? '3xl' : idx === 1 ? '2xl' : '2xl'} -z-10`}
             />
           ))}
        </div>
      </div>
    </div>
  );
} 