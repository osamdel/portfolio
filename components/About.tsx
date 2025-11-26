
import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView, animate, useMotionTemplate } from 'framer-motion';
import { ArrowUpRight, Check, Cpu, Server, Globe, Activity, Wifi, Lock, Unlock, Layers, GitBranch, Fingerprint, Scan, Database, Smartphone, Terminal } from 'lucide-react';
import { cn } from '../lib/utils';
import { toast } from 'sonner';
import { useLanguage } from '../lib/LanguageContext';

// --- Components ---

interface TiltCardProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const TiltCard = ({ children, className, onClick }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHoverEnabled, setIsHoverEnabled] = useState(false);

  useEffect(() => {
    setIsHoverEnabled(window.matchMedia("(hover: hover)").matches);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useTransform(mouseXSpring, [-0.5, 0.5], [0, 1]);
  
  const backgroundGradient = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 50%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !isHoverEnabled) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={isHoverEnabled ? { rotateY, rotateX, transformStyle: "preserve-3d" } : undefined}
      whileHover={isHoverEnabled ? { scale: 1.02 } : undefined}
      className={cn(
        "relative group h-full w-full rounded-[2rem] bg-gray-900 border border-white/10 shadow-2xl transition-all duration-300 hover:border-indigo-500/30 cursor-default overflow-hidden will-change-transform",
        onClick && "cursor-pointer active:scale-98",
        className
      )}
    >
      <div style={isHoverEnabled ? { transform: "translateZ(30px)" } : undefined} className="relative z-10 h-full pointer-events-none flex flex-col">
        {children}
      </div>
      
      {/* Digital Noise Glare - Only render on hover enabled devices */}
      {isHoverEnabled && (
        <motion.div 
          style={{ 
            background: backgroundGradient,
            opacity: glareOpacity
          }}
          className="absolute inset-0 rounded-[2rem] z-20 pointer-events-none mix-blend-overlay"
        >
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </motion.div>
      )}
    </motion.div>
  );
};

// 1. Profile / Identity Card
const ProfileCard = () => {
  const { t } = useLanguage();
  return (
    <div className="h-full min-h-[300px] bg-gray-950 relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 group">
      {/* Optimized Background Mesh - CSS Only Animation */}
      <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
         <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(99,102,241,0.1)_360deg)] animate-[spin_10s_linear_infinite] will-change-transform" />
      </div>

      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,#ffffff_1px,#ffffff_2px)] bg-[size:100%_4px] opacity-20" />
        <div className="w-full h-1 bg-indigo-400/50 shadow-[0_0_15px_rgba(129,140,248,0.5)] absolute top-0 animate-[scan_3s_linear_infinite]" />
      </div>

      <div className="relative z-10 flex justify-between items-start mb-6">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
           <div className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
           </div>
           <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">{t.about.neuralLink}</span>
        </div>
        <Fingerprint className="w-8 h-8 text-white/10 group-hover:text-white/20 transition-colors" />
      </div>

      <div className="relative z-10 my-auto group/text py-4">
         <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[0.9] mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500 select-none relative break-words">
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-[length:200%_auto] bg-clip-text text-transparent opacity-0 group-hover/text:opacity-100 animate-shimmer transition-opacity duration-500">
              OSAMA<br/>ADEL
            </span>
            <span className="group-hover/text:opacity-0 transition-opacity duration-500">
               OSAMA<br/>ADEL
            </span>
         </h3>
         
         <div className="h-8 relative overflow-hidden flex items-center gap-3">
            <Scan className="w-4 h-4 text-indigo-400 mr-2 rtl:ml-2 rtl:mr-0 animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm font-mono text-indigo-300 tracking-wider uppercase truncate">
              {t.about.role}
            </span>
         </div>
      </div>

      <div className="relative z-10 w-full mt-auto">
         <div className="w-full p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between gap-4 group/stats hover:bg-white/10 transition-colors duration-300">
            <div className="flex flex-col gap-1 w-1/3">
               <div className="flex items-center gap-1.5 text-gray-400">
                  <GitBranch className="w-3 h-3 flex-shrink-0" />
                  <span className="text-[9px] font-bold uppercase tracking-widest truncate">{t.about.commits}</span>
               </div>
               <span className="text-lg font-mono font-bold text-white leading-none">4.2k</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex flex-col gap-1 flex-1">
               <div className="flex justify-between items-center text-gray-400">
                  <div className="flex items-center gap-1.5">
                     <Layers className="w-3 h-3 flex-shrink-0" />
                     <span className="text-[9px] font-bold uppercase tracking-widest truncate">{t.about.capacity}</span>
                  </div>
                  <span className="text-[9px] font-mono text-indigo-300">98%</span>
               </div>
               <div className="flex gap-0.5 h-1.5 w-full items-end">
                  {[...Array(10)].map((_, i) => ( // Reduced bars for performance
                     <div 
                       key={i} 
                       className={`flex-1 rounded-sm ${i > 7 ? 'bg-gray-700' : 'bg-indigo-500'} transition-all duration-300 group-hover/stats:bg-indigo-400`}
                       style={{ height: `${Math.random() * 60 + 40}%` }}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

const SchematicModule = ({ title, icon: Icon, color, glow, bg, skills }: any) => {
  return (
    <div className={`relative w-full p-3 rounded-xl border ${color} ${bg} ${glow} backdrop-blur-sm group/module transition-all duration-300 hover:scale-[1.02] hover:bg-opacity-50`}>
       <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 flex-shrink-0">
                <Icon className="w-4 h-4 text-white" />
             </div>
             <span className="text-sm font-bold text-white tracking-wide truncate">{title}</span>
          </div>
          <div className="flex gap-1 opacity-50 group-hover/module:opacity-100 transition-opacity">
             <div className="w-1 h-1 rounded-full bg-white" />
             <div className="w-1 h-1 rounded-full bg-white" />
          </div>
       </div>
       <div className="h-0 overflow-hidden group-hover/module:h-auto group-hover/module:mt-3 transition-all duration-300">
          <div className="flex flex-wrap gap-2 pt-1">
             {skills.map((skill: string) => (
                <span key={skill} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/90 border border-white/5">
                   {skill}
                </span>
             ))}
          </div>
       </div>
    </div>
  )
}

const TechScannerCard = () => {
  const { t } = useLanguage();
  return (
    <div className="h-full min-h-[400px] bg-gray-950 relative overflow-hidden rounded-[2rem] flex flex-col pointer-events-auto group">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
      
      <div className="relative z-10 px-6 pt-6 flex justify-between items-center">
         <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">{t.about.systemSchematic}</span>
         </div>
         <span className="text-[10px] font-mono text-gray-500">v4.0.2</span>
      </div>

      <div className="relative flex-1 flex flex-col justify-center items-center p-6 gap-6">
         <SchematicModule 
           title={t.about.clientSide} 
           icon={Smartphone}
           color="border-cyan-500" 
           glow="shadow-[0_0_15px_rgba(6,182,212,0.15)]"
           bg="bg-cyan-950/30"
           skills={["React", "Next.js", "Tailwind"]}
         />
         <div className="h-8 w-px bg-gray-800 relative overflow-hidden flex-shrink-0">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-cyan-400 animate-[drop_1.5s_infinite]" />
         </div>
         <SchematicModule 
           title={t.about.serverLogic} 
           icon={Cpu}
           color="border-indigo-500" 
           glow="shadow-[0_0_15px_rgba(99,102,241,0.15)]"
           bg="bg-indigo-950/30"
           skills={["Node.js", "Python", "GraphQL"]}
         />
         <div className="h-8 w-px bg-gray-800 relative overflow-hidden flex-shrink-0">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-indigo-400 animate-[drop_1.5s_infinite_0.75s]" />
         </div>
         <SchematicModule 
           title={t.about.infrastructure} 
           icon={Database}
           color="border-emerald-500" 
           glow="shadow-[0_0_15px_rgba(16,185,129,0.15)]"
           bg="bg-emerald-950/30"
           skills={["AWS", "Docker", "Vercel"]}
         />
      </div>

      <div className="relative z-10 px-6 pb-4 flex justify-between items-center border-t border-white/5 pt-3">
         <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono text-gray-400 uppercase">{t.about.systemIntegrity}: 100%</span>
         </div>
         <div className="flex gap-1">
            {[1,2,3].map(i => <div key={i} className="w-1 h-2 bg-gray-800 rounded-sm" />)}
         </div>
      </div>
    </div>
  );
};

const LocationCard = () => {
  const { t } = useLanguage();
  return (
    <div className="h-full min-h-[280px] bg-gray-900 relative overflow-hidden rounded-[2rem] flex flex-col justify-between group">
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
       
       <div className="absolute -right-20 -top-20 rtl:-left-20 rtl:right-auto w-64 h-64 opacity-20 transition-all duration-700 group-hover:opacity-40 group-hover:scale-110 pointer-events-none will-change-transform">
          <div className="absolute inset-0 border border-cyan-500 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 border border-dashed border-cyan-400 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-8 border border-cyan-300 rounded-full opacity-50" />
       </div>

       <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
             <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20 backdrop-blur-md">
                <Globe className="w-5 h-5 text-cyan-400" />
             </div>
             <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/50">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                </span>
                <span className="text-[10px] font-mono font-bold text-cyan-300">{t.about.online}</span>
             </div>
          </div>

          <div>
             <div className="flex items-baseline gap-2 mb-1">
                <h3 className="text-3xl font-bold text-white tracking-tight">Istanbul</h3>
                <span className="text-sm font-medium text-gray-500">TR</span>
             </div>
             
             <div className="space-y-2 mt-4">
                <div className="flex justify-between text-xs font-mono text-gray-400 border-b border-white/5 pb-1">
                   <span>LAT</span>
                   <span className="text-cyan-200">41.0082° N</span>
                </div>
                <div className="flex justify-between text-xs font-mono text-gray-400 border-b border-white/5 pb-1">
                   <span>LNG</span>
                   <span className="text-cyan-200">28.9784° E</span>
                </div>
                <div className="flex justify-between text-xs font-mono text-gray-400">
                   <span>UTC</span>
                   <span className="text-white">+03:00</span>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

const AnimatedCounter = ({ value, className }: { value: number, className: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true });
  
  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(0, value, {
        duration: 2,
        onUpdate(v) {
          node.textContent = Math.round(v).toString();
        },
        ease: "circOut"
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return <span ref={nodeRef} className={className}>0</span>;
};

const StatRow = ({ label, value, suffix, color, barColor, delay }: any) => {
  return (
    <div className="flex flex-col gap-1.5">
       <div className="flex justify-between items-end">
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{label}</span>
          <div className="flex items-baseline gap-1">
             <span className={`text-lg font-bold font-mono ${color}`}>+</span>
             <AnimatedCounter value={value} className={`text-xl font-bold font-mono ${color}`} />
             <span className={`text-[10px] font-bold ${color} opacity-70 ml-1 rtl:mr-1 rtl:ml-0`}>{suffix}</span>
          </div>
       </div>
       <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }} 
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: delay, ease: "easeOut" }}
            className={`h-full ${barColor} relative`}
          >
             <div className="absolute inset-0 bg-white/50 animate-[shimmer_2s_infinite]" />
          </motion.div>
       </div>
    </div>
  )
}

const StatsCard = () => {
  const { t } = useLanguage();
  return (
    <div className="h-full min-h-[280px] bg-gray-900 relative overflow-hidden rounded-[2rem] flex flex-col p-6 group">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">{t.about.careerTelemetry}</span>
        </div>
        <div className="flex gap-1">
           <div className="w-1 h-1 bg-purple-500 rounded-full animate-ping" />
           <div className="w-1 h-1 bg-purple-500 rounded-full" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-around h-full gap-4">
        <StatRow 
           label={t.about.graphicDesign} 
           value={8} 
           suffix={t.about.years} 
           color="text-pink-400" 
           barColor="bg-pink-500" 
           delay={0}
        />
        <StatRow 
           label={t.about.fullStack} 
           value={2} 
           suffix={t.about.years} 
           color="text-cyan-400" 
           barColor="bg-cyan-500" 
           delay={0.2}
        />
        <StatRow 
           label={t.about.projectsShipped} 
           value={13} 
           suffix={t.about.total} 
           color="text-emerald-400" 
           barColor="bg-emerald-500" 
           delay={0.4}
        />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-cyan-500 to-emerald-500 opacity-20" />
    </div>
  );
};

const ConnectCard = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);
  const email = "info@osamadel.com";
  const [displayText, setDisplayText] = useState("*****************");
  
  // Disable animation on mobile for performance
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (hovered || copied) {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText(prev => 
          email
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return email[index];
              }
              return "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"[Math.floor(Math.random() * 46)];
            })
            .join("")
        );
        if (iteration >= email.length) {
          clearInterval(interval);
        }
        iteration += 1 / 2;
      }, 30);
    } else {
      setDisplayText("*****************");
    }
    return () => clearInterval(interval);
  }, [hovered, copied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Secure Link Established: Email Copied");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="h-full min-h-[250px] bg-gray-900 p-6 flex flex-col justify-between text-white relative overflow-hidden group rounded-[2rem] border border-white/5 cursor-pointer" 
      onClick={handleCopy}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute inset-0 opacity-10 flex items-center justify-center gap-1 pointer-events-none">
        {[...Array(12)].map((_, i) => ( // Reduced bars
           <motion.div 
             key={i}
             animate={{ height: hovered ? [10, 40, 10] : 10 }}
             transition={{ duration: 1, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
             className={`w-1 bg-indigo-500 rounded-full ${hovered ? 'bg-indigo-400' : 'bg-gray-800'}`}
             style={{ height: '10px' }}
           />
        ))}
      </div>

      <div className="flex justify-between items-start relative z-10">
        <div className={`p-2 rounded-xl backdrop-blur-md border transition-colors duration-300 ${copied ? 'bg-green-500/20 border-green-500/50' : 'bg-white/5 border-white/10'}`}>
          {copied ? <Check className="w-5 h-5 text-green-400" /> : <Wifi className={`w-5 h-5 ${hovered ? 'text-indigo-400 animate-pulse' : 'text-gray-400'}`} />}
        </div>
        <div className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border transition-all duration-300 font-mono ${copied ? 'bg-green-500/20 border-green-500/50 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.3)]' : 'bg-white/5 border-white/10 text-gray-500'}`}>
          {copied ? t.about.secure : t.about.encrypted}
        </div>
      </div>

      <div className="relative z-10 mt-4">
        <div className="flex items-center gap-2 mb-2">
           {copied ? <Unlock className="w-3 h-3 text-green-400" /> : <Lock className="w-3 h-3 text-gray-500" />}
           <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
             {copied ? t.about.connection : t.about.initialize}
           </h3>
        </div>
        <p className={`font-mono text-xs sm:text-sm transition-colors duration-300 truncate ${copied ? 'text-green-400' : 'text-gray-400'}`}>
          {displayText}
        </p>
      </div>

      <div className="absolute bottom-6 right-6 z-10 rtl:left-6 rtl:right-auto">
         <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${hovered ? 'bg-indigo-500 text-white border-indigo-400 rotate-0' : 'bg-transparent text-gray-600 border-gray-700 -rotate-45'}`}>
            <ArrowUpRight className="w-4 h-4 rtl:-rotate-90" />
         </div>
      </div>
    </div>
  );
};

// --- Main Section ---

export const About: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-950 scroll-mt-0 relative overflow-hidden">
      
      {/* Optimized Background - Removed Blur calculation on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Static gradient images instead of heavy blur filters for better performance */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-900/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6"
        >
           <div>
              <div className="flex items-center gap-2 mb-4">
                 <div className="p-1.5 bg-gray-800 rounded-md border border-gray-700">
                    <Server className="w-4 h-4 text-indigo-400" />
                 </div>
                 <span className="text-sm font-bold uppercase tracking-widest text-gray-400">{t.about.systemArchitecture}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                {t.about.header}
              </h2>
           </div>
           <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed border-l-2 border-indigo-500/30 pl-6 rtl:pl-0 rtl:pr-6 rtl:border-l-0 rtl:border-r-2">
             {t.about.subHeader}
           </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          ref={ref}
          variants={containerVars}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-auto md:auto-rows-[280px]"
        >
          <motion.div variants={itemVars} className="md:col-span-2 md:row-span-1">
            <TiltCard>
              <ProfileCard />
            </TiltCard>
          </motion.div>

          <motion.div variants={itemVars} className="md:col-span-1 md:row-span-1">
            <TiltCard>
              <LocationCard />
            </TiltCard>
          </motion.div>

          <motion.div variants={itemVars} className="md:col-span-1 md:row-span-1">
             <TiltCard onClick={() => {}}> 
               <ConnectCard />
             </TiltCard>
          </motion.div>

           <motion.div variants={itemVars} className="md:col-span-2 md:row-span-1">
            <TiltCard>
              <TechScannerCard />
            </TiltCard>
          </motion.div>

           <motion.div variants={itemVars} className="md:col-span-2 md:row-span-1">
            <TiltCard>
              <StatsCard />
            </TiltCard>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
