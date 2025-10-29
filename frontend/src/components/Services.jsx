import React from 'react'

const Services = () => {
    const services = [
        {
            title: 'Web Development',
            description:
                'I build responsive, user-friendly websites and web applications using HTML, CSS, and JavaScript — ensuring they work seamlessly on both desktop and mobile devices.',
            icon: '💻',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Graphic Design',
            description:
                'I create clean, modern visual designs for logos, branding, and marketing materials using tools like Figma and Adobe Illustrator to communicate your brand effectively.',
            icon: '🎨',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Copywriting',
            description:
                'I craft clear, persuasive copy for websites, landing pages, and marketing campaigns that engages readers and drives conversions while staying true to your brand voice.',
            icon: '✍️',
            gradient: 'from-green-500 to-teal-500'
        },
    ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-blue-600 mb-3">My Services</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What I <span className="text-blue-600">Offer</span>
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Top Bar */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
              
              <div className="p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300"
                >
                  Learn more
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to bring your project to life?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create something amazing. I'm here to help you achieve your goals with professional web development, design, and copywriting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Start a Project
              </a>
              <a 
                href="#" 
                className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services