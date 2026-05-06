import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { 
  Star, 
  Loader2, 
  MessageCircle, 
  Plane, 
  ExternalLink 
} from 'lucide-react';
import { getPackages } from '../services/dataService';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PackageSection: React.FC = () => {
  const [allPackages, setAllPackages] = useState<any[]>([]);
  const [filteredPackages, setFilteredPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPkgs = async () => {
      try {
        const data = await getPackages();
        setAllPackages(data);
        setFilteredPackages(data);
      } catch (err) {
        console.error("Error fetching packages:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPkgs();
  }, []);

  const defaultPackages = [
    {
      id: 'economy-umrah',
      title: 'Economy Umrah Package',
      price: '₹88,000',
      category: 'Economy',
      description: 'Affordable package with essential services for pilgrims seeking a spiritual journey on a budget.',
      includes: ['Direct Flight', '3-Star Hotel', 'Visa Processing', 'Indian Food', 'Transport'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMakWnZcUsB2wqjn7Z8TuOLcYLA9wuWre215J1hwiXDgrBFYhESC_2sdnMLb0tF9KXaJUMhHWCQ0RoLcIbji3elBGlyTH_5K9GIl042hHmx4XetuEjzUfVb1eaAkRinG5sSuFSU-RC_q67RHalPyHRauW3Jlg1Wc1Hjpz9vLCEnGK1gPAWHuFEefxPS39p4v42gkMJG5H-d_UScJpwF0lNS2IIWHx4ifdJCDuknaTw_ikSlM5LMNdTbN3UHM3r7fQ9wHLTOl_WTvs'
    },
    {
      id: 'deluxe-umrah',
      title: 'Deluxe Umrah Package',
      price: '₹1,05,000',
      category: 'Deluxe',
      description: 'Comfortable stay with upgraded facilities and closer proximity to the Harams.',
      includes: ['Premium Flight', '4-Star Hotel', 'Luxury Transport', 'Gourmet Indian Meals', 'Ziyarat included'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf6Qc_zCiI6TJ375gCkSZh4sGYrPPiDe6VYf94i5Edqpr9NC7oJdX1-xaa196kWznKrUp-9sYGF5w7Uhdzw_jLE_GERpzaIIp1j6n3lhEC0MCd98_9HyqZDvzFjSrZy_9meFLbiRID7JJurkYW-crAZeN52Vmljy61r1M558CBpkiXOqVATrcIQ90BvswNS8BTTARS54tOjnwMSRF7wNDmDLMtsln7IvsGGv3AZhjbUeU71xUzVXDjCG-yWwwfl023TvIQdww5OIY'
    },
    {
      id: 'premium-umrah',
      title: '3 Umrah + Ziyara Premium Package',
      price: '₹1,20,000',
      category: 'Premium',
      description: 'Premium experience with multiple Umrah opportunities and comprehensive guided Ziyara.',
      includes: ['Business Class Option', '5-Star Hotel', 'VIP Service', 'Full Spiritual Guide', 'Exclusive Ziyarat'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEw4gl2Oc7NH1wSl-cpeWOpt7BFun8a44Nyh26hB7QsjlSTUEJFG5EzIeHzi42InBu0zMJ_rlAC5jk2PZkeXM0uKiOr5-TbSBP1tYDZmQqIpzq0TxZWiID6UTliYXVaTGORQzMoFmDZrXoj2pm3k3x01D0O55Cg7tdqWIdTaooTzT5PgB3z8h3CRsexc0o7xw2-RmvCfmLzwvHeOSc4rUpud_Wr-UKaERbyGOrc7dxzUE-lSnIg6Zx7iVScYMpW5MP6KAEmsewSKc'
    }
  ];

  const packagesToDisplay = filteredPackages.length > 0 ? filteredPackages : defaultPackages;

  return (
    <section className="py-16 sm:py-24 bg-[#FCFBF7] relative overflow-hidden">
      {/* Subtle Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="text-[#C9A54C] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">தமிழகத்தில் நம்பிக்கையான நிர்வாகம்</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#1A1305] mb-6 tracking-tight leading-tight">
            Our <span className="text-[#C9A54C]">Spiritual Journey</span> Packages
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto italic text-lg">"Providing the best spiritual experience for pilgrims under the guidance of Haji Dasthagir Basha."</p>
        </motion.div>

        {loading && allPackages.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="text-[#C9A54C] animate-spin mb-4" size={40} />
            <p className="text-neutral-500 font-medium">Preparing your spiritual journey...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {packagesToDisplay.map((pkg, index) => (
              <motion.div 
                key={pkg.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-neutral-100 shadow-xl hover:shadow-2xl transition-all duration-500 group h-full flex flex-col hover:-translate-y-4"
              >
                {/* Card Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <div className="bg-white/90 backdrop-blur shadow-xl text-[#C9A54C] px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                      <Plane className="w-3 h-3" />
                      {pkg.journeyType || 'Umrah'}
                    </div>
                    <div className="bg-[#1A1305]/90 backdrop-blur shadow-xl text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                      <Star className="w-3 h-3 fill-[#C9A54C] text-[#C9A54C]" />
                      {pkg.serviceClass || 'Premium'}
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6">
                     <span className="bg-[#C9A54C] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-2xl">
                        {pkg.proximity || '0-200m'}
                     </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-black text-[#1A1305] mb-4 leading-tight group-hover:text-[#C9A54C] transition-colors">{pkg.title}</h3>
                    
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-[#1A1305] tracking-tighter">
                                {pkg.price?.toString().startsWith('₹') ? pkg.price : `₹${pkg.price}`}
                            </span>
                            <span className="text-neutral-400 text-[10px] font-black uppercase tracking-widest">Starting from</span>
                        </div>
                        <div className="h-10 w-[1px] bg-neutral-100" />
                        <div className="flex flex-col">
                            <span className="text-xl font-black text-neutral-900">{pkg.duration || '15'} Days</span>
                            <span className="text-neutral-400 text-[10px] font-black uppercase tracking-widest">Duration</span>
                        </div>
                    </div>
                    
                    <p className="text-neutral-500 text-sm leading-relaxed mb-8 line-clamp-3 italic">"{pkg.description}"</p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Link
                      to={`/packages/${pkg.id}`}
                      className="w-full bg-[#1A1305] text-white py-5 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-[#C9A54C] hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Package
                    </Link>
                    <a
                      href={`https://wa.me/918807114887?text=Interested in ${pkg.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full border-2 border-neutral-200 text-[#1A1305] py-5 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:border-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center gap-3"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Booking
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PackageSection;
