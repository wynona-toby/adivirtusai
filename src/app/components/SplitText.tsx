"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  by?: "chars" | "words";
}

export default function SplitText({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.05,
  by = "chars" 
}: SplitTextProps) {
  const splitText = by === "chars" 
    ? children.split("") 
    : children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: duration, 
        delayChildren: delay * i 
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {splitText.map((char, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ 
            display: "inline-block",
            marginRight: by === "words" ? "0.25em" : "0"
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
} 