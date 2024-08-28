import Home from "./Home";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate(); 

  const handleRegisterClick = () => {
    navigate('/register'); 
  };

  return (
    <div>
      <Home />
      <Login />
      <button onClick={handleRegisterClick}>Sign Up</button>
    </div>
  );
}

