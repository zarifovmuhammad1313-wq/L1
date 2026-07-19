'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('demo@laundrypro.com');
  const [password, setPassword] = useState('Demo1234');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      toast.success('Login successful!');
      router.push('/dashboard');
    } catch (error) {
      toast.error('Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glass-panel p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2">🧼 LaundryPro CRM</h1>
        <p className="text-white/60 mb-8">Premium Furniture Cleaning Management</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 glass-card focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 glass-card focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10 text-xs text-white/60">
          <p><strong>Demo Credentials:</strong></p>
          <p>Email: demo@laundrypro.com</p>
          <p>Password: Demo1234</p>
        </div>
      </div>
    </div>
  );
}
