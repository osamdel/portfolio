import React from 'react';
import { Code2, Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary-600 rounded-lg">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold uppercase tracking-wide">OSAMADEL</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Crafting exceptional digital experiences with code and passion.
            </p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-gray-400">
            {quickLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
             <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Github">
                <Github className="w-5 h-5" />
             </a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
             </a>
             <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
             </a>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Osama Adel. All rights reserved.
        </div>
      </div>
    </footer>
  );
};