
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
import { Preloader } from './components/ui/Preloader';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gray-900 selection:text-white">
      <Preloader />
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
      <Toaster position="bottom-right" richColors theme="dark" />
    </div>
  );
};

export default App;
