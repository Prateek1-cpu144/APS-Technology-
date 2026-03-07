import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const CASE_STUDIES = [
  {
    title: 'Global Financial Hub Migration',
    client: 'Major Investment Bank',
    challenge: 'Migrating 500+ servers to a hybrid cloud environment with zero downtime.',
    solution: 'Implemented a phased migration strategy using automated provisioning and real-time synchronization.',
    result: '40% reduction in operational costs and 100% uptime during transition.',
    image: 'https://picsum.photos/seed/finance-cs/800/600'
  },
  {
    title: 'Smart Manufacturing Network',
    client: 'Auto Parts Manufacturer',
    challenge: 'Connecting 1000+ IoT devices across 5 factory floors with low latency.',
    solution: 'Designed a high-density SD-WAN and industrial Wi-Fi 6 network with edge computing nodes.',
    result: '25% increase in production efficiency and real-time monitoring of all assets.',
    image: 'https://picsum.photos/seed/mfg-cs/800/600'
  }
];

export function CaseStudies() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Case Studies</h1>
            <p className="text-xl text-slate-600">
              Real-world success stories of how we help our clients achieve their technology goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-20">
            {CASE_STUDIES.map((cs, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-12 bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100"
              >
                <div className="flex-1 p-12 lg:p-16">
                  <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest mb-4 block">{cs.client}</span>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8">{cs.title}</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">The Challenge</h3>
                      <p className="text-slate-700 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Our Solution</h3>
                      <p className="text-slate-700 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                      <h3 className="text-sm font-bold text-emerald-700 uppercase tracking-wider mb-2">The Result</h3>
                      <p className="text-emerald-900 font-medium">{cs.result}</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 relative min-h-[400px] bg-slate-200 flex items-center justify-center">
                  <div className="text-center p-12">
                    <CheckCircle2 className="w-20 h-20 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Success Story</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
