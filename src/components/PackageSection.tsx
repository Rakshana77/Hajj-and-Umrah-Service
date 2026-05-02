import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, Star } from 'lucide-react';
import { packages } from '../data/packages';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PackageSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-neutral-50 relative overflow-hidden">
      {/* Subtle Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[#F4C430] font-bold tracking-widest uppercase text-[9px] sm:text-[10px] mb-3 block">Select Your Spiritual Journey</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight leading-tight px-2">
            Our Premium <span className="text-[#F4C430]">Hajj & Umrah</span> Packages
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4">
            Choose from our carefully curated journeys designed to provide you with a fulfilling and comfortable pilgrimage experience.
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-[#F4C430] mx-auto mt-6 rounded-full sm:hidden"
          />
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-[#F4C430] mx-auto mt-8 rounded-full hidden sm:block"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative group"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-16"
          >
            {packages.map((pkg, index) => (
              <SwiperSlide key={pkg.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 group/card h-full flex flex-col hover:-translate-y-3"
                >
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-72 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-90 transition-opacity duration-500" />
                    
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {pkg.popular && (
                        <div className="bg-[#F4C430] text-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl">
                          <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-black" />
                          Most Popular
                        </div>
                      )}
                      {pkg.limitedSeats && (
                        <div className="bg-red-600 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest shadow-xl animate-pulse">
                          Only {pkg.seatsLeft} Seats Left
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-8 flex flex-col flex-grow">
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9px] sm:text-[10px] font-black text-[#F4C430] uppercase tracking-[0.2em]">
                          {pkg.type}
                        </span>
                        <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                        <span className="text-[9px] sm:text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em]">
                          {pkg.category}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-2 sm:mb-3 group-hover/card:text-[#F4C430] transition-colors">{pkg.name}</h3>
                      <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed line-clamp-2">{pkg.shortDescription}</p>
                    </div>

                    <div className="mb-6 sm:mb-8 p-4 bg-neutral-50 rounded-2xl">
                      <div className="text-[10px] sm:text-sm text-neutral-400 mb-1">Starting from</div>
                      <div className="text-2xl sm:text-3xl font-black text-neutral-900">
                        ₹{pkg.price.toLocaleString()}
                        <span className="text-xs sm:text-sm font-normal text-neutral-400"> / person</span>
                      </div>
                    </div>

                    <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
                      {pkg.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-600 font-medium">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F4C430]/10 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#F4C430]" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/packages/${pkg.id}`}
                      className="w-full bg-neutral-900 text-white py-3 rounded-xl font-black text-[10px] sm:text-[11px] uppercase tracking-widest transition-all hover:bg-[#F4C430] hover:text-neutral-900 flex items-center justify-center gap-2 group/btn shadow-lg"
                    >
                      View Journey Details
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-[-25px] top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-neutral-900 hover:bg-[#F4C430] transition-all disabled:opacity-0 hidden lg:flex">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next-custom absolute right-[-25px] top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-neutral-900 hover:bg-[#F4C430] transition-all disabled:opacity-0 hidden lg:flex">
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PackageSection;
