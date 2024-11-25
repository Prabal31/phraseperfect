import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaGlobe, FaMoon, FaQuestionCircle, FaEnvelope } from "react-icons/fa";

const AccountDropdown = () => {
  return (
    <div style={styles.dropdownMenu}>
      <Link to="/login" style={styles.menuItem}>
        <FaSignInAlt style={styles.menuIcon} />
        <span>Log in / Sign up</span>
      </Link>
      <div style={styles.menuItem}>
        <FaMoon style={styles.menuIcon} />
        <span>Dark mode</span>
        <div style={styles.toggleSwitch}>
          <input type="checkbox" id="darkMode" style={styles.checkbox} />
          <label htmlFor="darkMode" style={styles.switch}></label>
        </div>
      </div>
    </div>
  );
};

const styles = {
  dropdownMenu: {
    position: "absolute",
    top: "65px", // Positioned below the icon
    right: "10px", // Add padding from the right edge
    width: "220px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
    overflow: "hidden",
    transition: "opacity 0.3s ease, transform 0.3s ease", // Smooth transition
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    color: "#333",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: "500",
    borderBottom: "1px solid #eee",
    transition: "background-color 0.2s ease",
    cursor: "pointer",
  },
  menuIcon: {
    fontSize: "1.2rem",
    marginRight: "12px",
    color: "#555",
  },
  arrow: {
    marginLeft: "auto",
    color: "#888",
    fontSize: "1rem",
  },
  toggleSwitch: {
    marginLeft: "auto",
    position: "relative",
    width: "34px",
    height: "20px",
  },
  checkbox: {
    opacity: 0,
    width: 0,
    height: 0,
  },
  switch: {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#ddd",
    borderRadius: "20px",
    transition: "0.3s",
  },
  switchChecked: {
    backgroundColor: "#6F469C",
  },
};

export default AccountDropdown;
