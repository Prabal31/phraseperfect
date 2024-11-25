import React from "react";
import { Link } from "react-router-dom";
import { MdLanguage, MdOutlineHelpOutline, MdMailOutline } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const AccountDropdown = () => {
  return (
    <div style={styles.dropdownMenu}>
      <Link to="/login" style={styles.menuItem}>
        <span>Log in / Sign up</span>
      </Link>
      <div style={styles.menuItem}>
        <MdLanguage style={styles.menuIcon} />
        <span>English</span>
        <span style={styles.arrow}>&gt;</span>
      </div>
      <div style={styles.menuItem}>
        <FaMoon style={styles.menuIcon} />
        <span>Dark mode</span>
        <input type="checkbox" style={styles.toggleSwitch} />
      </div>
      <div style={styles.menuItem}>
        <MdOutlineHelpOutline style={styles.menuIcon} />
        <span>Help Center</span>
      </div>
      <div style={styles.menuItem}>
        <MdMailOutline style={styles.menuIcon} />
        <span>Contact us</span>
      </div>
    </div>
  );
};

const styles = {
    dropdownMenu: {
        position: "absolute",
        top: "65px", // Positioned below the icon
        right: "70px", // Add padding from the right edge
        width: "200px",
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
    padding: "10px 15px",
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
    marginRight: "10px",
    color: "#555",
  },
  arrow: {
    marginLeft: "auto",
    color: "#888",
    fontSize: "1rem",
  },
  toggleSwitch: {
    marginLeft: "auto",
    cursor: "pointer",
  },
};

export default AccountDropdown;
