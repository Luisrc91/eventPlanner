import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"; // Import your NavBar
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UpdateUser from "./components/userupdate/UpdateUser";
import UpdatePassword from "./components/userupdate/UpdatePassword";
import UpdateEmail from "./components/userupdate/UpdateEmail";
import UpdateProfile from "./pages/UpdateProfile";
import HomePage from "./pages/HomePage";
import AuthRoute from "./components/AuthRoute";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* NavBar will appear on all pages */}
        <NavBar /> 
        
        {/* Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/updateUser" element={<UpdateProfile />} />
            <Route path="/profile" element={<AuthRoute><Profile /></AuthRoute>} />
            <Route path="/update-username" element={<UpdateUser />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="/update-email" element={<UpdateEmail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
