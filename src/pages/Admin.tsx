import React, { useState, useEffect } from 'react';
import { 
  getHeroData, 
  updateHeroData, 
  getPackages, 
  addPackage, 
  updatePackage, 
  deletePackage,
  getReviews,
  addReview,
  updateReview,
  deleteReview,
  uploadImage 
} from '../services/dataService';
import { 
  Plus, 
  Trash2, 
  Edit, 
  Save, 
  X, 
  Image as ImageIcon, 
  Layout, 
  Package as PackageIcon, 
  LogOut,
  Upload,
  Loader2,
  CheckCircle2,
  Activity,
  ArrowRight,
  Star,
  Plane,
  MapPin,
  ExternalLink,
  Search,
  Filter,
  Video
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Admin: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'hero' | 'packages' | 'reviews'>('dashboard');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Stats State
  const [stats, setStats] = useState({
    totalPackages: 0,
    heroImagesCount: 0,
    lastUpdated: '-'
  });

  // Filters State
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Hero State
  const [heroSlides, setHeroSlides] = useState<any[]>([]);
  const [heroFiles, setHeroFiles] = useState<{ [key: number]: File }>({});

  // Packages State
  const [packages, setPackages] = useState<any[]>([]);
  const [editingPackage, setEditingPackage] = useState<any>(null);
  const [isAddingPackage, setIsAddingPackage] = useState(false);
  const [packageForm, setPackageForm] = useState({
    title: '',
    price: '',
    duration: '',
    journeyType: 'Umrah',
    serviceClass: 'Budget',
    proximity: '0-200m',
    description: '',
    image: ''
  });
  const [packageFile, setPackageFile] = useState<File | null>(null);
  
  // Reviews State
  const [reviews, setReviews] = useState<any[]>([]);
  const [editingReview, setEditingReview] = useState<any>(null);
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    location: '',
    rating: 5,
    type: 'video' as 'video' | 'photo',
    isExternal: false,
    content: '',
    mediaUrl: '',
    thumbnail: '',
    date: ''
  });
  const [reviewFile, setReviewFile] = useState<File | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const hero = await getHeroData();
      if (hero && hero.slides) setHeroSlides(hero.slides);
      
      const pkgs = await getPackages();
      setPackages(pkgs);
      
      const reviewData = await getReviews();
      setReviews(reviewData);

      setStats({
        totalPackages: pkgs.length,
        heroImagesCount: hero?.slides?.length || 0,
        lastUpdated: new Date().toLocaleTimeString()
      });
    } catch (err) {
      console.error(err);
      showMessage('error', 'Sync Failed');
    }
    setLoading(false);
  };

  const showMessage = (type: string, text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 4000);
  };

  // Hero Handlers
  const addEmptySlide = () => setHeroSlides([...heroSlides, { image: '', title: '', subtitle: '' }]);
  const removeSlide = (index: number) => {
    const newSlides = [...heroSlides];
    newSlides.splice(index, 1);
    setHeroSlides(newSlides);
  };
  const updateSlideField = (index: number, field: string, value: string) => {
    const newSlides = [...heroSlides];
    newSlides[index] = { ...newSlides[index], [field]: value };
    setHeroSlides(newSlides);
  };

  const handleHeroSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      showMessage('info', 'Syncing Carousel...');
      const finalSlides = await Promise.all(heroSlides.map(async (slide, index) => {
        let imageUrl = slide.image;
        if (heroFiles[index]) imageUrl = await uploadImage(heroFiles[index]);
        return { ...slide, image: imageUrl };
      }));
      await updateHeroData({ slides: finalSlides });
      setHeroFiles({});
      showMessage('success', 'Hero Carousel Updated');
      fetchData();
    } catch (err) {
      showMessage('error', 'Hero Update Failed');
    }
    setLoading(false);
  };

  const handleIndividualSlideSave = async (index: number) => {
    setLoading(true);
    try {
      showMessage('info', 'Saving Slide...');
      const slide = heroSlides[index];
      let imageUrl = slide.image;
      if (heroFiles[index]) imageUrl = await uploadImage(heroFiles[index]);
      
      const newSlides = [...heroSlides];
      newSlides[index] = { ...slide, image: imageUrl };
      
      await updateHeroData({ slides: newSlides });
      
      // Clear the file for this specific index
      const newFiles = { ...heroFiles };
      delete newFiles[index];
      setHeroFiles(newFiles);
      
      showMessage('success', 'Slide Saved Successfully');
      fetchData();
    } catch (err) {
      showMessage('error', 'Slide Save Failed');
    }
    setLoading(false);
  };

  // Package Handlers
  const handlePackageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let imageUrl = packageForm.image;
      if (packageFile) imageUrl = await uploadImage(packageFile);
      const finalData = { ...packageForm, image: imageUrl, duration: parseInt(packageForm.duration.toString()) };
      if (editingPackage) {
        await updatePackage(editingPackage.id, finalData);
        showMessage('success', 'Journey Modified');
      } else {
        await addPackage(finalData);
        showMessage('success', 'Sacred Journey Created');
      }
      setIsAddingPackage(false);
      resetPackageForm();
      fetchData();
    } catch (err) {
      showMessage('error', 'Save Operation Failed');
    }
    setLoading(false);
  };

  const resetPackageForm = () => {
    setPackageForm({
      title: '', price: '', duration: '', journeyType: 'Umrah',
      serviceClass: 'Budget', proximity: '0-200m', description: '', image: ''
    });
    setPackageFile(null);
    setEditingPackage(null);
  };

  const startEdit = (pkg: any) => {
    setEditingPackage(pkg);
    setPackageForm({ ...pkg });
    setIsAddingPackage(true);
  };

  const filteredPackages = packages.filter(pkg => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'All' || pkg.journeyType === filterType;
    return matchesSearch && matchesType;
  });

  const getEmbedUrl = (url: string) => {
    if (!url) return '';
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

  // Review Handlers
  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let mediaUrl = reviewForm.mediaUrl;
      let thumbnail = reviewForm.thumbnail;

      if (reviewFile) {
        mediaUrl = await uploadImage(reviewFile);
        // If it's a video, generate a thumbnail automatically from Cloudinary
        if (reviewForm.type === 'video') {
          // Cloudinary trick: change extension to .jpg to get a frame
          const baseUrl = mediaUrl.split('?')[0]; // Remove any query params
          thumbnail = baseUrl.substring(0, baseUrl.lastIndexOf('.')) + '.jpg';
        }
      } else if (reviewForm.isExternal) {
        mediaUrl = getEmbedUrl(mediaUrl);
      }
      
      const finalData = { ...reviewForm, mediaUrl, thumbnail };
      if (editingReview) {
        await updateReview(editingReview.id, finalData);
        showMessage('success', 'Review Modified');
      } else {
        await addReview(finalData);
        showMessage('success', 'New Experience Added');
      }
      setIsAddingReview(false);
      resetReviewForm();
      fetchData();
    } catch (err) {
      showMessage('error', 'Review Save Failed');
    }
    setLoading(false);
  };

  const resetReviewForm = () => {
    setReviewForm({
      name: '', location: '', rating: 5, type: 'video',
      isExternal: false, content: '', mediaUrl: '', thumbnail: '', date: ''
    });
    setReviewFile(null);
    setEditingReview(null);
  };

  const startReviewEdit = (review: any) => {
    setEditingReview(review);
    setReviewForm({ ...review });
    setIsAddingReview(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#000] font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-neutral-200 sticky top-0 z-[100] shadow-sm">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1A1305] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shrink-0">
              <Activity className="text-[#C9A54C]" size={20} />
            </div>
            <div className="min-w-0">
              <h1 className="text-sm sm:text-xl font-black tracking-tight text-[#000] truncate">OFFICIAL <span className="text-[#C9A54C]">ADMIN</span></h1>
              <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A54C] truncate">Sacred Portal Authority</p>
            </div>
          </div>
          <button onClick={() => { logout(); navigate('/login'); }} className="bg-red-600 text-white px-4 sm:px-8 py-2.5 sm:py-3 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-red-700 transition-all shadow-lg whitespace-nowrap">Sign Out</button>
        </div>
      </nav>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* DASHBOARD SUMMARY */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border-2 border-neutral-100 shadow-xl relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 p-4 opacity-5 group-hover:scale-110 transition-transform"><PackageIcon size={100} /></div>
            <p className="text-[10px] sm:text-[11px] font-black text-[#C9A54C] uppercase tracking-[0.3em] mb-4">Total Inventory</p>
            <h3 className="text-5xl sm:text-7xl font-black mb-2 text-[#000]">{stats.totalPackages}</h3>
            <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">Live Offerings</p>
          </div>
          <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border-2 border-neutral-100 shadow-xl relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 p-4 opacity-5 group-hover:scale-110 transition-transform"><ImageIcon size={100} /></div>
            <p className="text-[10px] sm:text-[11px] font-black text-[#C9A54C] uppercase tracking-[0.3em] mb-4">Gallery Slides</p>
            <h3 className="text-5xl sm:text-7xl font-black mb-2 text-[#000]">{stats.heroImagesCount}</h3>
            <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">Active Banners</p>
          </div>
          <div className="bg-[#1A1305] p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 p-4 opacity-10"><Activity size={100} className="text-white" /></div>
            <p className="text-[10px] sm:text-[11px] font-black text-[#C9A54C] uppercase tracking-[0.3em] mb-4">System Status</p>
            <h3 className="text-2xl sm:text-3xl font-black mb-2 text-white">DATABASE SYNCED</h3>
            <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">Last Check: {stats.lastUpdated}</p>
          </div>
        </section>

        {/* TABS - Mobile Scrollable */}
        <div className="overflow-x-auto pb-4 no-scrollbar">
          <div className="flex gap-2 sm:gap-4 bg-white p-2 rounded-2xl sm:rounded-[2rem] w-fit border border-neutral-200 shadow-md whitespace-nowrap">
            {['dashboard', 'hero', 'packages', 'reviews'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab as any)} className={`px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-[1.5rem] text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-[#1A1305] text-[#C9A54C] shadow-xl' : 'text-neutral-400 hover:text-black'}`}>
                {tab === 'dashboard' ? 'Overview' : tab === 'hero' ? 'Hero Setup' : tab === 'packages' ? 'Packages' : 'Reviews'}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
              <div className="bg-white border-2 border-neutral-100 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="p-6 sm:p-12 border-b border-neutral-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 bg-neutral-50/30">
                  <div className="flex flex-col gap-2 w-full md:w-auto">
                    <h2 className="text-2xl sm:text-4xl font-black tracking-tighter text-[#000]">Package Management</h2>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2">
                        <div className="flex items-center gap-2 bg-white border-2 border-neutral-200 px-4 py-2 rounded-xl shadow-sm">
                            <Search size={16} className="text-[#C9A54C]" />
                            <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="bg-transparent outline-none text-[10px] sm:text-xs font-bold w-full sm:w-48" />
                        </div>
                        <div className="flex items-center gap-2 bg-white border-2 border-neutral-200 px-4 py-2 rounded-xl shadow-sm">
                            <Filter size={16} className="text-[#C9A54C]" />
                            <select value={filterType} onChange={e => setFilterType(e.target.value)} className="bg-transparent outline-none text-[10px] sm:text-xs font-bold cursor-pointer w-full">
                                <option value="All">All Types</option>
                                <option value="Umrah">Umrah</option>
                                <option value="Hajj">Hajj</option>
                            </select>
                        </div>
                    </div>
                  </div>
                  <button onClick={() => { setActiveTab('packages'); setIsAddingPackage(true); resetPackageForm(); }} className="w-full md:w-auto bg-[#C9A54C] text-[#1A1305] font-black px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl flex items-center justify-center gap-3 hover:scale-105 transition-all text-[10px] sm:text-xs uppercase tracking-widest shadow-xl">
                    <Plus size={18} /> New Offering
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[800px]">
                    <thead>
                      <tr className="bg-neutral-100/50 text-[10px] sm:text-[11px] font-black text-[#000] uppercase tracking-[0.2em] border-b border-neutral-200">
                        <th className="px-6 sm:px-12 py-4 sm:py-6">SACRED JOURNEY</th>
                        <th className="px-4 sm:px-8 py-4 sm:py-6">TYPE / CLASS</th>
                        <th className="px-4 sm:px-8 py-4 sm:py-6">PRICING</th>
                        <th className="px-4 sm:px-8 py-4 sm:py-6">PROXIMITY</th>
                        <th className="px-6 sm:px-12 py-4 sm:py-6 text-right">CONTROLS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {filteredPackages.map(pkg => (
                        <tr key={pkg.id} className="hover:bg-neutral-50 transition-colors group">
                          <td className="px-12 py-8">
                            <div className="flex items-center gap-6">
                              <img src={pkg.image} className="w-20 h-14 rounded-2xl object-cover shadow-lg border-2 border-white" />
                              <p className="font-black text-neutral-900 text-lg leading-none">{pkg.title}</p>
                            </div>
                          </td>
                          <td className="px-8 py-8">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-black text-[#C9A54C] uppercase tracking-widest">{pkg.journeyType}</span>
                                <span className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">{pkg.serviceClass}</span>
                            </div>
                          </td>
                          <td className="px-8 py-8 font-black text-2xl text-[#000]">
                            {pkg.price?.toString().startsWith('₹') ? pkg.price : `₹${pkg.price}`}
                          </td>
                          <td className="px-8 py-8"><span className="text-[11px] font-black text-neutral-600 bg-neutral-100 px-4 py-2 rounded-xl">{pkg.proximity}</span></td>
                          <td className="px-12 py-8 text-right">
                            <div className="flex items-center justify-end gap-3 opacity-30 group-hover:opacity-100 transition-opacity">
                              <button onClick={() => startEdit(pkg)} className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-900 hover:bg-[#C9A54C] transition-all"><Edit size={20} /></button>
                              <button onClick={() => deletePackage(pkg.id)} className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><Trash2 size={20} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'hero' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-4xl font-black tracking-tighter">Carousel Editor</h2>
                    <button onClick={addEmptySlide} className="bg-[#1A1305] text-[#C9A54C] px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-xl hover:scale-105 transition-all"><Plus size={18} /> New Slide</button>
                </div>
                <form onSubmit={handleHeroSubmit} className="space-y-12">
                    {heroSlides.map((slide, idx) => (
                        <div key={idx} className="bg-white border-2 border-neutral-100 p-10 rounded-[3rem] shadow-xl flex flex-col lg:flex-row gap-12 relative">
                            <button type="button" onClick={() => removeSlide(idx)} className="absolute -top-4 -right-4 bg-red-600 text-white w-12 h-12 rounded-2xl shadow-xl flex items-center justify-center"><Trash2 size={20} /></button>
                            <div className="w-full lg:w-1/3">
                                <label className="text-[11px] font-black uppercase tracking-widest text-[#000] block mb-4">Slide Visual</label>
                                <div className="aspect-video bg-neutral-50 rounded-[2.5rem] overflow-hidden relative border-2 border-dashed border-neutral-200 group">
                                    {heroFiles[idx] ? <div className="absolute inset-0 bg-[#C9A54C]/10 flex items-center justify-center font-black text-[10px] uppercase text-[#C9A54C]">{heroFiles[idx].name}</div> : slide.image ? <img src={slide.image} className="w-full h-full object-cover" /> : <div className="absolute inset-0 flex items-center justify-center text-neutral-200"><ImageIcon size={40} /></div>}
                                    <label className="absolute inset-0 cursor-pointer opacity-0 group-hover:opacity-100 bg-black/60 flex items-center justify-center transition-opacity"><Upload className="text-white" /><input type="file" className="hidden" onChange={e => setHeroFiles({...heroFiles, [idx]: e.target.files![0]})} /></label>
                                </div>
                            </div>
                            <div className="flex-1 space-y-6">
                                <div><label className="text-[11px] font-black uppercase tracking-widest text-[#000] block mb-2">Headline</label><input type="text" value={slide.title} onChange={e => updateSlideField(idx, 'title', e.target.value)} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl px-6 py-4 font-black text-xl text-[#000] outline-none focus:border-[#C9A54C]" /></div>
                                <div><label className="text-[11px] font-black uppercase tracking-widest text-[#000] block mb-2">Subheading</label><textarea value={slide.subtitle} onChange={e => updateSlideField(idx, 'subtitle', e.target.value)} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl px-6 py-4 font-bold text-neutral-600 h-28 outline-none focus:border-[#C9A54C]" /></div>
                                
                                <div className="flex gap-4 pt-4">
                                    <label className="flex-1 bg-[#1A1305] text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 sm:gap-3 cursor-pointer hover:bg-black transition-all shadow-lg group">
                                        <Upload size={16} className="group-hover:-translate-y-1 transition-transform" />
                                        {heroFiles[idx] ? 'Selected' : 'Upload'}
                                        <input type="file" className="hidden" onChange={e => setHeroFiles({...heroFiles, [idx]: e.target.files![0]})} />
                                    </label>
                                    <button 
                                        type="button" 
                                        onClick={() => handleIndividualSlideSave(idx)}
                                        className="flex-1 bg-[#C9A54C] text-[#1A1305] px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 sm:gap-3 hover:scale-[1.02] transition-all shadow-xl"
                                    >
                                        <Save size={16} /> Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-end sticky bottom-6 z-30"><button type="submit" disabled={loading} className="w-full sm:w-auto bg-[#C9A54C] text-[#1A1305] px-8 sm:px-16 py-5 sm:py-6 rounded-2xl sm:rounded-[2.5rem] font-black text-[10px] sm:text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3 sm:gap-4">{loading ? <Loader2 className="animate-spin" /> : <Save size={20} />} Sync Carousel</button></div>
                </form>
            </motion.div>
          )}

          {activeTab === 'packages' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
              <div className="flex justify-between items-center">
                <h2 className="text-4xl font-black tracking-tighter">Sacred Catalog</h2>
                <button onClick={() => { setIsAddingPackage(true); resetPackageForm(); }} className="bg-[#1A1305] text-[#C9A54C] px-12 py-5 rounded-[2.5rem] font-black text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl hover:scale-105 transition-all"><Plus size={20} /> Launch Offering</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {packages.map(pkg => (
                  <div key={pkg.id} className="bg-white rounded-[3rem] border-2 border-neutral-100 overflow-hidden shadow-xl group hover:shadow-2xl transition-all">
                    <div className="aspect-[4/3] relative">
                      <img src={pkg.image} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition-all">
                        <button onClick={() => startEdit(pkg)} className="bg-white p-4 rounded-2xl hover:scale-110 transition-all"><Edit /></button>
                        <button onClick={() => deletePackage(pkg.id)} className="bg-red-600 text-white p-4 rounded-2xl hover:scale-110 transition-all"><Trash2 /></button>
                      </div>
                    </div>
                    <div className="p-10">
                      <h3 className="text-2xl font-black mb-2">{pkg.title}</h3>
                      <div className="flex justify-between items-center pt-6 border-t border-neutral-100 mt-6">
                        <p className="text-3xl font-black text-[#C9A54C]">
                          {pkg.price?.toString().startsWith('₹') ? pkg.price : `₹${pkg.price}`}
                        </p>
                        <p className="text-[10px] font-black uppercase text-neutral-400 tracking-widest">{pkg.journeyType}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'reviews' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
              <div className="flex justify-between items-center">
                <h2 className="text-4xl font-black tracking-tighter">Pilgrim Experiences</h2>
                <button onClick={() => { setIsAddingReview(true); resetReviewForm(); }} className="bg-[#1A1305] text-[#C9A54C] px-12 py-5 rounded-[2.5rem] font-black text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl hover:scale-105 transition-all"><Plus size={20} /> Add Experience</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {reviews.map(review => (
                  <div key={review.id} className="bg-white rounded-[3rem] border-2 border-neutral-100 overflow-hidden shadow-xl group hover:shadow-2xl transition-all">
                    <div className="aspect-video relative bg-neutral-900">
                      {review.type === 'video' ? (
                        <div className="w-full h-full flex items-center justify-center">
                            <Video className="text-[#C9A54C]" size={48} />
                        </div>
                      ) : (
                        <img src={review.mediaUrl} className="w-full h-full object-cover" />
                      )}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition-all">
                        <button onClick={() => startReviewEdit(review)} className="bg-white p-4 rounded-2xl hover:scale-110 transition-all"><Edit /></button>
                        <button onClick={() => deleteReview(review.id).then(fetchData)} className="bg-red-600 text-white p-4 rounded-2xl hover:scale-110 transition-all"><Trash2 /></button>
                      </div>
                    </div>
                    <div className="p-10">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-black">{review.name}</h3>
                        <span className="text-[10px] font-black uppercase bg-[#C9A54C]/10 text-[#C9A54C] px-3 py-1 rounded-full">{review.type}</span>
                      </div>
                      <p className="text-neutral-500 text-sm line-clamp-2 italic mb-6">"{review.content}"</p>
                      <div className="flex justify-between items-center pt-6 border-t border-neutral-100">
                        <p className="text-xs font-black text-neutral-400 uppercase tracking-widest">{review.location}</p>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className={i < review.rating ? "fill-[#C9A54C] text-[#C9A54C]" : "text-neutral-200"} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* REVIEW MODAL */}
        <AnimatePresence>
          {isAddingReview && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center sm:px-4 overflow-y-auto sm:py-10">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsAddingReview(false)} className="fixed inset-0 bg-[#000]/80 backdrop-blur-md" />
              <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 50 }} className="bg-white w-full max-w-6xl sm:rounded-[4rem] relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden min-h-screen sm:min-h-0">
                <div className="p-6 sm:p-12 border-b border-neutral-200 flex justify-between items-center sticky top-0 bg-white z-20">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-black text-[#C9A54C] uppercase tracking-[0.4em] mb-1 sm:mb-2 block">Voice of the Pilgrims</span>
                    <h3 className="text-2xl sm:text-5xl font-black tracking-tighter text-[#000]">{editingReview ? 'Edit Experience' : 'New Experience'}</h3>
                  </div>
                  <button onClick={() => setIsAddingReview(false)} className="w-10 h-10 sm:w-16 sm:h-16 bg-neutral-100 rounded-xl sm:rounded-[1.5rem] flex items-center justify-center text-neutral-900 hover:bg-[#000] hover:text-white transition-all"><X size={24} /></button>
                </div>
                
                <form onSubmit={handleReviewSubmit} className="p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
                  <div className="space-y-6 sm:space-y-10">
                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Pilgrim Name</label>
                      <input required type="text" placeholder="e.g. Abdul Rahman" value={reviewForm.name} onChange={e => setReviewForm({...reviewForm, name: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 font-black text-lg sm:text-xl text-[#000] outline-none focus:border-[#C9A54C]" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Location</label>
                            <input required type="text" placeholder="e.g. Chennai" value={reviewForm.location} onChange={e => setReviewForm({...reviewForm, location: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 font-black text-md sm:text-lg text-[#000] outline-none focus:border-[#C9A54C]" />
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Rating (1-5)</label>
                            <input required type="number" min="1" max="5" value={reviewForm.rating || ''} onChange={e => setReviewForm({...reviewForm, rating: parseInt(e.target.value) || 0})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 font-black text-md sm:text-lg text-[#000] outline-none focus:border-[#C9A54C]" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#C9A54C]">Media Type</label>
                            <select value={reviewForm.type} onChange={e => setReviewForm({...reviewForm, type: e.target.value as any})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 font-black text-md sm:text-lg text-[#000] outline-none focus:border-[#C9A54C] appearance-none cursor-pointer">
                                <option value="video">Video Story</option>
                                <option value="photo">Photo Moment</option>
                            </select>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#C9A54C]">Journey Date</label>
                            <input type="text" placeholder="e.g. March 2024" value={reviewForm.date} onChange={e => setReviewForm({...reviewForm, date: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 font-black text-md sm:text-lg text-[#000] outline-none focus:border-[#C9A54C]" />
                        </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-4 p-4 sm:p-6 bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl">
                            <input type="checkbox" checked={reviewForm.isExternal} onChange={e => setReviewForm({...reviewForm, isExternal: e.target.checked})} className="w-5 h-5 sm:w-6 sm:h-6 rounded border-neutral-300 text-[#C9A54C] focus:ring-[#C9A54C]" />
                            <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">External Media (YT/IG)</label>
                        </div>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-10">
                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">The Experience (Content)</label>
                      <textarea required placeholder="What did the pilgrim say?" value={reviewForm.content} onChange={e => setReviewForm({...reviewForm, content: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 h-32 sm:h-40 font-bold text-neutral-700 outline-none focus:border-[#C9A54C]" />
                    </div>

                    {reviewForm.isExternal ? (
                        <div className="space-y-4 sm:space-y-6">
                            <div>
                                <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000] mb-2 block">Embed URL</label>
                                <input type="text" placeholder="https://..." value={reviewForm.mediaUrl} onChange={e => setReviewForm({...reviewForm, mediaUrl: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 font-bold text-neutral-700 outline-none focus:border-[#C9A54C]" />
                            </div>
                            <div>
                                <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000] mb-2 block">Thumbnail URL</label>
                                <input type="text" placeholder="Image URL" value={reviewForm.thumbnail} onChange={e => setReviewForm({...reviewForm, thumbnail: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 font-bold text-neutral-700 outline-none focus:border-[#C9A54C]" />
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Upload Media</label>
                            <div className="relative rounded-2xl sm:rounded-[3rem] aspect-video bg-neutral-50 border-2 border-dashed border-neutral-200 overflow-hidden group">
                                {reviewFile ? <div className="absolute inset-0 bg-[#C9A54C]/10 flex flex-col items-center justify-center p-6"><CheckCircle2 size={32} className="text-[#C9A54C] mb-2" /><span className="text-[10px] font-black uppercase text-[#C9A54C] tracking-widest">Ready</span></div> : reviewForm.mediaUrl ? <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 text-neutral-400 italic text-xs">Existing Media</div> : <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20"><ImageIcon size={48} /></div>}
                                <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-all duration-500"><Upload className="text-white mb-2" size={32} /><span className="text-[10px] font-black text-white uppercase tracking-widest">Select</span><input type="file" className="hidden" onChange={e => setReviewFile(e.target.files![0])} /></label>
                            </div>
                        </div>
                    )}

                    <button type="submit" disabled={loading} className="w-full bg-[#1A1305] text-[#C9A54C] font-black py-5 sm:py-8 rounded-2xl sm:rounded-[3rem] shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                      {loading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                      {editingReview ? 'Update' : 'Publish'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* PACKAGE MODAL - HIGH VISIBILITY */}
        <AnimatePresence>
          {isAddingPackage && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center sm:px-4 overflow-y-auto sm:py-10">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsAddingPackage(false)} className="fixed inset-0 bg-[#000]/80 backdrop-blur-md" />
              <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 50 }} className="bg-white w-full max-w-6xl sm:rounded-[4rem] relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden min-h-screen sm:min-h-0">
                <div className="p-6 sm:p-12 border-b border-neutral-200 flex justify-between items-center sticky top-0 bg-white z-20">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-black text-[#C9A54C] uppercase tracking-[0.4em] mb-1 sm:mb-2 block">Sacred Ledger Entry</span>
                    <h3 className="text-2xl sm:text-5xl font-black tracking-tighter text-[#000]">{editingPackage ? 'Refine Journey' : 'Forge Offering'}</h3>
                  </div>
                  <button onClick={() => setIsAddingPackage(false)} className="w-10 h-10 sm:w-16 sm:h-16 bg-neutral-100 rounded-xl sm:rounded-[1.5rem] flex items-center justify-center text-neutral-900 hover:bg-[#000] hover:text-white transition-all"><X size={24} /></button>
                </div>
                
                <form onSubmit={handlePackageSubmit} className="p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20">
                  <div className="space-y-6 sm:space-y-10">
                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Journey Title</label>
                      <input required type="text" placeholder="e.g. Deluxe Royal Umrah" value={packageForm.title} onChange={e => setPackageForm({...packageForm, title: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 font-black text-lg sm:text-xl text-[#000] outline-none focus:border-[#C9A54C]" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Pricing</label>
                            <input required type="text" placeholder="₹1,20,000" value={packageForm.price} onChange={e => setPackageForm({...packageForm, price: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 font-black text-lg sm:text-xl text-[#C9A54C] outline-none focus:border-[#C9A54C]" />
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Duration (Days)</label>
                            <input required type="number" placeholder="15" value={packageForm.duration || ''} onChange={e => setPackageForm({...packageForm, duration: parseInt(e.target.value) || 0})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 font-black text-lg sm:text-xl text-[#000] outline-none focus:border-[#C9A54C]" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-red-600">Journey Type *</label>
                            <div className="relative group">
                                <select value={packageForm.journeyType} onChange={e => setPackageForm({...packageForm, journeyType: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl pl-6 sm:pl-8 pr-12 sm:pr-16 py-4 sm:py-6 font-black text-md sm:text-lg text-[#000] outline-none focus:border-red-600 appearance-none cursor-pointer">
                                    <option value="Umrah">Umrah Experience</option>
                                    <option value="Hajj">Hajj Pilgrimage</option>
                                </select>
                                <Plane className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-red-600 pointer-events-none group-hover:scale-110 transition-transform" size={18} />
                            </div>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-red-600">Makkah Proximity *</label>
                            <div className="relative group">
                                <select value={packageForm.proximity} onChange={e => setPackageForm({...packageForm, proximity: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl pl-6 sm:pl-8 pr-12 sm:pr-16 py-4 sm:py-6 font-black text-md sm:text-lg text-[#000] outline-none focus:border-red-600 appearance-none cursor-pointer">
                                    <option value="0-200m">Closest (0-200m)</option>
                                    <option value="200-600m">Walking (200-600m)</option>
                                    <option value="600m+">Shuttle Distance</option>
                                </select>
                                <MapPin className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-red-600 pointer-events-none group-hover:scale-110 transition-transform" size={18} />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-red-600">Service Class *</label>
                        <div className="relative group">
                            <select value={packageForm.serviceClass} onChange={e => setPackageForm({...packageForm, serviceClass: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl pl-6 sm:pl-8 pr-12 sm:pr-16 py-4 sm:py-6 font-black text-md sm:text-lg text-[#000] outline-none focus:border-red-600 appearance-none cursor-pointer">
                                <option value="Budget">Budget Tier</option>
                                <option value="Standard">Standard Tier</option>
                                <option value="Premium">Premium Tier</option>
                                <option value="Deluxe">Royal Deluxe</option>
                            </select>
                            <Star className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-red-600 pointer-events-none group-hover:scale-110 transition-transform" size={18} />
                        </div>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-10">
                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Journey Details</label>
                      <textarea required placeholder="Describe the journey..." value={packageForm.description} onChange={e => setPackageForm({...packageForm, description: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 h-32 sm:h-48 font-bold text-neutral-700 outline-none focus:border-[#C9A54C]" />
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Primary Visual (Cloudinary)</label>
                      <div className="relative rounded-2xl sm:rounded-[3rem] aspect-video bg-neutral-50 border-2 border-dashed border-neutral-200 overflow-hidden group">
                        {packageFile ? <div className="absolute inset-0 bg-[#C9A54C]/10 flex flex-col items-center justify-center p-6"><CheckCircle2 size={32} className="text-[#C9A54C] mb-2" /><span className="text-[10px] font-black uppercase text-[#C9A54C] tracking-widest">Locked</span></div> : packageForm.image ? <img src={packageForm.image} className="w-full h-full object-cover" /> : <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20"><ImageIcon size={48} /></div>}
                        <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-all duration-500"><Upload className="text-white mb-2" size={32} /><span className="text-[10px] font-black text-white uppercase tracking-widest">Replace</span><input type="file" className="hidden" onChange={e => setPackageFile(e.target.files![0])} /></label>
                      </div>
                    </div>

                    <button type="submit" disabled={loading} className="w-full bg-[#1A1305] text-[#C9A54C] font-black py-5 sm:py-8 rounded-2xl sm:rounded-[3rem] shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                      {loading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                      {editingPackage ? 'Update' : 'Launch'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Admin;
