import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo/Gemini_Generated_Image_6kua1k6kua1k6kua.png';

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll logic for styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Navbar animation values
  const navbarHeight = useTransform(scrollY, [0, 100], ['100px', '75px']);
  const navbarBg = useTransform(
    scrollY,
    [0, 100],
    isHomePage 
      ? ['rgba(26, 19, 5, 0)', 'rgba(26, 19, 5, 0.98)'] 
      : ['rgba(26, 19, 5, 0.98)', 'rgba(26, 19, 5, 0.98)']
  );
  const navbarBorder = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.1)', 'rgba(201, 165, 76, 0.2)']
  );

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.nav 
        style={{ 
          backgroundColor: navbarBg,
          height: navbarHeight,
          borderBottom: `1px solid`,
          borderColor: navbarBorder
        }}
        className="fixed top-0 w-full z-[100] flex items-center transition-all duration-500 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full flex justify-between items-center">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center gap-3 sm:gap-4 group focus:outline-none"
            aria-label="Home"
          >
            <motion.div 
              layout
              className={`relative rounded-full border-2 border-[#C9A54C] overflow-hidden transition-all duration-500 shadow-xl shadow-[#C9A54C]/10 ${
                isScrolled ? 'h-10 w-10 sm:h-12 sm:w-12' : 'h-14 w-14 sm:h-16 sm:w-16'
              }`}
            >
              <img src={logo} alt="Haji Umrah Logo" className="w-full h-full object-cover" />
            </motion.div>
            <div className="flex flex-col">
              <span className={`font-black tracking-tight leading-none transition-all duration-500 text-white ${
                isScrolled ? 'text-sm sm:text-lg' : 'text-lg sm:text-2xl'
              }`}>
                HAJI UMRAH
              </span>
              <span className="font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase text-[#C9A54C] text-[8px] sm:text-[10px]">
                &amp; ZIYARA SERVICE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (Center/Right) */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((item) => (
              <NavLink 
                key={item.name}
                to={item.path}
                end={item.name === 'Home'}
                className="relative py-2 focus:outline-none group"
              >
                {({ isActive }) => (
                  <>
                    <span className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                      isActive ? 'text-[#C9A54C]' : 'text-neutral-300 group-hover:text-white'
                    }`}>
                      {item.name}
                    </span>
                    {isActive && (
                      <motion.div 
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A54C] rounded-full shadow-[0_0_10px_rgba(201,165,76,0.5)]"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop/Tablet Action Button */}
          <div className="hidden sm:flex items-center gap-6">
            <Link 
              to="/packages"
              className="px-6 lg:px-8 py-3 bg-[#C9A54C] text-[#1A1305] rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-500 hover:bg-white hover:scale-105 active:scale-95 shadow-lg shadow-[#C9A54C]/20"
            >
              Book Now
            </Link>
          </div>

          {/* Tablet/Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-[#C9A54C]/10 text-[#C9A54C] hover:bg-[#C9A54C] hover:text-[#1A1305] transition-all focus:outline-none focus:ring-2 focus:ring-[#C9A54C]/50"
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-current rounded-full transition-transform"
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-4 h-0.5 bg-current rounded-full ml-auto"
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-current rounded-full transition-transform"
            />
          </button>
        </div>
      </motion.nav>

      {/* Full-screen Slide-in Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[110] bg-[#1A1305] flex flex-col lg:hidden"
          >
            {/* Header in mobile menu */}
            <div className="h-[100px] flex items-center justify-between px-4 sm:px-8 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full border border-[#C9A54C] overflow-hidden">
                  <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-white font-black text-sm tracking-widest uppercase">Menu</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 text-white hover:bg-[#C9A54C] hover:text-[#1A1305] transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links Section */}
            <div className="flex-grow flex flex-col justify-center px-8 sm:px-16 space-y-2">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <NavLink 
                    to={item.path}
                    className={({ isActive }) => `group flex items-center justify-between py-4 text-2xl sm:text-4xl font-black uppercase tracking-tighter transition-all ${
                      isActive ? 'text-[#C9A54C]' : 'text-neutral-500 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-[#C9A54C]" />
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 sm:p-16 space-y-6 bg-white/5 backdrop-blur-3xl"
            >
              <div className="flex flex-col gap-4">
                <Link 
                  to="/packages"
                  className="w-full bg-[#C9A54C] text-[#1A1305] py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] text-center shadow-xl shadow-[#C9A54C]/10 flex items-center justify-center gap-3"
                >
                  Book Your Journey
                  <ChevronRight className="w-4 h-4" />
                </Link>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="tel:08123379158"
                    className="bg-white/5 text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest text-center border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#C9A54C]" />
                    Call
                  </a>
                  <Link 
                    to="/contact"
                    className="bg-white/5 text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest text-center border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-all"
                  >
                    <MapPin className="w-4 h-4 text-[#C9A54C]" />
                    Office
                  </Link>
                </div>
              </div>
              
              <p className="text-center text-neutral-500 text-[10px] uppercase tracking-[0.3em] font-medium">
                Devotion in Every Step
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
