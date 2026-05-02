import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageCircle, Camera, CheckCircle2, Calendar, Quote } from 'lucide-react';

import man1 from '../assets/reviews/man1.png';
import woman1 from '../assets/reviews/woman1.png';
import group1 from '../assets/reviews/group1.png';
import man2 from '../assets/reviews/man2.png';
import group2 from '../assets/reviews/group2.png';

interface Review {
  id: number;
  name: string;
  rating: number;
  package: string;
  type: 'Umrah' | 'Hajj';
  date: string;
  comment: string;
  avatar?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Ahmed Khan",
    rating: 5,
    package: "Ramadan Special",
    type: "Umrah",
    date: "April 2024",
    comment: "An absolutely spiritual journey that was managed with extreme care. The hotel was very close to the Haram, and the food reminded us of home. JazakAllah to the team for making this a memory of a lifetime.",
    avatar: man1
  },
  {
    id: 2,
    name: "Zoya Fatima",
    rating: 5,
    package: "Deluxe Hajj 2023",
    type: "Hajj",
    date: "June 2023",
    comment: "Highly organized Hajj management. The group leaders were always available, especially during the stay in Mina and Arafat. The air-conditioned tents and quality catering made a huge difference.",
    avatar: woman1
  },
  {
    id: 3,
    name: "Mohammad Yusuf",
    rating: 5,
    package: "Economy Umrah",
    type: "Umrah",
    date: "February 2024",
    comment: "Very transparent pricing and excellent value. Even in the economy package, the transport was very comfortable. The scholar leading our group was very knowledgeable.",
    avatar: man2
  },
  {
    id: 4,
    name: "Sara Siddiqui",
    rating: 5,
    package: "Premium Family Umrah",
    type: "Umrah",
    date: "December 2023",
    comment: "Traveling with kids and elders can be tough, but the customized support we received was amazing. The wheelchair assistance and buffet catering were top-notch.",
    avatar: woman1
  },
  {
    id: 5,
    name: "Ibrahim Ali",
    rating: 5,
    package: "Standard Hajj",
    type: "Hajj",
    date: "July 2023",
    comment: "Professional from start to finish. The pre-departure orientation was very helpful. Everything promised in the brochure was delivered. Highly recommend for first-timers.",
    avatar: man1
  }
];

const galleryImages = [
  group1,
  group2,
  man1,
  man2,
  woman1,
  group1
];

const ReviewsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Umrah' | 'Hajj'>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredReviews = useMemo(() => {
    return activeFilter === 'All' ? reviews : reviews.filter(r => r.type === activeFilter);
  }, [activeFilter]);

  const stats = {
    average: 4.9,
    total: 1240,
    breakdown: [
      { stars: 5, percentage: 85 },
      { stars: 4, percentage: 10 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 },
    ]
  };

  return (
    <main className="bg-neutral-50 min-h-screen pt-32 sm:pt-40 pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden mb-16 sm:mb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf6Qc_zCiI6TJ375gCkSZh4sGYrPPiDe6VYf94i5Edqpr9NC7oJdX1-xaa196kWznKrUp-9sYGF5w7Uhdzw_jLE_GERpzaIIp1j6n3lhEC0MCd98_9HyqZDvzFjSrZy_9meFLbiRID7JJurkYW-crAZeN52Vmljy61r1M558CBpkiXOqVATrcIQ90BvswNS8BTTARS54tOjnMSRF7wNDmDLMtsln7IvsGGv3AZhjbUeU71xUzVXDjCG-yWwwfl023TvIQdww5OIY" 
            className="w-full h-full object-cover opacity-40"
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/40 to-neutral-50" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#F4C430] font-black text-[10px] sm:text-xs uppercase tracking-[0.4em] mb-4 block"
          >
            Trusted by Thousands
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-bold text-white mb-6"
          >
            Pilgrim <span className="text-[#F4C430]">Experiences</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 text-sm sm:text-xl max-w-2xl mx-auto italic"
          >
            "Real stories of spiritual transition and divine connection from our blessed pilgrims."
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Stats & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-20 sm:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl border border-neutral-100 flex flex-col items-center justify-center text-center sticky top-32 h-fit"
          >
            <div className="text-6xl sm:text-7xl font-black text-neutral-900 mb-4">{stats.average}</div>
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className={`w-6 h-6 ${i <= 5 ? 'fill-[#F4C430] text-[#F4C430]' : 'text-neutral-200'}`} />
              ))}
            </div>
            <div className="text-neutral-500 font-bold text-sm uppercase tracking-widest mb-8">
              Based on {stats.total}+ Reviews
            </div>
            
            <div className="w-full space-y-4">
              {stats.breakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-4 text-xs">
                  <div className="w-4 font-bold text-neutral-400">{row.stars}★</div>
                  <div className="flex-grow h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-[#F4C430]"
                    />
                  </div>
                  <div className="w-8 text-right font-bold text-neutral-600">{row.percentage}%</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-8 space-y-8 sm:space-y-12">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4 sm:gap-6 border-b border-neutral-100 pb-6 sm:pb-8">
              {['All', 'Umrah', 'Hajj'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab as any)}
                  className={`text-sm sm:text-base font-black uppercase tracking-widest transition-all relative pb-2 ${activeFilter === tab ? 'text-[#F4C430]' : 'text-neutral-400 hover:text-neutral-900'}`}
                >
                  {tab} Reviews
                  {activeFilter === tab && (
                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-[#F4C430] rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Reviews List */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {filteredReviews.map((review, i) => (
                  <motion.div
                    key={review.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white p-6 sm:p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all border border-neutral-100 relative group"
                  >
                    <div className="absolute top-8 right-8 text-neutral-100 group-hover:text-[#F4C430]/10 transition-colors">
                      <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-neutral-100 ring-4 ring-[#F4C430]/10 shrink-0">
                        <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-lg sm:text-xl text-neutral-900">{review.name}</h4>
                          <CheckCircle2 className="w-4 h-4 text-[#F4C430]" />
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star key={star} className={`w-3 h-3 sm:w-4 sm:h-4 ${star <= review.rating ? 'fill-[#F4C430] text-[#F4C430]' : 'text-neutral-200'}`} />
                            ))}
                          </div>
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#F4C430] bg-[#F4C430]/10 px-3 py-1 rounded-full">
                            {review.package}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-600 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 relative z-10 font-medium">
                      "{review.comment}"
                    </p>

                    <div className="flex items-center gap-6 pt-6 sm:pt-8 border-t border-neutral-50 text-[10px] sm:text-xs text-neutral-400 font-bold uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F4C430]" />
                        {review.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F4C430]" />
                        Verified Pilgrimage
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Experience Gallery */}
        <section className="mb-20 sm:mb-32">
          <div className="text-center mb-12 sm:mb-20">
            <div className="flex items-center justify-center gap-3 text-[#F4C430] mb-4">
              <Camera className="w-6 h-6" />
              <span className="font-black text-[10px] sm:text-xs uppercase tracking-[0.4em]">Visual Journeys</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-neutral-900 mb-6">Real <span className="text-[#F4C430]">Pilgrim Gallery</span></h2>
            <p className="text-neutral-500 text-sm sm:text-lg max-w-2xl mx-auto italic">
              "Captured moments of spiritual bliss and brotherhood from our previous groups."
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedImage(src)}
                className="aspect-square rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden cursor-zoom-in shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <img 
                  src={src} 
                  alt="Gallery" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] bg-neutral-900/95 backdrop-blur-xl p-4 sm:p-10 flex items-center justify-center cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video sm:aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-3xl"
            >
              <img src={selectedImage} alt="Fullscreen" className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ReviewsPage;
