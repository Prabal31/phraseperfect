import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>PhrasePerfect</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "white",
    color: "#6F469C",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    borderBottom: "1px solid #ddd",

  },
  logo: {
    fontSize: "1.9rem",
    fontWeight: "bold",
    margin: 0,
  },
};

export default Header;
