import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal, Search, Star, Clock, ArrowUpDown, X, ChevronDown, CheckCircle2, Loader2, MessageCircle, MapPin, Plane, Building } from 'lucide-react';
import { getPackages } from '../services/dataService';

const PackagesPage: React.FC = () => {
  const [allPackages, setAllPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter States
  const [journeyType, setJourneyType] = useState<string>('All');
  const [serviceClass, setServiceClass] = useState<string>('All');
  const [proximity, setProximity] = useState<string>('All');
  
  const [sortBy, setSortBy] = useState<string>('newest');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const defaultPackages = [
    {
      id: 'economy-umrah',
      title: 'Economy Umrah Package',
      price: '₹88,000',
      journeyType: 'Umrah',
      serviceClass: 'Budget',
      proximity: '600m+',
      duration: 15,
      description: 'Affordable package with essential services for pilgrims seeking a spiritual journey on a budget.',
      includes: ['Direct Flight', '3-Star Hotel', 'Visa Processing', 'Indian Food', 'Transport'],
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
      description: 'Comfortable stay with upgraded facilities and closer proximity to the Harams.',
      includes: ['Premium Flight', '4-Star Hotel', 'Luxury Transport', 'Gourmet Indian Meals', 'Ziyarat included'],
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
      description: 'Premium experience with multiple Umrah opportunities and comprehensive guided Ziyara.',
      includes: ['Business Class Option', '5-Star Hotel', 'VIP Service', 'Full Spiritual Guide', 'Exclusive Ziyarat'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEw4gl2Oc7NH1wSl-cpeWOpt7BFun8a44Nyh26hB7QsjlSTUEJFG5EzIeHzi42InBu0zMJ_rlAC5jk2PZkeXM0uKiOr5-TbSBP1tYDZmQqIpzq0TxZWiID6UTliYXVaTGORQzMoFmDZrXoj2pm3k3x01D0O55Cg7tdqWIdTaooTzT5PgB3z8h3CRsexc0o7xw2-RmvCfmLzwvHeOSc4rUpud_Wr-UKaERbyGOrc7dxzUE-lSnIg6Zx7iVScYMpW5MP6KAEmsewSKc'
    },
    {
      id: 'hajj-premium',
      title: 'Hajj Premium Direct',
      price: 650000,
      journeyType: 'Hajj',
      serviceClass: 'Premium',
      proximity: '0-200m',
      duration: 40,
      description: 'The ultimate Hajj experience with direct flights and premium tent services in Mina.',
      includes: ['Direct Hajj Flight', 'Closest Hotels', 'Mina VIP Tents', 'Full Board Meals', 'Azizia stay included'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMakWnZcUsB2wqjn7Z8TuOLcYLA9wuWre215J1hwiXDgrBFYhESC_2sdnMLb0tF9KXaJUMhHWCQ0RoLcIbji3elBGlyTH_5K9GIl042hHmx4XetuEjzUfVb1eaAkRinG5sSuFSU-RC_q67RHalPyHRauW3Jlg1Wc1Hjpz9vLCEnGK1gPAWHuFEefxPS39p4v42gkMJG5H-d_UScJpwF0lNS2IIWHx4ifdJCDuknaTw_ikSlM5LMNdTbN3UHM3r7fQ9wHLTOl_WTvs'
    }
  ];

  useEffect(() => {
    const fetchPkgs = async () => {
      try {
        const data = await getPackages();
        if (data && data.length > 0) {
          setAllPackages(data);
        } else {
          setAllPackages(defaultPackages);
        }
      } catch (err) {
        console.error("Error fetching packages:", err);
        setAllPackages(defaultPackages);
      } finally {
        setLoading(false);
      }
    };
    fetchPkgs();
  }, []);

  const filteredPackages = useMemo(() => {
    let result = [...allPackages];

    // Search
    if (searchQuery) {
      result = result.filter((pkg) => 
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        pkg.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Journey Type Filter
    if (journeyType !== 'All') {
      result = result.filter(pkg => pkg.journeyType === journeyType);
    }

    // Service Class Filter
    if (serviceClass !== 'All') {
      result = result.filter(pkg => pkg.serviceClass === serviceClass);
    }

    // Proximity Filter
    if (proximity !== 'All') {
      result = result.filter(pkg => pkg.proximity === proximity);
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => {
        const priceA = typeof a.price === 'string' ? parseInt(a.price.replace(/[^0-9]/g, '')) : a.price;
        const priceB = typeof b.price === 'string' ? parseInt(b.price.replace(/[^0-9]/g, '')) : b.price;
        return priceA - priceB;
      });
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => {
        const priceA = typeof a.price === 'string' ? parseInt(a.price.replace(/[^0-9]/g, '')) : a.price;
        const priceB = typeof b.price === 'string' ? parseInt(b.price.replace(/[^0-9]/g, '')) : b.price;
        return priceB - priceA;
      });
    } else if (sortBy === 'duration') {
        result.sort((a, b) => a.duration - b.duration);
    }

    return result;
  }, [searchQuery, journeyType, serviceClass, proximity, sortBy, allPackages]);

  const resetFilters = () => {
    setJourneyType('All');
    setServiceClass('All');
    setProximity('All');
    setSearchQuery('');
  };

  const FilterSection = ({ title, options, state, setState, icon: Icon }: any) => (
    <div className="mb-10">
      <p className="text-[10px] font-black text-neutral-400 mb-6 uppercase tracking-widest flex items-center gap-2">
        <Icon className="w-3 h-3 text-[#C9A54C]" />
        {title}
      </p>
      <div className="space-y-4">
        {options.map((opt: string) => (
          <label key={opt} className="flex items-center gap-4 cursor-pointer group">
            <div className="relative flex items-center justify-center">
              <input 
                type="radio" 
                name={title} 
                checked={state === opt}
                onChange={() => setState(opt)}
                className="w-5 h-5 appearance-none border-2 border-neutral-200 rounded-full checked:border-[#C9A54C] transition-all cursor-pointer"
              />
              {state === opt && <div className="absolute w-2.5 h-2.5 bg-[#C9A54C] rounded-full" />}
            </div>
            <span className={`text-sm font-bold transition-colors ${state === opt ? 'text-[#1A1305]' : 'text-neutral-400 group-hover:text-[#1A1305]'}`}>
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FCFBF7] pt-32 sm:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Section */}
        <header className="mb-12 sm:mb-20 text-center">
          <span className="text-[#C9A54C] font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] mb-3 sm:mb-4 block">தமிழகத்தில் நம்பிக்கையான நிர்வாகம்</span>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#1A1305] mb-4 sm:mb-6 leading-tight">
            Our <span className="text-[#C9A54C]">Spiritual Journey</span> Packages
          </h1>
          <p className="text-neutral-500 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed italic px-4 sm:px-0">
            "Compare and choose from our diverse range of journeys tailored for every spiritual seeker."
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-72 shrink-0 space-y-8 sticky top-32 h-fit">
            <div className="bg-white p-8 rounded-[2.5rem] border border-neutral-100 shadow-2xl">
              <div className="flex items-center justify-between mb-10">
                <h3 className="font-bold text-lg flex items-center gap-3 text-[#1A1305]">
                  <Filter className="w-5 h-5 text-[#C9A54C]" />
                  Filters
                </h3>
                <button 
                  onClick={resetFilters}
                  className="text-[10px] uppercase tracking-widest font-black text-neutral-400 hover:text-[#C9A54C] transition-colors"
                >
                  Reset
                </button>
              </div>

              <FilterSection 
                title="Journey Type" 
                options={['All', 'Umrah', 'Hajj']} 
                state={journeyType} 
                setState={setJourneyType}
                icon={Plane}
              />

              <FilterSection 
                title="Service Class" 
                options={['All', 'Budget', 'Standard', 'Premium', 'Deluxe']} 
                state={serviceClass} 
                setState={setServiceClass}
                icon={Star}
              />

              <FilterSection 
                title="Haram Proximity" 
                options={['All', '0-200m', '200-600m', '600m+']} 
                state={proximity} 
                setState={setProximity}
                icon={MapPin}
              />
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-grow">
            {/* Search and Sort Bar */}
            <div className="flex flex-col gap-6 mb-12">
              <div className="relative w-full group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-neutral-300 group-focus-within:text-[#C9A54C] transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search packages by title or destination..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-6 bg-white border border-neutral-100 rounded-[2rem] shadow-xl focus:outline-none focus:ring-4 focus:ring-[#C9A54C]/10 transition-all text-sm font-bold placeholder:text-neutral-300"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full appearance-none pl-14 pr-10 py-5 bg-white border border-neutral-100 rounded-[1.5rem] shadow-xl focus:outline-none font-bold text-sm cursor-pointer text-[#1A1305] hover:border-[#C9A54C]/30 transition-all"
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="duration">Shortest Duration</option>
                  </select>
                  <ArrowUpDown className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9A54C]" />
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                </div>
                
                <button 
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden flex items-center justify-center gap-3 px-6 py-5 bg-[#1A1305] text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest shadow-xl"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters & Sorting
                </button>
              </div>
            </div>

            {/* Package Grid */}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="text-[#C9A54C] animate-spin mb-4" size={40} />
                <p className="text-neutral-500 font-medium italic">Scanning for best options...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                <AnimatePresence mode="popLayout">
                  {filteredPackages.length > 0 ? (
                    filteredPackages.map((pkg) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        key={pkg.id}
                        className="group bg-white rounded-[3rem] overflow-hidden border border-neutral-100 shadow-xl hover:shadow-3xl transition-all duration-500 flex flex-col hover:-translate-y-3"
                      >
                        <Link to={`/packages/${pkg.id}`} className="block relative h-72 overflow-hidden">
                          <img 
                            src={pkg.image} 
                            alt={pkg.title} 
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1305]/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                          
                          <div className="absolute top-6 left-6 flex flex-col gap-2">
                            <span className="bg-[#C9A54C] text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest shadow-2xl flex items-center gap-2">
                              <Star className="w-3 h-3 fill-white" />
                              {pkg.serviceClass}
                            </span>
                            <span className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                              <MapPin className="w-3 h-3" />
                              {pkg.proximity} to Haram
                            </span>
                          </div>
                        </Link>

                        <div className="p-10 flex flex-col flex-grow relative">
                          <div className="absolute top-0 right-10 -translate-y-1/2 w-16 h-16 bg-[#FCFBF7] rounded-2xl flex items-center justify-center shadow-xl border border-neutral-50 group-hover:bg-[#C9A54C] group-hover:text-white transition-all">
                             {pkg.journeyType === 'Umrah' ? <Building className="w-8 h-8" /> : <Plane className="w-8 h-8" />}
                          </div>

                          <div className="mb-6">
                            <span className="text-[10px] font-black text-[#C9A54C] uppercase tracking-widest mb-2 block">
                              {pkg.journeyType} Journey
                            </span>
                            <h3 className="text-2xl font-bold text-[#1A1305] group-hover:text-[#C9A54C] transition-colors leading-tight">
                              {pkg.title}
                            </h3>
                          </div>

                          <div className="flex items-center gap-2.5 text-neutral-400 text-sm font-bold mb-8">
                            <Clock className="w-5 h-5 text-[#C9A54C]" />
                            {pkg.duration} DAYS
                          </div>

                          <ul className="grid grid-cols-1 gap-y-4 mb-10">
                            {pkg.includes?.slice(0, 3).map((feature: string, idx: number) => (
                              <li key={idx} className="flex items-center gap-4 text-xs text-neutral-500 font-bold">
                                <CheckCircle2 className="w-4 h-4 text-[#C9A54C] shrink-0" />
                                <span className="truncate">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-auto pt-8 border-t border-neutral-50">
                            <div className="flex items-baseline gap-2 mb-6">
                              <span className="text-3xl font-black text-[#1A1305]">
                                {typeof pkg.price === 'number' 
                                  ? `₹${pkg.price.toLocaleString()}` 
                                  : pkg.price?.toString().startsWith('₹') 
                                    ? pkg.price 
                                    : `₹${pkg.price}`}
                              </span>
                              <span className="text-[9px] font-black text-neutral-400 uppercase tracking-widest">Starting Price</span>
                            </div>
                            
                            <div className="grid grid-cols-5 gap-3">
                              <Link 
                                to={`/packages/${pkg.id}`}
                                className="col-span-4 bg-[#1A1305] text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#C9A54C] transition-all shadow-xl text-center"
                              >
                                View Detailed Journey
                              </Link>
                              <a 
                                href={`https://wa.me/918807114887?text=Interested in ${pkg.title}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="col-span-1 bg-green-500 text-white rounded-2xl flex items-center justify-center hover:bg-green-600 transition-all shadow-xl shadow-green-500/20"
                              >
                                <MessageCircle className="w-6 h-6" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full py-20 text-center">
                      <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                        <Search className="w-10 h-10 text-neutral-200" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1A1305] mb-4">No matching journeys</h3>
                      <p className="text-neutral-500 max-w-sm mx-auto italic mb-10">We couldn't find any packages matching your specific filters. Try broadening your search.</p>
                      <button onClick={resetFilters} className="bg-[#C9A54C] text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest shadow-xl">Reset All Filters</button>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileFilters(false)}
              className="fixed inset-0 bg-[#1A1305]/80 backdrop-blur-md z-[120]"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-x-0 bottom-0 bg-white rounded-t-[3rem] z-[130] p-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-bold text-[#1A1305]">Filters & Sorting</h3>
                <button onClick={() => setShowMobileFilters(false)} className="w-12 h-12 bg-neutral-50 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-[#1A1305]" />
                </button>
              </div>
              
              <div className="space-y-12 pb-10">
                <FilterSection title="Journey Type" options={['All', 'Umrah', 'Hajj']} state={journeyType} setState={setJourneyType} icon={Plane} />
                <FilterSection title="Service Class" options={['All', 'Budget', 'Standard', 'Premium', 'Deluxe']} state={serviceClass} setState={setServiceClass} icon={Star} />
                <FilterSection title="Haram Proximity" options={['All', '0-200m', '200-600m', '600m+']} state={proximity} setState={setProximity} icon={MapPin} />

                <div className="pt-10 border-t border-neutral-100">
                    <button 
                    onClick={() => setShowMobileFilters(false)}
                    className="w-full bg-[#1A1305] text-[#C9A54C] py-6 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl"
                    >
                    Show Resulting Journeys
                    </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PackagesPage;
