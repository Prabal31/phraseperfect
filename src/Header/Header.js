import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>PhrasePerfect</h1>
      <span>
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
    backgroundColor: "#6F469C", // Purple background
    color: "white",
    padding: "15px 20px", // Increased padding for better alignment
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Spacing between logo and icon
    zIndex: 1000, // Ensures the header stays on top
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a shadow for better visibility
  },
  logo: {
    fontSize: "1.9rem",
    fontWeight: "bold",
    margin: 0,
  },
  icon: {
    fontSize: "2rem",
    cursor: "pointer",
    color: "white", // White for better contrast on purple background
  },
};

export default Header;
