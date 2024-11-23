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
    backgroundColor: "#6F469C",
    color: "white",
    padding: "10px 20px",
    textAlign: "center",
    marginTop: "auto",
  },
  text: {
    margin: 0,
    fontSize: "0.9rem",
  },
};

export default Footer;
