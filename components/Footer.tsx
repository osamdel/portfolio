
import React from 'react';
import { ArrowUpRight, Code2, Mail, Linkedin, Instagram } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/osamdel/', icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/osamdel/', icon: Instagram },
  ];

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute bottom-[-20%] left-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-indigo-900/10 rounded-full blur-[100px] md:blur-[120px] mix-blend-screen" />
         <div className="absolute top-[-20%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-900/10 rounded-full blur-[100px] md:blur-[120px] mix-blend-screen" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32 relative z-10">
        
        {/* MASSIVE CTA SECTION */}
        <div className="relative mb-24 md:mb-32 flex flex-col items-center justify-center text-center">
           
           <motion.h2 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-[18vw] md:text-[15vw] leading-[0.8] font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-700 select-none mb-8 md:mb-12"
           >
             {t.footer.letsTalk}
           </motion.h2>

           <motion.div 
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             transition={{ type: "spring", stiffness: 200, damping: 20 }}
             className="relative z-20"
           >
             <MagneticButton strength={60}>
               <a 
                 href="mailto:info@osamadel.com" 
                 className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white text-gray-950 flex flex-col items-center justify-center gap-2 text-lg md:text-xl font-bold hover:scale-110 active:scale-95 transition-transform duration-500 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)]"
               >
                 <span>{t.footer.getInTouch}</span>
                 <Mail className="w-5 h-5 md:w-6 md:h-6" />
               </a>
             </MagneticButton>
           </motion.div>
        </div>

        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-24 border-t border-white/10 pt-12 md:pt-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between gap-8">
             <div>
               <a href="#" onClick={(e) => handleNavClick(e, '#hero')} className="inline-flex items-center gap-2 mb-6 group">
                  <div className="p-2 bg-white/10 rounded-lg text-white group-hover:rotate-12 transition-transform duration-300 border border-white/10">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-bold tracking-tight">OSAMA<span className="text-gray-500">DEL</span></span>
               </a>
               <p className="text-lg md:text-xl text-gray-400 max-w-sm leading-relaxed font-medium">
                 {t.footer.desc}
               </p>
             </div>
             <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                   <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                   </span>
                   <span className="text-sm font-bold text-gray-300">{t.footer.location}</span>
                </div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm hidden sm:flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                   <span className="text-sm font-bold text-gray-300">{t.footer.creativeMode}</span>
                </div>
             </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 md:mb-8">{t.footer.sitemap}</h4>
            <ul className="space-y-4">
              {[
                { name: t.nav.about, id: 'about' },
                { name: t.nav.work, id: 'work' },
                { name: t.nav.services, id: 'services' },
                { name: t.nav.contact, id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id === 'about' ? 'hero' : item.id}`}
                    onClick={(e) => handleNavClick(e, `#${item.id === 'about' ? 'hero' : item.id}`)} 
                    className="group flex items-center gap-2 text-lg font-medium text-gray-400 hover:text-white transition-colors cursor-pointer w-max"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-white transition-colors" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="md:col-span-3">
             <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 md:mb-8">{t.footer.socials}</h4>
             <div className="flex gap-4">
               {socialLinks.map((social) => (
                 <a 
                   key={social.name}
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-gray-950 hover:scale-110 transition-all duration-300 group"
                   aria-label={social.name}
                 >
                   <social.icon className="w-5 h-5" />
                 </a>
               ))}
             </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-center md:text-left gap-4">
           <p className="text-gray-500 font-medium text-sm">
             © {currentYear} {t.footer.rights}
           </p>
           <p className="text-gray-500 font-medium text-sm">
             {t.footer.designedWith} <span className="text-red-500">♥</span>
           </p>
        </div>

      </div>
    </footer>
  );
};
