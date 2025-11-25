import React, { useRef, useState } from 'react';
import { Smartphone, Monitor, Database, Search, PenTool, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { title: 'Web Development', desc: 'Custom websites built with modern frameworks like React & Next.js.', icon: Monitor },
  { title: 'Mobile Apps', desc: 'Cross-platform mobile applications using React Native.', icon: Smartphone },
  { title: 'UI/UX Design', desc: 'User-centered design that drives engagement and conversion.', icon: PenTool },
  { title: 'Backend API', desc: 'Scalable and secure RESTful & GraphQL APIs.', icon: Database },
  { title: 'Cloud Solutions', desc: 'AWS & Firebase integration for reliable hosting and data.', icon: Cloud },
  { title: 'SEO Optimization', desc: 'Improving visibility to reach your target audience.', icon: Search },
];

const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-gray-200 bg-white overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.1), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">My Services</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Comprehensive digital solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <SpotlightCard key={i} className="group">
              <div className="p-8 h-full flex flex-col">
                <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-900 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-primary-500/30">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};