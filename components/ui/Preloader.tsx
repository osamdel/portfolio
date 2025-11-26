
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Counter animation
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 20);

    // Remove loader after animation
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] bg-gray-950 flex flex-col justify-between p-8 md:p-12"
        >
          {/* Top text */}
          <div className="flex justify-between text-gray-400 font-medium uppercase tracking-widest text-xs md:text-sm">
            <span>Portfolio 2025</span>
            <span>Osama Adel</span>
          </div>

          {/* Center Name */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-8xl font-bold text-white tracking-tighter uppercase overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                className="block"
              >
                Osama Adel
              </motion.span>
            </h1>
          </div>

          {/* Bottom Counter */}
          <div className="flex justify-between items-end text-white">
            <span className="hidden md:block text-gray-500 w-1/3 text-xs uppercase tracking-wider">
              Loading Experience...
            </span>
            <span className="text-6xl md:text-9xl font-bold tracking-tighter tabular-nums leading-none">
              {counter}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
