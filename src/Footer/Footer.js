import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 PhrasePerfect. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    position: "fixed", // Ensures it stays at the bottom of the viewport
    bottom: 0,
    left: 0, // Ensures it starts at the left corner
    width: "100%", // Spans the full width of the viewport
    backgroundColor: "#6F469C",
    color: "white",
    textAlign: "center",
    padding: "15px 0",
    boxSizing: "border-box", // Includes padding in dimensions
    zIndex: 1000, // Ensures it stays above other elements if needed
  },
  text: {
    margin: 0,
    fontSize: "0.9rem",
  },
};

export default Footer;
