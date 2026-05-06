import React from 'react';
import HeroCarousel from './HeroCarousel';
import PackageSection from './PackageSection';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users, MessageCircle, Phone, ArrowRight, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import PilgrimGallery from './PilgrimGallery';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-[#FCFBF7]">
      <HeroCarousel />
      
      {/* Trust Indicators */}
      <section className="bg-white py-12 sm:py-20 border-b border-neutral-100 relative z-20">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck />, label: "Trusted Operator" },
            { icon: <Users />, label: "Expert Guidance" },
            { icon: <Clock />, label: "24/7 Support" },
            { icon: <Star className="fill-[#C9A54C]" />, label: "Premium Service" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left group">
              <div className="w-12 h-12 rounded-2xl bg-[#C9A54C]/10 flex items-center justify-center text-[#C9A54C] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="font-bold text-xs sm:text-sm text-[#1A1305] uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <PackageSection />

      {/* Services Highlight */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#C9A54C] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">Our Commitment</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-[#1A1305] leading-tight">
                Comprehensive <span className="text-[#C9A54C]">Spiritual Services</span>
              </h2>
            </div>
            <p className="text-neutral-500 max-w-sm italic">"Ensuring your sacred journey is smooth, comfortable, and spiritually fulfilling under J. Dasthagir Basha's leadership."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                icon: <ShieldCheck className="w-8 h-8" />, 
                title: "Religious Guidance", 
                desc: "Expert scholars and guides accompanying you to ensure all Umrah and Hajj rites are performed correctly." 
              },
              { 
                icon: <Clock className="w-8 h-8" />, 
                title: "Personalized Care", 
                desc: "Our on-ground team handles every logistical detail, from hotel check-ins to local transport." 
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                title: "Group Experience", 
                desc: "A sense of community and family, ensuring every pilgrim feels safe and supported throughout." 
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2rem] bg-[#FCFBF7] border border-neutral-100 hover:border-[#C9A54C]/30 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-[#C9A54C]/10 rounded-2xl flex items-center justify-center mb-8 text-[#C9A54C] group-hover:bg-[#C9A54C] group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1A1305] mb-4">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PilgrimGallery />

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto bg-[#1A1305] rounded-[3rem] p-12 sm:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Embark on <br className="hidden sm:block"/>Your <span className="text-[#C9A54C]">Sacred Journey?</span>
            </h2>
            <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto italic">
              "தமிழகத்தில் நம்பிக்கையான நிர்வாகம் - Trusted Hajj & Umrah Service in Tamil Nadu."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto bg-[#C9A54C] text-[#1A1305] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                <Phone className="w-4 h-4" />
                Enquire Now
              </button>
              <a 
                href="https://wa.me/918123379158"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#1A1305] transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Booking
              </a>
            </div>

            <div className="mt-16 pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Pilgrims Served', value: '10,000+' },
                { label: 'Years Experience', value: '15+' },
                { label: 'Hotel Partners', value: '50+' },
                { label: 'Satisfied Families', value: '100%' }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-[#C9A54C] text-2xl font-black mb-1">{stat.value}</p>
                  <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
