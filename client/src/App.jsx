import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UpdateUser from "./components/userupdate/UpdateUser";
import UpdatePassword from "./components/userupdate/UpdatePassword";
import UpdateEmail from "./components/userupdate/UpdateEmail";
import UpdateProfile from "./pages/UpdateProfile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/updateUser" element={<UpdateProfile />} />


        <Route path="/update-username" element={<UpdateUser />} />
        <Route path="/update-password" element={<UpdatePassword />} />
        <Route path="/update-email" element={<UpdateEmail/>} />

      </Routes>
    </Router>
  );
};

export default App;
