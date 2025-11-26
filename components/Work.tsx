
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';
import { ImageWithFallback } from './ui/ImageWithFallback';

// --- Data ---
const projects = [
  {
    id: 1,
    title: "Art Bag",
    category: "Brand Identity",
    year: "2024",
    description: "Reimagining luxury retail with sustainable aesthetics and digital-first branding.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    link: "https://www.behance.net/art-bag",
    color: "#d4b996" // Gold/Beige
  },
  {
    id: 2,
    title: "Neon Nexus",
    category: "Product Design",
    year: "2024",
    description: "Next-gen crypto dashboard featuring real-time WebGL data visualization.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    link: "#",
    color: "#6366f1" // Indigo
  },
  {
    id: 3,
    title: "Travel AI",
    category: "Mobile Engineering",
    year: "2023",
    description: "AI-driven itinerary generator with sub-100ms latency and offline maps.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    link: "#",
    color: "#10b981" // Emerald
  },
  {
    id: 4,
    title: "Creative Studio",
    category: "Frontend Dev",
    year: "2022",
    description: "Physics-based 3D portfolio experience winning Site of the Month.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    link: "#",
    color: "#f472b6" // Pink
  },
  {
    id: 5,
    title: "FinTech Pro",
    category: "System Arch.",
    year: "2024",
    description: "Enterprise SaaS serving 500+ global businesses with 99.99% uptime.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    link: "#",
    color: "#3b82f6" // Blue
  },
];

export const Work: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section id="work" ref={container} className="bg-gray-950 relative scroll-mt-0">
      
      {/* Introduction */}
      <div className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto text-center sticky top-0 z-0 opacity-100 transition-opacity duration-500">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4 md:mb-6 backdrop-blur-md"
         >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Selected Works</span>
         </motion.div>
         <motion.h2 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="text-4xl md:text-8xl font-bold text-white tracking-tighter mb-4 md:mb-6"
         >
           Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Masterpieces</span>
         </motion.h2>
         <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.2 }}
           className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed px-4"
         >
           A curated selection of projects that push the boundaries of design and technology.
         </motion.p>
      </div>

      {/* Cards Container */}
      <div className="pb-20 md:pb-32">
        {projects.map((project, i) => {
          // Calculate scale range: Each card scales down as the next one comes up
          const targetScale = 1 - ( (projects.length - i) * 0.05 ); 
          const isLast = i === projects.length - 1;

          return (
            <Card 
              key={project.id} 
              i={i} 
              project={project} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale}
              isLast={isLast}
            />
          );
        })}
      </div>
    </section>
  );
};

interface CardProps {
  i: number;
  project: typeof projects[0];
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  isLast: boolean;
}

const Card: React.FC<CardProps> = ({ i, project, progress, range, targetScale, isLast }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, isLast ? 1 : targetScale]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]); // Zoom out as it enters
  const filter = useTransform(progress, range, ["brightness(100%)", isLast ? "brightness(100%)" : "brightness(70%)"]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4">
      <motion.div 
        style={{ 
          scale, 
          filter,
          // Mobile: use less offset, Desktop: full offset
          top: `calc(-5vh + ${i * 20}px)`
        }} 
        className="relative w-full max-w-[1200px] h-[65vh] md:h-[75vh] rounded-[1.5rem] md:rounded-[3rem] bg-gray-900 border border-white/10 overflow-hidden origin-top shadow-2xl group flex flex-col"
      >
         
         {/* Background Image with Parallax */}
         <div className="absolute inset-0 w-full h-full overflow-hidden">
             <motion.div style={{ scale: imageScale }} className="w-full h-full">
                <ImageWithFallback 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
             </motion.div>
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent" />
         </div>

         {/* Content Wrapper */}
         <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between z-20">
            
            {/* Top Bar */}
            <div className="flex justify-between items-start">
               <div 
                 className="flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-md border border-white/10"
                 style={{ backgroundColor: `${project.color}20` }}
               >
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse" style={{ backgroundColor: project.color }} />
                  <span className="text-[10px] md:text-sm font-bold tracking-widest uppercase text-white">{project.category}</span>
               </div>
               
               <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group/btn">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:rotate-45 transition-transform" />
               </a>
            </div>

            {/* Bottom Content (Glassmorphic HUD) */}
            <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-end">
               
               {/* Text Info */}
               <div className="md:col-span-8">
                  <h3 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white tracking-tighter mb-2 md:mb-4 leading-none">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-xl leading-relaxed backdrop-blur-sm line-clamp-3 md:line-clamp-none">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Pills - Hidden on very small screens if needed, or wrap */}
                  <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
                     {["React", "TypeScript", "GSAP"].map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-mono text-gray-400 border border-white/10 rounded bg-black/20 backdrop-blur-md">
                          {tag}
                        </span>
                     ))}
                  </div>
               </div>

               {/* Action Area */}
               <div className="md:col-span-4 flex justify-end">
                  <a 
                    href={project.link} 
                    className="flex items-center gap-2 md:gap-3 group/cta px-4 py-2 md:p-0 bg-white/10 md:bg-transparent rounded-full md:rounded-none backdrop-blur-md md:backdrop-blur-none border md:border-none border-white/10"
                  >
                     <span className="text-sm md:text-lg font-bold text-white group-hover/cta:translate-x-2 transition-transform">View Case Study</span>
                     <div className="hidden md:flex w-16 h-16 rounded-full bg-white text-black items-center justify-center transition-transform duration-500 group-hover/cta:scale-110">
                        <ArrowUpRight className="w-6 h-6" />
                     </div>
                     <ArrowUpRight className="md:hidden w-4 h-4 text-white" />
                  </a>
               </div>

            </div>
         </div>

         {/* Ambient Glow */}
         <div 
           className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] rounded-full blur-[100px] md:blur-[150px] opacity-20 pointer-events-none mix-blend-screen"
           style={{ backgroundColor: project.color }}
         />
      </motion.div>
    </div>
  )
}
