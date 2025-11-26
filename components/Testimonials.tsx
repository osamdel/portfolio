
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { cn } from '../lib/utils';

const testimonials = [
  { 
    name: 'Sarah Johnson', 
    role: 'CEO at TechStart', 
    text: "The attention to detail and technical expertise brought our vision to life perfectly. Truly a pro level experience.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  { 
    name: 'Michael Chen', 
    role: 'Product Manager', 
    text: "Exceptional delivery speed without compromising on quality. The UI animations are buttery smooth.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  { 
    name: 'Emma Davis', 
    role: 'Founder', 
    text: "Working with this developer was a game-changer for our startup. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  { 
    name: 'James Wilson', 
    role: 'CTO', 
    text: "Clean code, great communication, and a stunning final product. What more could you ask for?",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  { 
    name: 'David Miller', 
    role: 'Creative Director', 
    text: "A rare combination of design sensibility and engineering prowess. The parallax effects are world-class.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  { 
    name: 'Sophie Taylor', 
    role: 'Marketing Head', 
    text: "Our conversion rates doubled after the redesign. The performance optimization is real.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
  },
];

const TestimonialCard: React.FC<{ t: typeof testimonials[0] }> = ({ t }) => (
  <div className="w-[85vw] md:w-[400px] flex-shrink-0 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-500 group">
    <div className="flex justify-between items-start mb-6">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
        ))}
      </div>
      <Quote className="w-8 h-8 text-white/10 group-hover:text-white/30 transition-colors" />
    </div>
    
    <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light italic">
      "{t.text}"
    </p>

    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
          <img src={t.avatar} alt={t.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
           <Quote className="w-2 h-2 text-white fill-white" />
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold text-base md:text-lg">{t.name}</h4>
        <p className="text-gray-500 text-sm">{t.role}</p>
      </div>
    </div>
  </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-950 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-indigo-900/20 rounded-full blur-[100px] md:blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium text-white">Trusted by Industry Leaders</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
          Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Success</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg px-4">
          Don't just take my word for it. Here's what clients and collaborators have to say about working together.
        </p>
      </div>
      
      {/* Row 1 - Left */}
      <div className="flex overflow-hidden group mb-8 relative z-10">
        <div className="animate-scroll flex gap-6 px-6 w-max group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 - Right */}
      <div className="flex overflow-hidden group relative z-10">
        <div className="animate-scroll flex gap-6 px-6 w-max group-hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
          {[...testimonials, ...testimonials].reverse().map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>
      
      {/* Gradients to hide edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-950 to-transparent z-20 pointer-events-none" />

    </section>
  );
};
