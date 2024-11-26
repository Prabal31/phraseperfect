import React from "react";
import { Link } from "react-router-dom";
import { FaFileAlt, FaCheckCircle, FaRobot, FaQuoteRight, FaLanguage, FaPenNib } from "react-icons/fa";
import CompanyLogo from "../Assets/Company_logo.png";

const HomePage = ({ darkMode }) => {
  const tools = [
    { icon: <FaFileAlt />, title: "Paraphraser", description: "Increase fluency", color: "#2ECC71", path: "/paraphrase" },
    { icon: <FaCheckCircle />, title: "Grammar Checker", description: "Fix mistakes", color: "#FF6F61", path: "/grammar-checker" },
    { icon: <FaRobot />, title: "AI Detector", description: "Analyze text", color: "#F4D03F", path: "/ai-detector" },
    { icon: <FaQuoteRight />, title: "Summarizer", description: "Summarize text", color: "#8E44AD", path: "/summarizer" },
    { icon: <FaLanguage />, title: "Translator", description: "Unlock languages", color: "#34495E", path: "/translator" },
    { icon: <FaPenNib />, title: "Citation Generator", description: "Cite sources", color: "#3498DB", path: "/citation-generator" },
  ];

  return (
    <div
      style={{
        ...styles.container,
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          ...styles.hero,
          backgroundColor: darkMode ? "#333" : "#f9f9f9",
        }}
      >
        <div>
          <h1 style={styles.heroTitle}>
            Your ideas,{" "}
            <span style={{ ...styles.heroHighlight, color: darkMode ? "#2ECC71" : "#2ECC71" }}>
              better writing
            </span>
          </h1>
          <p style={styles.heroSubtitle}>
            We use AI to strengthen writing and boost productivity—without sacrificing authenticity.
          </p>
          <button
            style={{
              ...styles.heroButton,
              backgroundColor: darkMode ? "#444" : "#2ECC71",
              color: "#fff",
            }}
          >
            <span style={{ marginRight: "8px" }}>🌐</span>Add to Edge. It's Free
          </button>
        </div>
        <img
          src={CompanyLogo}
          alt="Company Logo"
          style={{
            width: "390px",
            height: "auto",
            borderRadius: "50%",
          }}
        />
      </section>

      {/* Tools Section */}
      <section style={styles.tools}>
        <h2 style={styles.toolsTitle}>
          Six tools. <span style={styles.toolsHighlight}>One platform.</span>
        </h2>
        <div style={styles.toolGrid}>
          {tools.map((tool, index) => (
            <Link to={tool.path} key={index} style={{ textDecoration: "none" }}>
              <div
                key={index}
                style={{
                  ...styles.toolCard,
                  backgroundColor: darkMode ? "#1e1e1e" : "#fff",
                  color: darkMode ? "#fff" : "#333",
                  border: darkMode ? "1px solid #444" : "1px solid #ddd",
                }}
                tabIndex={0}
              >
                <div style={{ ...styles.iconWrapper, backgroundColor: tool.color }}>
                  {tool.icon}
                </div>
                <h3 style={styles.toolTitle}>{tool.title}</h3>
                <p style={styles.toolDescription}>{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    lineHeight: "1.6",
    width: "100%",
    paddingBottom: "50px", // Add padding to ensure content does not overlap with the footer
  },
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px 20px",
  },
  heroTitle: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  heroHighlight: {
    color: "#2ECC71",
  },
  heroSubtitle: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  heroButton: {
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  tools: {
    textAlign: "center",
    marginTop: "40px", // Add margin to create space between sections
  },
  toolsTitle: {
    fontSize: "2rem",
    marginBottom: "20px",
    paddingBottom: "10px",
  },
  toolsHighlight: {
    color: "#2ECC71",
  },
  toolGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px",
    marginBottom: "40px", // Add margin to push content away from the footer
  },
  toolCard: {
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  iconWrapper: {
    width: "50px",
    height: "50px",
    margin: "0 auto 10px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  toolTitle: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  toolDescription: {
    fontSize: "0.9rem",
  },
};

export default HomePage;
