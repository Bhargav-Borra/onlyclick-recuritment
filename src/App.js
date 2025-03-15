import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";   // ✅ Import Home component
import Login from "./pages/Login"; // ✅ Import Login component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
