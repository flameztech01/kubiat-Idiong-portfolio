import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../adminComponents/Sidebar'
import { useFetchProjectsQuery, useDeleteProjectMutation } from '../slices/adminApiSlice'
import { toast } from 'react-toastify'

const Projects = () => {
    const { 
        data: projects, 
        isLoading, 
        isError,
        refetch 
    } = useFetchProjectsQuery()
    
    const [deleteProject] = useDeleteProjectMutation()

    const handleDelete = async (projectId) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await deleteProject(projectId).unwrap()
                toast.success('Project deleted successfully!')
                refetch()
            } catch (error) {
                toast.error(error?.data?.message || 'Failed to delete project')
            }
        }
    }

    if (isLoading) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <main className="flex-1 ml-0 lg:ml-64 p-6 lg:p-8 overflow-auto">
                    <div className="flex items-center justify-center h-64">
                        <div className="text-center">
                            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-gray-600">Loading projects...</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <main className="flex-1 ml-0 lg:ml-64 p-6 lg:p-8 overflow-auto">
                    <div className="flex items-center justify-center h-64">
                        <div className="text-center text-red-600">
                            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-lg font-semibold">Error loading projects</p>
                            <p className="text-sm mt-2">Please try refreshing the page</p>
                        </div>
                    </div>
                </main>
            </div>
        )
    }

    const stats = {
        totalProjects: projects?.length || 0,
        activeProjects: projects?.filter(proj => proj.status === 'In Progress')?.length || 0,
        completedProjects: projects?.filter(proj => proj.status === 'Completed')?.length || 0
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            
            <main className="flex-1 ml-0 lg:ml-64 p-6 lg:p-8 overflow-auto">
                {/* Header with Upload Button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Projects</h1>
                        <p className="text-gray-600 mt-2">Manage your portfolio projects</p>
                    </div>
                    <Link
                        to="/admin/project/upload"
                        className="mt-4 sm:mt-0 inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Upload New Project
                    </Link>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Projects</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalProjects}</p>
                            </div>
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Active Projects</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.activeProjects}</p>
                            </div>
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Completed</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">{stats.completedProjects}</p>
                            </div>
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects List */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-900">All Projects</h2>
                            <span className="text-sm text-gray-500">
                                {projects?.length || 0} project{projects?.length !== 1 ? 's' : ''}
                            </span>
                        </div>
                    </div>

                    <div className="p-6">
                        {projects && projects.length > 0 ? (
                            <div className="space-y-4">
                                {projects.map((project, index) => (
                                    <div 
                                        key={project._id || index} 
                                        className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                                    >
                                        <div className="flex-1 mb-4 sm:mb-0">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 font-bold text-sm flex-shrink-0">
                                                    {project.image ? (
                                                        <img 
                                                            src={project.image} 
                                                            alt={project.name}
                                                            className="w-16 h-16 rounded-lg object-cover"
                                                        />
                                                    ) : (
                                                        project.name?.charAt(0) || 'P'
                                                    )}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center space-x-3 mb-2">
                                                        <h3 className="text-lg font-semibold text-gray-900 truncate">
                                                            {project.name}
                                                        </h3>
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                            project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                                            project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                                            'bg-gray-100 text-gray-800'
                                                        }`}>
                                                            {project.status}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-600 mb-2 line-clamp-2">
                                                        {project.description}
                                                    </p>
                                                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                                                        <span className="bg-gray-100 px-2 py-1 rounded">
                                                            {project.category}
                                                        </span>
                                                        {project.technologies && (
                                                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                                                {project.technologies}
                                                            </span>
                                                        )}
                                                        <span>
                                                            {new Date(project.createdAt || project.date).toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-3 sm:space-x-2">
                                            <Link
                                                to={`/admin/project/edit/${project._id || project.id}`}
                                                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                                            >
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(project._id || project.id)}
                                                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200"
                                            >
                                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 text-gray-500">
                                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                <p className="text-lg font-medium mb-2">No projects yet</p>
                                <p className="text-sm mb-4">Get started by uploading your first project</p>
                                <Link
                                    to="/admin/project/upload"
                                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Upload Project
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Projects