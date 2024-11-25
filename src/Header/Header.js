import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaUserCircle } from "react-icons/fa"; // Import FontAwesome icon
import CompanyLogo from "../Assets/Company_logo.png";
import AccountDropdown from "../Auth/Accountdropdown";

const Header = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown container

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState); // Toggle dropdown visibility
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false); // Close the dropdown if clicked outside
    }
  };

  useEffect(() => {
    // Attach a click event listener to the document
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header style={styles.header}>
      {/* Link to the homepage */}
      <Link to="/" style={styles.link}>
        <div style={styles.logoContainer}>
          <img
            src={CompanyLogo}
            alt="Company Logo"
            style={styles.logoImage}
          />
          <h1 style={styles.logoText}>PhrasePerfect</h1>
        </div>
      </Link>

      {/* Account Icon and Dropdown */}
      <div style={styles.iconContainer} ref={dropdownRef}>
        <FaUserCircle style={styles.icon} onClick={toggleDropdown} /> {/* Use FontAwesome icon */}
        {isDropdownVisible && <AccountDropdown />} {/* Show dropdown if visible */}
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: "fixed", // Keeps the header fixed at the top
    top: 0,
    left: 0,
    width: "100%", // Spans the full width
    height: "60px", // Ensures enough height
    backgroundColor: "#6F469C", // Purple background
    color: "white",
    padding: "0 20px", // Proper padding for alignment
    display: "flex",
    alignItems: "center", // Centers items vertically
    justifyContent: "space-between", // Spacing between logo and icon
    zIndex: 1000, // Ensures the header stays on top
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a shadow for better visibility
  },
  link: {
    textDecoration: "none", // Removes underline from the link
    color: "white", // Ensures the text color matches the design
  },
  logoContainer: {
    display: "flex", // Ensures logo and text are in a row
    alignItems: "center",
    gap: "10px", // Adds space between logo and text
  },
  logoImage: {
    width: "40px", // Adjusted size for the image
    height: "40px",
    borderRadius: "50%", // Makes the image circular
    objectFit: "cover", // Ensures the image fits within the circle
  },
  logoText: {
    fontSize: "1.9rem",
    fontWeight: "bold",
    margin: 0,
  },
  iconContainer: {
    position: "relative", // Allows the dropdown to position relative to this container
    marginRight: "30px", // Ensures proper spacing on the right side
  },
  icon: {
    fontSize: "2.5rem", // Adjusted size for better visibility
    cursor: "pointer",
    color: "white", // White for better contrast on purple background
  },
};

export default Header;
