import React from "react";
import { Link } from "react-router-dom";
import {
  FaFileAlt,
  FaCheckCircle,
  FaRobot,
  FaSearch,
  FaQuoteRight,
  FaLanguage,
  FaPenNib,
  FaStream,
} from "react-icons/fa"; // Icons for sidebar options

const Sidebar = () => {
  const options = [
    { icon: <FaFileAlt />, label: "Paraphraser", color: "#2ECC71", path: "/paraphrase" },
    { icon: <FaCheckCircle />, label: "Grammar Checker", color: "#FF6F61", path: "/grammar-checker" },
    { icon: <FaRobot />, label: "AI Detector", color: "#F4D03F", path: "/ai-detector" },
    { icon: <FaSearch />, label: "Plagiarism Checker", color: "#E67E22", path: "/plagiarism-checker" },
    { icon: <FaQuoteRight />, label: "Summarizer", color: "#8E44AD", path: "/summarizer" },
    { icon: <FaLanguage />, label: "Translator", color: "#34495E", path: "/translator" },
    { icon: <FaPenNib />, label: "Citation Generator", color: "#3498DB", path: "/citation-generator" },
    { icon: <FaStream />, label: "Flow", color: "#5DADE2", path: "/flow" },
  ];

  return (
    <div style={styles.sidebar}>
      <ul style={styles.options}>
        {options.map((option, index) => (
          <li key={index} style={styles.option}>
            <Link to={option.path} style={styles.link}>
              <div style={{ ...styles.icon, backgroundColor: option.color }}>
                {option.icon}
              </div>
              <span style={styles.label}>{option.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    backgroundColor: "white",
    borderRight: "1px solid #ddd",
    padding: "20px",
    paddingTop: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  options: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    width: "100%",
  },
  option: {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    borderRadius: "5px",
    marginBottom: "10px",
    cursor: "pointer",
    fontFamily: "'Arial', sans-serif",
  },
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    width: "100%",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    color: "#fff",
    marginRight: "10px",
    fontSize: "1.2rem",
  },
  label: {
    fontSize: "1rem",
    color: "#333",
    fontWeight: "500",
  },
};

export default Sidebar;
