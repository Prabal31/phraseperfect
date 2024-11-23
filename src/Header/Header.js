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
    backgroundColor: "#6F469C",
    color: "white",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0,
  },
};

export default Header;
