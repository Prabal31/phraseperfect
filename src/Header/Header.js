import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaUserCircle } from "react-icons/fa"; // Import FontAwesome icon
import CompanyLogo from "../Assets/Company_logo.png";
import AccountDropdown from "../Auth/Accountdropdown"; // Import the AccountDropdown component

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State to track dropdown visibility
  const dropdownRef = useRef(null); // Ref for the dropdown container

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState); // Toggle dropdown visibility
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false); // Close dropdown if clicking outside
    }
  };

  useEffect(() => {
    // Attach a click event listener to detect outside clicks
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header style={styles.header}>
      {/* Link to homepage */}
      <Link to="/" style={styles.link}>
        <div style={styles.logoContainer}>
          <img src={CompanyLogo} alt="Company Logo" style={styles.logoImage} />
          <h1 style={styles.logoText}>PhrasePerfect</h1>
        </div>
      </Link>

      {/* Account Icon with Dropdown */}
      <div style={styles.iconContainer} ref={dropdownRef}>
        <FaUserCircle style={styles.icon} onClick={toggleDropdown} />
        {isDropdownVisible && <AccountDropdown />} {/* Conditionally render the dropdown */}
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: "fixed", // Keeps the header fixed at the top
    top: 0,
    left: 0,
    width: "100%", // Spans full width
    height: "60px", // Header height
    backgroundColor: "#6F469C", // Purple background color
    color: "white", // Text color
    padding: "0 20px", // Padding for alignment
    display: "flex", // Flexbox layout
    alignItems: "center", // Center items vertically
    justifyContent: "space-between", // Space between logo and icon
    zIndex: 1000, // Ensure header is on top
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add shadow
  },
  link: {
    textDecoration: "none", // Remove underline for the link
    color: "white", // White text color
  },
  logoContainer: {
    display: "flex", // Align logo and text in a row
    alignItems: "center", // Center items vertically
    gap: "10px", // Space between logo and text
  },
  logoImage: {
    width: "40px", // Logo width
    height: "40px", // Logo height
    borderRadius: "50%", // Circular logo
    objectFit: "cover", // Ensure logo fits nicely
  },
  logoText: {
    fontSize: "1.9rem", // Logo text size
    fontWeight: "bold", // Bold text
    margin: 0, // Remove margin
  },
  iconContainer: {
    position: "relative", // For dropdown positioning
    marginRight: "30px", // Spacing on the right
  },
  icon: {
    fontSize: "2.5rem", // Account icon size
    cursor: "pointer", // Pointer cursor
    color: "white", // White icon color
  },
};

export default Header;
