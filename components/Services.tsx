
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Database, PenTool, Search, ArrowUpRight, Cpu, Layers, Code, Zap, Globe, Layout, Command } from 'lucide-react';
import { cn } from '../lib/utils';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50 text-gray-900 scroll-mt-0 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-indigo-100/50 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply" />
         <div className="absolute bottom-0 left-0 w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-blue-100/50 rounded-full blur-[80px] md:blur-[120px] mix-blend-multiply" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col xl:flex-row xl:items-end justify-between gap-12">
           <div className="max-w-4xl relative">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-4 mb-8"
             >
                <div className="h-px w-8 bg-indigo-600" />
                <div className="flex items-center gap-2 px-3 py-1 bg-indigo-50 rounded-full border border-indigo-100">
                  <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-700">Engineering Arsenal</span>
                </div>
             </motion.div>

             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-gray-900 leading-[0.9]"
             >
               Digital <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 animate-shimmer bg-[length:200%_100%]">Capabilities</span>
             </motion.h2>
           </div>
           
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex items-end gap-8 md:gap-12 pb-4 flex-wrap"
           >
              <div className="group cursor-default">
                 <p className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter group-hover:text-indigo-600 transition-colors duration-300">05</p>
                 <div className="h-1 w-full bg-gray-200 mt-2 mb-2 relative overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-indigo-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                 </div>
                 <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-indigo-500 transition-colors">Core Disciplines</p>
              </div>
              
              <div className="group cursor-default">
                 <p className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter group-hover:text-indigo-600 transition-colors duration-300">20+</p>
                 <div className="h-1 w-full bg-gray-200 mt-2 mb-2 relative overflow-hidden rounded-full">
                    <div className="absolute inset-0 bg-indigo-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                 </div>
                 <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-indigo-500 transition-colors">Technologies</p>
              </div>
           </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[350px]">
          
          {/* Card 1: Frontend (Large) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 relative group min-h-[300px]">
             <ServiceCard 
               title="Frontend Architecture" 
               desc="Building performant, accessible, and scalable UI systems using modern React ecosystems."
               icon={Layout}
               color="indigo"
               tech={["React", "Next.js", "Tailwind", "Motion"]}
               graphic={<FrontendGraphic />}
             />
          </motion.div>

          {/* Card 2: Mobile (Tall) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="md:col-span-1 md:row-span-2 relative group min-h-[300px]">
             <ServiceCard 
               title="Mobile Engineering" 
               desc="Native-grade iOS and Android applications with fluid animations and offline-first architecture."
               icon={Smartphone}
               color="purple"
               tech={["React Native", "Expo", "Reanimated", "Swift"]}
               graphic={<MobileGraphic />}
               variant="tall"
             />
          </motion.div>

          {/* Card 3: Backend (Standard) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="md:col-span-1 relative group min-h-[300px]">
             <ServiceCard 
               title="System Core" 
               desc="Robust server-side logic and cloud infrastructure."
               icon={Database}
               color="emerald"
               tech={["Node.js", "Postgres", "Redis"]}
               graphic={<BackendGraphic />}
             />
          </motion.div>

          {/* Card 4: Design (Standard) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="md:col-span-1 relative group min-h-[300px]">
             <ServiceCard 
               title="Product Design" 
               desc="User-centric interfaces that convert."
               icon={PenTool}
               color="pink"
               tech={["Figma", "UI/UX", "Prototyping"]}
               graphic={<DesignGraphic />}
             />
          </motion.div>

          {/* Card 5: Growth (Wide) */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="md:col-span-3 relative group min-h-[350px]">
             <div className="w-full h-full bg-gray-900 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
                {/* Dark Card Content */}
                <div className="relative z-10 max-w-xl w-full">
                   <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-white/10 rounded-lg border border-white/10">
                         <Search className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Growth & Strategy</span>
                   </div>
                   <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical SEO & Performance</h3>
                   <p className="text-gray-400 text-lg mb-8">Optimizing web vitals, accessibility scores, and search ranking factors to ensure maximum reach.</p>
                   <div className="flex flex-wrap gap-2">
                      {["Analytics", "Vercel Analytics", "Lighthouse", "SEO"].map(t => (
                        <span key={t} className="px-3 py-1 rounded bg-white/10 border border-white/10 text-xs font-mono text-white/80">{t}</span>
                      ))}
                   </div>
                </div>

                {/* Abstract Graph Graphic - Scales nicely */}
                <div className="relative z-10 w-full md:w-1/3 h-32 md:h-full mt-8 md:mt-0 flex items-center justify-center">
                   <div className="flex items-end gap-2 h-32 w-full max-w-[300px]">
                      {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: i * 0.1, duration: 1, ease: "backOut" }}
                          className="flex-1 bg-gradient-to-t from-indigo-600 to-blue-500 rounded-t-sm opacity-80"
                        />
                      ))}
                   </div>
                </div>

                {/* Noise */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// --- Sub-components ---

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: any;
  color: 'indigo' | 'purple' | 'emerald' | 'pink';
  tech: string[];
  graphic: React.ReactNode;
  variant?: 'standard' | 'tall';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, desc, icon: Icon, color, tech, graphic, variant = 'standard' }) => {
  const colors = {
    indigo: 'text-indigo-600 bg-indigo-50 border-indigo-100 group-hover:border-indigo-200',
    purple: 'text-purple-600 bg-purple-50 border-purple-100 group-hover:border-purple-200',
    emerald: 'text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:border-emerald-200',
    pink: 'text-pink-600 bg-pink-50 border-pink-100 group-hover:border-pink-200',
  };

  const shadowColors = {
    indigo: 'group-hover:shadow-indigo-500/10',
    purple: 'group-hover:shadow-purple-500/10',
    emerald: 'group-hover:shadow-emerald-500/10',
    pink: 'group-hover:shadow-pink-500/10',
  };

  return (
    <div className={cn(
      "w-full h-full bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden relative",
      shadowColors[color]
    )}>
       
       <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          {graphic}
       </div>

       <div className="relative z-10">
          <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300", colors[color])}>
             <Icon className="w-7 h-7" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 tracking-tight">{title}</h3>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">{desc}</p>
       </div>

       <div className="relative z-10 mt-8">
          <div className="flex flex-wrap gap-2">
             {tech.map(t => (
               <span key={t} className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-xs font-bold text-gray-600 uppercase tracking-wide group-hover:bg-white group-hover:shadow-sm transition-all">
                 {t}
               </span>
             ))}
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm font-bold text-gray-900 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
             <span>Explore Capability</span>
             <ArrowUpRight className="w-4 h-4" />
          </div>
       </div>
    </div>
  );
};

// ... [FrontendGraphic, MobileGraphic, BackendGraphic, DesignGraphic] stay same but ensure they use percentage widths if they don't already ...
const FrontendGraphic = () => (
  <div className="absolute top-1/2 right-[-20%] w-[80%] aspect-square bg-gradient-to-br from-indigo-50 to-white rounded-full border border-indigo-100/50 p-6 shadow-sm rotate-12 group-hover:rotate-0 transition-transform duration-700">
     <div className="w-full h-full bg-white rounded-xl shadow-inner p-4 grid gap-2">
        <div className="h-4 w-1/2 bg-indigo-100 rounded" />
        <div className="h-20 w-full bg-gray-50 rounded" />
        <div className="grid grid-cols-2 gap-2">
           <div className="h-10 bg-gray-50 rounded" />
           <div className="h-10 bg-gray-50 rounded" />
        </div>
     </div>
  </div>
);

const MobileGraphic = () => (
  <div className="absolute bottom-[-10%] right-[-20%] w-[80%] h-[80%] bg-gray-50 rounded-[3rem] border-8 border-white shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-700 flex flex-col overflow-hidden">
     <div className="w-full h-full bg-purple-50/50 p-4 space-y-3">
        <div className="w-full h-32 bg-white rounded-2xl shadow-sm" />
        <div className="w-3/4 h-4 bg-purple-200/50 rounded-full" />
        <div className="w-1/2 h-4 bg-purple-200/30 rounded-full" />
     </div>
  </div>
);

const BackendGraphic = () => (
  <div className="absolute top-10 right-10 flex gap-4 opacity-50">
     <div className="flex flex-col gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <div className="w-px h-10 bg-emerald-200 ml-1" />
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
     </div>
     <div className="flex flex-col gap-2 pt-6">
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <div className="w-px h-10 bg-emerald-200 ml-1" />
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse delay-75" />
     </div>
  </div>
);

const DesignGraphic = () => (
  <div className="absolute -bottom-10 -right-10 w-40 h-40">
     <div className="absolute inset-0 bg-pink-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
     <div className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-tr from-pink-400 to-orange-300 rounded-full" />
  </div>
);
