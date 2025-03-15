// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Ensure this file exists

function Home() {
  return (
    <div className="home-container">
      <h1 className="main-heading">My Website</h1>
      <div className="button-container">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/signup" className="btn">Sign Up</Link>
      </div>
    </div>
  );
}

export default Home;
