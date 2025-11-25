import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  { name: 'Sarah Johnson', role: 'CEO at TechStart', text: "The attention to detail and technical expertise brought our vision to life perfectly. Truly a pro level experience." },
  { name: 'Michael Chen', role: 'Product Manager', text: "Exceptional delivery speed without compromising on quality. The UI animations are buttery smooth." },
  { name: 'Emma Davis', role: 'Founder', text: "Working with this developer was a game-changer for our startup. Highly recommended!" },
  { name: 'James Wilson', role: 'CTO', text: "Clean code, great communication, and a stunning final product. What more could you ask for?" },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Client Feedback</h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-scroll flex gap-6 px-6 w-max group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-[350px] flex-shrink-0 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Quote className="w-8 h-8 text-primary-200 mb-4" />
              <p className="text-gray-600 mb-6 text-lg font-light leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradients to hide edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
      </div>
    </section>
  );
};