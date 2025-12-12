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
        <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-amber-400 to-indigo-400 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gradient-to-l from-indigo-400 to-amber-400 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                {/* Header with elegant divider */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 backdrop-blur-sm rounded-full border border-slate-200/50 mb-6">
                        <span className="text-xs font-medium text-slate-600 tracking-wide">
                            Areas of Expertise
                        </span>
                    </div>
                    
                    <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 font-serif">
                        Services <span className="font-semibold">Offered</span>
                    </h1>
                    
                    <div className="relative mb-8">
                        <div className="w-32 h-0.5 bg-gradient-to-r from-amber-400/50 via-indigo-400/50 to-transparent mx-auto"></div>
                        <div className="w-32 h-0.5 bg-gradient-to-l from-amber-400/50 via-indigo-400/50 to-transparent mx-auto mt-1"></div>
                    </div>
                    
                    <p className="text-lg text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
                        Comprehensive digital solutions that blend technical precision with creative insight
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/60 hover:border-slate-300/60 transition-all duration-500 hover:shadow-lg overflow-hidden"
                        >
                            {/* Gradient accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/50 via-indigo-400/50 to-amber-400/50"></div>
                            
                            <div className="p-8">
                                {/* Icon with gradient background */}
                                <div className="mb-6">
                                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-slate-50 to-white flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm border border-slate-200/50">
                                        <div className="text-slate-700">
                                            {service.icon}
                                        </div>
                                        {/* Hover glow effect */}
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-4 group-hover:text-slate-950 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-slate-600 leading-relaxed mb-6 font-light">
                                    {service.description}
                                </p>

                                {/* Features list */}
                                <div className="space-y-2 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <FiCheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                            <span className="text-sm text-slate-600 font-light">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Learn More Link */}
                                <a 
                                    href="#contact" 
                                    className="inline-flex items-center text-slate-700 font-medium group/link hover:text-slate-900 transition-colors duration-300"
                                >
                                    <span className="relative">
                                        Discuss project
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-indigo-400 group-hover/link:w-full transition-all duration-300"></span>
                                    </span>
                                    <FiArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                                </a>
                            </div>

                            {/* Hover background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="relative bg-gradient-to-br from-white/80 to-slate-50/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-200/60 shadow-sm overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-[0.02]">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-400 to-indigo-400 rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-400 to-amber-400 rounded-full -translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    
                    <div className="relative max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl lg:text-3xl font-light text-slate-900 mb-6">
                            Ready to bring your vision to life?
                        </h3>
                        
                        <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400/50 via-indigo-400/50 to-transparent mx-auto mb-8"></div>
                        
                        <p className="text-slate-600 mb-8 text-lg leading-relaxed font-light max-w-2xl mx-auto">
                            Let's collaborate to create meaningful digital experiences. I'm here to help you achieve your goals through thoughtful development, design, and communication.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="#contact" 
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md min-w-[180px] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10 flex items-center">
                                    Start a Project
                                    <FiArrowRight className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" />
                                </span>
                            </a>
                            
                            <a 
                                href="#portfolio" 
                                className="group inline-flex items-center justify-center px-8 py-4 bg-white/80 hover:bg-white text-slate-700 font-medium rounded-xl border border-slate-200/60 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md min-w-[180px]"
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
                <div className="text-center mt-8">
                    <p className="text-sm text-slate-500 font-light">
                        Custom solutions available • Flexible engagement models • Ongoing support
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;