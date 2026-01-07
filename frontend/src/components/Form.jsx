import React from 'react'
import { useState } from 'react';
import { useUserMessageMutation } from '../slices/userApiSlice';
import { toast } from 'react-toastify';
import { FiSend, FiClock, FiLock, FiUser, FiMail, FiMessageSquare, FiLoader } from 'react-icons/fi';

const Form = () => {
    const [userMessage, { isLoading, error }] = useUserMessageMutation();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = await userMessage(formData).unwrap();
            toast.success('Message Sent Successfully');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            toast.error(error?.data?.message || error.error || 'Failed to send message');
        }
    };

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
            {/* Geometric background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 border-2 border-cyan-500/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 border-2 border-purple-500/20 rounded-full translate-x-1/3 translate-y-1/3"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-500/10 rotate-45"></div>
            </div>

            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Content */}
                    <div className="lg:sticky lg:top-8">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-500"></div>
                                <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
                                    Direct Message
                                </span>
                                <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-500"></div>
                            </div>
                            
                            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
                                Send a
                                <span className="text-cyan-400"> Message</span>
                            </h1>
                            
                            <div className="flex mb-4">
                                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                            </div>
                            
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Share your ideas, project requirements, or questions. I value thoughtful communication and will respond with detailed, personalized feedback.
                            </p>
                            
                            {/* Additional Info */}
                            <div className="space-y-4 pt-6">
                                <div className="flex items-center gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-700">
                                        <FiClock className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-white">Response within 24 hours</span>
                                        <p className="text-sm text-slate-400">Typically respond within one business day</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-700">
                                        <FiLock className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-white">Secure and confidential</span>
                                        <p className="text-sm text-slate-400">Your information is protected and private</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 lg:p-10 border border-slate-700 shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Name Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="group">
                                    <label htmlFor="firstName" className="block text-sm font-semibold text-slate-300 mb-3">
                                        <div className="flex items-center gap-2">
                                            <FiUser className="w-4 h-4 text-cyan-400" />
                                            First Name *
                                        </div>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 placeholder:text-slate-500 text-white"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                
                                <div className="group">
                                    <label htmlFor="lastName" className="block text-sm font-semibold text-slate-300 mb-3">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 placeholder:text-slate-500 text-white"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group">
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-3">
                                    <div className="flex items-center gap-2">
                                        <FiMail className="w-4 h-4 text-cyan-400" />
                                        Email Address *
                                    </div>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 placeholder:text-slate-500 text-white"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Subject */}
                            <div className="group">
                                <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-3">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 placeholder:text-slate-500 text-white"
                                    placeholder="What would you like to discuss?"
                                />
                            </div>

                            {/* Message */}
                            <div className="group">
                                <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-3">
                                    <div className="flex items-center gap-2">
                                        <FiMessageSquare className="w-4 h-4 text-cyan-400" />
                                        Message *
                                    </div>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 placeholder:text-slate-500 text-white resize-none"
                                    placeholder="Share your project details, timeline, and any specific requirements..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group relative w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 disabled:from-slate-600 disabled:to-slate-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {isLoading ? (
                                    <div className="relative z-10 flex items-center justify-center gap-3">
                                        <FiLoader className="w-5 h-5 animate-spin" />
                                        <span>Sending...</span>
                                    </div>
                                ) : (
                                    <div className="relative z-10 flex items-center justify-center gap-3">
                                        <FiSend className="w-5 h-5" />
                                        <span>Send Message</span>
                                    </div>
                                )}
                            </button>

                            {/* Form Note */}
                            <div className="text-center pt-4 border-t border-slate-700">
                                <p className="text-sm text-slate-400 font-medium">
                                    Required fields are marked with * • All submissions are encrypted
                                </p>
                            </div>
                        </form>

                        {/* Error Display */}
                        {error && (
                            <div className="mt-6 p-4 bg-gradient-to-r from-red-900/20 to-red-800/10 backdrop-blur-sm rounded-lg border border-red-700">
                                <p className="text-sm text-red-400 font-semibold">
                                    Please check your connection and try again
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Additional Contact Options */}
                <div className="mt-12 pt-8 border-t border-slate-700">
                    <div className="text-center">
                        <p className="text-slate-400 font-medium mb-4">
                            Prefer a different method? Use direct contact options below
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="mailto:KubiatIdiong111@gmail.com" 
                                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-br from-slate-800 to-slate-900 text-slate-300 font-semibold rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-sm"
                            >
                                <FiMail className="w-4 h-4 mr-2" />
                                Send Email
                            </a>
                            <a 
                                href="tel:09124582415" 
                                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-br from-slate-800 to-slate-900 text-slate-300 font-semibold rounded-lg border border-slate-700 hover:border-purple-500/50 transition-all duration-300 text-sm"
                            >
                                <FiSend className="w-4 h-4 mr-2" />
                                Call Directly
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Form;