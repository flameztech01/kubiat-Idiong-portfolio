import React from 'react';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { FaBehance, FaDribbble } from 'react-icons/fa';

const Hero = () => {
  const socialPlatforms = [
    { 
      name: 'LinkedIn', 
      icon: <FiLinkedin className="w-4 h-4" />, 
      url: 'https://linkedin.com/in/njokusamuel'
    },
    { 
      name: 'GitHub', 
      icon: <FiGithub className="w-4 h-4" />, 
      url: 'https://github.com/njokusamuel'
    },
    { 
      name: 'Dribbble', 
      icon: <FaDribbble className="w-4 h-4" />, 
      url: 'https://dribbble.com/njokusamuel'
    },
    { 
      name: 'Behance', 
      icon: <FaBehance className="w-4 h-4" />, 
      url: 'https://behance.net/njokusamuel'
    },
    { 
      name: 'Twitter', 
      icon: <FiTwitter className="w-4 h-4" />, 
      url: 'https://twitter.com/njokusamuel'
    },
  ];

  const skills = [
    { name: 'MERN Stack' },
    { name: 'UI/UX Design' },
    { name: 'Copywriting' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/70 flex items-center py-12 lg:py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-amber-200 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-indigo-200 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full relative z-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 min-h-[85vh] lg:min-h-[75vh]">
          
          {/* Left Content */}
          <div className="flex-1 lg:order-1">
            <div className="space-y-8 max-w-2xl">
              {/* Professional badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 backdrop-blur-sm rounded-full border border-slate-200/50">
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                <span className="text-xs font-medium text-slate-600 tracking-wide">
                  Available for select projects
                </span>
              </div>
              
              {/* Name with elegant typography */}
              <div>
                <h1 className="text-5xl lg:text-7xl font-light text-slate-900 leading-none">
                  <span className="block font-serif italic text-slate-700">Njoku</span>
                  <span className="block mt-2 font-semibold tracking-tight text-slate-900">Samuel</span>
                </h1>
                
                {/* Title with decorative underline */}
                <div className="mt-6">
                  <p className="text-lg lg:text-xl text-slate-600 font-light">
                    Full Stack Developer & Digital Creative
                  </p>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-indigo-400 mt-3"></div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-light max-w-xl">
                I craft digital experiences that seamlessly blend technical precision with 
                creative vision. Through thoughtful development, intuitive design, and 
                strategic storytelling, I bring ideas to life in the digital space.
              </p>
              
              {/* Skills as elegant tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="relative group"
                  >
                    <span className="px-3 py-1.5 text-sm font-medium text-slate-700 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-200/60 hover:border-slate-300 transition-all duration-300 hover:shadow-sm">
                      {skill.name}
                    </span>
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-amber-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                ))}
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md text-sm relative overflow-hidden"
                  aria-label="Initiate a project collaboration"
                >
                  <span className="relative z-10 flex items-center">
                    Start a Project
                    <FiArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="#work" 
                  className="group inline-flex items-center justify-center px-7 py-3.5 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 font-medium rounded-xl border border-slate-200/60 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md text-sm"
                  aria-label="View professional portfolio"
                >
                  <span>View Portfolio</span>
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image with elegant frame */}
          <div className="flex-1 flex justify-center lg:justify-end lg:order-2">
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                {/* Decorative border */}
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/20 via-transparent to-indigo-400/20 rounded-3xl blur-xl"></div>
                
                {/* Image with elegant shadow */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/me.png" 
                    alt="Njoku Samuel - Full Stack Developer and Digital Creative" 
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
                </div>
                
                {/* Experience badge */}
                <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-100">
                  <div className="text-center">
                    <div className="text-xl font-bold bg-gradient-to-r from-amber-600 to-indigo-600 bg-clip-text text-transparent">4+</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">Years Experience</div>
                  </div>
                </div>
                
                {/* Top left accent */}
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-300 rounded-xl rotate-12 opacity-80"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Contact - Elegant footer */}
        <div className="mt-16 lg:mt-20">
          <div className="max-w-3xl mx-auto">
            {/* Social links as minimal icons */}
            <div className="flex justify-center gap-1">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl hover:bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-sm border border-transparent hover:border-slate-200/60"
                  aria-label={`Connect on ${platform.name}`}
                  title={platform.name}
                >
                  <div className="text-slate-600 group-hover:text-slate-900 transition-colors duration-300 relative">
                    {platform.icon}
                    <div className="absolute inset-0 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-indigo-400/10 rounded-full blur-sm"></div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Contact Information with subtle divider */}
            <div className="mt-8">
              <div className="flex items-center justify-center">
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="mx-4">
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-all duration-300 group">
                      <HiOutlineMail className="w-4 h-4" />
                      <a 
                        href="mailto:hello@njsamuel.com" 
                        className="hover:text-slate-900 transition-colors duration-300"
                      >
                        njokusamuel2005@gmail.com
                      </a>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/50 backdrop-blur-sm transition-all duration-300">
                      <HiOutlineLocationMarker className="w-4 h-4" />
                      <span>Rivers, Nigeria</span>
                    </div>
                  </div>
                </div>
                <div className="flex-grow h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
              </div>
            </div>

            {/* Subtle scroll indicator */}
            <div className="mt-12 flex justify-center">
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs text-slate-400 tracking-widest font-medium">EXPLORE</span>
                <div className="w-px h-8 bg-gradient-to-b from-amber-400/50 to-indigo-400/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;