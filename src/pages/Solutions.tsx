import React from 'react';
import { motion } from 'motion/react';
import { Network, Cloud, ShieldCheck, BarChart, ArrowRight } from 'lucide-react';

const SOLUTIONS = [
  {
    title: 'Enterprise Network Solutions',
    description: 'We build scalable and secure enterprise network infrastructures that support modern business applications.',
    icon: Network,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    title: 'Cloud Infrastructure Solutions',
    description: 'Secure and reliable cloud infrastructure designed for high availability and performance.',
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    title: 'Managed IT Services',
    description: 'Complete management of IT infrastructure including monitoring, maintenance and support.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

export function Solutions() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Solutions</h1>
            <p className="text-xl text-slate-600">
              Strategic technology solutions tailored to solve complex business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {SOLUTIONS.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="bg-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{solution.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  <button className="text-indigo-600 font-bold flex items-center group">
                    View Case Study
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-slate-200">
                    <img 
                      src={solution.image} 
                      alt={solution.title} 
                      className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-12 md:p-20 shadow-sm border border-slate-200">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Why Choose APS Technology?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { title: 'Experienced IT Professionals', desc: 'Certified experts with decades of combined experience.' },
                { title: 'Secure Network Architecture', desc: 'Security is baked into every design from day one.' },
                { title: '24/7 Monitoring & Support', desc: 'Proactive management to prevent issues before they occur.' },
                { title: 'Scalable Cloud Solutions', desc: 'Infrastructure that grows seamlessly with your business.' },
                { title: 'Fast Deployment', desc: 'Rapid implementation using automated provisioning tools.' },
                { title: 'Proven Track Record', desc: 'Successful projects across multiple global industries.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-1 rounded-full mt-1">
                    <ArrowRight className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
