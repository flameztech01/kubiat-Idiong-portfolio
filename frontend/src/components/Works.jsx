import React from 'react'

const Works = () => {
    const works = [
        {
            image: '/bank.jpg', 
            title: 'Banking App', 
            description: 'A modern banking application with secure transaction features and account management.',
            category: 'Web Development',
            tags: ['React', 'Node.js', 'MongoDB']
        },
        {
            image: '/real estate.jpg', 
            title: 'Real Estate App', 
            description: 'A responsive real estate website with property listings and search filters.',
            category: 'Web Development',
            tags: ['Next.js', 'Tailwind', 'API']
        },
        {
            image: '/company.jpg', 
            title: 'Business Website', 
            description: 'A professional company website showcasing services, team members, and contact information.',
            category: 'Web Design',
            tags: ['UI/UX', 'Responsive', 'Branding']
        }
    ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-blue-600 mb-3">Portfolio</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Recent <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my latest works that showcase my skills in development and design
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-500 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a 
                      href="#" 
                      className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center space-x-2"
                    >
                      <span>View Project</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {work.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {work.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {work.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1 transition-colors duration-300"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-800 font-semibold text-sm flex items-center space-x-1 transition-colors duration-300"
                  >
                    <span>Source Code</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Interested in working together?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Let's discuss your next project and bring your ideas to life with cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Start a Project
              </a>
              <a 
                href="#" 
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works