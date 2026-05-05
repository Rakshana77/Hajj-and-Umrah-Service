import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    package: 'Economy Umrah Package',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const whatsappNumber = "918123379158"; 
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Package:* ${formData.package}%0A*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <main className="bg-[#FCFBF7] min-h-screen pt-32 sm:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <section className="text-center mb-20">
          <span className="text-[#C9A54C] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">தமிழகத்தில் நம்பிக்கையான நிர்வாகம்</span>
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-[#1A1305] mb-6">Contact Our Experts</h1>
          <p className="text-neutral-500 max-w-2xl mx-auto italic text-lg leading-relaxed">
            "Your sacred journey is our responsibility. Reach out to us for trusted Hajj and Umrah guidance."
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2rem] border border-neutral-100 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-[#1A1305] mb-10">Business Details</h2>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#C9A54C]/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-[#C9A54C] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-black uppercase tracking-widest mb-2">Call Us</p>
                    <div className="flex flex-col gap-1">
                      <a href="tel:08123379158" className="text-lg font-bold text-[#1A1305] hover:text-[#C9A54C] transition-colors">08123379158</a>
                      <a href="tel:8807114887" className="text-lg font-bold text-[#1A1305] hover:text-[#C9A54C] transition-colors">88071 14887</a>
                      <a href="tel:7558198870" className="text-lg font-bold text-[#1A1305] hover:text-[#C9A54C] transition-colors">75581 98870</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#C9A54C]/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-[#C9A54C] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-black uppercase tracking-widest mb-2">Our Office</p>
                    <p className="text-lg font-bold text-[#1A1305] leading-relaxed">
                      No. 16, Ajmal Complex, E.C.R Road,<br/>
                      (Roundana Opp), Kottakuppam,<br/>
                      Puducherry
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MessageCircle className="text-green-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400 font-black uppercase tracking-widest mb-2">WhatsApp Support</p>
                    <a href="tel:0541554916" className="text-lg font-bold text-[#1A1305] hover:text-[#C9A54C] transition-colors">0541554916 (Saudi)</a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-neutral-100">
                <p className="text-sm font-bold text-[#C9A54C] mb-2 uppercase tracking-widest">Administrator</p>
                <p className="text-xl font-black text-[#1A1305]">J. Dasthagir Basha</p>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <div className="h-64 rounded-[2rem] overflow-hidden shadow-xl border border-neutral-100 relative group">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjVQ6LmeXVNZw_P5_oNnMFc5nzGiDHEkLpjq_JraM8t_KWJPv23gCVZjRO9Ds5gyGiC9yyzEemsYOB6AcC5fg7BVbFleWBw9q0Ftw9ih-GkFwR3NgijwsR0Tgb7_7cs1si7Qv-gdmseCG3XdZE_jGfHmu6qbhkWCaxJQywY_oQ3YWGVhY3702PfH1x5lb5OJWQpluyWy8fOV2HLuix65wSfPjQWTPFMhp_5rPJSiHEZYpoxoQYXKflP2yPuQCXGkQtTmMUMUoFcSI" />
              <div className="absolute inset-0 bg-neutral-900/10 flex items-center justify-center">
                <a 
                  href="https://www.google.com/maps/search/Haji+Umrah+and+Ziyara+Service+Kottakuppam" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-[#1A1305] px-8 py-3 font-black text-xs uppercase tracking-widest shadow-2xl rounded-xl hover:bg-[#C9A54C] transition-all"
                >
                  Open Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2rem] border border-neutral-100 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-[#1A1305] mb-10">Send an Inquiry</h2>
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest px-1">Full Name</label>
                    <input 
                      required
                      className="w-full bg-[#FCFBF7] border-transparent focus:border-[#C9A54C] rounded-xl py-4 px-6 transition-all text-[#1A1305] font-bold outline-none" 
                      placeholder="Your Name" 
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest px-1">Phone Number</label>
                    <input 
                      required
                      className="w-full bg-[#FCFBF7] border-transparent focus:border-[#C9A54C] rounded-xl py-4 px-6 transition-all text-[#1A1305] font-bold outline-none" 
                      placeholder="+91 00000 00000" 
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest px-1">Preferred Package</label>
                  <select 
                    className="w-full bg-[#FCFBF7] border-transparent focus:border-[#C9A54C] rounded-xl py-4 px-6 transition-all text-[#1A1305] font-bold outline-none appearance-none cursor-pointer"
                    value={formData.package}
                    onChange={(e) => setFormData({...formData, package: e.target.value})}
                  >
                    <option>Economy Umrah Package</option>
                    <option>Deluxe Umrah Package</option>
                    <option>3 Umrah + Ziyara Premium Package</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-neutral-400 uppercase tracking-widest px-1">Message</label>
                  <textarea 
                    required
                    className="w-full bg-[#FCFBF7] border-transparent focus:border-[#C9A54C] rounded-xl py-4 px-6 transition-all text-[#1A1305] font-bold outline-none resize-none" 
                    placeholder="How can we help you?" 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button className="w-full bg-[#1A1305] text-[#C9A54C] py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#C9A54C] hover:text-white transition-all flex items-center justify-center gap-4 shadow-xl" type="submit">
                  Send Your Inquiry via WhatsApp
                  <MessageCircle className="w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Support Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Trusted Management', desc: 'Managed by J. Dasthagir Basha with years of expertise.' },
                { title: '24/7 Assistance', desc: 'Round-the-clock support for all your needs during the journey.' }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white/50 border border-neutral-100 rounded-[2rem] flex items-start gap-4">
                  <CheckCircle2 className="text-[#C9A54C] w-6 h-6 shrink-0" />
                  <div>
                    <p className="font-bold text-[#1A1305] mb-1">{item.title}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
