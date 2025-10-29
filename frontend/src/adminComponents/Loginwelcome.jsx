import React from 'react'

const Loginwelcome = () => {
  return (
    <div className="w-full flex items-center justify-center p-12">
      <div className="max-w-md text-white">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-blue-600">A</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
          <p className="text-blue-100 text-lg">Admin Portal</p>
        </div>

        {/* Features List */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Secure Access</h3>
                <p className="text-blue-100 text-sm">Enterprise-grade security</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Real-time Analytics</h3>
                <p className="text-blue-100 text-sm">Monitor your data instantly</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">User Management</h3>
                <p className="text-blue-100 text-sm">Full control over users</p>
              </div>
            </div>
          </div>

          {/* Footer Text */}
        <div className="mt-12 pt-8 border-t border-white border-opacity-20">
          <p className="text-blue-100 text-sm">
            Need help? Contact support@portfolio.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Loginwelcome