import React from 'react';
import { FiDownload, FiEye, FiTarget, FiCode, FiPenTool, FiMessageSquare, FiBriefcase, FiTrendingUp } from 'react-icons/fi';
import { GoGraph } from 'react-icons/go';

const About = () => {
  const resumePath = "/Curriculum Vitae - Njoku Samuel.pdf";
  
  const metrics = [
    { value: "4+", label: "Years Experience", suffix: "in full-stack development" },
    { value: "50+", label: "Projects", suffix: "delivered globally" },
    { value: "2", label: "Ventures", suffix: "founded & scaled" },
    { value: "100%", label: "Satisfaction", suffix: "repeat collaboration rate" }
  ];

  const specializations = [
    {
      icon: <FiCode className="w-5 h-5" />,
      title: "Full-Stack Development",
      description: "MERN Stack, Next.js, JavaScript, REST APIs"
    },
    {
      icon: <FiPenTool className="w-5 h-5" />,
      title: "UI/UX Design",
      description: "Figma, Adobe Suite, Responsive Design"
    },
    {
      icon: <FiMessageSquare className="w-5 h-5" />,
      title: "Strategic Copywriting",
      description: "Brand messaging, SEO content, Marketing copy"
    },
    {
      icon: <GoGraph className="w-5 h-5" />,
      title: "Digital Strategy",
      description: "Project planning, Technical consulting"
    }
  ];

  const handleDownloadResume = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = "Njoku_Samuel_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = (e) => {
    e.preventDefault();
    window.open(resumePath, '_blank');
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-amber-400 to-indigo-400 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-l from-indigo-400 to-amber-400 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Header with elegant typography */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 backdrop-blur-sm rounded-full border border-slate-200/50 mb-6">
            <span className="text-xs font-medium text-slate-600 tracking-wide">
              Professional Journey
            </span>
          </div>
          
          <div className="relative">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 font-serif">
              About <span className="font-semibold">Me</span>
            </h2>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-amber-400/50 via-indigo-400/50 to-transparent"></div>
            <div className="absolute -bottom-3 right-1/2 transform translate-x-1/2 w-32 h-0.5 bg-gradient-to-l from-amber-400/50 via-indigo-400/50 to-transparent"></div>
          </div>
          
          <p className="text-lg text-slate-600 leading-relaxed mt-10 max-w-2xl mx-auto font-light">
            Bridging technical precision with creative vision to craft meaningful digital experiences
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid - Reversed for visual interest */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Profile Summary - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-50 to-indigo-50 rounded-xl flex items-center justify-center">
                    <FiBriefcase className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">Professional Narrative</h3>
                    <p className="text-slate-500 text-sm mt-1">A synthesis of technical and creative expertise</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <p className="text-slate-700 leading-relaxed text-lg font-light">
                    As a <span className="font-medium text-slate-900">Full-Stack Developer</span> and <span className="font-medium text-slate-900">Digital Creative</span>, I specialize in architecting comprehensive solutions that seamlessly integrate technical excellence with strategic vision. My work spans from complex web applications to compelling brand narratives.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-lg font-light">
                    With leadership roles at <span className="font-medium text-slate-900">Flamez Tech</span> and <span className="font-medium text-slate-900">FlamezGrafx</span>, complemented by collaborations with industry innovators, I bring a balanced perspective that values both innovation and practical execution.
                  </p>
                </div>
              </div>

              {/* Key Metrics - Elegant Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white/50 backdrop-blur-sm rounded-xl p-5 text-center border border-slate-200/50 hover:border-slate-300/50 transition-all duration-300 hover:shadow-sm overflow-hidden"
                  >
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-indigo-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative">
                      <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300">
                        {metric.value}
                      </div>
                      <div className="text-sm font-semibold text-slate-900 mb-1">{metric.label}</div>
                      <div className="text-xs text-slate-500 font-light">{metric.suffix}</div>
                    </div>
                    
                    {/* Decorative corner */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-slate-200/50 rounded-tr-xl"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specializations - Right Column */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white/80 to-slate-50/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-50 to-indigo-50 rounded-lg flex items-center justify-center">
                    <FiTarget className="w-5 h-5 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Core Disciplines</h3>
                </div>
                
                <div className="space-y-4">
                  {specializations.map((spec, index) => (
                    <div 
                      key={index} 
                      className="group p-4 rounded-xl border border-slate-200/40 hover:border-slate-300/60 bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-50/80 to-indigo-50/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="text-slate-700">
                            {spec.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-slate-900 mb-1 group-hover:text-slate-950 transition-colors">
                            {spec.title}
                          </h4>
                          <p className="text-sm text-slate-600 font-light leading-relaxed">
                            {spec.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resume Actions - Elegant Card */}
              <div className="bg-gradient-to-br from-white/80 to-amber-50/20 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100/50 to-indigo-100/50 rounded-lg flex items-center justify-center">
                    <FiTrendingUp className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Career Documentation</h3>
                    <p className="text-sm text-slate-500 font-light mt-1">
                      Detailed professional journey
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={handleDownloadResume}
                    className="group w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center">
                      <FiDownload className="w-4 h-4 mr-3" />
                      Download CV (PDF)
                    </span>
                  </button>
                  
                  <button
                    onClick={handleViewResume}
                    className="group w-full flex items-center justify-center px-4 py-3 bg-white/80 hover:bg-white text-slate-700 font-medium rounded-xl border border-slate-200/60 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <FiEye className="w-4 h-4 mr-3" />
                    <span>Preview Document</span>
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dual Perspective Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Technical Perspective */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300/60 transition-all duration-300 hover:shadow-md overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-400/10 to-transparent rounded-bl-[100px]"></div>
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100/50 to-amber-100/50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">Technical Philosophy</h3>
                    <p className="text-slate-500 text-sm mt-1 font-light">Architecture with intention</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed font-light">
                    My approach to development emphasizes clean architecture, maintainable code, and scalable solutions. I navigate the entire stack with equal comfort, from crafting responsive interfaces to designing robust backend systems.
                  </p>
                  <p className="text-slate-700 leading-relaxed font-light">
                    Through strategic partnerships with <span className="font-medium text-slate-900">Truly One Tech</span> and <span className="font-medium text-slate-900">Jodna Tech</span>, I've contributed to platforms that serve diverse needs while maintaining technical excellence and future adaptability.
                  </p>
                </div>
              </div>
            </div>

            {/* Creative Perspective */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300/60 transition-all duration-300 hover:shadow-md overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-indigo-400/10 to-transparent rounded-br-[100px]"></div>
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-100/50 to-indigo-100/50 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">Creative Approach</h3>
                    <p className="text-slate-500 text-sm mt-1 font-light">Design that communicates</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed font-light">
                    I believe effective design solves problems while compelling communication builds meaningful connections. My creative practice is rooted in understanding both user psychology and business objectives to deliver resonant solutions.
                  </p>
                  <p className="text-slate-700 leading-relaxed font-light">
                    Every project balances <span className="font-medium text-slate-900">aesthetic sensibility</span> with <span className="font-medium text-slate-900">strategic intent</span>, ensuring creative decisions support broader goals while crafting memorable, user-centered experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA - Elegant & Centered */}
          <div className="relative bg-gradient-to-br from-white/80 to-slate-50/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-200/60 shadow-sm overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-400 to-indigo-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-400 to-amber-400 rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="relative max-w-2xl mx-auto text-center">
              <h3 className="text-2xl lg:text-3xl font-light text-slate-900 mb-6">
                Let's Craft Something Meaningful
              </h3>
              
              <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400/50 via-indigo-400/50 to-transparent mx-auto mb-8"></div>
              
              <p className="text-slate-600 mb-8 text-lg leading-relaxed font-light">
                Whether you need technical development, creative direction, or strategic guidance, I'm prepared to transform your vision into an impactful digital reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md min-w-[220px] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center">
                    Begin Conversation
                    <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                
                <a 
                  href="#portfolio" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/80 hover:bg-white text-slate-700 font-medium rounded-xl border border-slate-200/60 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md min-w-[220px]"
                >
                  <span>Explore Work</span>
                  <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;