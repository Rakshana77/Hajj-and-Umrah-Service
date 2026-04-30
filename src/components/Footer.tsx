import type { FC } from 'react';
import logo from '../assets/logo/Gemini_Generated_Image_6kua1k6kua1k6kua.png';

const Footer: FC = () => {
  return (
    <footer className="w-full border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          {/* Logo & Company Name Section */}
          <div className="flex items-center gap-6 mb-8">
            <img src={logo} alt="HAJI UMRAH & ZIYARA SERVICE" className="h-40 w-40 object-cover rounded-full shadow-xl border-4 border-[#F4C430]" />
            <div>
              <h2 className="text-3xl font-black text-neutral-900 tracking-tighter font-h1">HAJI UMRAH</h2>
              <p className="text-lg font-bold text-[#F4C430] tracking-[0.2em] uppercase">&amp; ZIYARA SERVICE</p>
            </div>
          </div>
          
          {/* Contact Info Section */}
          <div className="space-y-2 mb-6 text-sm text-neutral-600 font-body-md">
            <p className="flex items-center gap-3"><span className="material-symbols-outlined text-[#F4C430]">call</span> 08048102586</p>
            <p className="flex items-center gap-3"><span className="material-symbols-outlined text-[#F4C430]">mail</span> arshumrah2022@gmail.com</p>
            <p className="flex items-center gap-3"><span className="material-symbols-outlined text-[#F4C430]">location_on</span> India, Chennai</p>
          </div>
          
          <p className="font-body-md text-neutral-400 text-xs">© 2024 Haji Umrah & Ziyara service. Licensed Hajj &amp; Umrah Operator.</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
          <a className="text-neutral-500 hover:text-neutral-900 transition-colors font-label-bold text-sm" href="#">Terms of Service</a>
          <a className="text-neutral-500 hover:text-neutral-900 transition-colors font-label-bold text-sm" href="#">Privacy Policy</a>
          <a className="text-neutral-500 hover:text-neutral-900 transition-colors font-label-bold text-sm" href="#">Halal Certification</a>
          <a className="text-neutral-500 hover:text-neutral-900 transition-colors font-label-bold text-sm" href="#">Contact Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
