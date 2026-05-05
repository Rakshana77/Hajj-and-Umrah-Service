import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Loader2, MessageCircle, Phone } from 'lucide-react';
import { getHeroData } from '../services/dataService';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const defaultSlides = [
  {
    id: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf6Qc_zCiI6TJ375gCkSZh4sGYrPPiDe6VYf94i5Edqpr9NC7oJdX1-xaa196kWznKrUp-9sYGF5w7Uhdzw_jLE_GERpzaIIp1j6n3lhEC0MCd98_9HyqZDvzFjSrZy_9meFLbiRID7JJurkYW-crAZeN52Vmljy61r1M558CBpkiXOqVATrcIQ90BvswNS8BTTARS54tOjnwMSRF7wNDmDLMtsln7IvsGGv3AZhjbUeU71xUzVXDjCG-yWwwfl023TvIQdww5OIY",
    title: "தமிழகத்தில் நம்பிக்கையான நிர்வாகம்",
    subtitle: "Begin Your Sacred Journey with Trusted Guidance & Comfort",
    ctaText: "Enquire Now"
  },
  {
    id: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEw4gl2Oc7NH1wSl-cpeWOpt7BFun8a44Nyh26hB7QsjlSTUEJFG5EzIeHzi42InBu0zMJ_rlAC5jk2PZkeXM0uKiOr5-TbSBP1tYDZmQqIpzq0TxZWiID6UTliYXVaTGORQzMoFmDZrXoj2pm3k3x01D0O55Cg7tdqWIdTaooTzT5PgB3z8h3CRsexc0o7xw2-RmvCfmLzwvHeOSc4rUpud_Wr-UKaERbyGOrc7dxzUE-lSnIg6Zx7iVScYMpW5MP6KAEmsewSKc",
    title: "Sacred Journey Under Expert Care",
    subtitle: "Experience the ultimate spiritual transition with J. Dasthagir Basha's leadership.",
    ctaText: "WhatsApp Booking"
  },
  {
    id: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVwKI_ZBdsm7hQMNZYidAMibMAREIAijffO5tdyep9EDFzl1vmawgDrQMHqGHX5JIRaCKMkSVf_xMsXIo-FMJ5fJYu4CAJ4QRYJnBg2dwWxmQsV4ktCmZUbHVagFoxxfKFZuQ5td563fTSQ_HpT9OXS-6DbzoUIqaj0t5d6wO3RdAn9gcO5Wnj-Z2aqLEMHQ8rp0k9HQlkctY6HU5GqW7fB6gLdwjw5eSKtGNpqDhhB_m3Opr2vVMEvKudTqmNc7hhC_V8XbW36yU",
    title: "ZIYARAT TOURS",
    subtitle: "Safe for Work - Spiritual Exploration of Historical Sacred Sites with Expert Guides.",
    ctaText: "View Package"
  }
];

const HeroCarousel: React.FC = () => {
  const [heroData, setHeroData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const data = await getHeroData();
        if (data) {
          setHeroData(data);
        }
      } catch (err) {
        console.error("Error fetching hero data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHero();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-[#1A1305] flex items-center justify-center">
        <Loader2 className="text-[#C9A54C] animate-spin" size={48} />
      </div>
    );
  }

  const slides = (heroData?.slides && heroData.slides.length > 0)
    ? heroData.slides.filter((s: any) => s.image && s.image.trim() !== "").map((s: any, idx: number) => ({
        id: idx,
        image: s.image,
        title: s.title || "Begin Your Sacred Journey",
        subtitle: s.subtitle || "Trusted Hajj & Umrah Services",
        ctaText: heroData.ctaText || "Enquire Now"
      }))
    : defaultSlides;

  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-[#1A1305]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1500}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }}
        className="h-full w-full"
      >
        {slides.map((slide: any, idx: number) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div className="relative h-full w-full">
                {/* Background Image */}
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

                {/* Islamic Geometric Pattern Overlay (Subtle) */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />

                {/* Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-center items-center text-center">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-4xl w-full"
                      >
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          className="flex items-center justify-center gap-2 text-[#C9A54C] mb-4 sm:mb-6"
                        >
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="font-bold text-[10px] sm:text-sm uppercase tracking-[0.3em]">Haji Umrah & Ziyara Service</span>
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.div>

                        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                          {slide.title}
                        </h1>

                        <p className="text-sm sm:text-xl md:text-2xl text-neutral-200 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                          {slide.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
                          <a 
                            href="tel:918123379158"
                            className="w-full sm:w-auto bg-[#C9A54C] text-[#1A1305] px-8 sm:px-10 py-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-[#C9A54C]/20 flex items-center justify-center gap-3"
                          >
                            <Phone className="w-4 h-4" />
                            {slide.ctaText}
                          </a>
                          <a 
                            href="https://wa.me/918123379158"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto border-2 border-[#25D366]/50 bg-[#25D366]/10 backdrop-blur-md text-white px-8 sm:px-10 py-4 rounded-xl font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#25D366] transition-all flex items-center justify-center gap-3"
                          >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp Booking
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <button className="hero-prev absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#C9A54C] hover:text-[#1A1305] hover:border-[#C9A54C] transition-all hidden lg:flex">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="hero-next absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#C9A54C] hover:text-[#1A1305] hover:border-[#C9A54C] transition-all hidden lg:flex">
          <ChevronRight className="w-6 h-6" />
        </button>
      </Swiper>
    </section>
  );
};

export default HeroCarousel;
