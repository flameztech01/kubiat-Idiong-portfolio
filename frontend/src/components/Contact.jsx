import React from 'react'
import { FiPhone, FiMail, FiMapPin, FiSend, FiArrowRight, FiMessageSquare, FiCalendar } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 border-2 border-cyan-500/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 border-2 border-purple-500/20 rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-cyan-500/10 rotate-45"></div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-500"></div>
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
              Get In Touch
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-500"></div>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
            Let's
            <span className="text-cyan-400"> Connect</span>
          </h1>
          
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate on creating something meaningful together
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phone Card */}
          <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl overflow-hidden">
            {/* Gradient accent corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/20 to-transparent"></div>
            
            <div className="text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border border-cyan-500/20">
                <div className="text-cyan-400">
                  <FiPhone className="w-8 h-8" />
                </div>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Direct Call</span>
              <p className="text-2xl font-bold text-white mt-2 group-hover:text-cyan-300 transition-colors duration-300">
                09124582415
              </p>
              
              <a 
                href="tel:09124582415" 
                className="group/link inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold mt-6 text-sm transition-colors duration-300"
              >
                <span className="relative">
                  Call Now
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover/link:w-full transition-all duration-300"></span>
                </span>
                <FiArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl overflow-hidden">
            {/* Gradient accent corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/20 to-transparent"></div>
            
            <div className="text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border border-purple-500/20">
                <div className="text-purple-400">
                  <FiMail className="w-8 h-8" />
                </div>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Email Address</span>
              <a 
                href="mailto:KubiatIdiong111@gmail.com" 
                className="text-lg font-bold text-white mt-2 group-hover:text-purple-300 transition-colors duration-300 block break-all hover:text-purple-400"
              >
                KubiatIdiong111@gmail.com
              </a>
              
              <a 
                href="mailto:KubiatIdiong111@gmail.com" 
                className="group/link inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold mt-6 text-sm transition-colors duration-300"
              >
                <span className="relative">
                  Send Email
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover/link:w-full transition-all duration-300"></span>
                </span>
                <FiSend className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl overflow-hidden">
            {/* Gradient accent corner */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-purple-500/10"></div>
            
            <div className="text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 border border-slate-700">
                <div className="text-slate-300">
                  <FiMapPin className="w-8 h-8" />
                </div>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Based In</span>
              <p className="text-2xl font-bold text-white mt-2 group-hover:text-cyan-300 transition-colors duration-300">
                Federal Capital Territory
              </p>
              <p className="text-slate-400 mt-1">Abuja, Nigeria</p>
              
              <a 
                href="https://maps.google.com/?q=Port+Harcourt,Rivers+State" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/link inline-flex items-center text-slate-300 hover:text-white font-semibold mt-6 text-sm transition-colors duration-300"
              >
                <span className="relative">
                  View Location
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover/link:w-full transition-all duration-300"></span>
                </span>
                <FiArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 lg:p-12 border border-slate-700 shadow-lg">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Working
                <span className="text-cyan-400"> Together</span>
              </h3>
              <div className="flex justify-center mb-6">
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Availability */}
              <div className="group p-6 rounded-lg border border-slate-700 hover:border-cyan-500/30 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-800/80 hover:to-slate-900/80 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-700">
                    <FiCalendar className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Availability</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Currently accepting select projects. Schedule a consultation to discuss timelines and deliverables.
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="group p-6 rounded-lg border border-slate-700 hover:border-purple-500/30 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-800/80 hover:to-slate-900/80 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-slate-700">
                    <FiSend className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Response Time</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Typically respond within 24 hours during business days. For urgent inquiries, please call directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-10 pt-8 border-t border-slate-700">
              <p className="text-slate-300 mb-6 max-w-xl mx-auto">
                Whether you have a project in mind or just want to explore possibilities, I'm here to help bring your ideas to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:njokusamuel2005@gmail.com" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg overflow-hidden min-w-[200px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center">
                    <FiMail className="w-5 h-5 mr-3" />
                    Send Message
                  </span>
                </a>
                
                <a 
                  href="tel:08058586759" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white font-bold rounded-xl border-2 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 shadow-lg min-w-[200px]"
                >
                  <FiPhone className="w-5 h-5 mr-3" />
                  <span>Call Directly</span>
                  <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </a>
              </div>
              
              <p className="text-sm text-slate-400 font-medium mt-6">
                Looking forward to hearing about your project
              </p>
            </div>
          </div>
        </div>

        {/* Final Note */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700">
            <span className="text-slate-400 text-sm">Connect on</span>
            <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold">LinkedIn</a>
            <span className="text-slate-400 text-sm">for updates</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact