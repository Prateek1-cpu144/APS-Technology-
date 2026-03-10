import React from 'react';
import { motion } from 'motion/react';
import { 
  ChevronRight, 
  ArrowRight, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  CheckCircle2,
  Network,
  Server,
  Cloud,
  ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES, INDUSTRIES, TESTIMONIALS } from '../constants';
import * as Icons from 'lucide-react';

const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  const Icon = (Icons as any)[name];
  return Icon ? <Icon className={className} /> : null;
};

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920&h=1080" 
            alt="IT Infrastructure" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] z-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider">Enterprise Ready Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Reliable IT Infrastructure, <span className="text-indigo-400">Network & Cloud</span> Solutions
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              We help businesses build secure, scalable and high-performance IT infrastructure with advanced networking, cloud computing and cybersecurity solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center group shadow-xl shadow-indigo-500/20"
              >
                Get Free Consultation
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Our Expertise</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Designing, Implementing and Managing Modern IT Environments
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We specialize in designing, implementing and managing modern IT environments including enterprise networks, secure infrastructure and cloud platforms.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our team provides end-to-end technology solutions to ensure your IT systems remain reliable, secure and highly available.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                  <span className="font-semibold text-slate-800">Secure Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                  <span className="font-semibold text-slate-800">High Availability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                  <span className="font-semibold text-slate-800">Scalable Cloud</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="text-emerald-500 w-6 h-6" />
                  <span className="font-semibold text-slate-800">Fast Deployment</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Modern Data Center" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="bg-indigo-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-1">Enterprise Ready</h4>
                  <p className="text-slate-200 text-sm">Certified infrastructure solutions.</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Users className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">150+</p>
                    <p className="text-sm text-slate-500 font-medium">Enterprise Clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Our Key Services</h2>
            <h3 className="text-4xl font-bold text-slate-900">Comprehensive IT Solutions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="bg-slate-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <IconComponent name={service.icon} className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services" className="text-indigo-600 font-bold text-sm flex items-center group/link">
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Industries We Serve</h2>
            <h3 className="text-4xl font-bold text-slate-900">Tailored Solutions for Every Sector</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {INDUSTRIES.map((industry, idx) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex flex-col items-center p-6 rounded-xl hover:bg-slate-50 transition-colors text-center group"
              >
                <div className="bg-white shadow-md w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent name={industry.icon} className="w-8 h-8 text-slate-700" />
                </div>
                <span className="text-sm font-bold text-slate-800">{industry.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-3xl p-12 md:p-20 relative overflow-hidden text-center">
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1920&h=600" 
              alt="IT Infrastructure" 
              className="absolute inset-0 w-full h-full object-cover opacity-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffffff20_0%,transparent_60%)]" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-indigo-100 text-xl mb-10">
                Join hundreds of enterprises that trust APS Technology for their networking and cloud needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/services" 
                  className="bg-indigo-700 text-white border border-indigo-500 px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-800 transition-all"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
