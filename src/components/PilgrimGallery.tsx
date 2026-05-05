import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, ArrowRight, Star, Play, Video } from 'lucide-react';

// Import local assets for stability
import group1 from '../assets/reviews/group1.png';
import group2 from '../assets/reviews/group2.png';
import man1 from '../assets/reviews/man1.png';
import woman1 from '../assets/reviews/woman1.png';
import man2 from '../assets/reviews/man2.png';

// Import newly generated authentic gallery assets
import madinahImg from '../assets/gallery/madinah.png';
import kaabaImg from '../assets/gallery/kaaba.png';
import devotionImg from '../assets/gallery/devotion.png';
import brotherhoodImg from '../assets/gallery/brotherhood.png';

const galleryImages = [
  {
    id: 1,
    title: "Blessed Group at Kaaba",
    category: "Makkah",
    image: group1,
    type: 'photo'
  },
  {
    id: 2,
    title: "Prophet's Mosque Peace",
    category: "Madinah",
    image: madinahImg,
    type: 'video'
  },
  {
    id: 3,
    title: "Elderly Pilgrim Grace",
    category: "Experience",
    image: devotionImg,
    type: 'photo'
  },
  {
    id: 4,
    title: "Sisterhood in Madinah",
    category: "Madinah",
    image: group2,
    type: 'video'
  },
  {
    id: 5,
    title: "Spiritual Transition",
    category: "Pilgrim Stories",
    image: woman1,
    type: 'photo'
  },
  {
    id: 6,
    title: "Haram Sharif Majesty",
    category: "Makkah",
    image: kaabaImg,
    type: 'video'
  },
  {
    id: 7,
    title: "Devotion in Prayer",
    category: "Experience",
    image: man2,
    type: 'photo'
  },
  {
    id: 8,
    title: "Universal Brotherhood",
    category: "Community",
    image: brotherhoodImg,
    type: 'video'
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
            See Reviews & Videos
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
              onClick={() => navigate('/reviews')}
              className="group relative rounded-[2rem] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-[400px] cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Type Indicator */}
              <div className="absolute top-6 right-6 z-20">
                {item.type === 'video' ? (
                  <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                    <Video className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                    <Camera className="w-5 h-5" />
                  </div>
                )}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1305]/95 via-[#1A1305]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Play Button for Video Type */}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                  <div className="w-16 h-16 rounded-full bg-[#C9A54C] flex items-center justify-center text-[#1A1305] shadow-2xl">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
              )}

              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 text-[#C9A54C] mb-2">
                  <Star className="w-3 h-3 fill-[#C9A54C]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">{item.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{item.title}</h3>
                
                <div className="flex items-center gap-2 text-[#C9A54C] text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500">
                  View Experience <ArrowRight className="w-3 h-3" />
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
