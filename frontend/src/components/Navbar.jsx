import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"
            >
              Portfolio
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-gray-50"
              >
                Home
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-gray-50"
              >
                About Me
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-gray-50"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              Message Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="bg-white p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          <a 
            href="#" 
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
          >
            Home
          </a>
          <a 
            href="#" 
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
          >
            About Me
          </a>
          <a 
            href="#" 
            className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
          >
            Contact
          </a>
          <a 
            href="#" 
            className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-2"
          >
            Message Me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar