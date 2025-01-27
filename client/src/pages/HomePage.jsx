import React from 'react';
import Home from "./Home";
import Login from "./Login";
import NavBar from "../components/NavBar"; // Import NavBar component
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate(); 

  const handleRegisterClick = () => {
    navigate('/register'); 
  };

  return (
    <div>
      <NavBar /> 
      <Home />
      <Login />
      <button onClick={handleRegisterClick}>Sign Up</button>
    </div>
  );
}