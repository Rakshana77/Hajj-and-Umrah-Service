import { FC } from 'react';
import logo from '../assets/logo/logo.jpeg';

const Footer: FC = () => {
  return (
    <footer className="w-full border-t border-neutral-200 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src={logo} alt="HAJI UMRAH & ZIYARA SERVICE" className="h-20 w-auto object-contain mb-4" />
          <div className="space-y-1 mb-4 text-sm text-neutral-500 font-body-md">
            <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">call</span> 08048102586</p>
            <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">mail</span> arshumrah2022@gmail.com</p>
            <p className="flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> India, Chennai</p>
          </div>
          <p className="font-body-md text-neutral-400 text-xs">© 2024 Haji Umrah & Ziyara service. Licensed Hajj &amp; Umrah Operator.</p>
        </div>
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
