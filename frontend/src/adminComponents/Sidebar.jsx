import React, { useState } from 'react'
import { useSelector } from 'react-redux'


const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('dashboard')
    const [isCollapsed, setIsCollapsed] = useState(false)

    const {adminInfo} = useSelector((state) => state.auth);

    const menuItems = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            id: 'messages',
            label: 'Messages',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            ),
            badge: 5
        },
        {
            id: 'projects',
            label: 'Projects',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            id: 'analytics',
            label: 'Analytics',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            )
        },
        {
            id: 'settings',
            label: 'Settings',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        }
    ]

    const secondaryItems = [
        {
            id: 'help',
            label: 'Help & Support',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            id: 'logout',
            label: 'Logout',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
            )
        }
    ]

    return (
        <div className={`bg-gray-900 text-white h-screen flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
            {/* Header */}
            <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between">
                    {!isCollapsed && (
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="font-bold text-sm">A</span>
                            </div>
                            <div>
                                <h1 className="font-bold text-lg">Admin Panel</h1>
                                <p className="text-gray-400 text-sm">Welcome back</p>
                            </div>
                        </div>
                    )}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isCollapsed ? "M13 5l7 7-7 7M5 5l7 7-7 7" : "M11 19l-7-7 7-7m8 14l-7-7 7-7"} />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveItem(item.id)}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                activeItem === item.id 
                                    ? 'bg-blue-600 text-white shadow-lg' 
                                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                            }`}
                        >
                            <div className="flex-shrink-0">
                                {item.icon}
                            </div>
                            {!isCollapsed && (
                                <div className="flex-1 flex items-center justify-between">
                                    <span className="font-medium">{item.label}</span>
                                    {item.badge && (
                                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Divider */}
                {!isCollapsed && (
                    <div className="px-6 py-4">
                        <div className="border-t border-gray-700"></div>
                    </div>
                )}

                {/* Secondary Navigation */}
                <div className="p-4 space-y-2">
                    {secondaryItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveItem(item.id)}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                activeItem === item.id 
                                    ? 'bg-gray-800 text-white' 
                                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                            }`}
                        >
                            <div className="flex-shrink-0">
                                {item.icon}
                            </div>
                            {!isCollapsed && (
                                <span className="font-medium">{item.label}</span>
                            )}
                        </button>
                    ))}
                </div>
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-gray-700">
                <div className="flex items-center space-x-3">
                    <img 
                        src="/admin-avatar.jpg" 
                        alt="Admin" 
                        className="w-10 h-10 rounded-full border-2 border-gray-600"
                    />
                    {!isCollapsed && (
                        <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{adminInfo?.username}</p>
                            <p className="text-gray-400 text-xs truncate">Administrator</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Sidebar