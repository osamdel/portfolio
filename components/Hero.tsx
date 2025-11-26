
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Zap, ArrowLeft } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { cn } from '../lib/utils';
import { useLanguage } from '../lib/LanguageContext';
import { ImageWithFallback } from './ui/ImageWithFallback';

// --- Floating Badge Component ---
const FloatingBadge = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={cn("absolute z-30 hidden md:flex items-center justify-center", className)}
    >
      <motion.div
        animate={{ y: [-10, 10, -10], x: [-5, 5, -5], rotate: [-2, 2, -2] }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut", 
          delay: delay * 2 
        }}
        className="backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-white/10 shadow-2xl rounded-2xl p-4 flex items-center gap-3"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  const { t, dir } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-950 pt-28 pb-20 transition-colors duration-300">
      
      {/* --- Dynamic Background (Static Position) --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Modern Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Central Spotlight / Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[4s]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* --- Main Visual Composition --- */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* IMAGE CONTAINER */}
          {/* Adjusted to be a tall portrait card based on user feedback */}
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center mb-10 sm:mb-12">
             
             {/* 1. Floating Elements (The "Pro" Touch) */}
             
             {/* Left: Code / Tech */}
             <FloatingBadge className="-left-[10%] top-[20%]" delay={0.2}>
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                   <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{t.hero.badges.code}</span>
                   <span className="text-sm font-bold text-gray-900 dark:text-white">{t.hero.badges.architecture}</span>
                </div>
             </FloatingBadge>

             {/* Right: Design / Visuals */}
             <FloatingBadge className="-right-[10%] top-[30%]" delay={0.4}>
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                   <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">{t.hero.badges.design}</span>
                   <span className="text-sm font-bold text-gray-900 dark:text-white">{t.hero.badges.visuals}</span>
                </div>
             </FloatingBadge>

             {/* Bottom Right: Performance */}
             <FloatingBadge className="-right-[5%] bottom-[15%]" delay={0.6}>
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                   <span className="text-sm font-bold text-gray-900 dark:text-white">{t.hero.badges.score}</span>
                </div>
             </FloatingBadge>

             {/* 2. Main Photo - Tall Portrait Frame */}
             <motion.div
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
               className="relative z-20 h-full w-full rounded-[2.5rem] overflow-hidden border border-white/20 bg-gray-100/50 dark:bg-white/5 backdrop-blur-sm shadow-2xl"
             >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent z-10 pointer-events-none mix-blend-overlay" />
                <ImageWithFallback 
                   src="/assets/main_photo.png"
                   alt="Osama Adel"
                   className="h-full w-full object-cover"
                />
             </motion.div>
          </div>

          {/* TEXT CONTENT */}
          <div className="relative z-30 flex flex-col items-center text-center w-full px-2">
            
            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-4"
            >
               <h2 className="text-sm md:text-base font-bold tracking-[0.2em] text-indigo-600 dark:text-indigo-400 uppercase">
                 {t.hero.hello}
               </h2>
            </motion.div>
            
            {/* Pro Typography Headline */}
            <h1 className="flex flex-wrap justify-center items-baseline gap-x-2 sm:gap-x-4 md:gap-x-6 w-full text-[9vw] sm:text-[7vw] lg:text-[5.5vw] leading-[1.1] uppercase select-none tracking-tighter rtl:tracking-normal">
               {/* DIGITAL - Light/Thin */}
               <div className="overflow-hidden">
                 <motion.span
                   initial={{ y: "100%" }}
                   animate={{ y: 0 }}
                   transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
                   className="block font-light text-gray-400 dark:text-gray-500"
                 >
                   {t.hero.digital}
                 </motion.span>
               </div>

               {/* REALITY - Italic Gradient */}
               <div className="overflow-hidden pb-2 sm:pb-4">
                 <motion.span
                   initial={{ y: "100%" }}
                   animate={{ y: 0 }}
                   transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.65, 0.3, 0.9] }}
                   className="block font-black italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 animate-shimmer bg-[length:200%_auto]"
                 >
                   {t.hero.reality}
                 </motion.span>
               </div>

               {/* BUILDER - Bold */}
               <div className="overflow-hidden">
                 <motion.span
                   initial={{ y: "100%" }}
                   animate={{ y: 0 }}
                   transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
                   className="block font-bold text-gray-900 dark:text-white"
                 >
                   {t.hero.builder}
                 </motion.span>
               </div>
            </h1>

            {/* Elegant Subtitle with Vertical Guide */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.8, duration: 1 }}
               className="mt-6 flex flex-col items-center"
            >
               {/* Decorative Line */}
               <div className="w-px h-16 bg-gradient-to-b from-indigo-500/50 to-transparent mb-6"></div>
               
               <p className="text-lg sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-body font-light leading-relaxed px-4 tracking-wide">
                 {t.hero.subtitle}
               </p>
            </motion.div>

            {/* Buttons */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.2, duration: 0.8 }}
               className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-12 w-full justify-center px-4"
            >
              <MagneticButton strength={50} className="w-full sm:w-auto">
                <a 
                  href="#work"
                  onClick={(e) => handleScrollTo(e, '#work')}
                  className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-gray-950 dark:bg-white text-white dark:text-gray-950 rounded-full font-bold text-lg overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-300 min-w-[180px]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t.hero.viewWorks} 
                    {dir === 'ltr' ? (
                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    ) : (
                       <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    )}
                  </span>
                </a>
              </MagneticButton>

              <MagneticButton strength={30} className="w-full sm:w-auto">
                <a 
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white dark:bg-transparent text-gray-950 dark:text-white border border-gray-200 dark:border-white/20 rounded-full font-bold text-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors min-w-[180px]"
                >
                  {t.hero.contactMe}
                </a>
              </MagneticButton>
            </motion.div>

          </div>
        </div>
      </div>
      
    </section>
  );
};
