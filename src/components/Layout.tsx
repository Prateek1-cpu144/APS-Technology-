import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Network, Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { useFirebase } from './FirebaseProvider';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const location = useLocation();
  const { user, profile, logout } = useFirebase();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-700 transition-colors">
              <Network className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">APS Technology</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-indigo-600",
                  location.pathname === item.path ? "text-indigo-600" : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            
            {user ? (
              <div className="relative">
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-3 p-1 rounded-full hover:bg-slate-100 transition-colors"
                >
                  {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName || ''} className="w-8 h-8 rounded-full border border-slate-200" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <UserIcon className="w-4 h-4 text-indigo-600" />
                    </div>
                  )}
                </button>

                <AnimatePresence>
                  {isProfileOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 z-20"
                      >
                        <div className="flex items-center space-x-3 mb-4 p-2">
                          {user.photoURL ? (
                            <img src={user.photoURL} alt={user.displayName || ''} className="w-10 h-10 rounded-full" />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                              <UserIcon className="w-6 h-6 text-indigo-600" />
                            </div>
                          )}
                          <div className="overflow-hidden">
                            <p className="font-bold text-slate-900 truncate">{user.displayName || 'User'}</p>
                            <p className="text-xs text-slate-500 truncate">{user.email}</p>
                            {profile?.role === 'admin' && (
                              <span className="inline-block mt-1 px-2 py-0.5 bg-indigo-100 text-indigo-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                                Admin
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="h-px bg-slate-100 mb-2" />
                        <button
                          onClick={() => {
                            logout();
                            setIsProfileOpen(false);
                          }}
                          className="w-full flex items-center space-x-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors font-medium"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Sign Out</span>
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link to="/login" className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg active:scale-95">
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {user && (
              <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-indigo-100 flex items-center justify-center">
                    <UserIcon className="w-4 h-4 text-indigo-600" />
                  </div>
                )}
              </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-md transition-colors",
                    location.pathname === item.path 
                      ? "bg-indigo-50 text-indigo-600" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-3 py-4 text-base font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-indigo-600 bg-indigo-50 rounded-md"
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Network className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl font-bold tracking-tight">APS Technology</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering enterprises with cutting-edge IT infrastructure, 
              secure networking, and scalable cloud solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-6">Services</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/services" className="hover:text-white transition-colors">Network Infrastructure</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cloud Migration</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Managed IT Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-6">Company</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-6">Contact</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-indigo-400">Phone:</span>
                <span>+91 9760814314</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-indigo-400">Email:</span>
                <span>info@apstech.in</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-indigo-400">Address:</span>
                <span>Tech Hub, Sector 62, Noida, UP, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 APS Technology. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
