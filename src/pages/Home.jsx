
import { Link } from 'react-router-dom'
import { FaUsers, FaMedal, FaChartLine, FaLock } from 'react-icons/fa'
import { GiMeditation } from 'react-icons/gi'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const { currentUser } = useAuth(null)
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080')] bg-cover bg-center"></div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-40 relative z-10">
          <div className="md:w-2/3 lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Yoga Practice, Together
            </h1>
            <p className="text-xl opacity-90 mb-10 leading-relaxed max-w-xl">
              Track your progress, join challenges, and connect with a community of yoga enthusiasts on your journey to wellness.
            </p>
            {currentUser ? (
              <Link to="/dashboard" 
                className="inline-block bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:shadow-xl text-lg px-8 py-4 transition-all duration-300 transform hover:-translate-y-1">
                Go to Dashboard
              </Link>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" 
                  className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl text-lg px-8 py-4 transition-all duration-300 transform hover:-translate-y-1">
                  Get Started
                </Link>
                <Link to="/login" 
                  className="inline-block bg-white text-indigo-600 hover:bg-gray-100 font-semibold rounded-lg shadow-lg hover:shadow-xl text-lg px-8 py-4 transition-all duration-300 transform hover:-translate-y-1">
                  Log In
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#F9FAFB" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Features Designed for Your Yoga Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Everything you need to enhance your practice and connect with like-minded individuals.</p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-8 transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-indigo-500">
              <div className="rounded-full bg-indigo-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <GiMeditation className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Yogasana Tracking</h3>
              <p className="text-gray-600">Log your daily asanas with details like duration, difficulty, and notes to monitor your progress over time.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-8 transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-purple-500">
              <div className="rounded-full bg-purple-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <FaUsers className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community Groups</h3>
              <p className="text-gray-600">Join groups based on your interests, skill level, or goals and practice together virtually.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl p-8 transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-500">
              <div className="rounded-full bg-orange-100 p-4 w-16 h-16 flex items-center justify-center mb-6">
                <FaMedal className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Gamification</h3>
              <p className="text-gray-600">Earn points, unlock badges, and climb leaderboards as you maintain your practice and achieve milestones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-gray-100">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Start your journey to a better yoga practice in just a few simple steps.</p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-indigo-200 -translate-y-1/2 z-0"></div>
            
            <div className="bg-white rounded-xl shadow-md p-8 text-center relative z-10 transform transition-transform duration-300 hover:scale-105">
              <div className="rounded-full bg-indigo-600 text-white w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Create an Account</h3>
              <p className="text-gray-600">Sign up and set your yoga goals and preferences.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center relative z-10 transform transition-transform duration-300 hover:scale-105">
              <div className="rounded-full bg-indigo-600 text-white w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Log Your Practice</h3>
              <p className="text-gray-600">Record your daily asanas and track your progress.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center relative z-10 transform transition-transform duration-300 hover:scale-105">
              <div className="rounded-full bg-indigo-600 text-white w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Join Communities</h3>
              <p className="text-gray-600">Connect with other yoga enthusiasts and share experiences.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center relative z-10 transform transition-transform duration-300 hover:scale-105">
              <div className="rounded-full bg-indigo-600 text-white w-16 h-16 flex items-center justify-center mx-auto mb-6 text-xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Earn Rewards</h3>
              <p className="text-gray-600">Get badges and climb leaderboards as you progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose the plan that fits your yoga journey.</p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="p-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Free</h3>
                <p className="text-5xl font-bold text-indigo-600 mb-1">$0<span className="text-lg text-gray-500">/month</span></p>
                <p className="text-gray-500">Perfect for beginners</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Basic asana tracking
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Join community groups
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Basic progress stats
                  </li>
                  <li className="flex items-center text-gray-400">
                    <FaLock className="h-5 w-5 mr-3 flex-shrink-0" />
                    Advanced analytics
                  </li>
                  <li className="flex items-center text-gray-400">
                    <FaLock className="h-5 w-5 mr-3 flex-shrink-0" />
                    Custom challenges
                  </li>
                </ul>
                <Link to="/register" className="btn block w-full py-3 px-6 text-center rounded-lg border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors duration-300">Get Started</Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-4 py-1 rounded-bl-lg font-medium">Popular</div>
              <div className="p-8 border-b border-gray-100 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-5xl font-bold mb-1">$5<span className="text-lg opacity-75">/month</span></p>
                <p className="opacity-75">For dedicated practitioners</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Everything in Free
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Advanced analytics
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Custom challenges
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Ad-free experience
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Priority support
                  </li>
                </ul>
                <Link to="/register" className="btn block w-full py-3 px-6 text-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-colors duration-300 shadow-md">Get Premium</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Yoga Practice?</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">Join thousands of yoga enthusiasts who are improving their practice and connecting with a supportive community.</p>
          <Link to="/register" className="inline-block bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:shadow-xl text-lg px-10 py-4 transition-all duration-300 transform hover:-translate-y-1">
            Start Your Journey Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home