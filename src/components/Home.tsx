import type { FC } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: FC<HomeProps> = ({ onNavigate }) => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[716px] flex items-center overflow-hidden bg-neutral-900">
        <img className="absolute inset-0 w-full h-full object-cover opacity-60" alt="Wide cinematic shot of the Holy Kaaba in Makkah during dawn with soft spiritual golden light and minimal crowds" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf6Qc_zCiI6TJ375gCkSZh4sGYrPPiDe6VYf94i5Edqpr9NC7oJdX1-xaa196kWznKrUp-9sYGF5w7Uhdzw_jLE_GERpzaIIp1j6n3lhEC0MCd98_9HyqZDvzFjSrZy_9meFLbiRID7JJurkYW-crAZeN52Vmljy61r1M558CBpkiXOqVATrcIQ90BvswNS8BTTARS54tOjnwMSRF7wNDmDLMtsln7IvsGGv3AZhjbUeU71xUzVXDjCG-yWwwfl023TvIQdww5OIY"/>
        <div className="relative max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#F4C430] text-neutral-900 px-3 py-1 font-label-bold text-label-bold mb-6 uppercase tracking-wider">Licensed Hajj &amp; Umrah Operator</span>
            <h1 className="font-display text-display text-white mb-6">Experience a Spiritual Umrah Journey with Ease</h1>
            <p className="font-body-lg text-body-lg text-neutral-200 mb-8">Guided by faith, delivered with excellence. Join Haji Umrah & Ziyara service for a meticulously planned spiritual retreat.</p>
            <div className="flex gap-4">
              <button 
                className="bg-[#F4C430] text-neutral-900 px-8 py-4 font-bold text-label-bold font-label-bold hover:opacity-90 transition-all shadow-xl"
                onClick={() => onNavigate('contact')}
              >
                Book Now
              </button>
              <button 
                className="border-2 border-white text-white px-8 py-4 font-bold text-label-bold font-label-bold hover:bg-white hover:text-neutral-900 transition-all"
                onClick={() => onNavigate('services')}
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center gap-12 md:justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#F4C430] text-3xl">verified_user</span>
            <span className="font-label-bold text-neutral-900">Licensed Operator</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#F4C430] text-3xl">mosque</span>
            <span className="font-label-bold text-neutral-900">Expert Religious Guidance</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#F4C430] text-3xl">restaurant</span>
            <span className="font-label-bold text-neutral-900">Premium Halal Catering</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#F4C430] text-3xl">support_agent</span>
            <span className="font-label-bold text-neutral-900">24/7 Group Support</span>
          </div>
        </div>
      </section>
      {/* Package Categories / Grid */}
      <section className="py-xl max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-h1 text-h1 text-neutral-900 mb-4 uppercase tracking-widest">Select Your Spiritual Journey</h2>
          <div className="h-1 w-20 bg-[#F4C430] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Regular Umrah */}
          <div className="bg-white border-t-4 border-[#F4C430] soft-veil p-8 flex flex-col">
            <div className="mb-6">
              <img className="w-full h-48 object-cover mb-6 rounded-lg" alt="Interior of a modern luxury hotel lobby in Makkah with elegant marble flooring and warm ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAofHlpqv5M6ysy-oUa04tSSxJxvleTrmCf07NHab_GmOgjh800R44f9ApEI-lbo6gnzfzi2EClaKUURZpbIrdvhK2V74MYtC5TioBvonrq-nIivwVwqh59jUYBWKVdk299A18g4yXE-_VUmC68pnaxRwJ4hgqd_Dw4mN-roN7L6J6Ks9A1MH7ZMJxS3m_8kZAvU24KzS4dfWJ6alGPV50eeZX83TwXgELZg3qFetj6edDK9zJuU-1I0hyQNG6A0gzZR5A814R8oOI"/>
              <h3 className="font-h2 text-h2 text-neutral-900 mb-2">Regular Umrah</h3>
              <p className="font-body-md text-neutral-600 mb-4">Standard comfort for a peaceful pilgrimage experience.</p>
              <div className="text-3xl font-black text-neutral-900">₹95,000<span className="text-sm font-normal text-neutral-500"> / person</span></div>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[#F4C430] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Visa &amp; Insurance Included
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[#F4C430] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>hotel</span>
                Standard Hotel (600m from Haram)
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[#F4C430] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>flatware</span>
                Full Board Indian Food
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[#F4C430] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>directions_bus</span>
                AC Transport &amp; Ziyarat
              </li>
            </ul>
            <button 
              className="w-full bg-[#F4C430] text-neutral-900 py-4 font-bold text-label-bold font-label-bold hover:opacity-90 transition-all rounded-lg"
              onClick={() => onNavigate('contact')}
            >
              Book This Package
            </button>
          </div>
          {/* Ramadan Special */}
          <div className="bg-white border-t-4 border-[#F4C430] soft-veil p-8 flex flex-col transform md:-translate-y-4 scale-105 z-10 shadow-2xl rounded-xl">
            <div className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-neutral-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">Most Popular</span>
              </div>
              <img className="w-full h-48 object-cover mb-6 rounded-lg" alt="Beautiful twilight view of the Clock Tower and the Grand Mosque area with illuminated lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEw4gl2Oc7NH1wSl-cpeWOpt7BFun8a44Nyh26hB7QsjlSTUEJFG5EzIeHzi42InBu0zMJ_rlAC5jk2PZkeXM0uKiOr5-TbSBP1tYDZmQqIpzq0TxZWiID6UTliYXVaTGORQzMoFmDZrXoj2pm3k3x01D0O55Cg7tdqWIdTaooTzT5PgB3z8h3CRsexc0o7xw2-RmvCfmLzwvHeOSc4rUpud_Wr-UKaERbyGOrc7dxzUE-lSnIg6Zx7iVScYMpW5MP6KAEmsewSKc"/>
              <h3 className="font-h2 text-h2 text-neutral-900 mb-2">Ramadan Special</h3>
              <p className="font-body-md text-neutral-600 mb-4">Experience the blessings of the holy month in Makkah.</p>
              <div className="text-3xl font-black text-neutral-900">₹110,000<span className="text-sm font-normal text-neutral-500"> / person</span></div>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                <span className="material-symbols-outlined text-[#F4C430] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                Limited Ramadan Visa Slots
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[#F4C430] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>hotel</span>
                Premium Stay Near Haram
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[#F4C430] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
                Suhoor &amp; Iftar Arrangements
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[#F4C430] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
                Guided Taraweeh Groups
              </li>
            </ul>
            <button 
              className="w-full bg-[#F4C430] text-neutral-900 py-4 font-bold text-label-bold font-label-bold hover:opacity-90 transition-all shadow-lg rounded-lg"
              onClick={() => onNavigate('contact')}
            >
              Enquire Now
            </button>
          </div>
          {/* Deluxe Umrah */}
          <div className="bg-white border-t-4 border-[#F4C430] soft-veil p-8 flex flex-col">
            <div className="mb-6">
              <img className="w-full h-48 object-cover mb-6 rounded-lg" alt="Luxury hotel suite bedroom with premium linens and a view of the Holy Mosque from the window" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhkOddjpzhvK6iwJhQvWYsNxbm2zQFcZzrsXVCXtHkrl45fb59dHT2g2dLjAAayKv0_-w6XOunES0CayqV-rqVlmo24TjSykRQl7bnmdvE9CLWKpiOKsCpIN1YFSZjkK3vjsWyb5QVCjP14ZYhz8JiybptJ5oOfNDcoJHX_Qu2VlYC-pVnaoTsA6FGXU_WaBCs-bUfR_235jFs9v2aphfZDgzNW85kZhjlrMubTrtizG4jqiA8X6i_SeQNOF3T8ngZVNU34P4VGB4"/>
              <h3 className="font-h2 text-h2 text-neutral-900 mb-2">Deluxe Umrah</h3>
              <p className="font-body-md text-neutral-600 mb-4">Ultimate luxury with stay at Hilton or similar 5-star hotels.</p>
              <div className="text-3xl font-black text-neutral-900">₹145,000<span className="text-sm font-normal text-neutral-500"> / person</span></div>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[#F4C430] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>hotel</span>
                Stay at Hilton Suites / Movenpick
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[#F4C430] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>flight_takeoff</span>
                Direct Flight Options
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[#F4C430] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>directions_car</span>
                Private GMC Transfers
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="material-symbols-outlined text-[#F4C430] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>room_service</span>
                24/7 Personalized Concierge
              </li>
            </ul>
            <button 
              className="w-full bg-[#F4C430] text-neutral-900 py-4 font-bold text-label-bold font-label-bold hover:opacity-90 transition-all rounded-lg"
              onClick={() => onNavigate('contact')}
            >
              Book Deluxe
            </button>
          </div>
        </div>
      </section>
      {/* Bento Grid: Inclusion Details */}
      <section className="bg-neutral-50 py-xl">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <h2 className="font-h2 text-h2 text-neutral-900">Our Comprehensive Services</h2>
            <p className="font-body-md text-neutral-600">Every detail of your journey is handled by our expert team.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Visa */}
            <div className="md:col-span-2 bg-white p-8 soft-veil border-t-4 border-[#F4C430] rounded-xl">
              <span className="material-symbols-outlined text-[#F4C430] text-4xl mb-4">assignment</span>
              <h4 className="font-h3 text-h3 mb-2">Visa &amp; Insurance</h4>
              <p className="font-body-md text-neutral-600">Complete visa processing including mandatory medical insurance for a worry-free entry to the Kingdom.</p>
            </div>
            {/* Food */}
            <div className="bg-white p-8 soft-veil border-t-4 border-[#F4C430] rounded-xl">
              <span className="material-symbols-outlined text-[#F4C430] text-4xl mb-4">restaurant_menu</span>
              <h4 className="font-h3 text-h3 mb-2">Indian Cuisine</h4>
              <p className="font-body-md text-neutral-600">Nutritious and delicious Indian meals prepared daily.</p>
            </div>
            {/* Hotels */}
            <div className="bg-white p-8 soft-veil border-t-4 border-[#F4C430] rounded-xl">
              <span className="material-symbols-outlined text-[#F4C430] text-4xl mb-4">apartment</span>
              <h4 className="font-h3 text-h3 mb-2">Hilton Stay</h4>
              <p className="font-body-md text-neutral-600">Premium accommodation partners like Hilton and Fairmont.</p>
            </div>
            {/* Transport */}
            <div className="bg-white p-8 soft-veil border-t-4 border-[#F4C430] rounded-xl">
              <span className="material-symbols-outlined text-[#F4C430] text-4xl mb-4">airport_shuttle</span>
              <h4 className="font-h3 text-h3 mb-2">AC Transport</h4>
              <p className="font-body-md text-neutral-600">New model air-conditioned buses for all internal travels.</p>
            </div>
            {/* Ziyarat */}
            <div className="md:col-span-2 bg-white p-8 soft-veil border-t-4 border-[#F4C430] rounded-xl">
              <span className="material-symbols-outlined text-[#F4C430] text-4xl mb-4">map</span>
              <h4 className="font-h3 text-h3 mb-2">Guided Ziyarat</h4>
              <p className="font-body-md text-neutral-600">Visit historical sites in Makkah and Madinah with expert guides who explain the religious significance of each location.</p>
            </div>
            {/* Support */}
            <div className="bg-white p-8 soft-veil border-t-4 border-[#F4C430] rounded-xl">
              <span className="material-symbols-outlined text-[#F4C430] text-4xl mb-4">live_help</span>
              <h4 className="font-h3 text-h3 mb-2">24/7 Support</h4>
              <p className="font-body-md text-neutral-600">On-ground team to assist with all your needs.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-xl bg-white">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="p-12 border-4 border-[#F4C430] soft-veil rounded-2xl bg-neutral-50/50">
            <h2 className="font-h1 text-h1 text-neutral-900 mb-6 uppercase tracking-widest">Ready to Embark on Your Journey?</h2>
            <p className="font-body-lg text-body-lg text-neutral-600 mb-10">Our consultants are available to help you choose the best package for your spiritual needs and budget.</p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a 
                className="bg-[#F4C430] text-neutral-900 px-10 py-4 font-bold text-label-bold font-label-bold flex items-center justify-center gap-2 rounded-lg hover:scale-105 transition-transform shadow-lg" 
                href="tel:08048102586"
              >
                <span className="material-symbols-outlined">call</span>
                Call 08048102586
              </a>
              <button 
                className="border-2 border-neutral-900 text-neutral-900 px-10 py-4 font-bold text-label-bold font-label-bold flex items-center justify-center gap-2 rounded-lg hover:bg-neutral-900 hover:text-white transition-all shadow-sm"
                onClick={() => onNavigate('contact')}
              >
                <span className="material-symbols-outlined">mail</span>
                Request a Callback
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
