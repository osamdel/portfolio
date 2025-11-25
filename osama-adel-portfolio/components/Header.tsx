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
      setIsScrolled(window.scrollY > 20);
      
      // Update active section
      // Updated 'about' to 'hero' based on navigation change request
      const sections = ['hero', 'work', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero', id: 'hero' }, // Pointing About to Hero section as requested
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
        isScrolled 
          ? 'bg-white/70 backdrop-blur-xl border-gray-200/50 py-3' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" onClick={scrollToTop} className="flex items-center gap-2 group relative z-50">
          <div className="p-2.5 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl text-white shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform duration-300">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight uppercase">
            OSAMA<span className="text-primary-600">DEL</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <div className="flex items-center bg-white/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-gray-200/50 mr-4 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                  activeSection === link.id
                    ? "text-primary-700 bg-primary-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
                )}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full shadow-sm -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/905062790089"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-gray-900/20 hover:-translate-y-0.5"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors z-50 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-100"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-x-0 top-0 bg-white border-b border-gray-100 shadow-xl md:hidden pt-24 pb-6 px-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-xl transition-all",
                    activeSection === link.id
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100">
                 <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center w-full px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-xl shadow-lg shadow-primary-500/20"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};