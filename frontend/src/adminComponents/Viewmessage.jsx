import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useGetMessageQuery, useMarkAsReadMutation, useDeleteMessageMutation } from '../slices/adminApiSlice'
import Sidebar from '../adminComponents/Sidebar.jsx'

const ViewMessage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data: message, isLoading, isError, error } = useGetMessageQuery(id)
    const [markAsRead] = useMarkAsReadMutation()
    const [deleteMessage] = useDeleteMessageMutation()

    // Mark as read when component mounts
    React.useEffect(() => {
        if (message && !message.read) {
            markAsRead(id)
        }
    }, [message, id, markAsRead])

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this message? This action cannot be undone.')) {
            try {
                await deleteMessage(id).unwrap()
                navigate('/admin/messages')
            } catch (error) {
                console.error('Error deleting message:', error)
                alert('Failed to delete message. Please try again.')
            }
        }
    }

    const handleGoBack = () => {
        navigate('/admin/messages')
    }

    if (isLoading) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <main className="flex-1 ml-20 lg:ml-64 flex items-center justify-center transition-all duration-300">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading message...</p>
                    </div>
                </main>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <main className="flex-1 ml-20 lg:ml-64 flex items-center justify-center transition-all duration-300">
                    <div className="text-center text-red-600">
                        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-lg font-semibold">Error loading message</p>
                        <p className="text-sm mt-2">{error?.data?.message || 'Message not found'}</p>
                        <button
                            onClick={handleGoBack}
                            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                        >
                            Back to Messages
                        </button>
                    </div>
                </main>
            </div>
        )
    }

    if (!message) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <main className="flex-1 ml-20 lg:ml-64 flex items-center justify-center transition-all duration-300">
                    <div className="text-center text-gray-600">
                        <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-lg font-semibold">Message not found</p>
                        <button
                            onClick={handleGoBack}
                            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                        >
                            Back to Messages
                        </button>
                    </div>
                </main>
            </div>
        )
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <main className="flex-1 ml-20 lg:ml-64 transition-all duration-300">
                <div className="p-6 lg:p-8">
                    {/* Header with Back Button */}
                    <div className="mb-6">
                        <button
                            onClick={handleGoBack}
                            className="flex items-center text-gray-600 hover:text-gray-900 mb-4 transition-colors duration-200"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Messages
                        </button>
                        
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Message Details</h1>
                                <p className="text-gray-600 mt-2">View and manage this message</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    message.read 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {message.read ? 'Read' : 'Unread'}
                                </span>
                                <button
                                    onClick={handleDelete}
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Message Content */}
                    <div className="bg-white shadow rounded-lg">
                        {/* Message Header */}
                        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-blue-600 font-bold text-lg">
                                            {message.name?.charAt(0)?.toUpperCase() || 'U'}
                                        </span>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">{message.subject}</h2>
                                        <p className="text-gray-600">
                                            From: {message.name} • {message.email}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500">Received</p>
                                    <p className="text-sm font-medium text-gray-900">
                                        {message.createdAt ? new Date(message.createdAt).toLocaleDateString() : 'N/A'}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {message.createdAt ? new Date(message.createdAt).toLocaleTimeString() : ''}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Message Body */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                                {/* Sender Information */}
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <h3 className="text-sm font-medium text-gray-600 mb-3">SENDER INFORMATION</h3>
                                    <div className="space-y-2">
                                        <div>
                                            <p className="text-xs text-gray-500">Full Name</p>
                                            <p className="font-medium text-gray-900">{message.name || 'Not provided'}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Email Address</p>
                                            <p className="font-medium text-gray-900">{message.email}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Phone Number</p>
                                            <p className="font-medium text-gray-900">{message.phone || 'Not provided'}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Message Content */}
                                <div className="lg:col-span-2">
                                    <h3 className="text-sm font-medium text-gray-600 mb-3">MESSAGE CONTENT</h3>
                                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                            {message.message}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                <div className="flex items-center space-x-4">
                                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                        </svg>
                                        Reply to Message
                                    </button>
                                    <button className="flex items-center text-green-600 hover:text-green-700 font-medium transition-colors duration-200">
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        Mark as {message.read ? 'Unread' : 'Read'}
                                    </button>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <span className="text-sm text-gray-500">
                                        Message ID: {message._id}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ViewMessage