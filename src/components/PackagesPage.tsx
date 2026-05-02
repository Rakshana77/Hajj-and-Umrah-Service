import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal, Search, Star, Clock, ArrowUpDown, X, ChevronDown, CheckCircle2 } from 'lucide-react';
import { packages } from '../data/packages';

const PackagesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('All');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [filterDistance, setFilterDistance] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredPackages = useMemo(() => {
    return packages
      .filter((pkg) => {
        const matchesSearch = pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             pkg.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = filterType === 'All' || pkg.type === filterType;
        const matchesCategory = filterCategory === 'All' || pkg.category === filterCategory;
        const matchesDistance = filterDistance === 'All' || 
          (filterDistance === 'Premium' && pkg.distance <= 200) ||
          (filterDistance === 'Standard' && pkg.distance > 200 && pkg.distance <= 600) ||
          (filterDistance === 'Budget' && pkg.distance > 600);
        
        return matchesSearch && matchesType && matchesCategory && matchesDistance;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'distance') return a.distance - b.distance;
        if (sortBy === 'popular') return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        return 0;
      });
  }, [searchQuery, filterType, filterCategory, filterDistance, sortBy]);

  return (
    <div className="min-h-screen bg-neutral-50 pt-32 sm:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Section */}
        <header className="mb-12 sm:mb-20 text-center">
          <span className="text-[#F4C430] font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] mb-3 sm:mb-4 block">Our Inventory</span>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6">
            Our <span className="text-[#F4C430]">Spiritual Packages</span>
          </h1>
          <p className="text-neutral-500 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed italic px-4 sm:px-0">
            "Compare and choose from our diverse range of journeys tailored for every spiritual seeker."
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-72 shrink-0 space-y-8 sticky top-32 h-fit">
            <div className="bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Filter className="w-5 h-5 text-[#F4C430]" />
                  Filters
                </h3>
                <button 
                  onClick={() => {
                    setFilterType('All');
                    setFilterCategory('All');
                    setFilterDistance('All');
                    setSearchQuery('');
                  }}
                  className="text-xs text-neutral-400 hover:text-[#F4C430] font-medium"
                >
                  Reset All
                </button>
              </div>

              {/* Package Type */}
              <div className="mb-8">
                <p className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Journey Type</p>
                <div className="space-y-2">
                  {['All', 'Umrah', 'Hajj'].map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="type" 
                        checked={filterType === type}
                        onChange={() => setFilterType(type)}
                        className="w-4 h-4 accent-[#F4C430]"
                      />
                      <span className={`text-sm ${filterType === type ? 'text-neutral-900 font-bold' : 'text-neutral-500'} group-hover:text-neutral-900`}>
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category */}
              <div className="mb-8">
                <p className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Service Class</p>
                <div className="space-y-2">
                  {['All', 'Budget', 'Standard', 'Premium', 'Deluxe'].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="category" 
                        checked={filterCategory === cat}
                        onChange={() => setFilterCategory(cat)}
                        className="w-4 h-4 accent-[#F4C430]"
                      />
                      <span className={`text-sm ${filterCategory === cat ? 'text-neutral-900 font-bold' : 'text-neutral-500'} group-hover:text-neutral-900`}>
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Distance */}
              <div>
                <p className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Haram Proximity</p>
                <div className="space-y-2">
                  {['All', 'Premium', 'Standard', 'Budget'].map((dist) => (
                    <label key={dist} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="distance" 
                        checked={filterDistance === dist}
                        onChange={() => setFilterDistance(dist)}
                        className="w-4 h-4 accent-[#F4C430]"
                      />
                      <span className={`text-sm ${filterDistance === dist ? 'text-neutral-900 font-bold' : 'text-neutral-500'} group-hover:text-neutral-900`}>
                        {dist === 'Premium' ? '0–200m' : dist === 'Standard' ? '200–600m' : dist === 'Budget' ? '600m+' : 'All'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-grow">
            {/* Search and Sort Bar */}
            <div className="flex flex-col gap-4 mb-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input 
                  type="text" 
                  placeholder="Search packages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-neutral-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F4C430]/20 transition-all text-sm"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full appearance-none pl-12 pr-10 py-4 bg-white border border-neutral-100 rounded-2xl shadow-sm focus:outline-none font-bold text-sm cursor-pointer"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="distance">Nearest to Haram</option>
                  </select>
                  <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F4C430]" />
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                </div>
                
                <button 
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden flex items-center justify-center gap-2 px-6 py-4 bg-neutral-900 text-white rounded-2xl font-bold text-sm"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </button>
              </div>
            </div>

            {/* Package Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredPackages.length > 0 ? (
                  filteredPackages.map((pkg) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={pkg.id}
                      className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
                    >
                      <Link to={`/packages/${pkg.id}`} className="block relative h-64 overflow-hidden">
                        <img 
                          src={pkg.image} 
                          alt={pkg.name} 
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                          {pkg.popular && (
                            <span className="bg-[#F4C430] text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                              <Star className="w-3 h-3 fill-black" />
                              Most Popular
                            </span>
                          )}
                          {pkg.limitedSeats && (
                            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                              Only {pkg.seatsLeft} Seats Left
                            </span>
                          )}
                        </div>
                      </Link>

                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <span className="text-[10px] font-bold text-[#F4C430] uppercase tracking-widest mb-1 block">
                              {pkg.type} • {pkg.category}
                            </span>
                            <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-[#F4C430] transition-colors line-clamp-1">
                              {pkg.name}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-neutral-500 text-sm">
                          <Clock className="w-4 h-4 text-[#F4C430]" />
                          {pkg.duration}
                        </div>

                        <p className="text-neutral-500 text-sm line-clamp-2 mb-6">
                          {pkg.shortDescription}
                        </p>

                        <ul className="grid grid-cols-2 gap-y-3 gap-x-2 mb-8">
                          {pkg.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-neutral-600 font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#F4C430] shrink-0" />
                              <span className="truncate">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto pt-6 border-t border-neutral-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="text-xl sm:text-2xl font-black text-neutral-900">
                            ₹{pkg.price.toLocaleString()}
                            <span className="text-[10px] sm:text-xs font-normal text-neutral-400 block -mt-1">All inclusive</span>
                          </div>
                          <Link 
                            to={`/packages/${pkg.id}`}
                            className="bg-neutral-900 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm hover:bg-[#F4C430] hover:text-black transition-all shadow-sm text-center"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-20 text-center">
                    <div className="bg-neutral-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-10 h-10 text-neutral-300" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">No packages found</h3>
                    <p className="text-neutral-500">Try adjusting your filters or search query.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[120]"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 bg-white rounded-t-3xl z-[130] p-8 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">Filters</h3>
                <button onClick={() => setShowMobileFilters(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Reuse Filter Logic Here */}
              <div className="space-y-10 pb-10">
                <div>
                  <p className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Journey Type</p>
                  <div className="flex flex-wrap gap-3">
                    {['All', 'Umrah', 'Hajj'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setFilterType(type)}
                        className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${filterType === type ? 'bg-[#F4C430] text-black shadow-lg shadow-[#F4C430]/20' : 'bg-neutral-50 text-neutral-500'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-neutral-900 mb-4 uppercase tracking-wider">Service Class</p>
                  <div className="flex flex-wrap gap-3">
                    {['All', 'Budget', 'Standard', 'Premium', 'Deluxe'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setFilterCategory(cat)}
                        className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${filterCategory === cat ? 'bg-[#F4C430] text-black shadow-lg shadow-[#F4C430]/20' : 'bg-neutral-50 text-neutral-500'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full bg-neutral-900 text-white py-5 rounded-2xl font-bold shadow-xl"
                >
                  Show Results
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PackagesPage;
