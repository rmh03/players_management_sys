import { createContext, useState, useEffect } from "react";
import axios from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchUser();
    }
  }, [token]);

  const fetchUser = async () => {
    try {
      const response = await axios.get("/auth/me");
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user", error);
      logout();
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post("/auth/login", { email, password });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      fetchUser();
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const logout = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
