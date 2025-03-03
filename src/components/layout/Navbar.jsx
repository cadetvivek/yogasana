// import { useState } from 'react'

// import { Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../../context/AuthContext'
// import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa'
// import { GiMeditation } from 'react-icons/gi'

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isProfileOpen, setIsProfileOpen] = useState(false)
//   const { currentUser, logout } = useAuth()
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     logout()
//     navigate('/')
//     setIsProfileOpen(false)
//     setIsMenuOpen(false)
//   }

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center">
//               <GiMeditation className="h-8 w-8 text-primary" />
//               <span className="ml-2 text-xl font-display font-semibold text-primary-dark">Yogasanas</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex md:items-center md:space-x-4">
//             {currentUser ? (
//               <>
//                 <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-primary-dark hover:bg-background-light">Dashboard</Link>
//                 <Link to="/asana-library" className="px-3 py-2 rounded-md text-sm font-medium text-primary-dark hover:bg-background-light">Asana Library</Link>
//                 <Link to="/community" className="px-3 py-2 rounded-md text-sm font-medium text-primary-dark hover:bg-background-light">Community</Link>
                
//                 <div className="relative ml-3">
//                   <div>
//                     <button
//                       onClick={() => setIsProfileOpen(!isProfileOpen)}
//                       className="flex items-center text-sm rounded-full focus:outline-none"
//                     >
//                       {currentUser.photoURL ? (
//                         <img
                        
//                           className="h-8 w-8 rounded-full border-2 border-primary"
//                           src='https://img.freepik.com/free-vector/elegant-world-yoga-day-background-with-women-practicing-exercise_1017-44981.jpg?t=st=1740915702~exp=1740919302~hmac=47b769c2f8a07cae9da75bae79db0dcd0867b2f0f8892223256ca94ac5e36343&w=740'
//                           alt="User profile"
//                         />
//                       ) : (
//                         <div className="h-8 w-8 rounded-full border-2 border-primary bg-primary text-white flex items-center justify-center font-semibold">
//                           {(currentUser.displayName || currentUser.email || '').charAt(0).toUpperCase()}
//                         </div>
//                       )}
//                       <span className="ml-2 text-primary-dark">
//                         {currentUser.displayName || currentUser.email}
//                       </span>
//                     </button>
//                   </div>
                  
//                   {isProfileOpen && (
//                     <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
//                       <div className="py-1">
//                         <Link
//                           to="/profile"
//                           onClick={() => {
//                             setIsProfileOpen(false);
//                             console.log('Navigating to profile page');
//                           }}
//                           className="flex items-center px-4 py-2 text-sm text-primary-dark hover:bg-background-light"
//                         >
//                           <FaUser className="mr-2" /> Your Profile
//                         </Link>
//                         <button
//                           onClick={handleLogout}
//                           className="flex items-center w-full text-left px-4 py-2 text-sm text-primary-dark hover:bg-background-light"
//                         >
//                           <FaSignOutAlt className="mr-2" /> Sign out
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="btn btn-outline">Log in</Link>
//                 <Link to="/register" className="btn btn-primary">Sign up</Link>
//               </>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="flex items-center md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-primary-dark hover:text-primary hover:bg-background-light focus:outline-none"
//             >
//               {isMenuOpen ? (
//                 <FaTimes className="block h-6 w-6" />
//               ) : (
//                 <FaBars className="block h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {currentUser ? (
//               <>
//                 <Link
//                   to="/dashboard"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-3 py-2 rounded-md text-base font-medium text-primary-dark hover:bg-background-light"
//                 >
//                   Dashboard
//                 </Link>
//                 <Link
//                   to="/asana-library"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-3 py-2 rounded-md text-base font-medium text-primary-dark hover:bg-background-light"
//                 >
//                   Asana Library
//                 </Link>
//                 <Link
//                   to="/community"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-3 py-2 rounded-md text-base font-medium text-primary-dark hover:bg-background-light"
//                 >
//                   Community
//                 </Link>
//                 <Link
//                   to="/profile"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-3 py-2 rounded-md text-base font-medium text-primary-dark hover:bg-background-light"
//                 >
//                   Your Profile
//                 </Link>
//                 <button
//                   onClick={handleLogout}
//                   className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary-dark hover:bg-background-light"
//                 >
//                   Sign out
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-3 py-2 rounded-md text-base font-medium text-primary-dark hover:bg-background-light"
//                 >
//                   Log in
//                 </Link>
//                 <Link
//                   to="/register"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block px-3 py-2 rounded-md text-base font-medium text-primary-dark hover:bg-background-light"
//                 >
//                   Sign up
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar


import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaChartBar, FaBook, FaUsers } from 'react-icons/fa'
import { GiMeditation } from 'react-icons/gi'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Set active link based on current path
  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location])

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileOpen && !event.target.closest('.profile-dropdown')) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isProfileOpen])

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsProfileOpen(false)
    setIsMenuOpen(false)
  }

  return (
    <nav 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center group"
              aria-label="Home"
            >
              <div className="relative">
                <GiMeditation className="h-8 w-8 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute -inset-1 rounded-full bg-indigo-100 -z-10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
              <span className="ml-2 text-xl font-display font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wider">
                Yogasanas
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {currentUser ? (
              <>
                <NavLink 
                  to="/dashboard" 
                  isActive={activeLink === '/dashboard'}
                  icon={<FaChartBar className="mr-2" />}
                  label="Dashboard"
                />
                <NavLink 
                  to="/asana-library" 
                  isActive={activeLink === '/asana-library'}
                  icon={<FaBook className="mr-2" />}
                  label="Asana Library"
                />
                <NavLink 
                  to="/community" 
                  isActive={activeLink === '/community'}
                  icon={<FaUsers className="mr-2" />}
                  label="Community"
                />
                
                <div className="relative ml-4 profile-dropdown">
                  <div>
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center text-sm rounded-full focus:outline-none transition-all duration-300 hover:opacity-80"
                      aria-expanded={isProfileOpen}
                      aria-haspopup="true"
                    >
                      {currentUser.photoURL ? (
                        <div className="relative">
                          <img
                            className="h-9 w-9 rounded-full object-cover border-2 border-indigo-500 ring-2 ring-white"
                            src='https://img.freepik.com/free-vector/elegant-world-yoga-day-background-with-women-practicing-exercise_1017-44981.jpg?t=st=1740915702~exp=1740919302~hmac=47b769c2f8a07cae9da75bae79db0dcd0867b2f0f8892223256ca94ac5e36343&w=740'
                            alt="User profile"
                          />
                          <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-1 ring-white"></span>
                        </div>
                      ) : (
                        <div className="h-9 w-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center font-semibold shadow-md">
                          {(currentUser.displayName || currentUser.email || '').charAt(0).toUpperCase()}
                        </div>
                      )}
                      <span className="ml-2 text-gray-700 font-medium max-w-[120px] truncate">
                        {currentUser.displayName || currentUser.email?.split('@')[0]}
                      </span>
                      <svg className={`ml-2 h-5 w-5 text-gray-400 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  
                  {isProfileOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 transition-all duration-200 animate-fadeIn">
                      <div className="py-1 divide-y divide-gray-100">
                        <div className="px-4 py-3">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {currentUser.displayName || 'Yoga Enthusiast'}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {currentUser.email}
                          </p>
                        </div>
                        <div className="py-1">
                          <Link
                            to="/profile"
                            onClick={() => {
                              setIsProfileOpen(false);
                            }}
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 transition-colors duration-150"
                          >
                            <FaUser className="mr-3 h-5 w-5 text-gray-400 group-hover:text-indigo-500" /> 
                            Your Profile
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="group flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 transition-colors duration-150"
                          >
                            <FaSignOutAlt className="mr-3 h-5 w-5 text-gray-400 group-hover:text-red-500" /> 
                            Sign out
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-150">
                  Log in
                </Link>
                <Link to="/register" className="ml-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-150">
                  Sign up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none transition-colors duration-150"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-inner">
          {currentUser ? (
            <>
              <MobileNavLink 
                to="/dashboard" 
                onClick={() => setIsMenuOpen(false)}
                icon={<FaChartBar className="mr-3 text-indigo-500" />}
                label="Dashboard"
                isActive={activeLink === '/dashboard'}
              />
              <MobileNavLink 
                to="/asana-library" 
                onClick={() => setIsMenuOpen(false)}
                icon={<FaBook className="mr-3 text-indigo-500" />}
                label="Asana Library"
                isActive={activeLink === '/asana-library'}
              />
              <MobileNavLink 
                to="/community" 
                onClick={() => setIsMenuOpen(false)}
                icon={<FaUsers className="mr-3 text-indigo-500" />}
                label="Community"
                isActive={activeLink === '/community'}
              />
              <MobileNavLink 
                to="/profile" 
                onClick={() => setIsMenuOpen(false)}
                icon={<FaUser className="mr-3 text-indigo-500" />}
                label="Your Profile"
                isActive={activeLink === '/profile'}
              />
              <button
                onClick={handleLogout}
                className="flex items-center w-full text-left px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors duration-150"
              >
                <FaSignOutAlt className="mr-3 text-red-500" /> Sign out
              </button>
            </>
          ) : (
            <div className="px-3 py-4 flex flex-col space-y-3">
              <Link
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-center text-base font-medium text-indigo-600 hover:bg-indigo-50 transition-colors duration-150"
              >
                Log in
              </Link>
              <Link
                to="/register"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-center text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-150"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

// Desktop Navigation Link component
const NavLink = ({ to, isActive, icon, label }) => (
  <Link
    to={to}
    className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      isActive 
        ? 'text-indigo-600 bg-indigo-50' 
        : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
    }`}
  >
    {icon}{label}
    {isActive && <span className="ml-1 h-1 w-1 rounded-full bg-indigo-600"></span>}
  </Link>
)

// Mobile Navigation Link component
const MobileNavLink = ({ to, onClick, isActive, icon, label }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150 ${
      isActive 
        ? 'bg-indigo-50 text-indigo-700' 
        : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600'
    }`}
  >
    {icon}{label}
  </Link>
)

export default Navbar