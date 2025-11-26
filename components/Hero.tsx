import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Terminal, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      transition: { type: "spring" as const, stiffness: 100, damping: 10 } 
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-gray-50/50">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-400/20 rounded-full mix-blend-multiply filter blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 z-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200/60 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-semibold text-gray-600">Available for freelance work</span>
          </motion.div>
          
          <div className="space-y-4">
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600 animate-gradient-x">Osama Adel</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-lg leading-relaxed font-light">
              Full Stack Engineer specializing in building exceptional, human-centric digital products with modern technologies.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, '#work')}
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gray-900 rounded-full hover:bg-primary-600 transition-all duration-300 shadow-xl shadow-gray-900/20 hover:shadow-primary-600/30 hover:-translate-y-1"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Proof / Tech Stack */}
          <motion.div variants={itemVariants} className="pt-8 flex items-center gap-6 text-gray-400">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
             <div className="text-sm font-medium">
                <span className="block text-gray-900 font-bold">50+ Projects</span>
                <span>Delivered successfully</span>
             </div>
          </motion.div>
        </motion.div>

        {/* Right Content - 3D Card Effect */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-purple-600 rounded-[2.5rem] rotate-3 opacity-20 blur-2xl" />
            
            {/* Main Image Card */}
            <motion.div 
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white bg-white"
            >
              {/* Profile Image - Using Unsplash Placeholder */}
              <img
                src="https://drive.google.com/file/d/1A-Tiozh-_F9g45dJKWa6CJ52vGhBipqp/view?usp=drive_link" 
                alt="Osama Adel"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Terminal className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                     <div className="text-xs text-gray-500 font-semibold">Clean Code</div>
                     <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                     </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 max-w-[200px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="font-bold text-gray-900">Experience</span>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 bg-gray-200 rounded-full w-full overflow-hidden">
                    <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: "90%" }}
                       transition={{ duration: 1.5, delay: 0.8 }}
                       className="h-full bg-gradient-to-r from-amber-400 to-orange-500" 
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-gray-500 font-medium">
                    <span>Design</span>
                    <span>90%</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
