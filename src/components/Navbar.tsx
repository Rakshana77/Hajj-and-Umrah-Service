import type { FC } from 'react';
import logo from '../assets/logo/Gemini_Generated_Image_6kua1k6kua1k6kua.png';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  return (
    <nav className="sticky top-0 w-full z-50 border-b-4 border-[#F4C430] bg-white/95 backdrop-blur-sm shadow-[0_20px_40px_rgba(11,11,11,0.04)]">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-36">
        <div 
          className="flex items-center gap-4 cursor-pointer group" 
          onClick={() => onNavigate('home')}
        >
          <img src={logo} alt="HAJI UMRAH & ZIYARA SERVICE" className="h-28 w-28 object-cover rounded-full shadow-md border-2 border-[#F4C430] transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-xl font-black text-neutral-900 tracking-tight leading-none font-h1">HAJI UMRAH</span>
            <span className="text-sm font-bold text-[#F4C430] tracking-widest uppercase">&amp; ZIYARA SERVICE</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a 
            className={`font-medium font-label-bold transition-all duration-300 ${
              currentPage === 'home' ? 'text-[#F4C430] border-b-2 border-[#F4C430] pb-1' : 'text-neutral-600 hover:text-[#F4C430]'
            }`} 
            href="#" 
            onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
          >
            Packages
          </a>
          <a 
            className={`font-medium font-label-bold transition-all duration-300 ${
              currentPage === 'about' ? 'text-[#F4C430] border-b-2 border-[#F4C430] pb-1' : 'text-neutral-600 hover:text-[#F4C430]'
            }`} 
            href="#" 
            onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
          >
            About
          </a>
          <a 
            className={`font-medium font-label-bold transition-all duration-300 ${
              currentPage === 'services' ? 'text-[#F4C430] border-b-2 border-[#F4C430] pb-1' : 'text-neutral-600 hover:text-[#F4C430]'
            }`} 
            href="#" 
            onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
          >
            Services
          </a>
          <a 
            className={`font-medium font-label-bold transition-all duration-300 ${
              currentPage === 'contact' ? 'text-[#F4C430] border-b-2 border-[#F4C430] pb-1' : 'text-neutral-600 hover:text-[#F4C430]'
            }`} 
            href="#" 
            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
          >
            Contact
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button 
            className="bg-[#F4C430] text-neutral-900 font-bold px-6 py-2.5 rounded-lg hover:opacity-80 active:scale-95 transition-all font-h2 tracking-tight"
            onClick={() => onNavigate('contact')}
          >
            Book Umrah
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
