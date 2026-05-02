import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryImages = [
  { 
    id: 1, 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf6Qc_zCiI6TJ375gCkSZh4sGYrPPiDe6VYf94i5Edqpr9NC7oJdX1-xaa196kWznKrUp-9sYGF5w7Uhdzw_jLE_GERpzaIIp1j6n3lhEC0MCd98_9HyqZDvzFjSrZy_9meFLbiRID7JJurkYW-crAZeN52Vmljy61r1M558CBpkiXOqVATrcIQ90BvswNS8BTTARS54tOjnMSRF7wNDmDLMtsln7IvsGGv3AZhjbUeU71xUzVXDjCG-yWwwfl023TvIQdww5OIY", 
    caption: "The Holy Kaaba at Dawn" 
  },
  { 
    id: 2, 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg-nwcwMSP0Ww3l8sVr0vk0sJ_i1cCYMLm9a9x7jwYi7Vg1cZ5PJeG8w-8bY6NUOnbPq26BeHqyopxDgD3VQskiUfgwwPOjPwXZKQ8bp0cJqiJMEnsWxXx9-dHvsakebbL9_zEbbg2gXvL1pOlH3ozUjOTRFnCIO9K276sdg8XPj98rD1nesBIor93j38xdTwHsReQ10IkGO-N3rktfmuCP0OWzYPm-3YxxyBlPaX4JAHO_aZuRuRslWmTYJ5Cth9wkSXlBKjJ-dg", 
    caption: "Spiritual Tawaf Moments" 
  },
  { 
    id: 3, 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVwKI_ZBdsm7hQMNZYidAMibMAREIAijffO5tdyep9EDFzl1vmawgDrQMHqGHX5JIRaCKMkSVf_xMsXIo-FMJ5fJYu4CAJ4QRYJnBg2dwWxmQsV4ktCmZUbHVagFoxxfKFZuQ5td563fTSQ_HpT9OXS-6DbzoUIqaj0t5d6wO3RdAn9gcO5Wnj-Z2aqLEMHQ8rp0k9HQlkctY6HU5GqW7fB6gLdwjw5eSKtGNpqDhhB_m3Opr2vVMEvKudTqmNc7hhC_V8XbW36yU", 
    caption: "Historical Ziyarat Tours" 
  },
  { 
    id: 4, 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMakWnZcUsB2wqjn7Z8TuOLcYLA9wuWre215J1hwiXDgrBFYhESC_2sdnMLb0tF9KXaJUMhHWCQ0RoLcIbji3elBGlyTH_5K9GIl042hHmx4XetuEjzUfVb1eaAkRinG5sSuFSU-RC_q67RHalPyHRauW3Jlg1Wc1Hjpz9vLCEnGK1gPAWHuFEefxPS39p4v42gkMJG5H-d_UScJpwF0lNS2IIWHx4ifdJCDuknaTw_ikSlM5LMNdTbN3UHM3r7fQ9wHLTOl_WTvs", 
    caption: "Premium Hilton Accommodations" 
  },
  { 
    id: 5, 
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf6Qc_zCiI6TJ375gCkSZh4sGYrPPiDe6VYf94i5Edqpr9NC7oJdX1-xaa196kWznKrUp-9sYGF5w7Uhdzw_jLE_GERpzaIIp1j6n3lhEC0MCd98_9HyqZDvzFjSrZy_9meFLbiRID7JJurkYW-crAZeN52Vmljy61r1M558CBpkiXOqVATrcIQ90BvswNS8BTTARS54tOjnMSRF7wNDmDLMtsln7IvsGGv3AZhjbUeU71xUzVXDjCG-yWwwfl023TvIQdww5OIY", 
    caption: "Pilgrims in Reflection" 
  }
];

const GalleryCarousel: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[#F4C430]">
              <div className="w-10 h-10 rounded-xl bg-[#F4C430]/10 flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </div>
              <span className="font-black text-[10px] uppercase tracking-[0.3em]">Our Journey Gallery</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
              Moments from <span className="text-[#F4C430]">Our Pilgrims</span>
            </h2>
            <p className="text-neutral-500 max-w-xl text-lg leading-relaxed italic">
              "Witness the spiritual transition of our blessed pilgrims through real experiences."
            </p>
          </div>
          
          <Link 
            to="/reviews" 
            className="flex items-center gap-4 bg-neutral-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-[#F4C430] hover:text-neutral-900 transition-all"
          >
            <Camera className="w-5 h-5" />
            <span>See Reviews & Photos</span>
          </Link>
        </motion.div>

        {/* Carousel Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: '.gallery-prev',
              nextEl: '.gallery-next',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-20"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={image.id}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden group/card shadow-xl hover:shadow-3xl transition-all duration-700"
                >
                  <img 
                    src={image.src} 
                    alt={image.caption} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60 group-hover/card:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-6 group-hover/card:translate-y-0 transition-all duration-500">
                    <p className="text-white font-bold text-xl mb-4 opacity-0 group-hover/card:opacity-100 transition-all duration-500 delay-100 leading-tight">
                      {image.caption}
                    </p>
                    <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transition-all duration-500 delay-200 hover:bg-white hover:text-neutral-900">
                      View Experience
                    </button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="gallery-prev absolute left-[-25px] top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-neutral-900 hover:bg-[#F4C430] transition-all opacity-0 group-hover:opacity-100 disabled:hidden hidden lg:flex">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="gallery-next absolute right-[-25px] top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-neutral-900 hover:bg-[#F4C430] transition-all opacity-0 group-hover:opacity-100 disabled:hidden hidden lg:flex">
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryCarousel;
