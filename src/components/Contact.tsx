import type { FC } from 'react';

const Contact: FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-32 sm:pt-40 pb-20">
      {/* Hero Section */}
      <section className="mb-xl text-center">
        <h1 className="font-display text-display mb-md text-neutral-900">Reach Out to Your Trusted Hajj Partners</h1>
        <p className="font-body-lg text-body-lg text-neutral-600 max-w-2xl mx-auto">
          Embark on your spiritual journey with the assurance of premium service and religious precision. Our team is dedicated to guiding you through every step of your Hajj and Umrah pilgrimage.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
        {/* Contact Details (Asymmetric Column) */}
        <div className="lg:col-span-5 space-y-md">
          <div className="bg-white border-t-4 border-[#F4C430] shadow-[0_20px_40px_rgba(11,11,11,0.04)] p-lg rounded-xl">
            <h2 className="font-h2 text-h2 mb-lg text-neutral-900">Contact Details</h2>
            <div className="space-y-lg">
              <div className="flex items-start gap-md">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-full shrink-0">
                  <span className="material-symbols-outlined text-[#F4C430]">call</span>
                </div>
                <div>
                  <p className="font-label-bold text-label-bold text-neutral-400 uppercase tracking-widest mb-xs">Call Us</p>
                  <a href="tel:08048102586" className="font-h3 text-h3 text-neutral-900 hover:text-[#F4C430] transition-colors font-bold">08048102586</a>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-full shrink-0">
                  <span className="material-symbols-outlined text-[#F4C430]">mail</span>
                </div>
                <div>
                  <p className="font-label-bold text-label-bold text-neutral-400 uppercase tracking-widest mb-xs">Email Address</p>
                  <a href="mailto:arshumrah2022@gmail.com" className="font-h3 text-h3 text-neutral-900 hover:text-[#F4C430] transition-colors font-bold">arshumrah2022@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-md">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-full shrink-0">
                  <span className="material-symbols-outlined text-[#F4C430]">location_on</span>
                </div>
                <div>
                  <p className="font-label-bold text-label-bold text-neutral-400 uppercase tracking-widest mb-xs">Location</p>
                  <p className="font-h3 text-h3 text-neutral-900 font-bold">India, Chennai</p>
                </div>
              </div>
            </div>
            <div className="mt-xl pt-xl border-t border-neutral-100 flex gap-md">
              <a className="w-10 h-10 flex items-center justify-center border border-neutral-200 rounded hover:border-[#F4C430] transition-colors" href="#">
                <span className="material-symbols-outlined text-neutral-900">public</span>
              </a>
              <a className="w-10 h-10 flex items-center justify-center border border-neutral-200 rounded hover:border-[#F4C430] transition-colors" href="#">
                <span className="material-symbols-outlined text-neutral-900">diversity_3</span>
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-64 rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(11,11,11,0.04)] relative">
            <img className="w-full h-full object-cover" alt="Minimalist monochromatic city map of Chennai showing primary arterial roads and urban layout in a clean aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjVQ6LmeXVNZw_P5_oNnMFc5nzGiDHEkLpjq_JraM8t_KWJPv23gCVZjRO9Ds5gyGiC9yyzEemsYOB6AcC5fg7BVbFleWBw9q0Ftw9ih-GkFwR3NgijwsR0Tgb7_7cs1si7Qv-gdmseCG3XdZE_jGfHmu6qbhkWCaxJQywY_oQ3YWGVhY3702PfH1x5lb5OJWQpluyWy8fOV2HLuix65wSfPjQWTPFMhp_5rPJSiHEZYpoxoQYXKflP2yPuQCXGkQtTmMUMUoFcSI" loading="lazy" />
            <div className="absolute inset-0 bg-neutral-900/10 flex items-center justify-center">
              <a 
                href="https://www.google.com/maps/search/Arsh+Hajj+and+Umrah+Chennai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white px-6 py-2 font-label-bold shadow-xl rounded-full hover:bg-[#F4C430] transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border-t-4 border-[#F4C430] shadow-[0_20px_40px_rgba(11,11,11,0.04)] p-lg rounded-xl">
            <h2 className="font-h2 text-h2 mb-lg text-neutral-900">Inquiry Form</h2>
            <form className="space-y-md" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <label className="font-label-bold text-neutral-700">Full Name</label>
                  <input className="w-full border-neutral-300 focus:ring-0 focus:border-neutral-900 border-b-2 border-b-neutral-200 focus:border-b-[#F4C430] transition-all py-3" placeholder="John Doe" type="text"/>
                </div>
                <div className="space-y-xs">
                  <label className="font-label-bold text-neutral-700">Email Address</label>
                  <input className="w-full border-neutral-300 focus:ring-0 focus:border-neutral-900 border-b-2 border-b-neutral-200 focus:border-b-[#F4C430] transition-all py-3" placeholder="john@example.com" type="email"/>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                <div className="space-y-xs">
                  <label className="font-label-bold text-neutral-700">Phone Number</label>
                  <input className="w-full border-neutral-300 focus:ring-0 focus:border-neutral-900 border-b-2 border-b-neutral-200 focus:border-b-[#F4C430] transition-all py-3" placeholder="+91 000 000 0000" type="tel"/>
                </div>
                <div className="space-y-xs">
                  <label className="font-label-bold text-neutral-700">Preferred Package</label>
                  <select className="w-full border-neutral-300 focus:ring-0 focus:border-neutral-900 border-b-2 border-b-neutral-200 focus:border-b-[#F4C430] transition-all py-3 bg-white">
                    <option>Select Package Type</option>
                    <option>Hajj Package</option>
                    <option>Umrah Package</option>
                    <option>Spiritual Group Tour</option>
                  </select>
                </div>
              </div>
              <div className="space-y-xs">
                <label className="font-label-bold text-neutral-700">Your Message</label>
                <textarea className="w-full border-neutral-300 focus:ring-0 focus:border-neutral-900 border-b-2 border-b-neutral-200 focus:border-b-[#F4C430] transition-all py-3 resize-none" placeholder="Tell us about your requirements..." rows={5}></textarea>
              </div>
              <div className="pt-md">
                <button className="w-full md:w-auto px-12 py-4 bg-neutral-900 text-[#F4C430] font-h3 hover:bg-neutral-800 transition-colors rounded-lg flex items-center justify-center gap-md" type="submit">
                  Send Inquiry
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
          </div>

          {/* Subtle Info Cards */}
          <div className="mt-lg grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="p-md bg-white/50 border border-neutral-200 rounded-xl">
              <span className="material-symbols-outlined text-[#F4C430] mb-sm">verified</span>
              <p className="font-label-bold text-neutral-900">Ministry Authorized</p>
              <p className="text-neutral-500">Official Hajj &amp; Umrah Licensee since 2022.</p>
            </div>
            <div className="p-md bg-white/50 border border-neutral-200 rounded-xl">
              <span className="material-symbols-outlined text-[#F4C430] mb-sm">support_agent</span>
              <p className="font-label-bold text-neutral-900">24/7 Ground Support</p>
              <p className="text-neutral-500">Round-the-clock assistance during your pilgrimage.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
