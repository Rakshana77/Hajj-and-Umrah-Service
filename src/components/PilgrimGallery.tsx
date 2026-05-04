import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, ArrowRight, Star, Heart } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    title: "Holy Kaaba",
    category: "Makkah",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCf6Qc_zCiI6TJ375gCkSZh4sGYrPPiDe6VYf94i5Edqpr9NC7oJdX1-xaa196kWznKrUp-9sYGF5w7Uhdzw_jLE_GERpzaIIp1j6n3lhEC0MCd98_9HyqZDvzFjSrZy_9meFLbiRID7JJurkYW-crAZeN52Vmljy61r1M558CBpkiXOqVATrcIQ90BvswNS8BTTARS54tOjnMSRF7wNDmDLMtsln7IvsGGv3AZhjbUeU71xUzVXDjCG-yWwwfl023TvIQdww5OIY",
  },
  {
    id: 2,
    title: "Prophet's Mosque",
    category: "Madinah",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVwKI_ZBdsm7hQMNZYidAMibMAREIAijffO5tdyep9EDFzl1vmawgDrQMHqGHX5JIRaCKMkSVf_xMsXIo-FMJ5fJYu4CAJ4QRYJnBg2dwWxmQsV4ktCmZUbHVagFoxxfKFZuQ5td563fTSQ_HpT9OXS-6DbzoUIqaj0t5d6wO3RdAn9gcO5Wnj-Z2aqLEMHQ8rp0k9HQlkctY6HU5GqW7fB6gLdwjw5eSKtGNpqDhhB_m3Opr2vVMEvKudTqmNc7hhC_V8XbW36yU",
  },
  {
    id: 3,
    title: "Premium Stay",
    category: "Accommodations",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMakWnZcUsB2wqjn7Z8TuOLcYLA9wuWre215J1hwiXDgrBFYhESC_2sdnMLb0tF9KXaJUMhHWCQ0RoLcIbji3elBGlyTH_5K9GIl042hHmx4XetuEjzUfVb1eaAkRinG5sSuFSU-RC_q67RHalPyHRauW3Jlg1Wc1Hjpz9vLCEnGK1gPAWHuFEefxPS39p4v42gkMJG5H-d_UScJpwF0lNS2IIWHx4ifdJCDuknaTw_ikSlM5LMNdTbN3UHM3r7fQ9wHLTOl_WTvs",
  },
  {
    id: 4,
    title: "Ziyarat Journey",
    category: "Spiritual Tours",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAScswygsJowyIChm4PPHjk12km8XI85M5HrOEpqNBxwML80iFGmitmBPBgOhUfb9CMgvpT6G8XQ9CfW1L110nob2WeE6Kr-EyWE6STAiqPsbu8UbAjNzo8fNBIBycOMCk2KrecU0kVyC3sHI3OgtuGgatB9OGtEnOCIm6mp47lf2STpahe-pLnMzs4DZshLUc6-T1dkbiG6mMEcsN7BJUFb1qgxXJLhpvCfyVyYgwz1nf2u5zKiLQaj9f_TmQXwt7lBHJL0CqBvw",
  }
];

const PilgrimGallery: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 sm:py-32 bg-[#FCFBF7] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A54C]/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 text-[#C9A54C] mb-4">
              <Camera className="w-5 h-5" />
              <span className="font-black text-[10px] uppercase tracking-[0.3em]">Pilgrim Gallery</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1A1305] mb-6 leading-tight">
              Moments from <span className="text-[#C9A54C]">Our Pilgrims</span>
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed italic">
              "Witness the spiritual transition of our blessed pilgrims through real experiences."
            </p>
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            onClick={() => navigate('/reviews')}
            className="bg-[#1A1305] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#C9A54C] transition-all flex items-center gap-3 shadow-2xl group"
          >
            See Reviews & Photos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-[400px]"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1305]/90 via-[#1A1305]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 text-[#C9A54C] mb-2">
                  <Star className="w-3 h-3 fill-[#C9A54C]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{item.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <div className="flex items-center gap-1.5 text-white/70 text-[10px] font-bold">
                    <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                    BLESSED EXPERIENCE
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilgrimGallery;
