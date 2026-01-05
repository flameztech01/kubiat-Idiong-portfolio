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
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg py-3 shadow-sm border-b border-slate-100' 
          : 'bg-white/95 backdrop-blur-lg py-4 border-b border-slate-100/50'
      }`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center">
            {/* Logo - Minimal and professional */}
            <div className="flex-shrink-0">
              <a 
                href="#home"
                className="relative group"
                onClick={() => setActiveLink('home')}
              >
                <div className="relative flex items-center space-x-3">
                  <div className={`relative w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    isScrolled 
                      ? 'bg-gradient-to-br from-slate-900 to-slate-700' 
                      : 'bg-gradient-to-br from-slate-900 to-slate-700'
                  } group-hover:scale-105 group-hover:shadow-md`}>
                    <span className="font-semibold text-white text-lg tracking-tight">
                      KI
                    </span>
                  </div>
                  <div className="hidden lg:block">
                    <span className="text-sm font-semibold text-slate-900 tracking-wide">
                      Kubiat Ekpenyong Idiong
                    </span>
                    <div className="h-px w-6 bg-gradient-to-r from-slate-400/50 to-transparent mt-0.5"></div>
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links - Clean and sophisticated */}
            <div className="hidden md:flex items-center space-x-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="relative px-5 py-2.5 group"
                  onClick={() => setActiveLink(link.id)}
                >
                  <span className={`relative z-10 font-medium text-sm tracking-wide transition-all duration-300 ${
                    activeLink === link.id
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}>
                    {link.label}
                  </span>
                  
                  {/* Active indicator */}
                  {activeLink === link.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-slate-900 rounded-full" />
                  )}
                  
                  {/* Hover background */}
                  <div className="absolute inset-0 rounded-md bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </a>
              ))}
            </div>

            {/* CTA Button - Professional with subtle gradient */}
            <div className="hidden md:block">
              <a 
                href="#contact"
                className="group relative overflow-hidden"
                onClick={() => setActiveLink('contact')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg transition-all duration-300 group-hover:shadow-lg" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <div className="relative z-10 flex items-center gap-2.5 px-5 py-2.5">
                  <FiMessageSquare className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-sm font-medium text-white tracking-wide">
                    Send Message
                  </span>
                </div>
              </a>
            </div>

            {/* Mobile menu button - Clean and modern */}
            <div className="md:hidden">
              <button
                type="button"
                className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 text-white shadow-sm transition-all duration-300 hover:shadow-md"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-5 h-5 transition-transform duration-300" />
                ) : (
                  <FiMenu className="w-5 h-5 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Clean and professional */}
        <div className={`md:hidden absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-white/98 backdrop-blur-lg border-t border-slate-100 shadow-xl">
            <div className="px-5 pt-4 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`flex items-center px-4 py-3.5 rounded-lg text-base font-medium transition-all duration-300 ${
                    activeLink === link.id
                      ? 'bg-slate-50 text-slate-900'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  onClick={() => {
                    setActiveLink(link.id)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {activeLink === link.id && (
                    <div className="w-1.5 h-1.5 bg-slate-900 rounded-full mr-3"></div>
                  )}
                  <span className={activeLink === link.id ? 'ml-3' : 'ml-6'}>
                    {link.label}
                  </span>
                </a>
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-6 mt-4 border-t border-slate-100">
                <a
                  href="#contact"
                  className="group block"
                  onClick={() => {
                    setActiveLink('contact')
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-slate-900 to-slate-800 transition-all duration-300 active:scale-[0.98]">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-center justify-center gap-3 px-6 py-3.5">
                      <FiMessageSquare className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-base font-medium text-white">
                        Start Conversation
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Contact info in mobile menu */}
              <div className="px-4 pt-6 mt-6 border-t border-slate-100">
                <div className="space-y-3">
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                    Direct Contact
                  </p>
                  <a 
                    href="tel:08058586759"
                    className="flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-slate-300 rounded-full mr-2"></span>
                    0805 858 6759
                  </a>
                  <a 
                    href="mailto:njokusamuel2005@gmail.com"
                    className="flex items-center text-sm text-slate-600 hover:text-slate-900 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-slate-300 rounded-full mr-2"></span>
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