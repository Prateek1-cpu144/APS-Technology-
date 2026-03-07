import React from 'react';
import { motion } from 'motion/react';
import { Activity, Shield, Zap, BarChart3, Bell, Search, Settings, Globe } from 'lucide-react';

export function MonitoringTool() {
  const [activeTab, setActiveTab] = React.useState('dashboard');

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 bg-indigo-50 px-3 py-1 rounded-full mb-4">
                <Activity className="w-4 h-4 text-indigo-600" />
                <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">Product Showcase</span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900">APS Monitor Pro</h1>
              <p className="text-slate-500 mt-2">Enterprise-grade network visibility and real-time analytics.</p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-md">
                Request Demo
              </button>
              <button className="bg-white text-slate-700 border border-slate-200 px-6 py-2.5 rounded-lg font-bold hover:bg-slate-50 transition-all">
                Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Preview */}
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            {/* Sidebar & Main Content Split */}
            <div className="flex h-[600px]">
              {/* Sidebar */}
              <div className="w-20 md:w-64 bg-slate-950 border-r border-slate-800 flex flex-col">
                <div className="p-6 border-b border-slate-800 hidden md:block">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                      <Activity className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-white">Monitor Pro</span>
                  </div>
                </div>
                <div className="flex-1 py-6 space-y-2">
                  {[
                    { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
                    { id: 'devices', icon: Globe, label: 'Devices' },
                    { id: 'alerts', icon: Bell, label: 'Alerts' },
                    { id: 'security', icon: Shield, label: 'Security' },
                    { id: 'settings', icon: Settings, label: 'Settings' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center px-6 py-3 transition-colors ${
                        activeTab === item.id 
                          ? 'text-indigo-400 bg-indigo-500/10 border-r-2 border-indigo-500' 
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="ml-4 font-medium hidden md:block">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Area */}
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <div className="h-16 border-b border-slate-800 flex items-center justify-between px-8">
                  <div className="flex items-center bg-slate-800 rounded-lg px-3 py-1.5 w-64">
                    <Search className="w-4 h-4 text-slate-500" />
                    <input 
                      type="text" 
                      placeholder="Search devices..." 
                      className="bg-transparent border-none outline-none text-xs text-slate-300 ml-2 w-full"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] font-mono text-emerald-500 uppercase">System Live</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-700" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      { label: 'Network Uptime', value: '99.99%', change: '+0.02%', icon: Activity },
                      { label: 'Active Threats', value: '0', change: 'Clean', icon: Shield },
                      { label: 'Avg Latency', value: '12ms', change: '-2ms', icon: Zap },
                    ].map((stat, i) => (
                      <div key={i} className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
                        <div className="flex justify-between items-start mb-4">
                          <stat.icon className="w-5 h-5 text-indigo-400" />
                          <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                            {stat.change}
                          </span>
                        </div>
                        <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-white font-bold">Traffic Throughput</h3>
                      <select className="bg-slate-900 border border-slate-700 text-slate-400 text-[10px] px-2 py-1 rounded outline-none">
                        <option>Last 24 Hours</option>
                        <option>Last 7 Days</option>
                      </select>
                    </div>
                    <div className="h-48 flex items-end justify-between gap-2">
                      {[40, 65, 45, 90, 85, 60, 75, 50, 40, 60, 80, 70, 55, 65, 85, 95, 75, 60, 45, 50].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          className="flex-1 bg-indigo-500/40 rounded-t-sm hover:bg-indigo-500 transition-colors"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {[
              { title: 'Real-time Analytics', desc: 'Instant visibility into every packet moving through your network.', icon: BarChart3 },
              { title: 'Smart Alerts', desc: 'AI-driven anomaly detection that notifies you before failures happen.', icon: Bell },
              { title: 'Device Auto-Discovery', desc: 'Automatically map and monitor new hardware as it joins the network.', icon: Globe },
              { title: 'Performance Reports', desc: 'Detailed weekly and monthly insights for compliance and planning.', icon: Activity }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
