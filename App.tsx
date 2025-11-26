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
import { ScrollToTop } from './components/ui/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans selection:bg-gray-900 selection:text-white dark:selection:bg-white dark:selection:text-gray-900 transition-colors duration-300">
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
      <ScrollToTop />
      <Toaster position="bottom-right" richColors />
    </div>
  );
};

export default App;