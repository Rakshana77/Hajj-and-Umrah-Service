import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Utensils, Headset, ChevronRight, Phone, Mail } from 'lucide-react';
import PackageSection from './PackageSection';
import GalleryCarousel from './GalleryCarousel';
import HeroCarousel from './HeroCarousel';

const Home: FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Trust Indicators */}
      <section className="bg-white py-10 sm:py-16 border-b border-neutral-100 relative z-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {[
            { icon: <ShieldCheck />, label: "Licensed Operator" },
            { icon: <Compass />, label: "Religious Guidance" },
            { icon: <Utensils />, label: "Halal Catering" },
            { icon: <Headset />, label: "24/7 Group Support" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 text-center md:text-left group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#F4C430]/10 flex items-center justify-center text-[#F4C430] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="font-bold text-[10px] sm:text-sm text-neutral-900 uppercase tracking-widest">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Package Section */}
      <PackageSection />

      {/* Bento Grid: Inclusion Details */}
      <section className="bg-neutral-50 py-16 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-20 text-center sm:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6">Our Comprehensive <span className="text-[#F4C430]">Services</span></h2>
            <p className="text-neutral-500 text-base sm:text-lg max-w-2xl leading-relaxed px-4 sm:px-0">Every detail of your journey is handled by our expert team with devotion and care.</p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {/* Cards using itemVariants */}
            <motion.div variants={itemVariants} className="md:col-span-2 bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-neutral-100 hover:shadow-2xl transition-all group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F4C430]/10 rounded-2xl flex items-center justify-center text-[#F4C430] mb-6 sm:mb-8 group-hover:rotate-12 transition-transform">
                <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Visa & Insurance</h4>
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">Complete visa processing including mandatory medical insurance for a worry-free entry to the Kingdom.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-neutral-100 hover:shadow-2xl transition-all group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F4C430]/10 rounded-2xl flex items-center justify-center text-[#F4C430] mb-6 sm:mb-8 group-hover:rotate-12 transition-transform">
                <Utensils className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Indian Cuisine</h4>
              <p className="text-neutral-500 leading-relaxed text-sm">Nutritious and delicious Indian meals prepared daily by our chefs.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-neutral-100 hover:shadow-2xl transition-all group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F4C430]/10 rounded-2xl flex items-center justify-center text-[#F4C430] mb-6 sm:mb-8 group-hover:rotate-12 transition-transform">
                <Compass className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">Guided Ziyarat</h4>
              <p className="text-neutral-500 leading-relaxed text-sm">Visit historical sites with expert guides explaining religious significance.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <button 
              onClick={() => navigate('/services')}
              className="group flex items-center gap-3 text-neutral-900 font-black text-[10px] sm:text-xs uppercase tracking-widest hover:text-[#F4C430] transition-colors"
            >
              Explore All Services 
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Gallery Moments */}
      <GalleryCarousel />

      {/* Call to Action */}
      <section className="py-16 sm:py-32 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 sm:p-16 rounded-[2rem] sm:rounded-[3rem] bg-neutral-900 text-white relative overflow-hidden shadow-3xl"
          >
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />
            
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 relative z-10 leading-tight">
              Ready to Embark on <br className="hidden sm:block"/>Your <span className="text-[#F4C430]">Sacred Journey?</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mb-8 sm:mb-10 max-w-2xl mx-auto relative z-10">
              Our consultants are available to help you choose the best package for your spiritual needs and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 relative z-10">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F4C430] text-neutral-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl" 
                href="tel:08048102586"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </motion.a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-neutral-900 transition-all"
                onClick={() => navigate('/contact')}
              >
                <Mail className="w-3.5 h-3.5" />
                Request Callback
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
