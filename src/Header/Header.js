// Header.js
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import CompanyLogo from "../Assets/Company_logo.png";
import AccountDropdown from "../Auth/Accountdropdown";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.link}>
        <div style={styles.logoContainer}>
          <img src={CompanyLogo} alt="Company Logo" style={styles.logoImage} />
          <h1 style={styles.logoText}>PhrasePerfect</h1>
        </div>
      </Link>
      <div style={styles.iconContainer} ref={dropdownRef}>
        <FaUserCircle style={styles.icon} onClick={toggleDropdown} />
        {isDropdownVisible && (
          <AccountDropdown darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        )}
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "60px",
    backgroundColor: "#6F469C",
    color: "white",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1000,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoImage: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  logoText: {
    fontSize: "1.9rem",
    fontWeight: "bold",
    margin: 0,
  },
  iconContainer: {
    position: "relative",
    marginRight: "30px",
  },
  icon: {
    fontSize: "2.5rem",
    cursor: "pointer",
    color: "white",
  },
};

export default Header;
