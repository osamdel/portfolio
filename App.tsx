import React from 'react';
import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default App;