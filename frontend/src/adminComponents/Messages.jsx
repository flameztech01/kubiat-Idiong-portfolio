import React from 'react'
import { useGetAllMessagesQuery, useMarkAsReadMutation } from '../slices/adminApiSlice'
import Sidebar from '../adminComponents/Sidebar.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { useDeleteMessageMutation } from '../slices/adminApiSlice'
import { toast } from 'react-toastify';
import { useState } from 'react'

const Messages = () => {
    const { data: messages, isLoading, isError, error, refetch } = useGetAllMessagesQuery();
    const [markAsRead] = useMarkAsReadMutation();
    const navigate = useNavigate();
    const [deleteMessage] = useDeleteMessageMutation();
    const [deletingId, setDeletingId] = useState(null);

    const handleViewMessage = async (messageId) => {
        try {
            await markAsRead(messageId).unwrap();
            refetch();
            navigate(`/admin/messages/${messageId}`);
        } catch (error) {
            console.error('Error marking message as read:', error);
            navigate(`/admin/messages/${messageId}`);
        }
    }

    const handleDelete = async (messageId) => {
        if (!window.confirm('Are you sure you want to delete this message?')) {
            return;
        }

        try {
            setDeletingId(messageId);
            await deleteMessage(messageId).unwrap();
            toast.success('Message deleted successfully');
            refetch();
        } catch (error) {
            console.error('Error deleting message:', error);
            toast.error('Failed to delete message. Please try again.');
        } finally {
            setDeletingId(null);
        }
    }

    const handleReply = (email, subject) => {
        // Create mailto link with email and subject pre-filled
        const mailtoLink = `mailto:${email}?subject=Re: ${encodeURIComponent(subject)}`;
        window.location.href = mailtoLink;
    }

    if (isLoading) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <main className="flex-1 ml-20 lg:ml-64 flex items-center justify-center transition-all duration-300">
                    <div className="text-center">
                        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading messages...</p>
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
                        <p className="text-lg font-semibold">Error loading messages</p>
                        <p className="text-sm mt-2">{error?.data?.message || 'Please try again later'}</p>
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
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Messages</h1>
                        <p className="text-gray-600 mt-2">Manage and view all incoming messages</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center">
                                <div className="p-3 bg-blue-100 rounded-lg">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Total Messages</p>
                                    <p className="text-2xl font-bold text-gray-900">{messages?.length || 0}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center">
                                <div className="p-3 bg-yellow-100 rounded-lg">
                                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Unread Messages</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {messages?.filter(msg => !msg.read)?.length || 0}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center">
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">This Month</p>
                                    <p className="text-2xl font-bold text-gray-900">
                                        {messages?.filter(msg => {
                                            const messageDate = new Date(msg.createdAt || msg.date);
                                            const currentMonth = new Date().getMonth();
                                            const currentYear = new Date().getFullYear();
                                            return messageDate.getMonth() === currentMonth && messageDate.getFullYear() === currentYear;
                                        })?.length || 0}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Messages Table */}
                    <div className="bg-white shadow rounded-lg">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900">All Messages</h2>
                                <span className="text-sm text-gray-500">
                                    {messages?.length || 0} message{messages?.length !== 1 ? 's' : ''}
                                </span>
                            </div>
                        </div>

                        {messages?.length === 0 ? (
                            <div className="text-center py-12">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m8-8V4a1 1 0 00-1-1h-2a1 1 0 00-1 1v1m4 0h-4" />
                                </svg>
                                <h3 className="mt-2 text-sm font-medium text-gray-900">No messages</h3>
                                <p className="mt-1 text-sm text-gray-500">No messages have been received yet.</p>
                            </div>
                        ) : (
                            <div className="overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Sender
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Subject & Message
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Date
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {messages?.map((message, index) => (
                                                <tr key={message._id || index} className="hover:bg-gray-50 transition-colors duration-150">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                                <span className="text-blue-600 font-medium text-sm">
                                                                    {message.name?.charAt(0)?.toUpperCase() || 'U'}
                                                                </span>
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {message.name || 'Unknown'}
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                    {message.email}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="text-sm text-gray-900 font-medium">{message.subject}</div>
                                                        <div className="text-sm text-gray-500 truncate max-w-xs">
                                                            {message.message}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {message.createdAt ? new Date(message.createdAt).toLocaleDateString() : 'N/A'}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                            message.read 
                                                                ? 'bg-green-100 text-green-800' 
                                                                : 'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                            {message.read ? 'Read' : 'Unread'}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        <div className="flex items-center space-x-2">
                                                            <Link
                                                                to={`/admin/messages/${message._id}`}
                                                                className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md transition-colors duration-200"
                                                                onClick={() => handleViewMessage(message._id)}
                                                            >
                                                                View
                                                            </Link>
                                                            
                                                            {/* Reply button with mailto */}
                                                            <a
                                                                href={`mailto:${message.email}?subject=Re: ${encodeURIComponent(message.subject)}`}
                                                                className="text-green-600 hover:text-green-900 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-md transition-colors duration-200 no-underline"
                                                            >
                                                                Reply
                                                            </a>
                                                            
                                                            <button
                                                                onClick={() => handleDelete(message._id)}
                                                                disabled={deletingId === message._id}
                                                                className={`px-3 py-1 rounded-md transition-colors duration-200 ${
                                                                    deletingId === message._id 
                                                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                                                        : 'text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100'
                                                                }`}
                                                            >
                                                                {deletingId === message._id ? 'Deleting...' : 'Delete'}
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Messages