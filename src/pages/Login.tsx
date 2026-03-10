import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Loader2, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../components/FirebaseProvider';

export function Login() {
  const { login, user, loading } = useFirebase();
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      await login();
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <Loader2 className="w-12 h-12 text-indigo-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-slate-950 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1920&h=1080" 
          alt="Secure Data Center" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950 to-slate-950 z-10" />
      </div>

      <div className="max-w-md w-full relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100"
        >
          <div className="text-center mb-10">
            <div className="bg-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/20">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Secure Access</h1>
            <p className="text-slate-500 mt-2">Sign in to access your IT dashboard</p>
          </div>

          <div className="space-y-6">
            <button
              onClick={handleLogin}
              disabled={isLoggingIn}
              className="w-full bg-white text-slate-700 border border-slate-200 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center disabled:opacity-70 group"
            >
              {isLoggingIn ? (
                <Loader2 className="w-6 h-6 animate-spin text-indigo-600" />
              ) : (
                <>
                  <img 
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                    alt="Google" 
                    className="w-6 h-6 mr-3"
                  />
                  Sign in with Google
                </>
              )}
            </button>
            
            <p className="text-center text-xs text-slate-400">
              By signing in, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
