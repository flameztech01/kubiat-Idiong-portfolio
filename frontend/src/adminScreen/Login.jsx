import React from 'react'
import Loginwelcome from '../adminComponents/Loginwelcome'
import Loginform from '../adminComponents/Loginform'

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Welcome Section - Hidden on mobile */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-purple-700">
        <Loginwelcome />
      </div>
      
      {/* Form Section - Full width on mobile */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <Loginform />
      </div>
    </div>
  )
}

export default Login