import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/secure-admin-portal-786');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#C9A54C] opacity-10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#C9A54C] opacity-10 blur-[120px] rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative"
      >
        <div className="bg-[#111] border border-[#C9A54C]/20 p-8 rounded-2xl shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-[#C9A54C] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#C9A54C]/20">
              <Lock className="text-black w-8 h-8" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Admin Portal</h1>
            <p className="text-gray-400 text-center">Enter your secure access key to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Access Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full bg-black/50 border border-[#C9A54C]/30 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C9A54C]/50 transition-all placeholder-gray-600"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20"
              >
                <AlertCircle size={18} />
                <span className="text-sm">{error}</span>
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#C9A54C] to-[#E5C167] text-black font-bold py-3 rounded-xl hover:shadow-lg hover:shadow-[#C9A54C]/30 transition-all active:scale-[0.98]"
            >
              Access Portal
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-500 hover:text-[#C9A54C] text-sm transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
