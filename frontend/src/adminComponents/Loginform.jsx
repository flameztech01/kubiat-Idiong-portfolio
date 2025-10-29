import React from 'react'
import { useAdminLoginMutation } from '../slices/adminApiSlice';
import { setAdminCredentials } from '../slices/authSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginform = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useAdminLoginMutation();
  const navigate = useNavigate();
  
  const { adminInfo } = useSelector((state) => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await login({ email, password }).unwrap();
        dispatch(setAdminCredentials({ ...res }));
        navigate('/admin/dashboard');
        toast.success("Login successful!");
    } catch (error) {
        toast.error(error?.data?.message || error.message || "Login failed");
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Mobile-only header */}
      <div className="lg:hidden text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-white">A</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-gray-600 mt-2">Sign in to your admin account</p>
      </div>

      {/* Desktop header */}
      <div className="hidden lg:block mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>
        <p className="text-gray-600 mt-2">Enter your credentials to continue</p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            placeholder="admin@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <a href="#" className="text-sm text-blue-600 hover:text-blue-500 font-medium">
            Forgot password?
          </a>
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Signing in...</span>
            </div>
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      {/* Mobile-only additional info */}
      <div className="lg:hidden mt-8 pt-6 border-t border-gray-200">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Secure admin portal</span>
          </div>
          <p className="text-xs text-gray-500">
            Need help? Contact njokusamuel2005@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Loginform