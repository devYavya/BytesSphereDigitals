import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export const PageTransition: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();

  const pageVariants = {
    initial: { 
      opacity: 0, 
      y: 20,
      scale: 0.98,
      filter: "blur(4px)"
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.98,
      filter: "blur(4px)",
      transition: { 
        duration: 0.3, 
        ease: [0.22, 1, 0.36, 1] 
      },
    },
  };

  return (
    <div className="page-transition-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
