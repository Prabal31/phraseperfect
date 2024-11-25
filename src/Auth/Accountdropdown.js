import React, { useState } from "react";
import { MdOutlineAccountCircle, MdLanguage, MdOutlineHelpOutline, MdMailOutline } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const AccountDropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={styles.iconContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Account Icon */}
      <MdOutlineAccountCircle style={styles.icon} />

      {/* Dropdown Menu */}
      {isHovered && (
        <div style={styles.dropdownMenu}>
          <Link to="/login" style={styles.menuItem}>
            <MdOutlineAccountCircle style={styles.menuIcon} />
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
      )}
    </div>
  );
};

const styles = {
  iconContainer: {
    position: "relative",
    display: "inline-block",
  },
  icon: {
    fontSize: "2.5rem",
    color: "#333",
    cursor: "pointer",
  },
  dropdownMenu: {
    position: "absolute",
    top: "110%", // Position below the icon
    right: 0,
    width: "200px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 10,
    overflow: "hidden",
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
  },
  menuIcon: {
    fontSize: "1.5rem",
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
