import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Compass, 
  BookOpen, 
  Hotel, 
  Utensils, 
  Map, 
  HeartPulse, 
  Clock, 
  ChevronRight,
  ShieldCheck,
  Plane,
  Users
} from 'lucide-react';

const Services: React.FC = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <main className="bg-neutral-50 min-h-screen pt-32 sm:pt-40 pb-12 sm:pb-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header Section */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 sm:mb-20"
        >
          <span className="bg-[#F4C430]/10 text-[#F4C430] px-4 sm:px-6 py-2 rounded-full font-black text-[8px] sm:text-[9px] uppercase tracking-widest mb-4 inline-block">
            Support Ecosystem
          </span>
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
            Comprehensive <span className="text-[#F4C430]">Spiritual Support</span>
          </h1>
          <p className="text-neutral-500 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            We manage every detail of your sacred journey with meticulous care, allowing you to focus entirely on your worship and spiritual connection.
          </p>
        </motion.section>

        {/* Bento Grid: Core Services */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-20 sm:mb-32"
        >
          {/* Visa & Flight (Large Card) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-100 flex flex-col lg:flex-row gap-8 group hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F4C430]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Plane className="w-5 h-5 sm:w-6 sm:h-6 text-[#F4C430]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">Seamless Travel Logistics</h3>
              <p className="text-neutral-500 mb-6 sm:mb-8 leading-relaxed italic text-sm sm:text-base">"Our end-to-end processing covers express Visa approvals and confirmed flight bookings."</p>
              <ul className="space-y-3 sm:space-y-4">
                {['Saudi Ministry Approved Visa', 'Multi-City Flight Coordination'].map((li, i) => (
                  <li key={i} className="flex items-center gap-3 text-neutral-700 font-bold text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#F4C430]" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 min-h-[200px] sm:min-h-[300px] rounded-2xl overflow-hidden relative">
              <img 
                alt="Travel Support" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhER8qelORPB2_Qmc9Mkif1atrniJxfSv7jyFgIZBT1h4ayie9u-CfmOGI7z7hXyiKj3EzlmcmjnrhZiQxOVZ1C8qjXytqPUYxG5SB219NIf8WKDiMAuNrFo5XmzNwo9YMXt_TQGq36PIO9cYgjLkHr6YOV0wlEJ6dBah-KdNTsSLiz-HVxgufzMmHb-Y4qgYkXFjhXAONitux_4j2-apT-zdcEG0Pg8G7OaduVVt_2qSLw0UOQrkukK2pXbNVj-Qn0z_btrA-fVo" 
                loading="lazy" 
              />
            </div>
          </motion.div>

          {/* Ritual Guidance (Tall Card) */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-4 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-neutral-100 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500"
          >
            <div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#F4C430]/10 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-[#F4C430]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Ritual Guidance</h3>
              <p className="text-neutral-500 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                In-person and digital guidance on Manasik-e-Hajj and Umrah led by qualified spiritual scholars.
              </p>
            </div>
            <div className="pt-6 sm:pt-8 border-t border-neutral-50">
              <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-2xl">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F4C430] flex items-center justify-center shadow-lg">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-900" />
                </div>
                <div>
                  <p className="font-bold text-xs sm:text-sm text-neutral-900">24/7 Scholar Support</p>
                  <p className="text-[10px] sm:text-xs text-neutral-400 font-medium">Multilingual scholars on-call</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hospitality Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-6 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-neutral-100 group hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-6 sm:mb-8">
              <div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#F4C430]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Hotel className="w-6 h-6 sm:w-8 sm:h-8 text-[#F4C430]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900">Hilton Luxury Living</h3>
              </div>
              <span className="bg-neutral-900 text-[#F4C430] px-3 sm:px-4 py-1 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest border border-neutral-800">
                Premium Partner
              </span>
            </div>
            <p className="text-neutral-500 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Experience unparalleled comfort at Hilton properties in Makkah and Madinah, located within the Haram boundaries for easy prayer access.
            </p>
            <div className="rounded-2xl overflow-hidden h-48 sm:h-64">
              <img 
                alt="Luxury Hotel" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMakWnZcUsB2wqjn7Z8TuOLcYLA9wuWre215J1hwiXDgrBFYhESC_2sdnMLb0tF9KXaJUMhHWCQ0RoLcIbji3elBGlyTH_5K9GIl042hHmx4XetuEjzUfVb1eaAkRinG5sSuFSU-RC_q67RHalPyHRauW3Jlg1Wc1Hjpz9vLCEnGK1gPAWHuFEefxPS39p4v42gkMJG5H-d_UScJpwF0lNS2IIWHx4ifdJCDuknaTw_ikSlM5LMNdTbN3UHM3r7fQ9wHLTOl_WTvs" 
                loading="lazy" 
              />
            </div>
          </motion.div>

          {/* Catering Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-6 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-neutral-100 group hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#F4C430]/10 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
              <Utensils className="w-6 h-6 sm:w-8 sm:h-8 text-[#F4C430]" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">Authentic Indian Catering</h3>
            <p className="text-neutral-500 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
              Nutritious, home-style Indian Halal meals prepared by professional chefs. We cater to diverse dietary requirements including diabetic and Jain options.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {['Halal Certified', 'Daily Fresh', 'Tea & Snacks 24/7'].map((tag, i) => (
                <div key={i} className="px-4 sm:px-6 py-2 sm:py-3 bg-neutral-50 rounded-2xl text-[10px] sm:text-sm font-bold text-neutral-600 border border-neutral-100 transition-colors group-hover:border-[#F4C430]/30 group-hover:bg-white">
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Ziyarat Tours Section */}
        <section className="mb-20 sm:mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-5xl font-bold text-neutral-900 leading-tight">
                Ziyarat Tours: <span className="text-[#F4C430]">A Historical Journey</span>
              </h2>
              <p className="text-neutral-500 text-base sm:text-lg leading-relaxed italic px-4 sm:px-0">
                "Step back in time with our guided historical tours in Makkah and Madinah. We don't just show you the sites; we share the profound stories behind them."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border-l-8 border-[#F4C430] shadow-sm hover:shadow-xl transition-all text-left">
                  <p className="font-black text-neutral-900 mb-2 uppercase tracking-widest text-[10px]">Makkah Sites</p>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">Jabal al-Nour, Cave of Hira, Mina, Arafat, Muzdalifah.</p>
                </div>
                <div className="bg-white p-6 sm:p-8 rounded-3xl border-l-8 border-neutral-900 shadow-sm hover:shadow-xl transition-all text-left">
                  <p className="font-black text-neutral-900 mb-2 uppercase tracking-widest text-[10px]">Madinah Sites</p>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">Masjid al-Quba, Mount Uhud, Seven Mosques.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  alt="Ziyarat Tours" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVwKI_ZBdsm7hQMNZYidAMibMAREIAijffO5tdyep9EDFzl1vmawgDrQMHqGHX5JIRaCKMkSVf_xMsXIo-FMJ5fJYu4CAJ4QRYJnBg2dwWxmQsV4ktCmZUbHVagFoxxfKFZuQ5td563fTSQ_HpT9OXS-6DbzoUIqaj0t5d6wO3RdAn9gcO5Wnj-Z2aqLEMHQ8rp0k9HQlkctY6HU5GqW7fB6gLdwjw5eSKtGNpqDhhB_m3Opr2vVMEvKudTqmNc7hhC_V8XbW36yU" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-10">
                  <p className="text-white font-bold text-sm sm:text-lg">Guided tours led by historians and scholars.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 24/7 Care & Logistics */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-900 text-white p-8 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[3rem] relative overflow-hidden mb-20 sm:mb-32"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-8">24/7 On-Ground Care</h2>
              <p className="text-neutral-400 text-base sm:text-xl mb-8 sm:mb-12 leading-relaxed">
                Our dedicated group leaders are not just staff—they are your companions. Staying in the same hotels as you, they are available around the clock for any medical or personal needs.
              </p>
              <div className="space-y-8 sm:space-y-10">
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 group text-center sm:text-left">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F4C430]/20 rounded-2xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#F4C430]">
                    <HeartPulse className="w-6 h-6 text-[#F4C430] transition-colors group-hover:text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Emergency Medical Aid</p>
                    <p className="text-sm sm:text-base text-neutral-400">Immediate assistance and hospital coordination if needed.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 group text-center sm:text-left">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F4C430]/20 rounded-2xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#F4C430]">
                    <Users className="w-6 h-6 text-[#F4C430] transition-colors group-hover:text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Dedicated Mutawwif</p>
                    <p className="text-sm sm:text-base text-neutral-400">Experienced guides for group and individual tawaf.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: <Clock />, title: "Laundry Services", desc: "Complimentary weekly laundry to keep your Ihram pristine." },
                { icon: <Compass />, title: "Luggage Porter", desc: "Door-to-door luggage handling from airport to hotel rooms." },
                { icon: <Map />, title: "Local SIM Cards", desc: "Pre-activated data and calling cards upon arrival." },
                { icon: <Compass />, title: "VIP Transport", desc: "Private GMCs and VIP Buses for all intra-city travel." }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="text-[#F4C430] mb-3 sm:mb-4">{service.icon}</div>
                  <h4 className="font-bold text-base sm:text-lg mb-2">{service.title}</h4>
                  <p className="text-[10px] sm:text-xs text-neutral-500 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
            <div className="bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')] w-full h-full"></div>
          </div>
        </motion.section>

        {/* Bottom CTA for Services */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-20 bg-white rounded-[3rem] shadow-xl border border-neutral-100"
        >
          <h2 className="text-4xl font-bold text-neutral-900 mb-8">Have more questions?</h2>
          <button 
            className="bg-neutral-900 text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:bg-[#F4C430] hover:text-neutral-900 active:scale-95 shadow-2xl shadow-neutral-900/20"
            onClick={() => navigate('/contact')}
          >
            Contact Our Team
            <ChevronRight className="w-4 h-4 inline-block ml-3" />
          </button>
        </motion.section>
      </div>
    </main>
  );
};

export default Services;
