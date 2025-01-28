import axios from "axios";

const API_URL = "http://localhost:5000";

// Register a new user
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error.response?.data || "Registration failed";
  }
};

// Login a user
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Error during login request:", error);
    throw error.response?.data || "Login failed";
  }
};

// Update user details
export const updateUser = async (userData, token) => {
  try {
    const response = await axios.put(`${API_URL}/users/update`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error.response?.data || "Update failed";
  }
};

// Delete a user
export const deleteUser = async (id, token) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error.response?.data || "Deletion failed";
  }
};

// Logout a user
export const getProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found. Please log in.");
  }

  try {
    const response = await axios.get(`${API_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error.response?.data || error.message);
    throw error.response?.data || { error: "Failed to fetch profile" };
  }
};

