
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './ui/ImageWithFallback';
import { cn } from '../lib/utils';

// --- Data ---
const projects = [
  {
    id: 1,
    title: "Art Bag",
    category: "Brand Identity",
    year: "2024",
    description: "Reimagining luxury retail with sustainable aesthetics and digital-first branding strategy.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    // Please replace the ID '183626235' with your specific project ID from Behance
    link: "https://www.behance.net/art-bag",
    tags: ["Branding", "UI/UX"],
  },
  {
    id: 2,
    title: "Neon Nexus",
    category: "Product Design",
    year: "2024",
    description: "Next-gen crypto dashboard featuring real-time WebGL data visualization.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "#",
    tags: ["React", "WebGL"],
  },
  {
    id: 3,
    title: "Travel AI",
    category: "Mobile Engineering",
    year: "2023",
    description: "AI-driven itinerary generator with sub-100ms latency and offline maps.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "#",
    tags: ["React Native", "AI"],
  },
  {
    id: 4,
    title: "Creative Studio",
    category: "Frontend Dev",
    year: "2022",
    description: "Physics-based 3D portfolio experience winning Site of the Month.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "#",
    tags: ["Three.js", "GSAP"],
  },
  {
    id: 5,
    title: "FinTech Pro",
    category: "System Arch.",
    year: "2024",
    description: "Enterprise SaaS serving 500+ global businesses with 99.99% uptime.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "#",
    tags: ["Next.js", "AWS"],
  },
];

export const Work: React.FC = () => {
  return (
    <section id="work" className="bg-white dark:bg-gray-950 py-24 relative scroll-mt-0 transition-colors duration-300">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header - Minimal & Pro */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6 border-b border-gray-100 dark:border-gray-800 pb-8">
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                <span className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2 block">Selected Works</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Featured Projects</h2>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, x: 10 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="hidden md:block"
             >
                <p className="text-gray-500 dark:text-gray-400 text-sm max-w-xs text-right">
                   A selection of digital products crafted with precision, performance, and passion.
                </p>
             </motion.div>
          </div>

          {/* Grid Layout - Lighter & Cleaner */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16">
             {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
             ))}
          </div>
          
          <div className="mt-16 text-center md:hidden">
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-indigo-600 transition-colors">
                View Full Archive <ArrowUpRight className="w-4 h-4" />
              </a>
          </div>
       </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: typeof projects[0], index: number }> = ({ project, index }) => {
   // Helper to check if link is external (starts with http)
   const isExternal = project.link.startsWith('http');
   const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

   return (
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-50px" }}
         transition={{ duration: 0.5, delay: index % 2 * 0.1 }}
         className="group flex flex-col gap-5"
      >
         {/* Image Container */}
         <a 
           href={project.link} 
           {...linkProps}
           className="block w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 aspect-[16/10] relative shadow-sm hover:shadow-xl transition-all duration-500 ring-1 ring-gray-900/5 dark:ring-white/10"
         >
            <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors z-10 duration-500" />
            <ImageWithFallback 
               src={project.image}
               alt={project.title}
               loading="lazy"
               className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Hover Floating Action */}
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-5 h-5 text-gray-900 dark:text-white" />
                </div>
            </div>
         </a>
         
         {/* Content */}
         <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
               <div>
                   <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1 block">
                      {project.category}
                   </span>
                   <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <a href={project.link} {...linkProps}>{project.title}</a>
                   </h3>
               </div>
               <span className="text-xs font-bold font-mono text-gray-400 dark:text-gray-500 mt-1">
                  {project.year}
               </span>
            </div>
            
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base line-clamp-2">
               {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-1">
               {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
                     {tag}
                  </span>
               ))}
            </div>
         </div>
      </motion.div>
   )
}
