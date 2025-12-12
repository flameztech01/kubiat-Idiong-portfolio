import React from 'react'
import { FiPhone, FiMail, FiMapPin, FiSend, FiArrowRight, FiMessageSquare, FiCalendar } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-amber-400 to-indigo-400 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-l from-indigo-400 to-amber-400 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100/80 backdrop-blur-sm rounded-full border border-slate-200/50 mb-6">
            <FiMessageSquare className="w-3 h-3 text-slate-600" />
            <span className="text-xs font-medium text-slate-600 tracking-wide">
              Get In Touch
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 font-serif">
            Let's <span className="font-semibold">Connect</span>
          </h1>
          
          <div className="relative mb-8">
            <div className="w-32 h-0.5 bg-gradient-to-r from-amber-400/50 via-indigo-400/50 to-transparent mx-auto"></div>
            <div className="w-32 h-0.5 bg-gradient-to-l from-amber-400/50 via-indigo-400/50 to-transparent mx-auto mt-1"></div>
          </div>
          
          <p className="text-lg text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate on creating something meaningful together
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Phone Card */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300/60 transition-all duration-300 hover:shadow-lg overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/70 to-indigo-400/70"></div>
            
            <div className="text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-amber-50 to-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="text-amber-600">
                  <FiPhone className="w-8 h-8" />
                </div>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Direct Call</span>
              <p className="text-2xl font-semibold text-slate-900 mt-2 group-hover:text-slate-950 transition-colors duration-300">
                08058586759
              </p>
              
              <a 
                href="tel:08058586759" 
                className="group/link inline-flex items-center text-slate-700 hover:text-amber-600 font-medium mt-6 text-sm transition-colors duration-300"
              >
                <span className="relative">
                  Call Now
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-indigo-400 group-hover/link:w-full transition-all duration-300"></span>
                </span>
                <FiArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300/60 transition-all duration-300 hover:shadow-lg overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400/70 to-amber-400/70"></div>
            
            <div className="text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-indigo-50 to-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="text-indigo-600">
                  <FiMail className="w-8 h-8" />
                </div>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Email Address</span>
              <a 
                href="mailto:njokusamuel2005@gmail.com" 
                className="text-lg font-semibold text-slate-900 mt-2 group-hover:text-slate-950 transition-colors duration-300 block break-all hover:text-indigo-600"
              >
                njokusamuel2005@gmail.com
              </a>
              
              <a 
                href="mailto:njokusamuel2005@gmail.com" 
                className="group/link inline-flex items-center text-slate-700 hover:text-indigo-600 font-medium mt-6 text-sm transition-colors duration-300"
              >
                <span className="relative">
                  Send Email
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-amber-400 group-hover/link:w-full transition-all duration-300"></span>
                </span>
                <FiSend className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300/60 transition-all duration-300 hover:shadow-lg overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400/70 via-indigo-400/70 to-amber-400/70"></div>
            
            <div className="text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-slate-50 to-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="text-slate-600">
                  <FiMapPin className="w-8 h-8" />
                </div>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Based In</span>
              <p className="text-2xl font-semibold text-slate-900 mt-2 group-hover:text-slate-950 transition-colors duration-300">
                Rivers State
              </p>
              <p className="text-slate-600 mt-1 font-light">Port Harcourt, Nigeria</p>
              
              <a 
                href="https://maps.google.com/?q=Port+Harcourt,Rivers+State" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/link inline-flex items-center text-slate-700 hover:text-slate-900 font-medium mt-6 text-sm transition-colors duration-300"
              >
                <span className="relative">
                  View Location
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-indigo-400 group-hover/link:w-full transition-all duration-300"></span>
                </span>
                <FiArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-br from-white/80 to-slate-50/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-slate-200/60 shadow-sm">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-light text-slate-900 mb-4 font-serif">
                Working <span className="font-semibold">Together</span>
              </h3>
              <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400/50 via-indigo-400/50 to-transparent mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Availability */}
              <div className="group p-6 rounded-xl border border-slate-200/50 hover:border-slate-300/60 bg-white/50 hover:bg-white/80 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-50 to-indigo-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FiCalendar className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Availability</h4>
                    <p className="text-slate-600 font-light leading-relaxed">
                      Currently accepting select projects for Q1 2024. Schedule a consultation to discuss timelines and deliverables.
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="group p-6 rounded-xl border border-slate-200/50 hover:border-slate-300/60 bg-white/50 hover:bg-white/80 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-50 to-amber-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FiSend className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">Response Time</h4>
                    <p className="text-slate-600 font-light leading-relaxed">
                      Typically respond within 24 hours during business days. For urgent inquiries, please use the direct phone number.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-10 pt-8 border-t border-slate-200/60">
              <p className="text-slate-600 mb-6 font-light max-w-xl mx-auto">
                Whether you have a project in mind or just want to explore possibilities, I'm here to help bring your ideas to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:njokusamuel2005@gmail.com" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md min-w-[200px] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center">
                    <FiMail className="w-4 h-4 mr-3" />
                    Send Message
                  </span>
                </a>
                
                <a 
                  href="tel:08058586759" 
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/80 hover:bg-white text-slate-700 font-medium rounded-xl border border-slate-200/60 hover:border-slate-300 transition-all duration-300 shadow-sm hover:shadow-md min-w-[200px]"
                >
                  <FiPhone className="w-4 h-4 mr-3" />
                  <span>Call Directly</span>
                  <span className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </span>
                </a>
              </div>
              
              <p className="text-sm text-slate-500 font-light mt-6">
                Looking forward to hearing about your project
              </p>
            </div>
          </div>
        </div>

        {/* Final Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-slate-500 font-light">
            Connect on <a href="#" className="text-slate-700 hover:text-slate-900 transition-colors">LinkedIn</a> for professional updates
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact