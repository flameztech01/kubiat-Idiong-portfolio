import React, { useState, useEffect } from 'react'
import { FiMessageSquare, FiX, FiMenu } from 'react-icons/fi'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md py-2 shadow-sm border-b border-slate-200/50' 
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center">
            {/* Logo with elegant design */}
            <div className="flex-shrink-0">
              <a 
                href="#home"
                className="relative group"
                onClick={() => setActiveLink('home')}
              >
                <div className="relative">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 rounded-lg blur-md transition-all duration-500 ${
                    isScrolled 
                      ? 'bg-gradient-to-r from-amber-400/20 to-indigo-400/20' 
                      : 'bg-gradient-to-r from-amber-400/30 to-indigo-400/30'
                  } group-hover:scale-110`} />
                  
                  {/* Logo container */}
                  <div className={`relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 ${
                    isScrolled 
                      ? 'bg-white/90 backdrop-blur-sm shadow-sm' 
                      : 'bg-white/95 backdrop-blur-sm shadow-sm'
                  } group-hover:rotate-3 group-hover:shadow-md`}>
                    <span className={`font-semibold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent transition-all duration-500 ${
                      isScrolled ? 'text-lg' : 'text-xl'
                    }`}>
                      NS
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="relative px-4 py-2 group"
                  onClick={() => setActiveLink(link.id)}
                >
                  <span className={`relative z-10 font-medium text-sm tracking-wide transition-all duration-300 ${
                    activeLink === link.id
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}>
                    {link.label}
                  </span>
                  
                  {/* Animated underline */}
                  <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-400 to-indigo-400 transform origin-left transition-all duration-500 ${
                    activeLink === link.id 
                      ? 'scale-x-100 opacity-100' 
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`} />
                  
                  {/* Background highlight on hover */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-slate-50/50 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a 
                href="#contact"
                className="group relative overflow-hidden"
                onClick={() => setActiveLink('contact')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 group-hover:from-slate-800 group-hover:to-slate-700 transition-all duration-300 rounded-xl" />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex items-center gap-2 px-5 py-2.5">
                  <FiMessageSquare className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white tracking-wide">
                    Send Message
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-5 h-5 text-slate-700 transition-transform duration-300" />
                ) : (
                  <FiMenu className="w-5 h-5 text-slate-700 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Elegant design */}
        <div className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg border-t border-slate-200/50 shadow-lg">
            <div className="px-5 pt-4 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`block px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                    activeLink === link.id
                      ? 'bg-gradient-to-r from-slate-50 to-amber-50/20 text-slate-900 border-l-3 border-amber-500'
                      : 'text-slate-600 hover:bg-slate-50/50 hover:text-slate-900'
                  }`}
                  onClick={() => {
                    setActiveLink(link.id)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-4 mt-2 border-t border-slate-200/50">
                <a
                  href="#contact"
                  className="group block mx-2"
                  onClick={() => {
                    setActiveLink('contact')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 active:scale-[0.98] transition-transform duration-200">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-center justify-center gap-2 px-6 py-3.5">
                      <FiMessageSquare className="w-4 h-4 text-white" />
                      <span className="text-base font-medium text-white">
                        Start Conversation
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Contact info in mobile menu */}
              <div className="px-4 pt-4 mt-4 border-t border-slate-200/50">
                <div className="space-y-3">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                    Direct Contact
                  </p>
                  <a 
                    href="tel:08058586759"
                    className="block text-sm text-slate-600 hover:text-slate-900 transition-colors duration-300"
                  >
                    0805 858 6759
                  </a>
                  <a 
                    href="mailto:njokusamuel2005@gmail.com"
                    className="block text-sm text-slate-600 hover:text-slate-900 transition-colors duration-300"
                  >
                    njokusamuel2005@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Add some global styles for smooth scrolling */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  )
}

export default Navbar