// AccountDropdown.js
import React from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSignInAlt } from "react-icons/fa";

const AccountDropdown = ({ darkMode, toggleDarkMode }) => {
  return (
    <div style={styles.dropdownMenu}>
      <Link to="/login" style={styles.menuItem}>
        <FaSignInAlt style={styles.menuIcon} />
        <span>Log in / Sign up</span>
      </Link>
      <div style={styles.menuItem} onClick={toggleDarkMode}>
        <FaMoon style={styles.menuIcon} />
        <span>Dark mode</span>
        <div
          style={{
            ...styles.toggleSwitch,
            backgroundColor: darkMode ? "#6f469c" : "#ddd",
          }}
        >
          <div
            style={{
              ...styles.switchKnob,
              transform: darkMode ? "translateX(14px)" : "translateX(0)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  dropdownMenu: {
    position: "absolute",
    top: "65px",
    right: "20px",
    width: "220px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
    overflow: "hidden",
    transition: "opacity 0.3s ease, transform 0.3s ease",
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
  toggleSwitch: {
    position: "relative",
    width: "34px",
    height: "20px",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginLeft: "auto",
  },
  switchKnob: {
    position: "absolute",
    height: "14px",
    width: "14px",
    borderRadius: "50%",
    backgroundColor: "white",
    top: "3px",
    left: "3px",
    transition: "transform 0.3s ease",
  },
};

export default AccountDropdown;
