import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Package, 
  Star, 
  Settings, 
  Plus, 
  Trash2, 
  Edit, 
  X, 
  Save, 
  Upload, 
  Loader2, 
  ImageIcon,
  CheckCircle2,
  MapPin,
  Plane
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  getPackages, 
  addPackage, 
  deletePackage, 
  updatePackage,
  getReviews,
  addReview,
  deleteReview,
  updateReview,
  uploadImage
} from '../services/dataService';

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [packages, setPackages] = useState<any[]>([]);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isAddingPackage, setIsAddingPackage] = useState(false);
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [editingPackage, setEditingPackage] = useState<any>(null);
  const [editingReview, setEditingReview] = useState<any>(null);

  const [packageForm, setPackageForm] = useState({
    title: '',
    price: '',
    duration: 15,
    description: '',
    image: '',
    journeyType: 'Umrah',
    serviceClass: 'Premium',
    proximity: '0-200m'
  });

  const [reviewForm, setReviewForm] = useState({
    name: '',
    location: '',
    content: '',
    rating: 5,
    type: 'video',
    date: '',
    isExternal: false,
    mediaUrl: '',
    thumbnail: ''
  });

  const [packageFile, setPackageFile] = useState<File | null>(null);
  const [reviewFile, setReviewFile] = useState<File | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [pkgs, revs] = await Promise.all([getPackages(), getReviews()]);
      setPackages(pkgs);
      setReviews(revs);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePackageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let imageUrl = packageForm.image;
      if (packageFile) {
        imageUrl = await uploadImage(packageFile);
      }

      if (editingPackage) {
        await updatePackage(editingPackage.id, { ...packageForm, image: imageUrl });
      } else {
        await addPackage({ ...packageForm, image: imageUrl });
      }
      setIsAddingPackage(false);
      setEditingPackage(null);
      setPackageForm({ title: '', price: '', duration: 15, description: '', image: '', journeyType: 'Umrah', serviceClass: 'Premium', proximity: '0-200m' });
      setPackageFile(null);
      fetchData();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      let mediaUrl = reviewForm.mediaUrl;
      let thumbnail = reviewForm.thumbnail;

      if (reviewFile) {
        mediaUrl = await uploadImage(reviewFile);
        if (reviewFile.type.startsWith('video/')) {
            const cloudinaryBase = mediaUrl.substring(0, mediaUrl.lastIndexOf('.'));
            thumbnail = `${cloudinaryBase}.jpg`;
        } else {
            thumbnail = mediaUrl;
        }
      }

      if (editingReview) {
        await updateReview(editingReview.id, { ...reviewForm, mediaUrl, thumbnail });
      } else {
        await addReview({ ...reviewForm, mediaUrl, thumbnail });
      }
      setIsAddingReview(false);
      setEditingReview(null);
      setReviewForm({ name: '', location: '', content: '', rating: 5, type: 'video', date: '', isExternal: false, mediaUrl: '', thumbnail: '' });
      setReviewFile(null);
      fetchData();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePackage = async (id: string) => {
    if (window.confirm('Delete this package?')) {
      await deletePackage(id);
      fetchData();
    }
  };

  const handleDeleteReview = async (id: string) => {
    if (window.confirm('Delete this review?')) {
      await deleteReview(id);
      fetchData();
    }
  };

  const handleEditPackage = (pkg: any) => {
    setEditingPackage(pkg);
    setPackageForm(pkg);
    setIsAddingPackage(true);
  };

  const handleEditReview = (review: any) => {
    setEditingReview(review);
    setReviewForm({
      ...review,
      isExternal: !!review.isExternal,
      thumbnail: review.thumbnail || ''
    });
    setIsAddingReview(true);
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 sm:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* NAV - STICKY FOR MOBILE */}
        <div className="bg-white p-4 sm:p-10 rounded-[2rem] sm:rounded-[4rem] shadow-2xl border border-neutral-100 mb-8 sm:mb-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-0">
            <div>
              <span className="text-[10px] sm:text-[11px] font-black text-[#C9A54C] uppercase tracking-[0.4em] mb-1 sm:mb-2 block">Secure Command Centre</span>
              <h1 className="text-3xl sm:text-6xl font-black tracking-tighter text-[#1A1305]">Admin Portal</h1>
            </div>
          </div>
          
          <div className="flex gap-2 sm:gap-6 mt-6 sm:mt-12 overflow-x-auto no-scrollbar pb-2">
            {[
              { id: 'dashboard', icon: Users, label: 'Stats' },
              { id: 'hero', icon: ImageIcon, label: 'Hero' },
              { id: 'packages', icon: Package, label: 'Packages' },
              { id: 'reviews', icon: Star, label: 'Reviews' },
              { id: 'settings', icon: Settings, label: 'System' }
            ].map((tab) => (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-3 sm:py-5 rounded-xl sm:rounded-3xl font-black text-[10px] sm:text-xs uppercase tracking-widest transition-all shrink-0 ${activeTab === tab.id ? 'bg-[#1A1305] text-[#C9A54C] shadow-xl scale-105' : 'bg-neutral-100 text-neutral-400 hover:bg-neutral-200'}`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-10 mb-8 sm:mb-16">
            {[
              { label: 'Total Pilgrims', value: '1,240', color: 'bg-blue-50 text-blue-600' },
              { label: 'Active Packages', value: packages.length, color: 'bg-[#C9A54C]/10 text-[#C9A54C]' },
              { label: 'Sacred Reviews', value: reviews.length, color: 'bg-green-50 text-green-600' },
              { label: 'New Inquiries', value: '12', color: 'bg-purple-50 text-purple-600' }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border border-neutral-100 shadow-xl">
                <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-neutral-400 mb-2 sm:mb-4">{stat.label}</p>
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl sm:text-5xl font-black text-[#1A1305]">{stat.value}</h2>
                  <div className={`w-10 h-10 sm:w-14 sm:h-14 ${stat.color} rounded-xl sm:rounded-2xl flex items-center justify-center font-bold`}>+</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'packages' && (
          <div className="space-y-8 sm:space-y-12">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-2xl sm:text-4xl font-black text-[#1A1305]">Package Inventory</h2>
              <button 
                onClick={() => { setEditingPackage(null); setPackageForm({ title: '', price: '', duration: 15, description: '', image: '', journeyType: 'Umrah', serviceClass: 'Premium', proximity: '0-200m' }); setIsAddingPackage(true); }}
                className="bg-[#1A1305] text-[#C9A54C] px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-[2rem] font-black text-[10px] sm:text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl hover:scale-105 transition-all"
              >
                <Plus size={18} /> Add Package
              </button>
            </div>
            
            <div className="bg-white rounded-[2rem] sm:rounded-[4rem] shadow-2xl border border-neutral-100 overflow-hidden overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-neutral-50 border-b border-neutral-100">
                  <tr>
                    <th className="px-6 sm:px-12 py-6 sm:py-8 text-left text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-neutral-400">Package Details</th>
                    <th className="px-6 sm:px-12 py-6 sm:py-8 text-left text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-neutral-400">Pricing & Info</th>
                    <th className="px-6 sm:px-12 py-6 sm:py-8 text-right text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-neutral-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-50">
                  {packages.map((pkg) => (
                    <tr key={pkg.id} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="px-6 sm:px-12 py-6 sm:py-10">
                        <div className="flex items-center gap-4 sm:gap-8">
                          <img src={pkg.image} className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl object-cover shadow-lg" alt="" />
                          <div>
                            <p className="font-black text-lg sm:text-xl text-[#1A1305] mb-1">{pkg.title}</p>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A54C]">{pkg.journeyType} • {pkg.serviceClass}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 sm:px-12 py-6 sm:py-10">
                        <p className="font-black text-lg sm:text-xl text-[#1A1305] mb-1">{pkg.price}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">{pkg.duration} Days • {pkg.proximity}</p>
                      </td>
                      <td className="px-6 sm:px-12 py-6 sm:py-10">
                        <div className="flex justify-end gap-2 sm:gap-4">
                          <button onClick={() => handleEditPackage(pkg)} className="p-3 sm:p-5 bg-neutral-100 rounded-xl sm:rounded-2xl text-neutral-600 hover:bg-[#1A1305] hover:text-[#C9A54C] transition-all"><Edit size={18} /></button>
                          <button onClick={() => handleDeletePackage(pkg.id)} className="p-3 sm:p-5 bg-red-50 rounded-xl sm:rounded-2xl text-red-600 hover:bg-red-600 hover:text-white transition-all"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-12">
            <div className="flex justify-between items-center px-2">
              <h2 className="text-4xl font-black text-[#1A1305]">Sacred Reviews</h2>
              <button 
                onClick={() => { setEditingReview(null); setReviewForm({ name: '', location: '', content: '', rating: 5, type: 'video', date: '', isExternal: false, mediaUrl: '', thumbnail: '' }); setIsAddingReview(true); }}
                className="bg-[#1A1305] text-[#C9A54C] px-10 py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl hover:scale-105 transition-all"
              >
                <Plus size={18} /> Add Review
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {reviews.map((rev) => (
                <div key={rev.id} className="bg-white p-10 rounded-[3rem] border border-neutral-100 shadow-xl relative group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1">
                      {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} className="fill-[#C9A54C] text-[#C9A54C]" />)}
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEditReview(rev)} className="p-3 bg-neutral-50 rounded-xl text-neutral-400 hover:text-[#1A1305] transition-all"><Edit size={16} /></button>
                      <button onClick={() => handleDeleteReview(rev.id)} className="p-3 bg-neutral-50 rounded-xl text-neutral-400 hover:text-red-600 transition-all"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  <p className="text-[#1A1305] font-bold text-lg mb-6 line-clamp-3 italic">"{rev.content}"</p>
                  <div>
                    <p className="font-black text-[#1A1305] uppercase tracking-widest text-xs">{rev.name}</p>
                    <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest">{rev.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* REVIEW MODAL */}
        <AnimatePresence>
          {isAddingReview && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center sm:px-4 overflow-y-auto sm:py-10">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsAddingReview(false)} className="fixed inset-0 bg-[#000]/80 backdrop-blur-md" />
              <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 50 }} className="bg-white w-full max-w-4xl sm:rounded-[4rem] relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden min-h-screen sm:min-h-0">
                <div className="p-6 sm:p-12 border-b border-neutral-200 flex justify-between items-center sticky top-0 bg-white z-20">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-black text-[#C9A54C] uppercase tracking-[0.4em] mb-1 sm:mb-2 block">Sacred Testimony</span>
                    <h3 className="text-2xl sm:text-5xl font-black tracking-tighter text-[#000]">{editingReview ? 'Refine Review' : 'New Testimony'}</h3>
                  </div>
                  <button onClick={() => setIsAddingReview(false)} className="w-10 h-10 sm:w-16 sm:h-16 bg-neutral-100 rounded-xl sm:rounded-[1.5rem] flex items-center justify-center text-neutral-900 hover:bg-[#000] hover:text-white transition-all"><X size={24} /></button>
                </div>
                
                <form onSubmit={handleReviewSubmit} className="p-6 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                  <div className="space-y-6 sm:space-y-10">
                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Pilgrim Name</label>
                      <input required type="text" value={reviewForm.name} onChange={e => setReviewForm({...reviewForm, name: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 font-black text-md sm:text-lg text-[#000] outline-none focus:border-[#C9A54C]" />
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Location</label>
                      <input required type="text" value={reviewForm.location} onChange={e => setReviewForm({...reviewForm, location: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 font-black text-md sm:text-lg text-[#000] outline-none focus:border-[#C9A54C]" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Media Type</label>
                            <select value={reviewForm.type} onChange={e => setReviewForm({...reviewForm, type: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 font-black text-md sm:text-lg text-[#000] outline-none focus:border-[#C9A54C]">
                                <option value="video">Video</option>
                                <option value="photo">Photo</option>
                            </select>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                            <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Rating (1-5)</label>
                            <input required type="number" min="1" max="5" value={reviewForm.rating || ''} onChange={e => setReviewForm({...reviewForm, rating: parseInt(e.target.value) || 0})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 font-black text-md sm:text-lg text-[#000] outline-none focus:border-[#C9A54C]" />
                        </div>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-10">
                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Testimony Details</label>
                      <textarea required value={reviewForm.content} onChange={e => setReviewForm({...reviewForm, content: e.target.value})} className="w-full bg-neutral-50 border-2 border-neutral-100 rounded-2xl sm:rounded-3xl px-6 sm:px-8 py-4 sm:py-6 h-32 sm:h-40 font-bold text-neutral-700 outline-none focus:border-[#C9A54C]" />
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <label className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest text-[#000]">Media Upload</label>
                      <div className="relative rounded-2xl sm:rounded-3xl aspect-video bg-neutral-50 border-2 border-dashed border-neutral-200 overflow-hidden group">
                        {reviewFile ? <div className="absolute inset-0 bg-[#C9A54C]/10 flex flex-col items-center justify-center p-6"><CheckCircle2 size={32} className="text-[#C9A54C] mb-2" /><span className="text-[10px] font-black uppercase text-[#C9A54C] tracking-widest">Selected</span></div> : reviewForm.thumbnail ? <img src={reviewForm.thumbnail} className="w-full h-full object-cover" /> : <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20"><ImageIcon size={48} /></div>}
                        <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center cursor-pointer transition-all duration-500"><Upload className="text-white mb-2" size={32} /><span className="text-[10px] font-black text-white uppercase tracking-widest">Replace</span><input type="file" className="hidden" onChange={e => setReviewFile(e.target.files![0])} /></label>
                      </div>
                    </div>

                    <button type="submit" disabled={loading} className="w-full bg-[#1A1305] text-[#C9A54C] font-black py-5 sm:py-8 rounded-2xl sm:rounded-[3rem] shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                      {loading ? <Loader2 className="animate-spin" /> : <Save size={20} />}
                      {editingReview ? 'Update Testimony' : 'Save Testimony'}
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
