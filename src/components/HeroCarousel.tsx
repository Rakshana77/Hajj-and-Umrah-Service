import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf6Qc_zCiI6TJ375gCkSZh4sGYrPPiDe6VYf94i5Edqpr9NC7oJdX1-xaa196kWznKrUp-9sYGF5w7Uhdzw_jLE_GERpzaIIp1j6n3lhEC0MCd98_9HyqZDvzFjSrZy_9meFLbiRID7JJurkYW-crAZeN52Vmljy61r1M558CBpkiXOqVATrcIQ90BvswNS8BTTARS54tOjnwMSRF7wNDmDLMtsln7IvsGGv3AZhjbUeU71xUzVXDjCG-yWwwfl023TvIQdww5OIY",
    title: "Begin Your Sacred Journey",
    subtitle: "Experience Umrah with comfort and religious guidance at every step.",
    cta1: "View Packages",
    cta1Link: "/packages",
    cta2: "Book Now",
    cta2Link: "/contact"
  },
  {
    id: 2,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEw4gl2Oc7NH1wSl-cpeWOpt7BFun8a44Nyh26hB7QsjlSTUEJFG5EzIeHzi42InBu0zMJ_rlAC5jk2PZkeXM0uKiOr5-TbSBP1tYDZmQqIpzq0TxZWiID6UTliYXVaTGORQzMoFmDZrXoj2pm3k3x01D0O55Cg7tdqWIdTaooTzT5PgB3z8h3CRsexc0o7xw2-RmvCfmLzwvHeOSc4rUpud_Wr-UKaERbyGOrc7dxzUE-lSnIg6Zx7iVScYMpW5MP6KAEmsewSKc",
    title: "Ramadan Special Packages",
    subtitle: "Perform Umrah in the most blessed month. Limited seats available for 2026.",
    cta1: "Early Bird Offers",
    cta1Link: "/packages",
    cta2: "Contact Us",
    cta2Link: "/contact"
  },
  {
    id: 3,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhkOddjpzhvK6iwJhQvWYsNxbm2zQFcZzrsXVCXtHkrl45fb59dHT2g2dLjAAayKv0_-w6XOunES0CayqV-rqVlmo24TjSykRQl7bnmdvE9CLWKpiOKsCpIN1YFSZjkK3vjsWyb5QVCjP14ZYhz8JiybptJ5oOfNDcoJHX_Qu2VlYC-pVnaoTsA6FGXU_WaBCs-bUfR_235jFs9v2aphfZDgzNW85kZhjlrMubTrtizG4jqiA8X6i_SeQNOF3T8ngZVNU34P4VGB4",
    title: "Peaceful Ziyara Experience",
    subtitle: "Visit the historical and holy places of Makkah and Madinah with expert scholars.",
    cta1: "Explore Sites",
    cta1Link: "/services",
    cta2: "Join Now",
    cta2Link: "/contact"
  },
  {
    id: 4,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg-nwcwMSP0Ww3l8sVr0vk0sJ_i1cCYMLm9a9x7jwYi7Vg1cZ5PJeG8w-8bY6NUOnbPq26BeHqyopxDgD3VQskiUfgwwPOjPwXZKQ8bp0cJqiJMEnsWxXx9-dHvsakebbL9_zEbbg2gXvL1pOlH3ozUjOTRFnCIO9K276sdg8XPj98rD1nesBIor93j38xdTwHsReQ10IkGO-N3rktfmuCP0OWzYPm-3YxxyBlPaX4JAHO_aZuRuRslWmTYJ5Cth9wkSXlBKjJ-dg",
    title: "Trusted Hajj & Umrah Services",
    subtitle: "Over a decade of serving pilgrims with dedication, care, and faith.",
    cta1: "Our Legacy",
    cta1Link: "/about",
    cta2: "Inquire Now",
    cta2Link: "/contact"
  }
];

const HeroCarousel: React.FC = () => {
  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-neutral-900">
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div className="relative h-full w-full">
                {/* Background Image */}
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

                {/* Islamic Geometric Pattern Overlay (Subtle) */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />

                {/* Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-center items-center text-center">
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="max-w-3xl w-full"
                      >
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          className="flex items-center justify-center gap-2 text-[#F4C430] mb-4 sm:mb-6"
                        >
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="font-bold text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em]">Spiritual Excellence</span>
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.div>

                        <h1 className="font-display text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight sm:leading-[1.1]">
                          {slide.title.split(' ').map((word, i) => (
                            <span key={i} className={word === "Sacred" || word === "Ramadan" || word === "Peaceful" || word === "Trusted" ? "text-[#F4C430]" : ""}>
                              {word}{' '}
                            </span>
                          ))}
                        </h1>

                        <p className="text-xs sm:text-base md:text-xl text-neutral-200 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                          {slide.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
                          <Link 
                            to={slide.cta1Link}
                            className="w-full sm:w-auto bg-[#F4C430] text-neutral-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-[#F4C430]/20"
                          >
                            {slide.cta1}
                          </Link>
                          <Link 
                            to={slide.cta2Link}
                            className="w-full sm:w-auto border-2 border-white/30 backdrop-blur-md text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white hover:text-neutral-900 transition-all"
                          >
                            {slide.cta2}
                          </Link>
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
        <button className="hero-prev absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#F4C430] hover:text-black hover:border-[#F4C430] transition-all hidden lg:flex">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="hero-next absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#F4C430] hover:text-black hover:border-[#F4C430] transition-all hidden lg:flex">
          <ChevronRight className="w-6 h-6" />
        </button>
      </Swiper>

      {/* Floating Particles (CSS only for performance) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white/20 rounded-full blur-xl animate-pulse"
            style={{
              width: Math.random() * 100 + 50 + 'px',
              height: Math.random() * 100 + 50 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
