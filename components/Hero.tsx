
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

// Split text into characters for finer animation control
const Letter = ({ children, delay }: { children: string; delay: number }) => (
  <motion.span
    initial={{ y: "100%" }}
    animate={{ y: 0 }}
    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay }}
    className="inline-block"
  >
    {children === " " ? "\u00A0" : children}
  </motion.span>
);

const Word = ({ children, delayOffset }: { children: string; delayOffset: number }) => {
  return (
    <span className="inline-block overflow-hidden align-top -mr-[0.05em]">
      {children.split("").map((char, i) => (
        <Letter key={i} delay={delayOffset + i * 0.03}>
          {char}
        </Letter>
      ))}
    </span>
  );
};

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 pt-24 pb-12 sm:pt-20 sm:pb-0">
      
      {/* Dynamic Background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px] sm:bg-[size:24px_24px]"></div>
        
        {/* Animated Orbs - Responsive Sizing */}
        <div className="absolute top-[-10%] left-[-10%] w-[80vw] sm:w-[50vw] h-[80vw] sm:h-[50vw] bg-purple-300/30 rounded-full mix-blend-multiply filter blur-[60px] sm:blur-[100px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[80vw] sm:w-[50vw] h-[80vw] sm:h-[50vw] bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-[60px] sm:blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[90vw] sm:w-[60vw] h-[90vw] sm:h-[60vw] bg-blue-300/30 rounded-full mix-blend-multiply filter blur-[60px] sm:blur-[100px] animate-blob animation-delay-4000" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>
      </motion.div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center min-h-[80vh]">
        <motion.div style={{ y: textY }} className="flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="mb-6 sm:mb-8"
          >
             <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/50 border border-white/60 shadow-lg backdrop-blur-md transition-transform hover:scale-105 cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-gray-900 tracking-widest uppercase">Available for new projects</span>
             </div>
          </motion.div>

          {/* Main Title - Character Split Animation */}
          <h1 className="text-[14vw] md:text-[11vw] leading-[0.85] md:leading-[0.8] font-extrabold tracking-tighter text-gray-950 uppercase flex flex-col items-center mb-6 sm:mb-8 select-none w-full">
             <div className="flex gap-[1vw] relative z-10">
                <Word delayOffset={2.4}>DIGITAL</Word>
             </div>
             <div className="flex gap-[1vw] text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-500 relative z-0 -mt-[1vw] md:-mt-[2vw]">
                <Word delayOffset={2.6}>REALITY</Word>
             </div>
             <div className="flex gap-[1vw] relative z-10 -mt-[1vw] md:-mt-[2vw]">
                <Word delayOffset={2.8}>BUILDER</Word>
             </div>
          </h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-xs sm:max-w-xl mx-auto mb-10 sm:mb-12 font-medium leading-relaxed"
          >
            I am <span className="text-gray-950 font-bold">Osama Adel</span>, crafting scalable engineering solutions with the aesthetics of high-end design.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 3.4, duration: 0.8 }}
             className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center w-full relative z-20 px-4"
          >
            <MagneticButton strength={50} className="w-full sm:w-auto">
              <a 
                href="#work"
                onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gray-950 text-white rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gray-950/20 transition-all duration-300 min-w-[180px]"
              >
                <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Works <ArrowRight className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-gray-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
            </MagneticButton>

            <MagneticButton strength={30} className="w-full sm:w-auto">
              <a 
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white text-gray-950 border border-gray-200 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md min-w-[180px]"
              >
                Contact Me
              </a>
            </MagneticButton>
          </motion.div>

        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
      >
         <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
         <div className="w-px h-8 sm:h-12 bg-gray-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-950 animate-[drop_2s_infinite]" />
         </div>
      </motion.div>

    </section>
  );
};
