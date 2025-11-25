import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Layers, CheckCircle2, ArrowRight as ArrowRightIcon, ArrowLeft as ArrowLeftIcon, Filter } from 'lucide-react';
import { ImageWithFallback } from './ui/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  problem: string;
  solution: string;
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    subtitle: "Analytics & Management",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order processing.",
    tech: ["React", "TypeScript", "Tailwind", "Recharts"],
    link: "#",
    github: "#",
    problem: "Store owners struggled with fragmented data sources and slow reporting tools, leading to delayed inventory decisions.",
    solution: "Unified multiple data streams into a single real-time React dashboard with optimistic UI updates.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "Travel Companion",
    subtitle: "AI Itinerary Planner",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "An AI-powered travel planner that suggests itineraries based on user preferences and budget.",
    tech: ["React Native", "Firebase", "Google Maps"],
    link: "#",
    github: "#",
    problem: "Travelers feel overwhelmed by options when planning trips, resulting in decision fatigue.",
    solution: "Mobile app using React Native and AI recommendation engine to curate personalized plans.",
    images: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "FinTech Portal",
    subtitle: "Secure Banking App",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Secure banking interface for corporate clients focusing on data visualization.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    link: "#",
    github: "#",
    problem: "Legacy banking portals were clunky, insecure, and difficult to navigate on mobile.",
    solution: "Built a secure, responsive web application with Next.js and MFA integration.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    title: "Creative Studio",
    subtitle: "WebGL Portfolio",
    category: "Design",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "A minimal, high-performance portfolio site with advanced transitions.",
    tech: ["Three.js", "React", "GSAP"],
    link: "#",
    github: "#",
    problem: "Standard templates felt too generic for a high-end creative agency.",
    solution: "Custom immersive experience using Three.js and fluid GSAP transitions.",
    images: [
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e0c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  }
];

// 3D Tilt Card Component
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      style={{ perspective: 2000 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onClick={onClick}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        onMouseMove={(e) => {
          if (!ref.current) return;
          const rect = ref.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          x.set((e.clientX - centerX) / 3);
          y.set((e.clientY - centerY) / 3);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer h-full flex flex-col"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10" />
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="p-6 flex-1 flex flex-col bg-white relative z-20">
          <div className="flex justify-between items-start mb-2">
             <div>
                <span className="text-xs font-bold tracking-wider text-primary-600 uppercase mb-1 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
             </div>
          </div>
          <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
             {project.tech.slice(0, 3).map(t => (
                <span key={t} className="px-2 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-bold uppercase rounded tracking-wider">
                    {t}
                </span>
             ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Work: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  // ... (Keep existing Modal navigation logic: navigateProject, handleNext, handlePrev, useEffect) ...
  const currentProjectIndex = selectedProject 
    ? projects.findIndex(p => p.id === selectedProject.id) 
    : -1;

  const navigateProject = useCallback((direction: 'next' | 'prev') => {
    if (currentProjectIndex === -1) return;
    let newIndex = direction === 'next' 
       ? (currentProjectIndex + 1) % projects.length
       : (currentProjectIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[newIndex]);
    setCurrentImageIndex(0);
  }, [currentProjectIndex]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    if (currentImageIndex < selectedProject.images.length - 1) {
        setCurrentImageIndex(prev => prev + 1);
    } else {
        navigateProject('next');
    }
  }, [selectedProject, currentImageIndex, navigateProject]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    if (currentImageIndex > 0) {
        setCurrentImageIndex(prev => prev - 1);
    } else {
        navigateProject('prev');
    }
  }, [selectedProject, currentImageIndex, navigateProject]);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, handleNext, handlePrev]);

  return (
    <section id="work" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
             <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">My Works</h2>
             <p className="text-gray-500 text-lg max-w-lg font-light">
               A curated selection of projects that demonstrate my passion for building high-quality web applications.
             </p>
          </div>
          
          <div className="flex flex-wrap gap-2 p-1 bg-white rounded-xl border border-gray-200 shadow-sm">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => openProject(project)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal - Keep existing structure but refined classes */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden flex flex-col"
            >
              {/* Modal Content... same as before but refined styles if needed. Reusing structure for brevity. */}
               <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full hover:bg-gray-100 transition-colors z-20 border border-gray-200"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>

              {/* Image Carousel */}
              <div className="relative aspect-video w-full bg-gray-100 overflow-hidden group shrink-0">
                <AnimatePresence mode="wait">
                    <motion.img 
                        key={`${selectedProject.id}-${currentImageIndex}`}
                        src={selectedProject.images[currentImageIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover"
                        alt={`Screenshot`}
                    />
                </AnimatePresence>
                {/* Carousel Controls */}
                 {selectedProject.images.length > 1 && (
                    <>
                        <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-all">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-all">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </>
                )}
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                 <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                        <span className="text-primary-600 font-semibold px-3 py-1 bg-primary-50 rounded-full text-sm inline-block border border-primary-100">
                            {selectedProject.category}
                        </span>
                    </div>
                    <div className="flex gap-3">
                         <a href={selectedProject.github} className="p-3 border border-gray-200 rounded-full hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all" title="View Code">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href={selectedProject.link} className="px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-primary-600 transition-all shadow-lg shadow-gray-900/20 flex items-center gap-2">
                            Live Demo <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8 mb-10">
                     <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Layers className="w-5 h-5 text-orange-500" /> Challenge
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{selectedProject.problem}</p>
                     </div>
                     <div className="bg-primary-50/30 p-6 rounded-2xl border border-primary-100">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary-500" /> Solution
                        </h4>
                        <p className="text-gray-600 leading-relaxed">{selectedProject.solution}</p>
                     </div>
                 </div>
                 
                 {/* Footer of Modal */}
                 <div className="flex justify-between items-center pt-8 border-t border-gray-100">
                      <button onClick={() => navigateProject('prev')} className="text-sm font-semibold text-gray-500 hover:text-gray-900 flex items-center gap-2 group">
                          <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Previous
                      </button>
                       <button onClick={() => navigateProject('next')} className="text-sm font-semibold text-gray-500 hover:text-gray-900 flex items-center gap-2 group">
                          Next <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};