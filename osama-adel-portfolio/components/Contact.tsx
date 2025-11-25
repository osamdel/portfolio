import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    // Simulate a brief processing delay for UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Construct mailto link
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:info@osamadel.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsSubmitting(false);
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast.success("Opening email client...", {
      description: "Please hit send in your email app to complete the message.",
    });
    
    form.reset();
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-5 h-full">
            
            <div className="lg:col-span-2 bg-gray-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-20" />
               
               <div className="relative z-10">
                 <h2 className="text-4xl font-bold mb-6 tracking-tight">Let's build something <br/><span className="text-primary-400">extraordinary.</span></h2>
                 <p className="text-gray-400 text-lg mb-12">
                   Whether you have a question or just want to say hi, I'll try my best to get back to you!
                 </p>
                 
                 <div className="space-y-6">
                    <a href="mailto:info@osamadel.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-lg">info@osamadel.com</span>
                    </a>
                     <a href="tel:+905062790089" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="text-lg">+90 (506) 279 00 89</span>
                    </a>
                 </div>
               </div>
               
               <div className="relative z-10 mt-12">
                 <div className="flex gap-4">
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white" aria-label="Github">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white" aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white" aria-label="Twitter">
                      <Twitter className="w-5 h-5" />
                    </a>
                 </div>
               </div>
            </div>

            <div className="lg:col-span-3 bg-white p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-900">Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-gray-900 transition-colors outline-none bg-transparent placeholder-gray-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-900">Email</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-gray-900 transition-colors outline-none bg-transparent placeholder-gray-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-900">Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-0 py-3 border-b-2 border-gray-100 focus:border-gray-900 transition-colors outline-none bg-transparent placeholder-gray-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full md:w-auto px-8 py-4 bg-gray-900 text-white font-bold rounded-full shadow-lg hover:bg-primary-600 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Preparing...
                      </>
                    ) : (
                      <>
                        Send Message <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};