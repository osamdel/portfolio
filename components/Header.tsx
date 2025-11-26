
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Sensitive scroll detection
      
      const sections = ['hero', 'work', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust detection zone for mobile vs desktop
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero', id: 'hero' }, 
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-6'
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 relative z-50",
        isScrolled 
          ? "bg-white/70 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-sm mx-3 sm:mx-8 lg:mx-auto py-2 pr-2 sm:pr-3" 
          : "bg-transparent w-full"
      )}>
        {/* Left: Logo (Takes up equal space to Right) */}
        <div className="flex-1 flex justify-start">
          <a href="#" onClick={scrollToTop} className="flex items-center gap-2 group relative z-50 pl-2">
            <div className={cn(
              "p-1.5 md:p-2 rounded-lg transition-all duration-300 group-hover:scale-105",
              "bg-gray-950 text-white"
            )}>
              <Code2 className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className={cn(
              "text-lg md:text-xl font-bold tracking-tight uppercase transition-colors duration-300",
              "text-gray-900"
            )}>
              OSAMA<span className="text-gray-400">DEL</span>
            </span>
          </a>
        </div>

        {/* Center: Desktop Nav (Centered in the layout) */}
        <nav className="hidden md:flex items-center justify-center shrink-0">
          <div className="flex items-center px-2 bg-white/50 backdrop-blur-sm rounded-full border border-white/20 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "relative px-4 lg:px-5 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  activeSection === link.id
                    ? "text-gray-950"
                    : "text-gray-500 hover:text-gray-900"
                )}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-0.5 mx-4 transition-colors duration-300",
                      "bg-gray-950"
                    )}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>
        </nav>

        {/* Right: CTA Button & Mobile Toggle (Takes up equal space to Left) */}
        <div className="flex-1 flex justify-end items-center gap-2">
          <a
            href="https://wa.me/905062790089"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden md:inline-flex px-5 lg:px-6 py-2.5 text-sm font-semibold rounded-full transition-all hover:scale-105 active:scale-95",
              "bg-gray-950 text-white hover:bg-gray-800"
            )}
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 z-50 transition-colors rounded-full hover:bg-gray-100",
              "text-gray-950"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay - Glass Style */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-0 bg-white/90 backdrop-blur-2xl shadow-2xl md:hidden pt-24 pb-8 px-4 rounded-b-3xl border-b border-gray-200/50 overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "block px-4 py-4 text-xl font-medium rounded-xl transition-all active:scale-98",
                    activeSection === link.id
                      ? "bg-gray-100/80 text-gray-950 shadow-sm"
                      : "text-gray-600 hover:bg-gray-50/50"
                  )}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6 mt-2 border-t border-gray-200/50"
              >
                 <a
                  href="https://wa.me/905062790089"
                  className="flex items-center justify-center w-full px-6 py-4 text-lg font-bold text-white bg-gray-950 rounded-2xl shadow-lg shadow-gray-200 active:scale-95 transition-transform"
                >
                  Let's Talk
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
