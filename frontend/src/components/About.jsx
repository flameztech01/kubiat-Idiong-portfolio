import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-blue-600 mb-3 tracking-wide uppercase">
            Professional Profile
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technology Professional | Creative Designer | Strategic Thinker
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {/* Professional Summary */}
            <div className="text-center">
              <div className="bg-white rounded-2xl shadow-xl p-10 lg:p-12 transition-all duration-300 hover:shadow-2xl">
                <p className="text-gray-700 leading-relaxed text-lg lg:text-xl mb-6">
                  I am <span className="font-semibold text-gray-900">Njoku Samuel</span>, a versatile technology professional with expertise spanning full-stack web development, brand design, and strategic copywriting. I specialize in transforming complex ideas into elegant digital solutions that drive business growth and user engagement.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg lg:text-xl">
                  My approach combines technical precision with creative vision, ensuring every project delivers measurable results while maintaining exceptional user experiences. From concept to deployment, I focus on creating solutions that are not only visually compelling but also strategically aligned with business objectives.
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-3">2+</div>
                <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-3">50+</div>
                <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Projects Delivered</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-3">2</div>
                <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Ventures Founded</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-3">100%</div>
                <div className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>

            {/* Professional Background */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Leadership & Experience */}
              <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
                  Professional Journey
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  As the founder of <span className="font-semibold text-gray-900">Flamez Tech</span> and <span className="font-semibold text-gray-900">FlamezGrafx</span>, I lead teams dedicated to delivering cutting-edge digital solutions. My professional experience includes collaborating with established technology firms like <span className="font-semibold text-gray-900">Truly One Tech</span> and <span className="font-semibold text-gray-900">Jodna Tech</span>, where I've contributed to enterprise-level projects and innovative digital transformations.
                </p>
              </div>

              {/* Mission & Philosophy */}
              <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
                  My Philosophy
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  I believe in the power of technology to create meaningful change. My journey began with a curiosity for how things work and has evolved into a commitment to building solutions that make a difference. Every project is an opportunity to push boundaries, solve complex challenges, and create value that extends beyond the screen.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-8">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="#" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center min-w-[200px]"
                >
                  Download Resume
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
                <a 
                  href="#portfolio" 
                  className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-10 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center min-w-[200px]"
                >
                  View Portfolio
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
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