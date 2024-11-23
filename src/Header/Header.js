import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>PhrasePerfect</h1>
      <span style={styles.iconContainer}>
        <MdOutlineAccountCircle style={styles.icon} />
      </span>
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
  logo: {
    fontSize: "1.9rem",
    fontWeight: "bold",
    margin: 0,
  },
  iconContainer: {
    marginRight: "40px", // Ensures proper spacing on the right side
  },
  icon: {
    fontSize: "2.5rem", // Adjusted size for better visibility
    cursor: "pointer",
    color: "white", // White for better contrast on purple background
  },
};

export default Header;
