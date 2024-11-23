import React from "react";
import { FaFileAlt, FaCheckCircle, FaRobot, FaSearch, FaQuoteRight, FaLanguage, FaPenNib, FaStream } from "react-icons/fa";
import CompanyLogo from "../Assets/Company_logo.png";



const HomePage = () => {
  const tools = [
    { icon: <FaFileAlt />, title: "Paraphraser", description: "Increase fluency", color: "#2ECC71" },
    { icon: <FaCheckCircle />, title: "Grammar Checker", description: "Fix mistakes", color: "#FF6F61" },
    { icon: <FaSearch />, title: "Plagiarism Checker", description: "Prevent plagiarism", color: "#E67E22" },
    { icon: <FaRobot />, title: "AI Detector", description: "Analyze text", color: "#F4D03F" },
    { icon: <FaQuoteRight />, title: "Summarizer", description: "Summarize text", color: "#8E44AD" },
    { icon: <FaLanguage />, title: "Translator", description: "Unlock languages", color: "#34495E" },
    { icon: <FaPenNib />, title: "Citation Generator", description: "Cite sources", color: "#3498DB" },
    { icon: <FaStream />, title: "Flow", description: "Write with AI", color: "#5DADE2" },
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>
            Your ideas, <span style={styles.heroHighlight}>better writing</span>
          </h1>
          <p style={styles.heroSubtitle}>
            We use AI to strengthen writing and boost productivity—without sacrificing authenticity.
          </p>
          <button style={styles.heroButton}>
            <span style={{ marginRight: "8px" }}>🌐</span>Add to Edge. It's Free
          </button>
        </div>
        <img 
        src={CompanyLogo} 
        alt="Company Logo" 
        style={{ width: "400px", height: "auto" }} />

      </section>

      {/* Tools Section */}
      <section style={styles.tools}>
        <h2 style={styles.toolsTitle}>
          Eight tools. <span style={styles.toolsHighlight}>One platform.</span>
        </h2>
        <div style={styles.toolGrid}>
          {tools.map((tool, index) => (
            <div key={index} style={styles.toolCard}>
              <div style={{ ...styles.iconWrapper, backgroundColor: tool.color }}>
                {tool.icon}
              </div>
              <h3 style={styles.toolTitle}>{tool.title}</h3>
              <p style={styles.toolDescription}>{tool.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    color: "#333",
    lineHeight: "1.6",

  },
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px 20px",
    backgroundColor: "#f9f9f9",
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
    backgroundColor: "#2ECC71",
    color: "white",
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  heroImage: {
    width: "400px",
    borderRadius: "10px",
  },
  promotion: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f3f3f3",
    margin: "20px 0",
    borderRadius: "10px",
  },
  promoText: {
    fontSize: "1.2rem",
  },
  saveButton: {
    backgroundColor: "#6F469C",
    color: "white",
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  tools: {
    textAlign: "center",
    padding: "40px 20px",
  },
  toolsTitle: {
    fontSize: "2rem",
    marginBottom: "20px",
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
  },
  toolCard: {
    backgroundColor: "#fff",
    padding: "20px",
    border: "1px solid #ddd",
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
    color: "#555",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#6F469C",
    color: "white",
  },
  signUpButton: {
    backgroundColor: "#2ECC71",
    color: "white",
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default HomePage;
