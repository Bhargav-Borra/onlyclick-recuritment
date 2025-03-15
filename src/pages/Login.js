import React from "react";
import "./Login.css"; // Import the CSS file

const Login = () => {
  return (
    <div className="Login">
      <div className="Login-container">
        {/* Left Section - Image */}
        <div className="Login-image-section">
          <img
            src="https://via.placeholder.com/300" // Replace with your image
            alt="Login Illustration"
          />
        </div>

        {/* Right Section - Login Form */}
        <div className="Login-form-section">
          <h2>Login</h2>
          <p>
            Don't have an account? <a href="sign_up.html">Sign Up!</a>
          </p>

          {/* Social Login Buttons */}
          <div className="social-Login">
            <button className="facebook-btn">Facebook</button>
            <button className="google-btn">Google</button>
          </div>

          {/* Login Form */}
          <form>
            <div className="form-group">
              <input type="text" placeholder="Username" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>

            <button className="Login-btn" type="submit">Sign In</button>

            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me!</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
