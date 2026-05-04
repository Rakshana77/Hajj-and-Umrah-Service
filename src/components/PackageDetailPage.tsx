import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, Star, MapPin, Clock, Plane, Hotel, Utensils, 
  Car, History, Calendar, Phone, CheckCircle2, ShieldCheck, 
  Info, AlertCircle, Share2, Heart, Loader2, MessageCircle, Building
} from 'lucide-react';
import { getPackages } from '../services/dataService';

const PackageDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pkg, setPkg] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPackages, setRelatedPackages] = useState<any[]>([]);

  const defaultPackages = [
    {
      id: 'economy-umrah',
      title: 'Economy Umrah Package',
      price: '₹88,000',
      journeyType: 'Umrah',
      serviceClass: 'Budget',
      proximity: '600m+',
      duration: 15,
      description: 'Affordable package with essential services for pilgrims seeking a spiritual journey on a budget. This package includes direct flights from Chennai, comfortable 3-star hotel accommodations in both Makkah and Madinah, and comprehensive visa processing.',
      includes: ['Direct Flight', '3-Star Hotel', 'Visa Processing', 'Indian Food', 'Transport', 'Laundry Service', 'Ziyarat Tours'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMakWnZcUsB2wqjn7Z8TuOLcYLA9wuWre215J1hwiXDgrBFYhESC_2sdnMLb0tF9KXaJUMhHWCQ0RoLcIbji3elBGlyTH_5K9GIl042hHmx4XetuEjzUfVb1eaAkRinG5sSuFSU-RC_q67RHalPyHRauW3Jlg1Wc1Hjpz9vLCEnGK1gPAWHuFEefxPS39p4v42gkMJG5H-d_UScJpwF0lNS2IIWHx4ifdJCDuknaTw_ikSlM5LMNdTbN3UHM3r7fQ9wHLTOl_WTvs'
    },
    {
      id: 'deluxe-umrah',
      title: 'Deluxe Royal Umrah',
      price: 105000,
      journeyType: 'Umrah',
      serviceClass: 'Deluxe',
      proximity: '0-200m',
      duration: 15,
      description: 'Comfortable stay with upgraded facilities and closer proximity to the Harams. Experience a worry-free pilgrimage with our premium flights, 4-star luxury accommodations, and gourmet Indian meals prepared daily by our expert chefs.',
      includes: ['Premium Flight', '4-Star Hotel', 'Luxury Transport', 'Gourmet Indian Meals', 'Ziyarat included', 'Private Guided Umrah', 'Welcome Gift Kit'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf6Qc_zCiI6TJ375gCkSZh4sGYrPPiDe6VYf94i5Edqpr9NC7oJdX1-xaa196kWznKrUp-9sYGF5w7Uhdzw_jLE_GERpzaIIp1j6n3lhEC0MCd98_9HyqZDvzFjSrZy_9meFLbiRID7JJurkYW-crAZeN52Vmljy61r1M558CBpkiXOqVATrcIQ90BvswNS8BTTARS54tOjnwMSRF7wNDmDLMtsln7IvsGGv3AZhjbUeU71xUzVXDjCG-yWwwfl023TvIQdww5OIY'
    },
    {
      id: 'premium-umrah',
      title: '3 Umrah + Ziyara Premium',
      price: 120000,
      journeyType: 'Umrah',
      serviceClass: 'Premium',
      proximity: '200-600m',
      duration: 23,
      description: 'Premium experience with multiple Umrah opportunities and comprehensive guided Ziyara. Our flagship package offers 5-star hotel stays within steps of the Haram, VIP ground services, and full spiritual guidance from our experienced scholars.',
      includes: ['Business Class Option', '5-Star Hotel', 'VIP Service', 'Full Spiritual Guide', 'Exclusive Ziyarat', 'Luxury Private Transport', '5-Star Buffet Meals'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEw4gl2Oc7NH1wSl-cpeWOpt7BFun8a44Nyh26hB7QsjlSTUEJFG5EzIeHzi42InBu0zMJ_rlAC5jk2PZkeXM0uKiOr5-TbSBP1tYDZmQqIpzq0TxZWiID6UTliYXVaTGORQzMoFmDZrXoj2pm3k3x01D0O55Cg7tdqWIdTaooTzT5PgB3z8h3CRsexc0o7xw2-RmvCfmLzwvHeOSc4rUpud_Wr-UKaERbyGOrc7dxzUE-lSnIg6Zx7iVScYMpW5MP6KAEmsewSKc'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPkg = async () => {
      try {
        let allPkgs = await getPackages();
        if (!allPkgs || allPkgs.length === 0) {
          allPkgs = defaultPackages;
        }
        
        const foundPkg = allPkgs.find(p => p.id === id);
        if (foundPkg) {
          setPkg(foundPkg);
          const related = allPkgs
            .filter(p => p.id !== id && (p.journeyType === foundPkg.journeyType))
            .slice(0, 3);
          setRelatedPackages(related);
        }
      } catch (err) {
        console.error("Error fetching package:", err);
        const foundPkg = defaultPackages.find(p => p.id === id);
        if (foundPkg) setPkg(foundPkg);
      } finally {
        setLoading(false);
      }
    };
    fetchPkg();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FCFBF7]">
        <Loader2 className="text-[#C9A54C] animate-spin mb-4" size={48} />
        <p className="text-neutral-500 font-medium italic text-lg">Preparing sacred details...</p>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-[#FCFBF7]">
        <div className="bg-red-50 p-10 rounded-full mb-8 shadow-inner">
          <AlertCircle className="w-16 h-16 text-red-500" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-[#1A1305]">Package Not Found</h1>
        <p className="text-neutral-500 mb-10 max-w-md italic">
          The journey you are looking for might have been moved or is currently unavailable.
        </p>
        <button 
          onClick={() => navigate('/packages')}
          className="bg-[#1A1305] text-[#C9A54C] px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl"
        >
          Explore All Journeys
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FCFBF7] pt-24 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-4 mb-10">
          <button 
            onClick={() => navigate(-1)}
            className="w-12 h-12 bg-white border border-neutral-100 rounded-full flex items-center justify-center hover:bg-[#C9A54C] hover:text-white transition-all shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-3 text-[10px] sm:text-xs font-black uppercase tracking-widest text-neutral-400">
            <Link to="/" className="hover:text-[#1A1305]">Home</Link>
            <span>/</span>
            <Link to="/packages" className="hover:text-[#1A1305]">Packages</Link>
            <span>/</span>
            <span className="text-[#C9A54C] truncate">{pkg.title}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-8 space-y-12 sm:space-y-16">
            {/* Hero Section */}
            <section className="relative rounded-[3rem] overflow-hidden shadow-2xl border-b-8 border-[#C9A54C]">
              <div className="aspect-[16/9] w-full">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1305]/95 via-[#1A1305]/30 to-transparent flex flex-col justify-end p-8 sm:p-16">
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-[#C9A54C] text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    {pkg.serviceClass} Class
                  </span>
                  <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                    <MapPin className="w-3.5 h-3.5" />
                    {pkg.proximity} to Haram
                  </span>
                </div>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  {pkg.title}
                </h1>
                <div className="flex flex-wrap items-center gap-10 text-white/90">
                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-[#C9A54C]" />
                    <span className="font-bold text-xl uppercase">{pkg.duration} Days</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {pkg.journeyType === 'Umrah' ? <Building className="w-8 h-8 text-[#C9A54C]" /> : <Plane className="w-8 h-8 text-[#C9A54C]" />}
                    <span className="font-bold text-xl uppercase">{pkg.journeyType}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Details Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { icon: Plane, label: 'Journey', value: pkg.journeyType },
                    { icon: Star, label: 'Service', value: pkg.serviceClass },
                    { icon: MapPin, label: 'Proximity', value: pkg.proximity },
                    { icon: Clock, label: 'Duration', value: `${pkg.duration} Days` }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-6 rounded-[2rem] border border-neutral-100 shadow-xl text-center flex flex-col items-center">
                        <item.icon className="w-6 h-6 text-[#C9A54C] mb-3" />
                        <p className="text-[9px] font-black text-neutral-400 uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-[#1A1305] font-bold text-sm">{item.value}</p>
                    </div>
                ))}
            </div>

            {/* Overview */}
            <section className="bg-white p-10 sm:p-16 rounded-[3rem] border border-neutral-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-10 w-24 h-2 bg-[#C9A54C] rounded-b-full shadow-lg shadow-[#C9A54C]/40" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-4 text-[#1A1305]">
                <Info className="w-8 h-8 text-[#C9A54C]" />
                Package Description
              </h2>
              <p className="text-neutral-500 leading-relaxed text-lg italic">
                {pkg.description}
              </p>
            </section>

            {/* Inclusions Grid */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-10 flex items-center gap-4 text-[#1A1305]">
                <ShieldCheck className="w-8 h-8 text-[#C9A54C]" />
                Included Privileges
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pkg.includes?.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-6 p-6 bg-white rounded-[2rem] border border-neutral-100 shadow-lg hover:border-[#C9A54C]/30 transition-all group hover:bg-[#FCFBF7]">
                    <div className="w-14 h-14 bg-[#FCFBF7] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#C9A54C] transition-all shadow-md group-hover:shadow-[#C9A54C]/30">
                      <CheckCircle2 className="w-7 h-7 text-[#C9A54C] group-hover:text-white" />
                    </div>
                    <span className="font-bold text-[#1A1305] text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Important Info */}
            <section className="bg-[#1A1305] p-10 sm:p-16 rounded-[3rem] relative overflow-hidden shadow-3xl">
               <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-10 flex items-center gap-4 text-white relative z-10">
                <AlertCircle className="w-8 h-8 text-[#C9A54C]" />
                Essential Guidelines
              </h2>
              <div className="space-y-6 relative z-10">
                {[
                  'Rates are subject to seasonal changes and availability.',
                  'Passport must be valid for minimum 6 months from departure.',
                  'Cancellation follows Saudi Ministry of Hajj & Umrah policy.',
                  'All local transportation and guide services included.'
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 group">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A54C] shrink-0" />
                    <p className="text-neutral-400 font-medium group-hover:text-white transition-colors">{text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Sidebar (Right Column) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white p-12 rounded-[3.5rem] border border-neutral-100 shadow-3xl relative overflow-hidden">
                <div className="mb-12 text-center">
                  <p className="text-neutral-400 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Investment for Journey</p>
                  <div className="flex flex-col items-center">
                    <span className="text-6xl font-black text-[#1A1305] mb-2 tracking-tight">
                        {typeof pkg.price === 'number' ? `₹${pkg.price.toLocaleString()}` : pkg.price}
                    </span>
                    <span className="text-xs text-neutral-400 font-bold uppercase tracking-[0.2em]">Full Journey Price</span>
                  </div>
                </div>

                <div className="space-y-5">
                  <a 
                    href={`https://wa.me/918123379158?text=I'm interested in the ${pkg.title} package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#1A1305] text-[#C9A54C] py-7 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-[#C9A54C] hover:text-white transition-all flex items-center justify-center gap-5 shadow-2xl shadow-[#1A1305]/20 active:scale-95"
                  >
                    <MessageCircle className="w-7 h-7" />
                    WhatsApp Booking
                  </a>
                  <Link 
                    to="/contact"
                    className="w-full bg-[#FCFBF7] text-[#1A1305] border-2 border-neutral-100 py-7 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:border-[#C9A54C] transition-all flex items-center justify-center gap-5 active:scale-95 shadow-lg"
                  >
                    <Phone className="w-6 h-6" />
                    Enquire via Call
                  </Link>
                </div>

                <div className="mt-12 pt-12 border-t border-neutral-100 text-center">
                  <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-4 italic">Guided by</p>
                  <p className="text-[#1A1305] font-black text-2xl tracking-tight">J. Dasthagir Basha</p>
                  <p className="text-neutral-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Principal Guide & Admin</p>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 gap-4">
                <div className="p-10 bg-[#1A1305] rounded-[2.5rem] flex items-center gap-8 shadow-2xl group overflow-hidden relative">
                   <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />
                  <div className="w-16 h-16 bg-[#C9A54C] rounded-2xl flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform relative z-10">
                    <ShieldCheck className="text-white w-10 h-10" />
                  </div>
                  <div className="relative z-10">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A54C] mb-1">Authenticated</p>
                      <p className="text-white font-bold text-sm tracking-wide">Ministry Licensed Travel Service</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;
