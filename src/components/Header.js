// src/components/Header.js
import React from "react";
import { FaUser, FaSignInAlt, FaInfoCircle } from "react-icons/fa"; // Import icons
import "./Header.css"; // Ensure this file exists
import logo from "../assets/Stutor Logo.jpg"; // Ensure the logo path is correct

function Header() {
  return (
    <header className="header">
      {/* Left side: Home & Logo */}
      <div className="nav-left">
        <img src={logo} alt="Owl with graduation cap" className="logo" />
        <a href="#home" className="nav-home">Home</a>
      </div>

      {/* Right side: Navigation Links with Icons */}
      <nav className="nav-right">
        <a href="#about" className="nav-link">
          <FaInfoCircle className="icon" /> About Us
        </a>
        <a href="#signin" className="nav-link">
          <FaUser className="icon" /> Sign In
        </a>
        <a href="#login" className="nav-link">
          <FaSignInAlt className="icon" /> Log In
        </a>
      </nav>
    </header>
  );
}

export default Header;
