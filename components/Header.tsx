
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon, Languages } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

export const Header: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Initialize theme based on localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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
    { name: t.nav.about, href: '#hero', id: 'hero' }, 
    { name: t.nav.work, href: '#work', id: 'work' },
    { name: t.nav.services, href: '#services', id: 'services' },
    { name: t.nav.contact, href: '#contact', id: 'contact' },
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
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-full border border-gray-200/50 dark:border-white/10 shadow-sm mx-3 sm:mx-8 lg:mx-auto py-2 pr-2 sm:pr-3 pl-2 sm:pl-3" 
          : "bg-transparent w-full"
      )}>
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start">
          <a href="#" onClick={scrollToTop} className="flex items-center gap-2 group relative z-50">
            <div className={cn(
              "p-1.5 md:p-2 rounded-lg transition-all duration-300 group-hover:scale-105",
              "bg-gray-950 text-white dark:bg-white dark:text-gray-950"
            )}>
              <Code2 className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className={cn(
              "text-lg md:text-xl font-bold tracking-tight uppercase transition-colors duration-300",
              "text-gray-900 dark:text-white"
            )}>
              OSAMA<span className="text-gray-400">DEL</span>
            </span>
          </a>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center shrink-0">
          <div className="flex items-center px-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/10 shadow-sm transition-colors duration-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "relative px-4 lg:px-5 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  activeSection === link.id
                    ? "text-gray-950 dark:text-white"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeTab"
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-0.5 mx-4 transition-colors duration-300",
                      "bg-gray-950 dark:bg-white"
                    )}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>
        </nav>

        {/* Right: CTA, Language, Theme, Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-2 md:gap-3">
          
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none flex items-center gap-1"
            aria-label="Toggle language"
          >
            <Languages className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs font-bold uppercase w-4">{language === 'en' ? 'AR' : 'EN'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>

          <a
            href="mailto:info@osamadel.com"
            className={cn(
              "hidden md:inline-flex px-5 lg:px-6 py-2.5 text-sm font-semibold rounded-full transition-all hover:scale-105 active:scale-95",
              "bg-gray-950 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            )}
          >
            {t.nav.letsTalk}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 z-50 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800",
              "text-gray-950 dark:text-white"
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
            className="absolute inset-x-0 top-0 bg-white/90 dark:bg-gray-950/90 backdrop-blur-2xl shadow-2xl md:hidden pt-24 pb-8 px-4 rounded-b-3xl border-b border-gray-200/50 dark:border-white/10 overflow-hidden"
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
                      ? "bg-gray-100/80 dark:bg-white/10 text-gray-950 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50/50 dark:hover:bg-white/5"
                  )}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6 mt-2 border-t border-gray-200/50 dark:border-white/10"
              >
                 <a
                  href="mailto:info@osamadel.com"
                  className="flex items-center justify-center w-full px-6 py-4 text-lg font-bold text-white dark:text-gray-950 bg-gray-950 dark:bg-white rounded-2xl shadow-lg shadow-gray-200 dark:shadow-none active:scale-95 transition-transform"
                >
                  {t.nav.letsTalk}
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
