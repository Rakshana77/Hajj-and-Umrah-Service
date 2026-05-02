import { useNavigate } from 'react-router-dom';

const About: FC = () => {
  const navigate = useNavigate();
  return (
    <main className="pt-32 sm:pt-40">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
          <div className="space-y-md">
            <span className="inline-block py-xs px-sm bg-secondary-container text-on-secondary-container font-label-bold rounded-full text-xs tracking-widest uppercase">Established Journeys</span>
            <h1 className="font-display text-display text-on-surface">Spiritual Excellence <br/> Through Decades.</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              At Haji Umrah & Ziyara service, we believe every pilgrimage is a soul-stirring transition. Our legacy is built on trust, precision, and unwavering devotion to your comfort.
            </p>
          </div>
          <div className="relative h-[500px] rounded-xl overflow-hidden soft-veil-shadow border-t-4 border-[#F4C430]">
            <img alt="Masjid al-Haram at sunset" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg-nwcwMSP0Ww3l8sVr0vk0sJ_i1cCYMLm9a9x7jwYi7Vg1cZ5PJeG8w-8bY6NUOnbPq26BeHqyopxDgD3VQskiUfgwwPOjPwXZKQ8bp0cJqiJMEnsWxXx9-dHvsakebbL9_zEbbg2gXvL1pOlH3ozUjOTRFnCIO9K276sdg8XPj98rD1nesBIor93j38xdTwHsReQ10IkGO-N3rktfmuCP0OWzYPm-3YxxyBlPaX4JAHO_aZuRuRslWmTYJ5Cth9wkSXlBKjJ-dg" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="py-xl bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="p-lg bg-surface-container-low rounded-xl border-t-4 border-[#F4C430] soft-veil-shadow flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-secondary text-5xl mb-sm">history_edu</span>
              <h2 className="font-h1 text-h1 text-on-surface">15+</h2>
              <p className="font-label-bold text-on-surface-variant">Years Experience</p>
            </div>
            <div className="p-lg bg-surface-container-low rounded-xl border-t-4 border-[#F4C430] soft-veil-shadow flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-secondary text-5xl mb-sm">groups</span>
              <h2 className="font-h1 text-h1 text-on-surface">10k+</h2>
              <p className="font-label-bold text-on-surface-variant">Happy Pilgrims</p>
            </div>
            <div className="p-lg bg-surface-container-low rounded-xl border-t-4 border-[#F4C430] soft-veil-shadow flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-secondary text-5xl mb-sm">verified_user</span>
              <h2 className="font-h1 text-h1 text-on-surface">Certified</h2>
              <p className="font-label-bold text-on-surface-variant">Licensed Operator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-xl">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
            {/* Our Story Card */}
            <div className="lg:col-span-7 bg-white p-lg rounded-xl border-t-4 border-[#F4C430] soft-veil-shadow">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-secondary">auto_stories</span>
                <h2 className="font-h2 text-h2 text-on-surface uppercase tracking-wider">Our Story</h2>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-md">
                Haji Umrah & Ziyara service has built strong relationships with reputable vendors to offer superior service. From humble beginnings to becoming a cornerstone of spiritual travel, we have meticulously crafted a network that ensures reliability at every step of your journey.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Our expert and experienced team is committed to every holy pilgrimage, ensuring that the logistical complexities never overshadow your spiritual connection. We treat every pilgrim like family, fostering an environment of trust and mutual respect.
              </p>
            </div>
            {/* Our Mission Card */}
            <div className="lg:col-span-5 bg-inverse-surface p-lg rounded-xl text-white flex flex-col justify-center">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-secondary-fixed text-[#F4C430]">center_focus_strong</span>
                <h2 className="font-h2 text-h2 uppercase tracking-wider">Our Mission</h2>
              </div>
              <p className="font-body-lg text-body-lg text-surface-variant leading-relaxed">
                "To provide a seamless, comfortable, and spiritually fulfilling journey for every pilgrim, bridging the gap between worldly logistics and heavenly aspirations."
              </p>
              <div className="mt-lg border-l-4 border-[#F4C430] pl-md py-sm">
                <p className="font-label-bold text-secondary-fixed italic text-[#F4C430]">Precision. Comfort. Devotion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Expertise (Bento Style) */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-xl">
            <h2 className="font-h1 text-h1 text-on-surface mb-sm">The Pillars of Your Journey</h2>
            <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Expert guidance and domestic flavors, wherever you are in the world.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Feature 1 */}
            <div className="md:col-span-2 relative h-80 rounded-xl overflow-hidden group">
              <img alt="Professional Indian Chef" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_pu_4HKH8cHs7pSkK0__mAy-PcD6OVg8EJB23D9AxskOxPsBYzGaWVxCjrUz5Q5E6DyjJXORiYMd1NghIgJrk62MUZW3ttMRDxamb9WYfVNweclQ58YZllEBsYiXF7mz636S7Tll-nbojan1FBJQ8zsgWjtwInbR4rUMxbhA0CRoUZ4k-Np12wJIoBvPcI2LIbvtqeR-0eQB2Gczb7RZf_5DYQLuviYy2N2TOVkBDDmSJS0--3qkjsdzzM-nbdq9JixwYN-z_Hmc" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-lg">
                <h3 className="font-h2 text-h2 text-white mb-xs">Indian Food Experts</h3>
                <p className="text-neutral-300 font-body-md">Authentic home-style meals prepared by certified chefs to keep you nourished and focused on your prayers.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-lg rounded-xl border-t-4 border-[#F4C430] soft-veil-shadow flex flex-col justify-center">
              <span className="material-symbols-outlined text-secondary text-4xl mb-sm">assignment_ind</span>
              <h3 className="font-h3 text-h3 text-on-surface mb-sm">Dedicated Group Leaders</h3>
              <p className="text-on-surface-variant font-body-md">Fluent in multiple languages and trained in emergency protocols to provide 24/7 support throughout your stay.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-lg rounded-xl border-t-4 border-[#F4C430] soft-veil-shadow flex flex-col justify-center">
              <span className="material-symbols-outlined text-secondary text-4xl mb-sm">handshake</span>
              <h3 className="font-h3 text-h3 text-on-surface mb-sm">Vendor Relationships</h3>
              <p className="text-on-surface-variant font-body-md">Exclusive partnerships with top-tier hotels and transport services ensure premium placement near the Harams.</p>
            </div>
            {/* Feature 4 */}
            <div className="md:col-span-2 relative h-80 rounded-xl overflow-hidden group">
              <img alt="Team Collaboration" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAScswygsJowyIChm4PPHjk12km8XI85M5HrOEpqNBxwML80iFGmitmBPBgOhUfb9CMgvpT6G8XQ9CfW1L110nob2WeE6Kr-EyWE6STAiqPsbu8UbAjNzo8fNBIBycOMCk2KrecU0kVyC3sHI3OgtuGgatB9OGtEnOCIm6mp47lf2STpahe-pLnMzs4DZshLUc6-T1dkbiG6mMEcsN7BJUFb1qgxXJLhpvCfyVyYgwz1nf2u5zKiLQaj9f_TmQXwt7lBHJL0CqBvw" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-lg">
                <h3 className="font-h2 text-h2 text-white mb-xs">Operational Precision</h3>
                <p className="text-neutral-300 font-body-md">Back-end support that monitors flight timings and hotel check-ins in real-time for zero-delay experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-xl">
        <div className="max-w-5xl mx-auto px-8 bg-[#F4C430] rounded-xl p-xl soft-veil-shadow text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-h1 text-h1 text-neutral-900 mb-md">Ready for your spiritual journey?</h2>
            <p className="font-body-lg text-neutral-800 mb-lg max-w-xl mx-auto">Let our 15 years of experience guide you to a path of peace and devotion.</p>
            <div className="flex flex-col md:flex-row gap-md justify-center">
              <button 
                className="bg-neutral-900 text-white px-lg py-sm font-label-bold rounded-lg hover:bg-neutral-800 transition-colors uppercase tracking-widest shadow-lg"
                onClick={() => navigate('/contact')}
              >
                Inquire Now
              </button>
              <button 
                className="bg-white text-neutral-900 px-lg py-sm font-label-bold rounded-lg hover:bg-neutral-50 transition-colors uppercase tracking-widest shadow-md"
                onClick={() => navigate('/packages')}
              >
                View Packages
              </button>
            </div>
          </div>
          {/* Subtle geometric pattern background */}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
            <span className="material-symbols-outlined text-[300px]">star_half</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
