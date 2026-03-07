import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Users, Shield, Globe, Zap } from 'lucide-react';

export function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1920&h=600" 
          alt="IT Team" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-950 z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-white mb-6">Who We Are</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              We are a professional IT solutions provider delivering advanced network infrastructure, cloud computing and cybersecurity services for businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800&h=500" 
                  alt="IT Engineering" 
                  className="rounded-3xl shadow-2xl w-full object-cover aspect-video"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-4 rounded-2xl shadow-xl font-bold">
                  Expert Team
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Expertise in Modern IT</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our expertise includes designing secure networks, deploying enterprise IT infrastructure and managing cloud environments for organizations.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With a team of certified professionals, we bridge the gap between complex technology and business efficiency, ensuring your systems are always one step ahead.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <Shield className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Security First</h3>
                <p className="text-sm text-slate-500">Built-in security for every infrastructure layer.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <Globe className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Global Reach</h3>
                <p className="text-sm text-slate-500">Supporting distributed teams worldwide.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <Zap className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">High Performance</h3>
                <p className="text-sm text-slate-500">Optimized for speed and low latency.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <Users className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Client Centric</h3>
                <p className="text-sm text-slate-500">Tailored solutions for your unique needs.</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-indigo-600 p-12 rounded-3xl text-white"
            >
              <Target className="w-12 h-12 mb-6 text-indigo-200" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-indigo-100 leading-relaxed">
                To provide reliable, secure and scalable IT infrastructure solutions that empower businesses to operate efficiently and grow with confidence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-12 rounded-3xl text-white"
            >
              <Eye className="w-12 h-12 mb-6 text-indigo-400" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                To become a trusted technology partner for businesses by delivering innovative IT and cloud solutions that redefine industry standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
