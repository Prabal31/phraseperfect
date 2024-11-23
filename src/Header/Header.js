import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";

const Header = () => {
    return (
        <header style={styles.header}>
          <h1 style={styles.logo}>PhrasePerfect</h1>
          <span style={styles.icon}><MdOutlineAccountCircle style={styles.icon} /></span>
        </header>
      );
    };

const styles = {
  header: {
    position: "fixed", // Makes the header fixed at the top
    top: 0,
    left: 0,
    width: "100%", // Ensures the header spans the full width
    backgroundColor: "#6F469C", // Purple background
    color: "white",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1000, // Ensures the header stays on top
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adds a shadow for visibility

  },
  logo: {
    fontSize: "1.9rem",
    fontWeight: "bold",
    margin: 0,
  },
  account_logo: {
    fontSize: "2rem",
    cursor: "pointer",

  },
};

export default Header;
