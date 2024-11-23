import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";

const Header = () => {
    return (
        <header style={styles.header}>
          <h1 style={styles.logo}>PhrasePerfect</h1>
          <span style={styles.account_logo}><MdOutlineAccountCircle style={styles.icon} /></span>
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
  account_logo: {
    marginLeft: "auto",
    fontSize: "1.9rem",
    color:"black"

  },
};

export default Header;
