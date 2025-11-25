import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Palette, Database, Terminal, Cpu, Layout, Layers, Coffee, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Beyond the <span className="text-primary-600">Code</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl font-light">
            I'm a multidisciplinary developer who bridges the gap between design and engineering.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[180px]">
          
          {/* Bio Card - Large */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-2 row-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-primary-600">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Stack Engineer</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                I started my journey as a designer but quickly fell in love with the logic of coding. Today, I create scalable, accessible, and performant web applications using the latest tech stack.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 relative z-10">
               {['React', 'TypeScript', 'Node.js', 'Next.js'].map(tag => (
                 <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm">
                   {tag}
                 </span>
               ))}
            </div>
          </motion.div>

          {/* Stat Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-900 rounded-3xl p-6 flex flex-col justify-center items-center text-center relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-purple-700 opacity-20 group-hover:opacity-30 transition-opacity" />
             <h4 className="text-4xl font-bold text-white mb-1">5+</h4>
             <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">Years Exp.</p>
          </motion.div>

          {/* Stack Card - Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-primary-200 transition-colors"
          >
             <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-2">
               <Globe className="w-5 h-5" />
             </div>
             <div>
               <h4 className="text-lg font-bold text-gray-900">Frontend</h4>
               <p className="text-sm text-gray-500">Pixel-perfect implementation</p>
             </div>
          </motion.div>

          {/* Stack Card - Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between group hover:border-primary-200 transition-colors"
          >
             <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-2">
               <Cpu className="w-5 h-5" />
             </div>
             <div>
               <h4 className="text-lg font-bold text-gray-900">Backend</h4>
               <p className="text-sm text-gray-500">Scalable architecture</p>
             </div>
          </motion.div>

          {/* Interest Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-gradient-to-r from-primary-50 to-white rounded-3xl p-8 border border-gray-100 flex items-center justify-between group"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Always Learning</h3>
              <p className="text-gray-600 max-w-xs">Currently exploring WebGL, AI integration, and System Design patterns.</p>
            </div>
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform text-primary-600">
               <Zap className="w-8 h-8" />
            </div>
          </motion.div>

           {/* Stat Card 2 */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-center items-center text-center group hover:shadow-md transition-all"
          >
             <div className="mb-2 p-3 bg-green-50 rounded-full text-green-600 group-hover:bg-green-100 transition-colors">
               <Coffee className="w-6 h-6" />
             </div>
             <h4 className="text-2xl font-bold text-gray-900">1000+</h4>
             <p className="text-gray-500 text-xs font-medium uppercase">Coffees Brewed</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};