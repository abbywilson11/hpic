import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; // styling
import logo from "../assets/Logo.png"; // HPIC logo image

function Navbar() {
  const navigate = useNavigate(); // Hook to programmatically navigate

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-left">
        <img
          src={logo}
          alt="HPIC Logo" 
          className="logo"
          onClick={() => navigate("/Home")} // Navigate to home on logo click
          style={{ cursor: "pointer" }} // Change cursor to pointer on hover
        />
      </div>

      {/* Center: Page Buttons */}
      <div className="navbar-center">
        <button onClick={() => navigate("/EarlyDetection")}>Symptoms</button>
        <button onClick={() => navigate("/TreatmentOptions")}>Treatment</button>
        <button onClick={() => navigate("/myjournal")}>My Journal</button>
      </div>

      {/* Right: Language + Login (properly grouped) */}
      <div className="navbar-end">
        <div className="navbar-leftright">
          <button className="language-btn" onClick={() => navigate("/ENFR")}>EN / FR </button>
        </div>

        <button className="login-btn" onClick={() => navigate("/login")}>Login / Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;