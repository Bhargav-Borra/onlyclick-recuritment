import React, { createContext, useState } from "react"; // ✅ Import at the top
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(); // ✅ Export is at the top level

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    navigate("/dashboard");
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; // ✅ Export at the bottom, not inside a function
