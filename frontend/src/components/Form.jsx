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
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-amber-400 to-indigo-400 blur-3xl"></div>
                <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-gradient-to-l from-indigo-400 to-amber-400 blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Content */}
                    <div className="lg:sticky lg:top-8">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 backdrop-blur-sm rounded-full border border-slate-200/50">
                                <FiMessageSquare className="w-3 h-3 text-slate-600" />
                                <span className="text-xs font-medium text-slate-600 tracking-wide">
                                    Direct Message
                                </span>
                            </div>
                            
                            <h1 className="text-4xl lg:text-5xl font-light text-slate-900 font-serif">
                                Send a <span className="font-semibold">Message</span>
                            </h1>
                            
                            <div className="relative mb-4">
                                <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400/50 via-indigo-400/50 to-transparent"></div>
                            </div>
                            
                            <p className="text-lg text-slate-600 leading-relaxed font-light">
                                Share your ideas, project requirements, or questions. I value thoughtful communication and will respond with detailed, personalized feedback.
                            </p>
                            
                            {/* Additional Info */}
                            <div className="space-y-4 pt-6">
                                <div className="flex items-center gap-3 text-slate-600 group">
                                    <div className="w-10 h-10 bg-gradient-to-br from-amber-50 to-indigo-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <FiClock className="w-5 h-5 text-amber-600" />
                                    </div>
                                    <div>
                                        <span className="font-medium text-slate-700">Response within 24 hours</span>
                                        <p className="text-sm text-slate-500 font-light">Typically respond within one business day</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3 text-slate-600 group">
                                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-50 to-amber-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <FiLock className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <span className="font-medium text-slate-700">Secure and confidential</span>
                                        <p className="text-sm text-slate-500 font-light">Your information is protected and private</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-slate-200/60 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Name Row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="group">
                                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-3">
                                        <div className="flex items-center gap-2">
                                            <FiUser className="w-4 h-4 text-slate-500" />
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
                                        className="w-full px-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-xl focus:border-slate-300 focus:ring-2 focus:ring-amber-400/20 focus:ring-offset-2 transition-all duration-300 placeholder:text-slate-400/70"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                
                                <div className="group">
                                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-3">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-xl focus:border-slate-300 focus:ring-2 focus:ring-indigo-400/20 focus:ring-offset-2 transition-all duration-300 placeholder:text-slate-400/70"
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group">
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-3">
                                    <div className="flex items-center gap-2">
                                        <FiMail className="w-4 h-4 text-slate-500" />
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
                                    className="w-full px-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-xl focus:border-slate-300 focus:ring-2 focus:ring-amber-400/20 focus:ring-offset-2 transition-all duration-300 placeholder:text-slate-400/70"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Subject */}
                            <div className="group">
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-3">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-xl focus:border-slate-300 focus:ring-2 focus:ring-indigo-400/20 focus:ring-offset-2 transition-all duration-300 placeholder:text-slate-400/70"
                                    placeholder="What would you like to discuss?"
                                />
                            </div>

                            {/* Message */}
                            <div className="group">
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-3">
                                    <div className="flex items-center gap-2">
                                        <FiMessageSquare className="w-4 h-4 text-slate-500" />
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
                                    className="w-full px-4 py-3.5 bg-white/50 border border-slate-200/60 rounded-xl focus:border-slate-300 focus:ring-2 focus:ring-amber-400/20 focus:ring-offset-2 transition-all duration-300 placeholder:text-slate-400/70 resize-none"
                                    placeholder="Share your project details, timeline, and any specific requirements..."
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group relative w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-medium py-4 px-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
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
                            <div className="text-center pt-4 border-t border-slate-200/60">
                                <p className="text-sm text-slate-500 font-light">
                                    Required fields are marked with * • All submissions are encrypted
                                </p>
                            </div>
                        </form>

                        {/* Error Display */}
                        {error && (
                            <div className="mt-6 p-4 bg-gradient-to-r from-red-50/50 to-red-100/30 backdrop-blur-sm rounded-xl border border-red-200/60">
                                <p className="text-sm text-red-600 font-medium">
                                    Please check your connection and try again
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Additional Contact Options */}
                <div className="mt-12 pt-8 border-t border-slate-200/60">
                    <div className="text-center">
                        <p className="text-slate-600 font-light mb-4">
                            Prefer a different method? Use direct contact options below
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="mailto:njokusamuel2005@gmail.com" 
                                className="inline-flex items-center justify-center px-6 py-3 bg-white/80 hover:bg-white text-slate-700 font-medium rounded-xl border border-slate-200/60 hover:border-slate-300 transition-all duration-300 text-sm"
                            >
                                <FiMail className="w-4 h-4 mr-2" />
                                Send Email
                            </a>
                            <a 
                                href="tel:08058586759" 
                                className="inline-flex items-center justify-center px-6 py-3 bg-white/80 hover:bg-white text-slate-700 font-medium rounded-xl border border-slate-200/60 hover:border-slate-300 transition-all duration-300 text-sm"
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