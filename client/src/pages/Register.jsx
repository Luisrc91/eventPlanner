import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authServices.js";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Redirect if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If the user is already logged in, navigate to profile or home
      navigate("/profile"); // or navigate("/") for home
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await register(formData);
      console.log("Registration response:", response);

      if (response && response.message === "User registered successfully") {
        setSuccess(true);
        console.log("Navigating to login page...");
        navigate("/login");
      } else {
        setError("Unexpected response from the server.");
        console.error("Unexpected response:", response);
      }
    } catch (err) {
      console.error("Error signing up:", err);
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
        {success && (
          <p className="text-green-500 text-center mt-4">
            Registration successful! Redirecting to login...
          </p>
        )}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <div className="mt-4 text-center">
          <h3 className="text-sm text-gray-600">
            Already a member?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Click here to Login
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
}

