import React from 'react'
import { useGetProjectsQuery } from '../slices/userApiSlice.js'
import { FiExternalLink, FiGithub, FiClock, FiFolder, FiEye } from 'react-icons/fi'
import { HiOutlineFire } from 'react-icons/hi'

const Works = () => {
    const { 
        data: projects, 
        isLoading, 
        isError,
        error 
    } = useGetProjectsQuery()

    // Function to construct Cloudinary URL with optional transformations
    const getCloudinaryImageUrl = (imageUrl, options = {}) => {
        if (!imageUrl) {
            return '/placeholder-project.jpg'
        }

        if (imageUrl.includes('cloudinary.com')) {
            const { width = 800, height = 640, quality = 'auto', crop = 'fill' } = options
            
            if (imageUrl.includes('/upload/')) {
                const parts = imageUrl.split('/upload/')
                if (parts.length === 2) {
                    return `${parts[0]}/upload/c_${crop},w_${width},h_${height},q_${quality}/${parts[1]}`
                }
            }
            return imageUrl
        }

        if (!imageUrl.startsWith('http')) {
            const { width = 800, height = 640, quality = 'auto', crop = 'fill' } = options
            const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || 'your-cloud-name'
            
            const hasExtension = imageUrl.includes('.')
            const publicId = hasExtension ? imageUrl : `${imageUrl}.jpg`
            
            return `https://res.cloudinary.com/${cloudName}/image/upload/c_${crop},w_${width},h_${height},q_${quality}/${publicId}`
        }

        return imageUrl
    }

    if (isLoading) {
        return (
            <section id="portfolio" className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 border-2 border-cyan-500/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                </div>
                
                <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-500"></div>
                            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
                                Portfolio Showcase
                            </span>
                            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-500"></div>
                        </div>
                        
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
                            Selected
                            <span className="text-cyan-400"> Works</span>
                        </h1>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 animate-pulse">
                                <div className="h-64 bg-gradient-to-br from-slate-800 to-slate-900 rounded-t-xl"></div>
                                <div className="p-6">
                                    <div className="h-6 bg-slate-700 rounded mb-3"></div>
                                    <div className="h-4 bg-slate-700 rounded mb-2"></div>
                                    <div className="h-4 bg-slate-700 rounded mb-4 w-3/4"></div>
                                    <div className="flex gap-2 mb-4">
                                        <div className="h-6 bg-slate-700 rounded w-16"></div>
                                        <div className="h-6 bg-slate-700 rounded w-20"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    if (isError) {
        return (
            <section id="portfolio" className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-500"></div>
                            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">
                                Portfolio Showcase
                            </span>
                            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-500"></div>
                        </div>
                        
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
                            Selected
                            <span className="text-cyan-400"> Works</span>
                        </h1>
                    </div>
                    
                    <div className="text-center py-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 shadow-lg max-w-md mx-auto">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center">
                            <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-white text-lg mb-2 font-semibold">Unable to load projects</p>
                        <p className="text-slate-300 text-sm">{error?.data?.message || 'Please check your connection and try again'}</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="portfolio" className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
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
                            Portfolio Showcase
                        </span>
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-500"></div>
                    </div>
                    
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">
                        Selected
                        <span className="text-cyan-400"> Works</span>
                    </h1>
                    
                    <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                        A curated collection of projects showcasing <span className="text-white font-medium">technical execution</span> and <span className="text-white font-medium">creative problem-solving</span>
                    </p>
                </div>

                {/* Projects Grid */}
                {projects && projects.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div 
                                key={project._id || index}
                                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl overflow-hidden"
                            >
                                {/* Gradient accent corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
                                
                                {/* Image Container */}
                                <div className="relative overflow-hidden">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img 
                                            src={getCloudinaryImageUrl(project.image, { width: 800, height: 600, quality: 'auto:good' })}
                                            alt={project.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            loading="lazy"
                                            onError={(e) => {
                                                e.target.src = '/placeholder-project.jpg'
                                                e.target.onerror = null
                                            }}
                                        />
                                    </div>
                                    
                                    {/* Overlay with CTA */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute bottom-6 left-6 right-6 transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <a 
                                                href={project.link || '#'}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg"
                                            >
                                                <span>View Project Details</span>
                                                <FiExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            </a>
                                        </div>
                                    </div>
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/90 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-slate-700">
                                            <FiFolder className="w-3 h-3" />
                                            {project.category || 'Project'}
                                        </span>
                                    </div>

                                    {/* Status Badge */}
                                    {project.status && project.status !== 'Completed' && (
                                        <div className="absolute top-4 right-4">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-sm text-xs font-medium rounded-full border ${
                                                project.status === 'In Progress' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' :
                                                project.status === 'Planning' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                                                'bg-slate-700/90 text-slate-300 border-slate-600'
                                            }`}>
                                                {project.status === 'In Progress' && <HiOutlineFire className="w-3 h-3" />}
                                                {project.status}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-1">
                                        {project.name}
                                    </h3>
                                    
                                    <p className="text-slate-300 mb-4 leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    {project.technologies && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {(Array.isArray(project.technologies) 
                                                ? project.technologies 
                                                : project.technologies.split(',')
                                            ).slice(0, 3).map((tech, techIndex) => (
                                                <span 
                                                    key={techIndex}
                                                    className="px-2.5 py-1 bg-gradient-to-br from-slate-800 to-slate-900 text-slate-300 text-xs font-medium rounded-lg border border-slate-700"
                                                >
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                            
                                            {((Array.isArray(project.technologies) 
                                                ? project.technologies 
                                                : project.technologies.split(',')
                                            ).length > 3) && (
                                                <span className="px-2.5 py-1 bg-gradient-to-br from-slate-800 to-slate-900 text-slate-400 text-xs font-medium rounded-lg border border-slate-700">
                                                    +{((Array.isArray(project.technologies) 
                                                        ? project.technologies 
                                                        : project.technologies.split(',')
                                                    ).length - 3)} more
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {/* Project Links */}
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                                        <a 
                                            href={project.link || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group/link inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors duration-300"
                                        >
                                            <FiEye className="w-4 h-4 mr-2" />
                                            <span>Live Preview</span>
                                            <FiExternalLink className="w-3 h-3 ml-1.5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                                        </a>
                                        
                                        {project.github && (
                                            <a 
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/link inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors duration-300"
                                            >
                                                <FiGithub className="w-4 h-4 mr-2" />
                                                <span>Code</span>
                                                <FiExternalLink className="w-3 h-3 ml-1.5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                                            </a>
                                        )}
                                    </div>

                                    {/* Date */}
                                    {(project.createdAt || project.date) && (
                                        <div className="mt-3 pt-3 border-t border-slate-700">
                                            <div className="flex items-center gap-1.5 text-xs text-slate-400">
                                                <FiClock className="w-3 h-3" />
                                                <span>
                                                    Added {new Date(project.createdAt || project.date).toLocaleDateString('en-US', { 
                                                        month: 'short', 
                                                        day: 'numeric',
                                                        year: 'numeric' 
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 shadow-lg max-w-md mx-auto">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center">
                            <FiFolder className="w-8 h-8 text-cyan-400" />
                        </div>
                        <p className="text-white text-lg mb-2 font-semibold">No projects to display</p>
                        <p className="text-slate-300 text-sm mb-6">New projects coming soon</p>
                        <a 
                            href="#contact" 
                            className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-slate-800 to-slate-900 text-slate-300 font-semibold rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-sm"
                        >
                            Discuss a project idea
                        </a>
                    </div>
                )}

                {/* View All CTA */}
                {projects && projects.length > 0 && (
                    <div className="text-center mt-12">
                        <a 
                            href="#contact"
                            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="relative z-10 flex items-center">
                                Start Your Project
                                <FiExternalLink className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-2" />
                            </span>
                        </a>
                        <p className="text-sm text-slate-300 font-medium mt-4">
                            Interested in collaborating? Let's discuss your vision
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Works