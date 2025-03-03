
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa'
import { GiMeditation } from 'react-icons/gi'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      setError('')
      setLoading(true)
      await login(email, password)
      navigate('/dashboard')
    } catch (err) {
      setError('Failed to log in. Please check your credentials.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md">
        {/* Card with subtle shadow and rounded corners */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Left colored accent bar */}
          <div className="flex flex-col md:flex-row">
            <div className="hidden md:block md:w-2 bg-gradient-to-b from-primary to-primary-dark"></div>
            
            <div className="flex-1 p-6 sm:p-10">
              {/* Header section */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary bg-opacity-10 mb-4">
                  <GiMeditation className="h-8 w-8 text-primary" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
                  Welcome Back
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                  New here?{' '}
                  <Link to="/register" className="font-medium text-primary hover:text-primary-dark transition-colors">
                    Create an account
                  </Link>
                </p>
              </div>

              {/* Error alert */}
              {error && (
                <div className="mt-6 rounded-lg bg-red-50 border-l-4 border-red-400 p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Login form */}
              <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-medium text-primary hover:text-primary-dark transition-colors">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing in...
                      </>
                    ) : (
                      'Sign in'
                    )}
                  </button>
                </div>
              </form>

              {/* Footer - you can add back social logins here if needed */}
              <div className="mt-6 text-center text-xs text-gray-500">
                <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login