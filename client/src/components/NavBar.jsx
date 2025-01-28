import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const navigate = useNavigate(); 
  // Check if token exists when component mounts or updates
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); 
  }, []); 

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false); 
    setMenuOpen(false); 
    navigate("/"); 
  };

  // If the user logs in, make sure you update the token in localStorage and set `isAuthenticated` to true
  const handleLoginSuccess = () => {
    localStorage.setItem("token", "your-token"); 
    setIsAuthenticated(true); 
    navigate("/");
  };

  return (
    <nav className="bg-gray-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">
          <Link to="/">Event</Link>
        </h1>

        {/* Burger Menu for mobile */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6">
          {!isAuthenticated ? (
            <>
              <li>
                <Link
                  to="/login"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-300 transition-colors duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-300 transition-colors duration-300"
                >
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <li className="relative">
              <button
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-300 transition-colors duration-300"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Account
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-700 text-white rounded-lg shadow-lg">
                  <ul className="space-y-2 p-2">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-600"
                        onClick={() => setMenuOpen(false)} 
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      {/* Log Out Button */}
                      <button
                        onClick={handleLogout} // Call handleLogout directly
                        className="block px-4 py-2 w-full text-left hover:bg-gray-600"
                      >
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          )}
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-20 right-0 w-48 bg-gray-700 text-white rounded-lg shadow-lg">
            <ul className="space-y-2 p-2">
              {!isAuthenticated ? (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={() => setMenuOpen(false)} 
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={() => setMenuOpen(false)} 
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-600"
                      onClick={() => setMenuOpen(false)} 
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    {/* Log Out Button */}
                    <button
                      onClick={handleLogout} // Call handleLogout directly
                      className="block px-4 py-2 w-full text-left hover:bg-gray-600"
                      onClick={() => setMenuOpen(false)} 
                    >
                      Log Out
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
