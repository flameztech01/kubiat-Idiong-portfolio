import React from 'react';
import { FiCode, FiPenTool, FiMessageSquare, FiArrowRight, FiEye, FiCheckCircle } from 'react-icons/fi';
import { MdOutlineWeb, MdOutlineDesignServices, MdOutlineCreate } from 'react-icons/md';

const Services = () => {
    const services = [
        {
            title: 'Web Development',
            description: 'I build responsive, performant websites and applications using modern stacks like MERN and Next.js, ensuring seamless experiences across all devices and platforms.',
            icon: <MdOutlineWeb className="w-6 h-6" />,
            features: ['Full-stack development', 'Responsive design', 'Performance optimization', 'API integration']
        },
        {
            title: 'UI/UX Design',
            description: 'I create intuitive, visually compelling interfaces that prioritize user experience while aligning with brand identity and business objectives.',
            icon: <MdOutlineDesignServices className="w-6 h-6" />,
            features: ['User interface design', 'Experience strategy', 'Prototyping & testing', 'Design systems']
        },
        {
            title: 'Copywriting',
            description: 'I craft persuasive, strategic copy that communicates brand values effectively and drives meaningful engagement across digital platforms.',
            icon: <MdOutlineCreate className="w-6 h-6" />,
            features: ['Brand messaging', 'SEO content', 'Marketing copy', 'Technical writing']
        },
    ];

    return (
        <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
            {/* Geometric background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 border-2 border-cyan-500/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 border-2 border-purple-500/20 rounded-full translate-x-1/3 translate-y-1/3"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-500/10 rotate-45"></div>
            </div>

            <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                {/* Header with lines */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-500"></div>
                        <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
                            My Services
                        </span>
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-500"></div>
                    </div>
                    
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                        Services
                        <span className="text-cyan-400">.</span>
                    </h1>
                    
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Comprehensive digital solutions that blend <span className="text-white font-medium">technical precision</span> with <span className="text-white font-medium">creative insight</span>
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl overflow-hidden"
                        >
                            {/* Gradient corner */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
                            
                            <div className="p-8">
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-cyan-500/20">
                                        <div className="text-cyan-400">
                                            {service.icon}
                                        </div>
                                        {/* Glow effect */}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-slate-300 leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Features list */}
                                <div className="space-y-3 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <FiCheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                            <span className="text-slate-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Link */}
                                <a 
                                    href="#contact" 
                                    className="inline-flex items-center text-cyan-400 font-semibold group/link hover:text-white transition-colors duration-300"
                                >
                                    <span className="relative">
                                        Discuss project
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover/link:w-full transition-all duration-300"></span>
                                    </span>
                                    <FiArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 lg:p-12 border border-slate-700 overflow-hidden mb-8">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 right-0 w-64 h-64 border-2 border-cyan-500/20 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-purple-500/20 rounded-full -translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    
                    <div className="relative max-w-3xl mx-auto text-center">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                            Ready to bring your vision
                            <span className="text-cyan-400"> to life?</span>
                        </h3>
                        
                        <div className="flex justify-center mb-8">
                            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                        </div>
                        
                        <p className="text-slate-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                            Let's collaborate to create meaningful digital experiences. I'm here to help you achieve your goals through thoughtful development, design, and communication.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="#contact" 
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg overflow-hidden min-w-[180px]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10 flex items-center">
                                    Start a Project
                                    <FiArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
                                </span>
                            </a>
                            
                            <a 
                                href="#portfolio" 
                                className="group inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border-2 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 shadow-lg min-w-[180px]"
                            >
                                <FiEye className="w-4 h-4 mr-3" />
                                <span>View Portfolio</span>
                                <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    →
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Additional Note */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-4 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                            <span className="text-sm text-slate-300">Custom solutions</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-slate-600"></div>
                        <span className="text-sm text-slate-300">Flexible engagement</span>
                        <div className="w-1 h-1 rounded-full bg-slate-600"></div>
                        <span className="text-sm text-slate-300">Ongoing support</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;