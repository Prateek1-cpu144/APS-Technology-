import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { handleFirestoreError, OperationType } from '../components/FirebaseProvider';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const inquiryData = {
        ...formData,
        status: 'new',
        createdAt: new Date().toISOString()
      };
      
      await addDoc(collection(db, 'inquiries'), inquiryData);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'inquiries');
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <div className="mb-10 rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=400" 
                  alt="Contact Us" 
                  className="w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h1 className="text-5xl font-bold text-slate-900 mb-6">Get in Touch</h1>
              <p className="text-xl text-slate-600 mb-12">
                If you are looking for reliable IT infrastructure, networking or cloud services, contact us today.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-indigo-50 p-4 rounded-xl">
                    <Phone className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">+91 9760814314</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-indigo-50 p-4 rounded-xl">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">info@apstech.in</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-indigo-50 p-4 rounded-xl">
                    <MapPin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Address</h3>
                    <p className="text-slate-600">Tech Hub, Sector 62, Noida, UP, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 p-8 bg-slate-950 rounded-3xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full" />
                <h3 className="text-xl font-bold mb-4">Support Hours</h3>
                <p className="text-slate-400 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-slate-400">24/7 Emergency Support for Managed Clients</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100"
            >
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                  <p className="text-slate-600 text-lg">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Company</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                        placeholder="+91..."
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea 
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
