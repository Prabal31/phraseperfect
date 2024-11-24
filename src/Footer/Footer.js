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
    position: "relative", // Ensure it's within the normal document flow
    bottom: 0,
    left: 0,
    width: "100%", // Spans the full width of the viewport
    backgroundColor: "#6F469C",
    color: "white",
    textAlign: "center",
    padding: "10px 0",
    boxSizing: "border-box", // Includes padding in dimensions
    paddingTop: "10px",
  },
  text: {
    margin: 0,
    fontSize: "0.9rem",
  },
};

export default Footer;
