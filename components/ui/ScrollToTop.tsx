import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { cn } from '../../lib/utils';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Progress circle animation - smooth spring physics
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[90] group outline-none"
          aria-label="Scroll to top"
        >
          <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-white/10">
             {/* Circular Progress SVG */}
             <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none transform scale-110 p-0.5" viewBox="0 0 100 100">
                 {/* Background Circle */}
                 <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    className="stroke-gray-100 dark:stroke-gray-800"
                    strokeWidth="3"
                 />
                 {/* Progress Circle */}
                 <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{ pathLength }}
                 />
             </svg>
             <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};