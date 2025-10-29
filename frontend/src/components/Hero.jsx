import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Text Content - Left */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 font-medium">Hello I'm</p>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Njoku <span className="text-blue-600">Samuel</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 font-semibold">
                MERN Stack (Full Stack) Developer, Graphic Designer and Copywriter
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                I'm a passionate Full-stack Web Developer, Graphic Designer, Copywriter, 
                and Front-end Developer with a strong eye for detail and a commitment to 
                delivering high-quality, user-friendly solutions.
              </p>
              
              <div className="pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Let's talk
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Image - Right */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/me.png" 
                  alt="Njoku Samuel" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Socials - Scrollable Row */}
        <div className="mt-16 lg:mt-24">
          <div className="flex overflow-x-auto scrollbar-hide space-x-8 py-4 px-2">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white hover:bg-gray-50 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 min-w-max border border-gray-100"
            >
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
              <span className="text-gray-700 font-medium">Instagram</span>
            </a>
            
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white hover:bg-gray-50 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 min-w-max border border-gray-100"
            >
              <img src="/x.png" alt="X" className="w-6 h-6" />
              <span className="text-gray-700 font-medium">X</span>
            </a>
            
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white hover:bg-gray-50 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 min-w-max border border-gray-100"
            >
              <img src="/tiktok.png" alt="TikTok" className="w-6 h-6" />
              <span className="text-gray-700 font-medium">TikTok</span>
            </a>
            
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white hover:bg-gray-50 px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 min-w-max border border-gray-100"
            >
              <img src="/youtube.png" alt="YouTube" className="w-6 h-6" />
              <span className="text-gray-700 font-medium">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero