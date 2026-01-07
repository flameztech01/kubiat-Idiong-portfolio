import React, { useRef, useEffect } from 'react';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaBehance, FaDribbble } from 'react-icons/fa';

const Hero = () => {
  const videoRef = useRef(null);
  
  // Autoplay and loop video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }
  }, []);

  const socialPlatforms = [
    { 
      name: 'LinkedIn', 
      icon: <FiLinkedin className="w-5 h-5" />, 
      url: '#'
    },
    { 
      name: 'GitHub', 
      icon: <FiGithub className="w-5 h-5" />, 
      url: '#'
    },
    { 
      name: 'Dribbble', 
      icon: <FaDribbble className="w-5 h-5" />, 
      url: '#'
    },
    { 
      name: 'Behance', 
      icon: <FaBehance className="w-5 h-5" />, 
      url: '#'
    },
    { 
      name: 'Twitter', 
      icon: <FiTwitter className="w-5 h-5" />, 
      url: '#'
    },
  ];

  const skills = [
    { name: 'Full-Stack Development' },
    { name: 'UI/UX Design' },
    { name: 'Technical Strategy' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 border-2 border-cyan-500/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-purple-500/20 rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 border border-cyan-500/10 rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-purple-500/10 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 w-full relative z-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 min-h-[90vh] py-12 lg:py-20">
          
          {/* Left Content */}
          <div className="flex-1">
            <div className="space-y-8 max-w-2xl">
              {/* Geometric badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-lg border border-cyan-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse"></div>
                  <span className="text-sm font-medium tracking-wider text-cyan-300">
                    AVAILABLE FOR SELECT PROJECTS
                  </span>
                </div>
              </div>
              
              {/* Name with gradient */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <span className="text-cyan-400 text-sm tracking-widest uppercase">Digital Architect</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block text-slate-300">Kubiat</span>
                  <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                    Ekpenyong Idiong
                  </span>
                </h1>
                
                {/* Title */}
                <div className="mt-6">
                  <p className="text-xl text-slate-300 font-light">
                    Technical Consultant & Digital Solutions Architect
                  </p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                I architect digital solutions that bridge <span className="text-white font-medium">business objectives</span> with <span className="text-white font-medium">technical excellence</span>. Through strategic development, intuitive design, and innovative thinking.
              </p>
              
              {/* Skills as gradient badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative px-4 py-2 text-sm font-medium bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Action buttons with gradient */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <a 
                  href="#contact" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 overflow-hidden shadow-lg"
                  aria-label="Discuss a project opportunity"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center">
                    Start a Conversation
                    <FiArrowRight className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
                  </span>
                </a>
                <a 
                  href="#work" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                  aria-label="View professional case studies"
                >
                  <span>View Case Studies</span>
                  <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Video Container - Dark theme design */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Video frame with gradient border */}
              <div className="relative w-[280px] h-[500px] lg:w-[320px] lg:h-[570px]">
                {/* Gradient border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-[2.5rem] opacity-50 blur-sm"></div>
                
                {/* Video frame */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-900 border-2 border-slate-800">
                  {/* Video element */}
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src="/myvideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-cyan-500/10"></div>
                  
                  {/* Play button */}
                  <button 
                    className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                    onClick={() => videoRef.current?.play()}
                    aria-label="Play introduction video"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-slate-900 border-b-[10px] border-b-transparent ml-1"></div>
                      </div>
                    </div>
                  </button>
                </div>
                
                {/* Experience badge - bottom left */}
                <div className="absolute -bottom-3 -left-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl p-4 shadow-2xl">
                  <div className="text-center">
                    <div className="text-xl font-bold">10+</div>
                    <div className="text-xs opacity-90">Years Exp</div>
                  </div>
                </div>
                
                {/* Video label - top right */}
                <div className="absolute -top-3 -right-3 bg-slate-800/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-slate-700">
                  <div className="text-sm font-medium flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
                    Intro Video
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-cyan-500/20 rounded-xl rotate-12 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-purple-500/20 rounded-xl -rotate-12 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Social Links & Contact */}
        <div className="mt-16 lg:mt-20">
          <div className="max-w-3xl mx-auto">
            {/* Social links with gradient hover */}
            <div className="flex justify-center gap-6">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10 transition-all duration-300 border border-transparent hover:border-cyan-500/20"
                  aria-label={`Connect on ${platform.name}`}
                  title={platform.name}
                >
                  <div className="text-slate-400 group-hover:text-white transition-colors duration-300">
                    {platform.icon}
                  </div>
                  <div className="absolute inset-0 scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 blur-sm rounded-xl"></div>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Contact Information with dividers */}
            <div className="mt-12">
              <div className="flex items-center justify-center gap-8">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                
                <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-slate-400">
                  <a 
                    href="mailto:kubiat@example.com" 
                    className="group flex items-center gap-3 px-5 py-2.5 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 flex items-center justify-center border border-slate-700 group-hover:border-cyan-500/30">
                      <HiOutlineMail className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Contact</div>
                      <div className="text-white group-hover:text-cyan-300 transition-colors">KubiatIdiong111@gmail.com</div>
                    </div>
                  </a>
                  
                  <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>
                  
                  <div className="group flex items-center gap-3 px-5 py-2.5 rounded-lg hover:bg-slate-800/50 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 flex items-center justify-center border border-slate-700 group-hover:border-purple-500/30">
                      <HiOutlineLocationMarker className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">Location</div>
                      <div className="text-white">Global Remote</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              </div>
            </div>

            {/* Animated scroll indicator */}
            <div className="mt-16 flex justify-center">
              <div className="flex flex-col items-center gap-3">
                <span className="text-xs text-slate-500 tracking-widest font-medium">SCROLL TO EXPLORE</span>
                <div className="relative">
                  <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-cyan-500 to-purple-500 animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;