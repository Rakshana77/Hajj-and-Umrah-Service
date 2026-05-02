import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, Star, MapPin, Clock, Plane, Hotel, Utensils, 
  Car, History, Calendar, Phone, CheckCircle2, ShieldCheck, 
  Info, AlertCircle, Share2, Heart
} from 'lucide-react';
import { packages } from '../data/packages';

const PackageDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pkg = packages.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <div className="bg-red-50 p-6 rounded-full mb-6">
          <AlertCircle className="w-12 h-12 text-red-500" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Package Not Found</h1>
        <p className="text-neutral-500 mb-8 max-w-md">
          The package you are looking for might have been removed or the link is incorrect.
        </p>
        <button 
          onClick={() => navigate('/packages')}
          className="bg-neutral-900 text-white px-8 py-4 rounded-xl font-bold"
        >
          Back to Packages
        </button>
      </div>
    );
  }

  const relatedPackages = packages
    .filter(p => p.id !== pkg.id && (p.category === pkg.category || p.type === pkg.type))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="p-1.5 sm:p-2 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm text-neutral-500 overflow-hidden">
            <Link to="/" className="hover:text-neutral-900 whitespace-nowrap">Home</Link>
            <span>/</span>
            <Link to="/packages" className="hover:text-neutral-900 whitespace-nowrap">Packages</Link>
            <span>/</span>
            <span className="text-neutral-900 font-bold truncate">{pkg.name}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            {/* Hero Section */}
            <section className="relative rounded-[1.5rem] sm:rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] sm:aspect-[16/9] w-full">
                <img 
                  src={pkg.bannerImage} 
                  alt={pkg.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-12">
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-3 sm:mb-4">
                  {pkg.popular && (
                    <span className="bg-[#F4C430] text-black px-3 sm:px-4 py-1 rounded-full text-[9px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-black" />
                      Most Popular
                    </span>
                  )}
                  <span className="bg-white/20 backdrop-blur-md text-white px-3 sm:px-4 py-1 rounded-full text-[9px] sm:text-xs font-bold uppercase tracking-wider">
                    {pkg.category} Package
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-3 sm:mb-4">
                  {pkg.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/90 text-xs sm:text-base">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#F4C430]" />
                    {pkg.distance}m from Haram
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#F4C430]" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-[#F4C430]" />
                    {pkg.departureCity}
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Actions (Mobile Only) */}
            <div className="lg:hidden grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-4 border border-neutral-100 rounded-xl font-bold">
                <Heart className="w-5 h-5" /> Save
              </button>
              <button className="flex items-center justify-center gap-2 py-4 border border-neutral-100 rounded-xl font-bold">
                <Share2 className="w-5 h-5" /> Share
              </button>
            </div>

            {/* Overview */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
                <Info className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4C430]" />
                Package Overview
              </h2>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-lg">
                {pkg.fullDescription}
              </p>
            </section>

            {/* Inclusions Grid */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4C430]" />
                What's Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { icon: Plane, label: 'Visa Support', value: pkg.inclusions.visa },
                  { icon: Hotel, label: 'Accommodation', value: `Makkah: ${pkg.inclusions.hotelMakkah}` },
                  { icon: MapPin, label: 'Proximity', value: pkg.inclusions.distanceHaram },
                  { icon: Utensils, label: 'Food & Dining', value: pkg.inclusions.food },
                  { icon: Car, label: 'Transport', value: pkg.inclusions.transport },
                  { icon: History, label: 'Ziyarat', value: pkg.inclusions.ziyarat },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 sm:p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4C430]" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900 mb-1 text-sm sm:text-base">{item.label}</p>
                      <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Gallery */}
            {pkg.gallery.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-8">Accommodation Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {pkg.gallery.map((img, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.02 }}
                      className="aspect-square rounded-2xl overflow-hidden cursor-zoom-in"
                    >
                      <img src={img} alt="Gallery" className="w-full h-full object-cover" loading="lazy" />
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Important Info */}
            <section className="bg-[#FFF9E6] p-8 rounded-3xl border border-[#F4C430]/20">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-[#F4C430]" />
                Important Information
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4C430] shrink-0 mt-1" />
                  <p className="text-neutral-700">Rates are subject to change based on actual dates and availability.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4C430] shrink-0 mt-1" />
                  <p className="text-neutral-700">Passport must be valid for at least 6 months from the date of travel.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F4C430] shrink-0 mt-1" />
                  <p className="text-neutral-700">Cancellation policies apply as per Saudi Ministry of Hajj & Umrah.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar (Right Column) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-2xl relative overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 100 100">
                    <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="currentColor" />
                  </svg>
                </div>

                <div className="mb-6 sm:mb-8">
                  <p className="text-neutral-500 font-bold text-[10px] uppercase tracking-widest mb-1 sm:mb-2">Starting from</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-5xl font-black text-neutral-900">₹{pkg.price.toLocaleString()}</span>
                    <span className="text-xs sm:text-sm text-neutral-400 font-medium">/ person</span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <button className="w-full bg-[#F4C430] text-black py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#F4C430]/20 flex items-center justify-center gap-3">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                    Book Now
                  </button>
                  <a 
                    href={`https://wa.me/918048102586?text=I'm interested in the ${pkg.name} package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-neutral-900 text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-neutral-800 transition-all flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    WhatsApp Enquiry
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-50 flex items-center justify-between">
                  <div className="flex -space-x-2 sm:-space-x-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] sm:text-xs text-neutral-400 font-medium">
                    <span className="text-neutral-900 font-bold">48 people</span> booked this month
                  </p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-neutral-50 rounded-2xl border border-neutral-100 flex flex-col items-center text-center">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4C430] mb-2" />
                  <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">Secured Booking</p>
                </div>
                <div className="p-3 sm:p-4 bg-neutral-50 rounded-2xl border border-neutral-100 flex flex-col items-center text-center">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4C430] mb-2" />
                  <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">Top Rated Guide</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Packages */}
        <section className="mt-24">
          <h2 className="text-3xl font-display font-bold mb-12">Related Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPackages.map(p => (
              <Link to={`/packages/${p.id}`} key={p.id} className="group">
                <div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all h-full">
                  <div className="h-48 overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-[#F4C430] transition-colors">{p.name}</h3>
                    <p className="text-2xl font-black text-neutral-900 mb-4">₹{p.price.toLocaleString()}</p>
                    <div className="flex items-center gap-4 text-xs text-neutral-400 font-bold uppercase tracking-widest">
                      <span>{p.type}</span>
                      <span>•</span>
                      <span>{p.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PackageDetailPage;
