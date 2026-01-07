import React from 'react';
import { FiDownload, FiEye, FiCode, FiPenTool, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';
import { GoGraph } from 'react-icons/go';
import { AiOutlineRocket } from 'react-icons/ai';

const About = () => {
  const resumePath = "/Curriculum Vitae - Kubiat Idiong.pdf";
  
  const metrics = [
    { value: "10+", label: "Years Experience" },
    { value: "50+", label: "Projects" },
    { value: "2", label: "Ventures" },
    { value: "100%", label: "Satisfaction" }
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
      description: "Brand messaging, SEO content"
    },
    {
      icon: <GoGraph className="w-5 h-5" />,
      title: "Digital Strategy",
      description: "Project planning, Consulting"
    }
  ];

  const handleDownloadResume = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = "Kubiat_Idiong_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = (e) => {
    e.preventDefault();
    window.open(resumePath, '_blank');
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-white rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 border border-white/30 rotate-45"></div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Minimal Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
              My Journey
            </span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            About Me
            <span className="text-cyan-400">.</span>
          </h2>
          
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Building bridges between <span className="text-white font-medium">technical excellence</span> and <span className="text-white font-medium">creative vision</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Visual Elements */}
          <div className="space-y-8">
            {/* Profile Image/Placeholder */}
            <div className="relative group">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                      KE
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Kubiat Idiong</h3>
                    <p className="text-slate-300">Digital Solutions Architect</p>
                  </div>
                </div>
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl p-4 shadow-2xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs opacity-90">Years Exp</div>
                </div>
              </div>
            </div>

            {/* Skills Timeline */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <AiOutlineRocket className="text-cyan-400" />
                Skills Timeline
              </h3>
              <div className="space-y-4">
                {['MERN Stack', 'UI/UX Design', 'Technical Strategy', 'Project Leadership'].map((skill, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                    <span className="text-slate-300">{skill}</span>
                    <div className="flex-1 h-px bg-slate-700"></div>
                    <span className="text-sm text-slate-400">201{8+i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6">
                I Build
                <span className="text-cyan-400"> Digital Solutions</span>
              </h3>
              <div className="space-y-4 text-slate-300">
                <p className="leading-relaxed">
                  As a <span className="text-white font-medium">Full-Stack Developer</span> and <span className="text-white font-medium">Digital Strategist</span>, I create comprehensive solutions that blend technical precision with creative thinking.
                </p>
                <p className="leading-relaxed">
                  From leading <span className="text-white font-medium">FlamezTech</span> to collaborating with industry innovators, my approach balances innovation with practical execution.
                </p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-300 font-medium">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Specializations */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold mb-6">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {specializations.map((spec, index) => (
                  <div 
                    key={index}
                    className="bg-slate-900/50 rounded-lg p-4 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-3">
                      <div className="text-cyan-400">
                        {spec.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-white mb-1">
                      {spec.title}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {spec.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resume Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">
                Detailed Professional Profile
              </h3>
              <p className="text-slate-300">
                Explore my complete journey, skills, and achievements
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleDownloadResume}
                className="group flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300"
              >
                <FiDownload className="w-4 h-4 mr-2" />
                Download CV
              </button>
              
              <button
                onClick={handleViewResume}
                className="group flex items-center justify-center px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <FiEye className="w-4 h-4 mr-2" />
                Preview
              </button>
            </div>
          </div>
        </div>

        {/* Philosophy Sections */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Technical Approach</h3>
            </div>
            <div className="space-y-4 text-slate-300">
              <p>
                I focus on <span className="text-white font-medium">clean architecture</span> and <span className="text-white font-medium">scalable solutions</span>, moving seamlessly across the stack.
              </p>
              <p>
                My work with <span className="text-cyan-400">Truly One Tech</span> and <span className="text-cyan-400">Jodna Tech</span> reflects a commitment to technical excellence and innovation.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-500/5 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Creative Vision</h3>
            </div>
            <div className="space-y-4 text-slate-300">
              <p>
                I believe design should both <span className="text-white font-medium">solve problems</span> and <span className="text-white font-medium">create connections</span>.
              </p>
              <p>
                Every project balances <span className="text-purple-400">aesthetics</span> with <span className="text-purple-400">strategy</span> to deliver memorable, user-focused experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-0.5 mb-8">
            <div className="bg-slate-900 rounded-full px-8 py-3">
              <span className="text-white font-medium tracking-wider">READY TO CREATE</span>
            </div>
          </div>
          
          <h3 className="text-4xl font-bold mb-6">
            Let's Build Something
            <span className="text-cyan-400"> Amazing</span>
          </h3>
          
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need development, design, or strategy, let's transform your vision into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Start Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="#portfolio" 
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border-2 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              See My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;