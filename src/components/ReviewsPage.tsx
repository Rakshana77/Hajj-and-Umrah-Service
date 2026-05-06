import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Play, 
  Maximize2, 
  X, 
  MessageCircle, 
  Camera, 
  Video, 
  ArrowRight,
  Loader2
} from 'lucide-react';
import { getReviews } from '../services/dataService';

// Import existing assets
import man1 from '../assets/reviews/man1.png';
import woman1 from '../assets/reviews/woman1.png';
import group1 from '../assets/reviews/group1.png';
import man2 from '../assets/reviews/man2.png';
import group2 from '../assets/reviews/group2.png';

interface Review {
  id: string | number;
  name: string;
  location: string;
  rating: number;
  type: 'video' | 'photo';
  isExternal?: boolean;
  content: string;
  mediaUrl: string;
  thumbnail?: string;
  date: string;
}

// Helper function to transform URLs
const getEmbedUrl = (url: string) => {
  if (!url) return '';
  
  // YouTube transformation
  if (url.includes('youtube.com/watch?v=')) {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  return url;
};

const staticReviews: Review[] = [
  {
    id: 1,
    name: "Abdul Rahman",
    location: "Chennai",
    rating: 5,
    type: 'video',
    content: "Very well organized Umrah trip, Alhamdulillah. The guidance was exceptional.",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-muslim-man-praying-in-a-mosque-42240-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Fatima Begum",
    location: "Madurai",
    rating: 5,
    type: 'photo',
    content: "Best guidance throughout the journey. Everything was so peaceful.",
    mediaUrl: group1,
    date: "Feb 2024"
  },
  {
    id: 3,
    name: "Mohammad Yusuf",
    location: "Trichy",
    rating: 5,
    type: 'video',
    content: "The spiritual experience was beyond words. Highly recommended service.",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-climax-of-a-person-praying-in-a-mosque-42242-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=800",
    date: "Jan 2024"
  },
  {
    id: 4,
    name: "Zoya Fatima",
    location: "Bangalore",
    rating: 5,
    type: 'photo',
    content: "A truly blessed experience. The hotel was very close to Haram.",
    mediaUrl: woman1,
    date: "April 2024"
  },
  {
    id: 5,
    name: "Ibrahim Ali",
    location: "Hyderabad",
    rating: 5,
    type: 'video',
    content: "JazakAllah for the amazing arrangements. Everything was perfect.",
    mediaUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-praying-in-a-mosque-42241-large.mp4",
    thumbnail: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=800",
    date: "Dec 2023"
  },
  {
    id: 6,
    name: "Sara Siddiqui",
    location: "Coimbatore",
    rating: 5,
    type: 'photo',
    content: "The group leaders were very supportive. Best Umrah agency.",
    mediaUrl: group2,
    date: "Nov 2023"
  },
  {
    id: 7,
    name: "Ahmed Khan",
    location: "Mumbai",
    rating: 5,
    type: 'photo',
    content: "Smooth visa processing and excellent accommodation.",
    mediaUrl: man1,
    date: "May 2024"
  },
  {
    id: 8,
    name: "Omar Farooq",
    location: "Kerala",
    rating: 5,
    type: 'photo',
    content: "The food was great and the transport was very comfortable.",
    mediaUrl: man2,
    date: "Oct 2023"
  },
  {
    id: 9,
    name: "Haji Experience",
    location: "Holy Makkah",
    rating: 5,
    type: 'video',
    isExternal: true,
    content: "A soul-stirring glimpse of the blessed journey. SubhanAllah!",
    mediaUrl: "https://www.instagram.com/reel/DXLoydPD4BM/embed/",
    thumbnail: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=1200",
    date: "June 2024"
  },
  {
    id: 10,
    name: "Blessed Journey",
    location: "Madinah Munawwarah",
    rating: 5,
    type: 'video',
    isExternal: true,
    content: "The most beautiful moments captured during our spiritual journey. A truly life-changing experience.",
    mediaUrl: "https://www.youtube.com/embed/iS6U-Qezm1o",
    thumbnail: "https://img.youtube.com/vi/iS6U-Qezm1o/maxresdefault.jpg",
    date: "July 2024"
  }
];

const ReviewsPage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'video' | 'photo'>('all');
  const [selectedMedia, setSelectedMedia] = useState<Review | null>(null);
  const [hoveredVideo, setHoveredVideo] = useState<string | number | null>(null);
  const [dynamicReviews, setDynamicReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews();
        if (data && data.length > 0) {
          setDynamicReviews(data as any);
        } else {
          setDynamicReviews(staticReviews);
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setDynamicReviews(staticReviews);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  const filteredReviews = useMemo(() => {
    return filter === 'all' ? dynamicReviews : dynamicReviews.filter(r => r.type === filter);
  }, [filter, dynamicReviews]);

  return (
    <main className="bg-[#FCFBF7] min-h-screen pt-20 overflow-x-hidden">
      {/* Header Section */}
      <section className="relative py-24 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 islamic-pattern" />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#064E3B]/10 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4C430]/10 border border-[#F4C430]/20 text-[#F4C430] text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Trusted by 10,000+ Pilgrims</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-7xl font-display font-bold text-[#111827] mb-6 leading-tight"
          >
            Hajis <span className="text-[#F4C430]">Reviews</span> & <br className="hidden sm:block" />
            <span className="relative">
              Experiences
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F4C430]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neutral-600 text-lg sm:text-2xl max-w-2xl mx-auto"
          >
            Real experiences from our blessed pilgrims. Stories of faith, transition, and divine connection.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-24">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {[
            { id: 'all', label: 'All Reviews', icon: MessageCircle },
            { id: 'video', label: 'Video Stories', icon: Video },
            { id: 'photo', label: 'Photo Moments', icon: Camera }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === tab.id 
                  ? 'bg-[#064E3B] text-white shadow-lg' 
                  : 'bg-white text-neutral-500 hover:bg-neutral-100'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Video Section */}
        {(filter === 'all' || filter === 'video') && (
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-grow bg-neutral-200" />
              <h2 className="text-2xl font-display font-bold text-neutral-900 flex items-center gap-2">
                <Video className="text-[#F4C430]" /> Video Testimonials
              </h2>
              <div className="h-px flex-grow bg-neutral-200" />
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="text-[#F4C430] animate-spin" size={40} />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredReviews.filter(r => r.type === 'video').map((review) => (
                  <motion.div
                    key={review.id}
                    className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl border border-neutral-100"
                    onMouseEnter={() => setHoveredVideo(review.id)}
                    onMouseLeave={() => setHoveredVideo(null)}
                    onClick={() => setSelectedMedia(review)}
                  >
                    <div className="aspect-video relative overflow-hidden bg-neutral-900">
                      <img 
                        src={review.thumbnail || review.mediaUrl} 
                        alt={review.name} 
                        className={`w-full h-full object-cover transition-opacity duration-300 ${hoveredVideo === review.id ? 'opacity-0' : 'opacity-100'}`}
                      />
                      {hoveredVideo === review.id && !review.isExternal && (
                        <video src={review.mediaUrl} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-[#F4C430] flex items-center justify-center text-white shadow-2xl">
                          <Play className="w-8 h-8 fill-current ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h4 className="font-bold text-xl">{review.name}</h4>
                        <p className="text-xs uppercase tracking-wider">{review.location}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-neutral-600 text-sm italic italic leading-relaxed">"{review.content}"</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Photo Section */}
        {(filter === 'all' || filter === 'photo') && (
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-grow bg-neutral-200" />
              <h2 className="text-2xl font-display font-bold text-neutral-900 flex items-center gap-2">
                <Camera className="text-[#F4C430]" /> Captured Moments
              </h2>
              <div className="h-px flex-grow bg-neutral-200" />
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredReviews.filter(r => r.type === 'photo').map((review) => (
                <motion.div
                  key={review.id}
                  className="relative group cursor-zoom-in rounded-3xl overflow-hidden shadow-lg"
                  onClick={() => setSelectedMedia(review)}
                >
                  <img src={review.mediaUrl} alt={review.name} className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <p className="text-white/60 text-xs">{review.location}</p>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mt-4">
                      <Maximize2 className="text-white w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-10 py-4 bg-white border-2 border-neutral-200 rounded-full text-neutral-900 font-black uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-all">
            Load More Experiences
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
          >
            <button onClick={() => setSelectedMedia(null)} className="absolute top-6 right-6 text-white"><X size={32} /></button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center">
              <div className="w-full h-full max-h-[80vh] rounded-[2rem] overflow-hidden bg-neutral-900 shadow-2xl relative">
                {selectedMedia.type === 'video' ? (
                  selectedMedia.isExternal ? (
                    <iframe src={getEmbedUrl(selectedMedia.mediaUrl)} className="w-full h-full border-0" allowFullScreen />
                  ) : (
                    <video src={selectedMedia.mediaUrl} className="w-full h-full object-contain" controls autoPlay />
                  )
                ) : (
                  <img src={selectedMedia.mediaUrl} alt={selectedMedia.name} className="w-full h-full object-contain" />
                )}
              </div>
              <div className="mt-8 text-center text-white">
                <h3 className="text-2xl font-bold">{selectedMedia.name} — {selectedMedia.location}</h3>
                <p className="text-white/80 italic mt-2">"{selectedMedia.content}"</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ReviewsPage;
