import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  const Icon = (Icons as any)[name];
  return Icon ? <Icon className={className} /> : null;
};

export function Services() {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
            <p className="text-xl text-slate-600">
              Comprehensive IT infrastructure and networking services designed for the modern enterprise.
            </p>
          </div>

          <div className="space-y-24">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent name={service.icon} className="w-10 h-10 text-indigo-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.details?.map((detail, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                  <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition-all flex items-center group">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-xl group relative">
                    {service.image ? (
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-50 flex items-center justify-center">
                        <IconComponent name={service.icon} className="w-20 h-20 text-slate-100 mb-4 mx-auto" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Monitoring Specific Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-indigo-400 font-bold uppercase tracking-widest mb-4">Specialized Solution</h2>
              <h3 className="text-4xl font-bold mb-6">Advanced Network Monitoring</h3>
              <p className="text-lg text-slate-300 mb-8">
                We provide advanced monitoring solutions to ensure high availability of network devices. Real-time insights for your entire infrastructure.
              </p>
              <ul className="space-y-4">
                {[
                  'Router & Switch Monitoring',
                  'Firewall & Access Point Monitoring',
                  'CPU & Memory Utilization Tracking',
                  'Network Performance Analytics',
                  'Real-time Alerts & Notifications'
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs font-mono text-slate-500">network-monitor-v2.0</span>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Core Switch 01', value: 98, color: 'bg-emerald-500' },
                  { label: 'Edge Router A', value: 45, color: 'bg-indigo-500' },
                  { label: 'Firewall Cluster', value: 12, color: 'bg-amber-500' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-mono text-slate-300">{stat.label}</span>
                      <span className="font-mono text-indigo-400">{stat.value}% Load</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.value}%` }}
                        className={`h-full ${stat.color}`} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
