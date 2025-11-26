
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Send, Check, Loader2, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '../lib/utils';
import { MagneticButton } from './ui/MagneticButton';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [time, setTime] = useState('');
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const bottomY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { 
        timeZone: 'Europe/Istanbul', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const subject = `Project Inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:info@osamadel.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFormState('success');
    window.location.href = mailtoLink;
    toast.success("Opening email client...");
    
    setTimeout(() => {
      setFormState('idle');
      form.reset();
    }, 3000);
  };

  return (
    <section id="contact" ref={container} className="py-20 md:py-32 bg-gray-950 text-white relative overflow-hidden scroll-mt-0">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <motion.div style={{ y }} className="absolute -top-[20%] -right-[10%] w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[80px] md:blur-[120px]" />
         <motion.div style={{ y: bottomY }} className="absolute -bottom-[20%] -left-[10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-purple-500/10 rounded-full mix-blend-screen filter blur-[80px] md:blur-[100px]" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Info & Glass Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full gap-12">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-6 md:mb-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
              >
                 <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                 </div>
                 <span className="text-xs font-bold uppercase tracking-widest text-white/80">Open to opportunities</span>
              </motion.div>

              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9] text-white"
              >
                Let’s build <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-white">the future.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-gray-400 max-w-md leading-relaxed"
              >
                Ready to transform your ideas into exceptional digital experiences? I'm just a message away.
              </motion.p>
            </div>

            {/* Glass Info Stack */}
            <div className="grid gap-4">
               <GlassInfoCard 
                 icon={Mail} 
                 label="Email" 
                 value="info@osamadel.com" 
                 href="mailto:info@osamadel.com" 
                 delay={0.3}
               />
               <GlassInfoCard 
                 icon={Phone} 
                 label="Phone" 
                 value="+90 (506) 279 00 89" 
                 href="tel:+905062790089" 
                 delay={0.4}
               />
               <GlassLocationCard delay={0.5} time={time} />
            </div>
          </div>

          {/* Right Column: Glass Form */}
          <div className="lg:col-span-7">
             <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group/form"
             >
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 relative z-10">
                   
                   <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                     <GlassInput 
                       id="name" 
                       label="Name" 
                       placeholder="John Doe" 
                       type="text"
                       focused={focusedField === 'name'}
                       onFocus={() => setFocusedField('name')}
                       onBlur={() => setFocusedField(null)}
                     />
                     <GlassInput 
                       id="email" 
                       label="Email" 
                       placeholder="john@example.com" 
                       type="email"
                       focused={focusedField === 'email'}
                       onFocus={() => setFocusedField('email')}
                       onBlur={() => setFocusedField(null)}
                     />
                   </div>
                   
                   <GlassInput 
                      id="service" 
                      label="Service" 
                      placeholder="Web Development, Design System..." 
                      type="text"
                      focused={focusedField === 'service'}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                   />

                   <div className="relative group">
                      <label 
                        htmlFor="message" 
                        className={cn(
                          "block text-xs font-bold uppercase tracking-widest mb-3 transition-colors duration-300 ml-1",
                          focusedField === 'message' ? "text-indigo-400" : "text-gray-400"
                        )}
                      >
                        Project Details
                      </label>
                      <textarea
                        required
                        id="message"
                        name="message"
                        rows={5}
                        className={cn(
                          "w-full bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 text-base md:text-lg text-white outline-none resize-none placeholder-white/20 transition-all duration-300",
                          "focus:bg-white/10 focus:border-indigo-500/50 focus:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
                        )}
                        placeholder="Tell me about your vision..."
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                      />
                   </div>

                   <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-4 gap-4">
                     <p className="text-xs md:text-sm text-gray-500 max-w-xs text-center md:text-left">
                       By submitting this form, you agree to the privacy policy and terms of service.
                     </p>
                     
                     <div className="w-full md:w-auto">
                        <MagneticButton strength={50}>
                          <button
                            type="submit"
                            disabled={formState !== 'idle'}
                            className={cn(
                              "relative w-full md:w-auto px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all duration-500 group overflow-hidden shadow-lg hover:shadow-indigo-500/25",
                              formState === 'success' ? "bg-green-500 text-white" : "bg-white text-gray-950"
                            )}
                          >
                            {formState === 'idle' && (
                              <>
                                <span className="z-10 relative">Send Message</span>
                                <Send className="w-5 h-5 z-10 relative group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                <div className="absolute inset-0 bg-indigo-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
                                <div className="absolute inset-0 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                              </>
                            )}
                            {formState === 'submitting' && (
                              <Loader2 className="w-6 h-6 animate-spin" />
                            )}
                            {formState === 'success' && (
                              <>
                                <Check className="w-6 h-6" />
                                <span className="text-sm">Sent Successfully</span>
                              </>
                            )}
                          </button>
                        </MagneticButton>
                     </div>
                   </div>

                </form>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Sub-components ---

const GlassInfoCard = ({ icon: Icon, label, value, href, delay }: any) => (
  <motion.a 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    href={href} 
    className="flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-300 group backdrop-blur-md"
  >
    <div className="p-2.5 md:p-3 bg-white/10 rounded-xl border border-white/5 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300 flex-shrink-0">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div className="min-w-0">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
      <p className="text-base md:text-lg font-medium text-white group-hover:text-indigo-300 transition-colors truncate">{value}</p>
    </div>
    <ArrowUpRight className="w-4 h-4 text-gray-500 ml-auto group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
  </motion.a>
);

const GlassLocationCard = ({ delay, time }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="flex items-center justify-between p-4 md:p-5 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 backdrop-blur-md"
  >
     <div className="flex items-center gap-3 md:gap-4">
        <div className="p-2.5 md:p-3 bg-white/10 rounded-xl flex-shrink-0">
           <MapPin className="w-5 h-5 text-white" />
        </div>
        <div>
           <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-0.5">Base</p>
           <p className="text-base md:text-lg font-medium text-white">Istanbul, TR</p>
        </div>
     </div>
     <div className="text-right pl-3 md:pl-4 border-l border-white/10 flex-shrink-0">
        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-0.5">Time</p>
        <p className="text-base md:text-lg font-mono font-medium text-indigo-300">{time}</p>
     </div>
  </motion.div>
);

const GlassInput = ({ id, label, placeholder, type, focused, onFocus, onBlur }: any) => (
  <div className="relative group">
    <label 
      htmlFor={id} 
      className={cn(
        "block text-xs font-bold uppercase tracking-widest mb-3 transition-colors duration-300 ml-1",
        focused ? "text-indigo-400" : "text-gray-400"
      )}
    >
      {label}
    </label>
    <div className="relative">
      <input
        required
        type={type}
        id={id}
        name={id}
        className={cn(
          "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 md:px-6 md:py-4 text-base md:text-lg text-white outline-none placeholder-white/20 transition-all duration-300",
          "focus:bg-white/10 focus:border-indigo-500/50 focus:shadow-[0_0_20px_rgba(99,102,241,0.1)]"
        )}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {/* Decorative focus line */}
      <div className={cn(
        "absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent transition-opacity duration-300",
        focused ? "opacity-100" : "opacity-0"
      )} />
    </div>
  </div>
);
