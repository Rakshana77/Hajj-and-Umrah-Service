import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Luggage, MapPin, ArrowRight } from 'lucide-react';

const TravelDetails: React.FC = () => {
  const flightSchedule = [
    { flight: 'WY 252', date: 'SEP 3', route: 'MAA → MCT' },
    { flight: 'WY 675', date: 'SEP 3', route: 'MCT → JED' },
    { flight: 'WY 678', date: 'SEP 26', route: 'MED → MCT' },
    { flight: 'WY 253', date: 'SEP 26', route: 'MCT → MAA' }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1A1305] mb-4">Flight <span className="text-[#C9A54C]">Schedules</span></h2>
          <p className="text-neutral-500 italic">"Planned for your comfort and spiritual focus"</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Flight Table */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FCFBF7] rounded-[2rem] p-8 border border-neutral-100 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#C9A54C]/10 rounded-xl flex items-center justify-center">
                <Plane className="text-[#C9A54C] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1305]">Departure Details</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-neutral-200">
                    <th className="pb-4 font-black uppercase text-[10px] tracking-widest text-neutral-400">Flight No</th>
                    <th className="pb-4 font-black uppercase text-[10px] tracking-widest text-neutral-400">Date</th>
                    <th className="pb-4 font-black uppercase text-[10px] tracking-widest text-neutral-400">Route</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {flightSchedule.map((item, idx) => (
                    <tr key={idx} className="group hover:bg-white transition-colors">
                      <td className="py-4 font-bold text-[#1A1305]">{item.flight}</td>
                      <td className="py-4 text-neutral-500 font-medium">{item.date}</td>
                      <td className="py-4 font-black text-[#C9A54C] tracking-tighter">{item.route}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Baggage & Routes */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1A1305] text-white rounded-[2rem] p-8 relative overflow-hidden"
            >
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Luggage className="text-[#C9A54C] w-6 h-6" />
                    <h3 className="text-2xl font-bold">Baggage Allowance</h3>
                  </div>
                  <p className="text-4xl font-black text-[#C9A54C] mb-2">30 KG</p>
                  <p className="text-neutral-400 uppercase tracking-widest text-xs font-bold">(2 Pieces Included)</p>
                </div>
                <div className="opacity-10">
                  <Luggage size={120} />
                </div>
              </div>
              {/* Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/islamic-art.png')]" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2rem] p-8 border border-neutral-100 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="text-[#C9A54C] w-6 h-6" />
                <h3 className="text-2xl font-bold text-[#1A1305]">Route Map</h3>
              </div>
              <div className="space-y-4">
                {[
                  { from: 'Chennai (MAA)', to: 'Muscat (MCT)' },
                  { from: 'Muscat (MCT)', to: 'Jeddah (JED)' },
                  { from: 'Madinah (MED)', to: 'Muscat (MCT)' },
                  { from: 'Muscat (MCT)', to: 'Chennai (MAA)' }
                ].map((route, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl border border-neutral-100 group hover:border-[#C9A54C]/30 transition-all">
                    <span className="font-bold text-neutral-600">{route.from}</span>
                    <ArrowRight className="text-[#C9A54C] w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    <span className="font-bold text-[#1A1305]">{route.to}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelDetails;
