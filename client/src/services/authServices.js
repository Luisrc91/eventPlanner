// /client/src/services/authService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during login request:', error);
    throw error;
  }
};


export const updateUser = async (userData, token) => {
  const response = await axios.put(API_URL, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteUser = async (token) => {
  const response = await axios.delete(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
};

export async function getProfile() {
  const token = localStorage.getItem('token');
  const response = await fetch('http://localhost:5000/profile', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch profile');
  }

  return await response.json();
}
