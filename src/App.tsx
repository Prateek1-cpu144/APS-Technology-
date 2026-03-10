import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Solutions } from './pages/Solutions';
import { MonitoringTool } from './pages/MonitoringTool';
import { Contact } from './pages/Contact';
import { CaseStudies } from './pages/CaseStudies';
import { Login } from './pages/Login';
import { motion, AnimatePresence } from 'motion/react';
import React from 'react';
import { FirebaseProvider } from './components/FirebaseProvider';

function ScrollToTop() {
  const { pathname } = window.location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <FirebaseProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/monitoring" element={<MonitoringTool />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </Router>
    </FirebaseProvider>
  );
}
