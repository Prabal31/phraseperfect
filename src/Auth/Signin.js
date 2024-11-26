import React from "react";
import { Link } from "react-router-dom";

const SignIn = ({ darkMode }) => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: darkMode ? "#333" : "#f8f9fa",
      color: darkMode ? "#fff" : "#000",
      fontFamily: "'Arial', sans-serif",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    formBox: {
      backgroundColor: darkMode ? "#444" : "white",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: darkMode
        ? "0 4px 6px rgba(255, 255, 255, 0.1)"
        : "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: darkMode ? "#fff" : "#333",
      marginBottom: "20px",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: darkMode ? "1px solid #555" : "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "1rem",
      backgroundColor: darkMode ? "#555" : "#fff",
      color: darkMode ? "#fff" : "#333",
      marginBottom: "15px",
    },
    submitButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: darkMode ? "#2ECC71" : "#28a745",
      color: "white",
      fontSize: "1rem",
      fontWeight: "bold",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    switchText: {
      marginTop: "15px",
      fontSize: "0.9rem",
      color: darkMode ? "#aaa" : "#555",
    },
    switchLink: {
      color: darkMode ? "#2ECC71" : "#007bff",
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h1 style={styles.title}>Create a new PhrasePerfect account</h1>
        <form>
          <input type="text" placeholder="Full Name" style={styles.input} />
          <input type="email" placeholder="Email" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button type="submit" style={styles.submitButton}>
            Sign Up
          </button>
        </form>
        <p style={styles.switchText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.switchLink}>
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
