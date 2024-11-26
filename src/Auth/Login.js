import React from "react";
import { Link } from "react-router-dom";

const LoginPage = ({ darkMode }) => {
  const styles = {
    loginContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      width: "100%",
      backgroundColor: darkMode ? "#333" : "#fff",
      color: darkMode ? "#fff" : "#000",
      fontFamily: "'Arial', sans-serif",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    loginBox: {
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
    loginTitle: {
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
    passwordContainer: {
      position: "relative",
    },
    passwordToggle: {
      position: "absolute",
      top: "40%",
      left: "95%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      fontSize: "1.2rem",
      cursor: "pointer",
      color: darkMode ? "#fff" : "#333",
    },
    forgotPassword: {
      display: "block",
      textAlign: "right",
      fontSize: "0.9rem",
      color: darkMode ? "#2ECC71" : "#007bff",
      textDecoration: "none",
      marginBottom: "15px",
    },
    loginButton: {
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
    termsText: {
      marginTop: "10px",
      fontSize: "0.8rem",
      color: darkMode ? "#aaa" : "#777",
    },
    termsLink: {
      color: darkMode ? "#2ECC71" : "#007bff",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        {/* Header */}
        <h1 style={styles.loginTitle}>Log in to your PhrasePerfect account</h1>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Login Form */}
        <form>
          <input type="email" placeholder="Email" style={styles.input} />
          <div style={styles.passwordContainer}>
            <input type="password" placeholder="Password" style={styles.input} />
            <button type="button" style={styles.passwordToggle}>
              👁️
            </button>
          </div>
          <a href="#" style={styles.forgotPassword}>
            Forgot password?
          </a>
          <button type="submit" style={styles.loginButton}>
            Log in
          </button>
        </form>

        <p style={styles.switchText}>
          Don’t have an account?{" "}
          <Link to="/signin" style={styles.switchLink}>
            Sign up
          </Link>
        </p>
        <p style={styles.termsText}>
          By continuing, you agree to our{" "}
          <a href="#" style={styles.termsLink}>
            Terms of Service
          </a>{" "}
          and have read our{" "}
          <a href="#" style={styles.termsLink}>
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
