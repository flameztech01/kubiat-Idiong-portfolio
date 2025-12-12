import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../adminComponents/Sidebar'
import { useEditProjectMutation, useFetchProjectsQuery } from '../slices/adminApiSlice.js'
import { toast } from 'react-toastify'

const EditProject = () => {
    const { id: projectId } = useParams()
    const navigate = useNavigate()
    
    // Fetch existing project data - assuming your query returns a single project or array
    const { data: projectsData, isLoading: isLoadingProject, error } = useFetchProjectsQuery()
    
    // Find the specific project from the fetched data
    const project = projectsData?.find(proj => proj._id === projectId)
    
    const [editProject, { isLoading }] = useEditProjectMutation()
    
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: null,
        link: '',
        category: '',
        technologies: '',
        status: 'Completed'
    })

    const [imagePreview, setImagePreview] = useState(null)

    // Populate form with existing data when project loads
    useEffect(() => {
        if (project) {
            setFormData({
                name: project.name || '',
                description: project.description || '',
                image: null, // Keep as null since we might keep existing image
                link: project.link || '',
                category: project.category || '',
                technologies: project.technologies || '',
                status: project.status || 'Completed'
            })
            
            if (project.imageUrl) {
                setImagePreview(project.imageUrl)
            }
        }
    }, [project])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setFormData(prev => ({
                ...prev,
                image: file
            }))
            
            // Create preview
            const reader = new FileReader()
            reader.onload = (e) => {
                setImagePreview(e.target.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            // Create FormData for file upload
            const submitData = new FormData()
            submitData.append('name', formData.name)
            submitData.append('description', formData.description)
            submitData.append('link', formData.link)
            submitData.append('category', formData.category)
            submitData.append('technologies', formData.technologies)
            submitData.append('status', formData.status)
            
            // Only append image if a new one was selected
            if (formData.image) {
                submitData.append('image', formData.image)
            }

            await editProject({
                id: projectId,
                data: submitData
            }).unwrap()
            
            toast.success('Project updated successfully!')
            navigate('/admin/projects')

        } catch (error) {
            toast.error(error?.data?.message || 'Failed to update project')
        }
    }

    if (isLoadingProject) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <main className="flex-1 ml-0 lg:ml-64 p-8 flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading project details...</p>
                    </div>
                </main>
            </div>
        )
    }

    if (!project && !isLoadingProject) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <main className="flex-1 ml-0 lg:ml-64 p-8">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h2 className="text-red-800 font-bold text-lg">Project Not Found</h2>
                        <p className="text-red-600 mt-2">
                            The project you're trying to edit doesn't exist or has been removed.
                        </p>
                        <button
                            onClick={() => navigate('/admin/projects')}
                            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
                        >
                            Back to Projects
                        </button>
                    </div>
                </main>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            
            <main className="flex-1 ml-0 lg:ml-64 p-6 lg:p-8 overflow-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Edit Project</h1>
                    <p className="text-gray-600 mt-2">Update project details and information</p>
                </div>

                {/* Edit Form */}
                <div className="max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-gray-900">Project Details</h2>
                            <p className="text-gray-600 text-sm mt-1">Update the details of your project</p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 lg:p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left Column */}
                                <div className="space-y-6">
                                    {/* Project Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                                            placeholder="Enter project name"
                                        />
                                    </div>

                                    {/* Project Link */}
                                    <div>
                                        <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Link *
                                        </label>
                                        <input
                                            type="url"
                                            id="link"
                                            name="link"
                                            value={formData.link}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                                            placeholder="https://example.com"
                                        />
                                    </div>

                                    {/* Category */}
                                    <div>
                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                                            Category *
                                        </label>
                                        <select
                                            id="category"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                                        >
                                            <option value="">Select a category</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Mobile App">Mobile App</option>
                                            <option value="Graphic Design">Graphic Design</option>
                                            <option value="E-commerce">E-commerce</option>
                                            <option value="Landing Page">Landing Page</option>
                                            <option value="Full Stack">Full Stack</option>
                                        </select>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <label htmlFor="technologies" className="block text-sm font-medium text-gray-700 mb-2">
                                            Technologies Used
                                        </label>
                                        <input
                                            type="text"
                                            id="technologies"
                                            name="technologies"
                                            value={formData.technologies}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                                            placeholder="React, Node.js, MongoDB, etc."
                                        />
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="space-y-6">
                                    {/* Image Upload */}
                                    <div>
                                        <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Image
                                        </label>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-300">
                                            {imagePreview ? (
                                                <div className="space-y-4">
                                                    <img 
                                                        src={imagePreview} 
                                                        alt="Preview" 
                                                        className="mx-auto h-32 w-full object-cover rounded-lg"
                                                    />
                                                    <p className="text-xs text-gray-500">
                                                        Current image: {project?.imageUrl?.split('/').pop() || 'project-image'}
                                                    </p>
                                                    <div className="flex justify-center space-x-4">
                                                        <label htmlFor="image-upload" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                                                            Change Image
                                                        </label>
                                                        <button
                                                            type="button"
                                                            onClick={() => {
                                                                setImagePreview(null)
                                                                setFormData(prev => ({ ...prev, image: null }))
                                                                document.getElementById('image-upload').value = ''
                                                            }}
                                                            className="text-red-600 hover:text-red-700 text-sm font-medium px-4 py-2 border border-red-300 hover:border-red-400 rounded-lg transition-colors duration-300"
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="space-y-3">
                                                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <div>
                                                        <label htmlFor="image-upload" className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                                                            Choose New Image
                                                        </label>
                                                        <input
                                                            id="image-upload"
                                                            name="image"
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={handleImageChange}
                                                            className="hidden"
                                                        />
                                                    </div>
                                                    <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 10MB. Leave empty to keep current image.</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Status */}
                                    <div>
                                        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                                            Project Status
                                        </label>
                                        <select
                                            id="status"
                                            name="status"
                                            value={formData.status}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                                        >
                                            <option value="Completed">Completed</option>
                                            <option value="In Progress">In Progress</option>
                                            <option value="Planning">Planning</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-6">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                    Project Description *
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows="6"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300 resize-none"
                                    placeholder="Describe your project, features, technologies used, and your role in the project..."
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8 flex items-center justify-between pt-6 border-t border-gray-200">
                                <div className="flex space-x-4">
                                    <button
                                        type="button"
                                        onClick={() => navigate('/admin/projects')}
                                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                                    >
                                        Cancel
                                    </button>
                                    <p className="text-sm text-gray-500 flex items-center">
                                        * Required fields
                                    </p>
                                </div>
                                <div className="flex space-x-4">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:translate-y-0"
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center space-x-2">
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Updating...</span>
                                            </div>
                                        ) : (
                                            'Update Project'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default EditProject