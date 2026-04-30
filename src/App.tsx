import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-surface islamic-pattern">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'about' && <About onNavigate={handleNavigate} />}
      {currentPage === 'services' && <Services onNavigate={handleNavigate} />}
      {currentPage === 'contact' && <Contact />}

      <Footer />

      {/* Global Floating WhatsApp CTA */}
      <a 
        className="fixed bottom-8 right-8 bg-[#F4C430] text-neutral-900 p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group" 
        href="https://wa.me/918048102586"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-label-bold">WhatsApp Us</span>
      </a>
    </div>
  );
}

export default App;
