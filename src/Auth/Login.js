import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        {/* Header */}
        <h1 style={styles.loginTitle}>Log in to your PhrasePerfect account</h1>

        {/* Divider */}
        <div style={styles.divider}>
        </div>

        {/* Login Form */}
        <form>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
          />
          <div style={styles.passwordContainer}>
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
            />
            <button type="button" style={styles.passwordToggle}>
              👁️
            </button>
          </div>
          <a href="#" style={styles.forgotPassword}>Forgot password?</a>
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
          By continuing, you agree to our <a href="#" style={styles.termsLink}>Terms of Service</a> and have read our <a href="#" style={styles.termsLink}>Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
    fontFamily: "'Arial', sans-serif",
  },
  loginBox: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  loginTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  socialButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "white",
    fontSize: "1rem",
    color: "#555",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  google: {},
  facebook: {},
  apple: {},
  socialIcon: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  },
  divider: {
    display: "flex",
    alignItems: "center",
    margin: "20px 0",
  },
  dividerText: {
    margin: "0 10px",
    fontSize: "0.9rem",
    color: "#666",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
    color: "#333",
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
  },
  forgotPassword: {
    display: "block",
    textAlign: "right",
    fontSize: "0.9rem",
    color: "#007bff",
    textDecoration: "none",
    marginBottom: "15px",
  },
  loginButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#28a745",
    color: "white",
    fontSize: "1rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  signupText: {
    marginTop: "15px",
    fontSize: "0.9rem",
    color: "#555",
  },
  signupLink: {
    color: "#007bff",
    textDecoration: "none",
  },
  termsText: {
    marginTop: "10px",
    fontSize: "0.8rem",
    color: "#777",
  },
  termsLink: {
    color: "#007bff",
    textDecoration: "none",
  },
};

export default LoginPage;
