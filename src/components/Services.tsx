import React from 'react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <main className="max-w-7xl mx-auto px-8 py-xl">
      {/* Hero Section */}
      <section className="mb-xl text-center">
        <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-label-bold text-xs uppercase tracking-widest mb-md inline-block">Support Ecosystem</span>
        <h1 className="font-display text-display text-on-surface mb-md">Comprehensive Spiritual Support</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
          We manage every detail of your sacred journey with meticulous care, allowing you to focus entirely on your worship and spiritual connection.
        </p>
      </section>

      {/* Bento Grid: Core Services */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl">
        {/* Visa & Flight (Large Card) */}
        <div className="md:col-span-8 bg-white border-t-4 border-[#F4C430] p-lg shadow-[0_20px_40px_rgba(11,11,11,0.04)] flex flex-col md:flex-row gap-lg">
          <div className="flex-1">
            <span className="material-symbols-outlined text-[#F4C430] text-4xl mb-md">travel_explore</span>
            <h3 className="font-h3 text-h3 mb-sm">Seamless Travel Logistics</h3>
            <p className="font-body-md text-on-surface-variant mb-md">Our end-to-end processing covers express Visa approvals and confirmed flight bookings with major airlines, ensuring a stress-free departure and return.</p>
            <ul className="space-y-base font-label-bold text-on-surface">
              <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Saudi Ministry Approved Visa</li>
              <li className="flex items-center gap-xs"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Multi-City Flight Coordination</li>
            </ul>
          </div>
          <div className="flex-1 min-h-[240px] bg-neutral-100 rounded-lg overflow-hidden">
            <img alt="Visa and Flight Support" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhER8qelORPB2_Qmc9Mkif1atrniJxfSv7jyFgIZBT1h4ayie9u-CfmOGI7z7hXyiKj3EzlmcmjnrhZiQxOVZ1C8qjXytqPUYxG5SB219NIf8WKDiMAuNrFo5XmzNwo9YMXt_TQGq36PIO9cYgjLkHr6YOV0wlEJ6dBah-KdNTsSLiz-HVxgufzMmHb-Y4qgYkXFjhXAONitux_4j2-apT-zdcEG0Pg8G7OaduVVt_2qSLw0UOQrkukK2pXbNVj-Qn0z_btrA-fVo"/>
          </div>
        </div>

        {/* Ritual Guidance (Tall Card) */}
        <div className="md:col-span-4 bg-white border-t-4 border-[#F4C430] p-lg shadow-[0_20px_40px_rgba(11,11,11,0.04)] flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-[#F4C430] text-4xl mb-md">menu_book</span>
            <h3 className="font-h3 text-h3 mb-sm">Ritual Guidance</h3>
            <p className="font-body-md text-on-surface-variant mb-md">In-person and digital guidance on Manasik-e-Hajj and Umrah led by qualified spiritual scholars.</p>
          </div>
          <div className="pt-md border-t border-surface-variant">
            <div className="flex items-center gap-sm">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container">record_voice_over</span>
              </div>
              <div>
                <p className="font-label-bold text-sm">24/7 Scholar Support</p>
                <p className="text-xs text-on-surface-variant">Multilingual scholars on-call</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hospitality Card */}
        <div className="md:col-span-6 bg-white border-t-4 border-[#F4C430] p-lg shadow-[0_20px_40px_rgba(11,11,11,0.04)]">
          <div className="flex justify-between items-start mb-md">
            <div>
              <span className="material-symbols-outlined text-[#F4C430] text-4xl mb-sm">hotel</span>
              <h3 className="font-h3 text-h3">Hilton Luxury Living</h3>
            </div>
            <span className="bg-surface-container text-on-surface px-3 py-1 rounded text-xs font-bold border border-outline-variant uppercase">Premium Partner</span>
          </div>
          <p className="font-body-md text-on-surface-variant mb-md">Experience unparalleled comfort at Hilton properties in Makkah and Madinah, located within the Haram boundaries for easy prayer access.</p>
          <img alt="Hilton Hotel Suite" className="w-full h-48 object-cover rounded-lg mb-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMakWnZcUsB2wqjn7Z8TuOLcYLA9wuWre215J1hwiXDgrBFYhESC_2sdnMLb0tF9KXaJUMhHWCQ0RoLcIbji3elBGlyTH_5K9GIl042hHmx4XetuEjzUfVb1eaAkRinG5sSuFSU-RC_q67RHalPyHRauW3Jlg1Wc1Hjpz9vLCEnGK1gPAWHuFEefxPS39p4v42gkMJG5H-d_UScJpwF0lNS2IIWHx4ifdJCDuknaTw_ikSlM5LMNdTbN3UHM3r7fQ9wHLTOl_WTvs"/>
        </div>

        {/* Catering Card */}
        <div className="md:col-span-6 bg-white border-t-4 border-[#F4C430] p-lg shadow-[0_20px_40px_rgba(11,11,11,0.04)]">
          <span className="material-symbols-outlined text-[#F4C430] text-4xl mb-md">restaurant</span>
          <h3 className="font-h3 text-h3 mb-sm">Authentic Indian Catering</h3>
          <p className="font-body-md text-on-surface-variant mb-md">Nutritious, home-style Indian Halal meals prepared by professional chefs. We cater to diverse dietary requirements including diabetic and Jain options.</p>
          <div className="flex flex-wrap gap-xs">
            <span className="bg-surface-container-low border border-outline-variant px-3 py-1 rounded-full text-xs font-label-bold">Halal Certified</span>
            <span className="bg-surface-container-low border border-outline-variant px-3 py-1 rounded-full text-xs font-label-bold">Daily Fresh</span>
            <span className="bg-surface-container-low border border-outline-variant px-3 py-1 rounded-full text-xs font-label-bold">Tea &amp; Snacks 24/7</span>
          </div>
        </div>
      </section>

      {/* Ziyarat Tours Section */}
      <section className="mb-xl">
        <div className="flex flex-col md:flex-row items-center gap-lg">
          <div className="flex-1 space-y-md">
            <h2 className="font-h2 text-h2">Ziyarat Tours: A Historical Journey</h2>
            <p className="font-body-md text-on-surface-variant">Step back in time with our guided historical tours in Makkah and Madinah. We don't just show you the sites; we share the profound stories behind them.</p>
            <div className="grid grid-cols-2 gap-md">
              <div className="bg-white p-md border-l-4 border-secondary shadow-[0_20px_40px_rgba(11,11,11,0.04)]">
                <p className="font-label-bold mb-xs">Makkah Sites</p>
                <p className="text-xs text-on-surface-variant">Jabal al-Nour, Cave of Hira, Mina, Arafat, Muzdalifah.</p>
              </div>
              <div className="bg-white p-md border-l-4 border-secondary shadow-[0_20px_40px_rgba(11,11,11,0.04)]">
                <p className="font-label-bold mb-xs">Madinah Sites</p>
                <p className="text-xs text-on-surface-variant">Masjid al-Quba, Mount Uhud, Seven Mosques.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full h-[400px]">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
              <img alt="Ziyarat Tours" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVwKI_ZBdsm7hQMNZYidAMibMAREIAijffO5tdyep9EDFzl1vmawgDrQMHqGHX5JIRaCKMkSVf_xMsXIo-FMJ5fJYu4CAJ4QRYJnBg2dwWxmQsV4ktCmZUbHVagFoxxfKFZuQ5td563fTSQ_HpT9OXS-6DbzoUIqaj0t5d6wO3RdAn9gcO5Wnj-Z2aqLEMHQ8rp0k9HQlkctY6HU5GqW7fB6gLdwjw5eSKtGNpqDhhB_m3Opr2vVMEvKudTqmNc7hhC_V8XbW36yU"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-lg">
                <p className="text-white font-label-bold">Guided tours led by historians and scholars.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Care & Logistics */}
      <section className="bg-neutral-900 text-white p-xl rounded-2xl relative overflow-hidden mb-xl">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div>
            <h2 className="font-display text-h1 text-white mb-md">24/7 On-Ground Care</h2>
            <p className="font-body-lg text-neutral-300 mb-lg">Our dedicated group leaders are not just staff—they are your companions. Staying in the same hotels as you, they are available around the clock for any medical or personal needs.</p>
            <div className="space-y-md">
              <div className="flex gap-md">
                <span className="material-symbols-outlined text-secondary-container">emergency</span>
                <div>
                  <p className="font-h3 text-white">Emergency Medical Aid</p>
                  <p className="text-sm text-neutral-400">Immediate assistance and hospital coordination if needed.</p>
                </div>
              </div>
              <div className="flex gap-md">
                <span className="material-symbols-outlined text-secondary-container">groups</span>
                <div>
                  <p className="font-h3 text-white">Dedicated Mutawwif</p>
                  <p className="text-sm text-neutral-400">Experienced guides for group and individual tawaf.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-md">
            {/* Smaller Details */}
            <div className="bg-neutral-800 p-lg rounded-xl border border-neutral-700">
              <span className="material-symbols-outlined text-secondary-container mb-sm">local_laundry_service</span>
              <h4 className="font-label-bold mb-xs">Laundry Services</h4>
              <p className="text-xs text-neutral-400">Complimentary weekly laundry to keep your Ihram pristine.</p>
            </div>
            <div className="bg-neutral-800 p-lg rounded-xl border border-neutral-700">
              <span className="material-symbols-outlined text-secondary-container mb-sm">luggage</span>
              <h4 className="font-label-bold mb-xs">Luggage Porter</h4>
              <p className="text-xs text-neutral-400">Door-to-door luggage handling from airport to hotel rooms.</p>
            </div>
            <div className="bg-neutral-800 p-lg rounded-xl border border-neutral-700">
              <span className="material-symbols-outlined text-secondary-container mb-sm">phone_android</span>
              <h4 className="font-label-bold mb-xs">Local SIM Cards</h4>
              <p className="text-xs text-neutral-400">Pre-activated data and calling cards upon arrival.</p>
            </div>
            <div className="bg-neutral-800 p-lg rounded-xl border border-neutral-700">
              <span className="material-symbols-outlined text-secondary-container mb-sm">directions_bus</span>
              <h4 className="font-label-bold mb-xs">Luxury Transport</h4>
              <p className="text-xs text-neutral-400">Private GMCs and VIP Buses for all intra-city travel.</p>
            </div>
          </div>
        </div>
        {/* Decorative Pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="islamic-pattern w-full h-full"></div>
        </div>
      </section>

      {/* FAQ/Accordion Style */}
      <section className="max-w-3xl mx-auto mb-xl">
        <h2 className="font-h2 text-h2 text-center mb-lg">Service Support FAQs</h2>
        <div className="space-y-sm">
          <div className="border border-surface-variant bg-white p-md group">
            <div className="flex justify-between items-center cursor-pointer">
              <p className="font-label-bold">Is travel insurance included in the package?</p>
              <span className="material-symbols-outlined text-outline">expand_more</span>
            </div>
          </div>
          <div className="border border-surface-variant bg-[#FFF8E1] p-md shadow-sm">
            <div className="flex justify-between items-center cursor-pointer mb-sm">
              <p className="font-label-bold">How do we manage meals during the journey?</p>
              <span className="material-symbols-outlined text-on-surface">expand_less</span>
            </div>
            <p className="text-sm text-on-surface-variant">We provide three full buffet meals daily. In Mina and Arafat, specific camp kitchens provide fresh meals under our supervision to maintain quality and hygiene standards.</p>
          </div>
          <div className="border border-surface-variant bg-white p-md">
            <div className="flex justify-between items-center cursor-pointer">
              <p className="font-label-bold">What if I have a medical emergency at night?</p>
              <span className="material-symbols-outlined text-outline">expand_more</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA for Services */}
      <section className="text-center py-lg bg-white border-t border-neutral-100">
        <h2 className="font-h2 text-h2 mb-md">Have more questions?</h2>
        <button 
          className="bg-neutral-900 text-[#F4C430] px-12 py-4 font-bold rounded-lg shadow-xl hover:scale-105 transition-transform"
          onClick={() => onNavigate('contact')}
        >
          Contact Our Team
        </button>
      </section>
    </main>
  );
};

export default Services;
