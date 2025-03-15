// src/context/AuthContext.js
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post("https://api.example.com/login", { email, password });
      const token = response.data.token;
      localStorage.setItem("token", token);
      setUser({ token });

      setTimeout(() => navigate("/dashboard"), 0);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const signup = async (email, password) => {
    try {
      await axios.post("https://api.example.com/signup", { email, password });
      setTimeout(() => navigate("/login"), 0);
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setTimeout(() => navigate("/login"), 0);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
