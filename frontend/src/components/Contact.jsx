import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-blue-600 mb-3">Get In Touch</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-blue-600">Me</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'd love to work with you and bring your ideas to life
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-gray-500 font-medium text-sm uppercase tracking-wide">Call Me</span>
            <p className="text-2xl font-bold text-gray-900 mt-2 hover:text-blue-600 transition-colors duration-300">
              08058586759
            </p>
            <a 
              href="tel:08058586759" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-4 text-sm transition-colors duration-300"
            >
              Call Now
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-gray-500 font-medium text-sm uppercase tracking-wide">Email Me</span>
            <a 
              href="mailto:njokusamuel2005@gmail.com" 
              className="text-2xl font-bold text-gray-900 mt-2 hover:text-purple-600 transition-colors duration-300 block break-all"
            >
              njokusamuel2005@gmail.com
            </a>
            <a 
              href="mailto:njokusamuel2005@gmail.com" 
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mt-4 text-sm transition-colors duration-300"
            >
              Send Email
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-gray-500 font-medium text-sm uppercase tracking-wide">Residence</span>
            <p className="text-2xl font-bold text-gray-900 mt-2 hover:text-green-600 transition-colors duration-300">
              Rivers State
            </p>
            <p className="text-gray-600 mt-1">Port Harcourt</p>
            <a 
              href="https://maps.google.com/?q=Port+Harcourt,Rivers+State" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium mt-4 text-sm transition-colors duration-300"
            >
              View Map
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact