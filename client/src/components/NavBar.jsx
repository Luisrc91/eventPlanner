import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-gray-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold">
          <Link to="/">Event</Link>
        </h1>
        <ul className="flex space-x-6">
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
        </ul>
      </div>
    </nav>
  );
}
