import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home"; // Import Home component

const AppRouter = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar always visible */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/login" element={<Login />} /> {/* Login route */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
