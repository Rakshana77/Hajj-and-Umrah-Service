import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Camera, Globe, Video } from 'lucide-react';
import logo from '../assets/logo/Gemini_Generated_Image_6kua1k6kua1k6kua.png';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-900 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-6 mb-10">
              <motion.img 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                src={logo} 
                alt="HAJI UMRAH" 
                className="h-24 w-24 object-cover rounded-full border-2 border-[#F4C430] shadow-2xl" 
                loading="lazy" 
              />
              <div>
                <h2 className="text-3xl font-black tracking-tighter text-white">HAJI UMRAH</h2>
                <p className="text-sm font-bold text-[#F4C430] tracking-[0.3em] uppercase">&amp; ZIYARA SERVICE</p>
              </div>
            </div>
            <p className="text-neutral-400 text-lg leading-relaxed mb-10 max-w-md">
              Providing spiritual excellence and comfort for your sacred journey since 2012. Trusted by thousands of pilgrims across India.
            </p>
            <div className="flex gap-6">
              {[Camera, Globe, Video].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#F4C430' }}
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-colors border border-white/10"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest text-xs">Quick Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Our Packages', path: '/packages' },
                { name: 'About Us', path: '/about' },
                { name: 'Premium Services', path: '/services' },
                { name: 'Contact Support', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-neutral-400 hover:text-[#F4C430] transition-colors font-medium flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#F4C430] transition-all group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-widest text-xs">Get In Touch</h4>
            <div className="space-y-6">
              <a href="tel:08048102586" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#F4C430]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F4C430] transition-colors">
                  <Phone className="w-4 h-4 text-[#F4C430] group-hover:text-neutral-900" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase font-black mb-1">Call Us</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#F4C430] transition-colors">08048102586</p>
                </div>
              </a>
              <a href="mailto:arshumrah2022@gmail.com" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#F4C430]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F4C430] transition-colors">
                  <Mail className="w-4 h-4 text-[#F4C430] group-hover:text-neutral-900" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase font-black mb-1">Email Us</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#F4C430] transition-colors uppercase">arshumrah2022@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-[#F4C430]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#F4C430]" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase font-black mb-1">Our Location</p>
                  <p className="text-sm font-bold text-white">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 text-xs font-medium">
            © 2026 Haji Umrah & Ziyara service. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-neutral-500 hover:text-white text-[10px] uppercase font-black tracking-widest">Privacy Policy</a>
            <a href="#" className="text-neutral-500 hover:text-white text-[10px] uppercase font-black tracking-widest">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
