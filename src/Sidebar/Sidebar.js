import React from "react";
import {
  FaFileAlt,
  FaCheckCircle,
  FaRobot,
  FaSearch,
  FaQuoteRight,
  FaLanguage,
  FaPenNib,
} from "react-icons/fa"; // Import icons from react-icons

const Sidebar = () => {
  const options = [
    { icon: <FaFileAlt />, label: "Paraphraser" },
    { icon: <FaCheckCircle />, label: "Grammar Checker" },
    { icon: <FaRobot />, label: "AI Detector" },
    { icon: <FaSearch />, label: "Plagiarism Checker" },
    { icon: <FaQuoteRight />, label: "Summarizer" },
    { icon: <FaLanguage />, label: "Translator" },
    { icon: <FaPenNib />, label: "Citation Generator" },
  ];

  return (
    <div style={styles.sidebar}>
      <h2 style={styles.logo}>PhrasePerfect</h2>
      <ul style={styles.options}>
        {options.map((option, index) => (
          <li key={index} style={styles.option}>
            <div style={styles.icon}>{option.icon}</div>
            <span style={styles.label}>{option.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "250px",
    backgroundColor: "#f9f9f9",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    fontSize: "1.5rem",
    color: "#6F469C",
    marginBottom: "20px",
    fontWeight: "bold",
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
    transition: "background-color 0.3s ease",
  },
  icon: {
    fontSize: "1.2rem",
    color: "#6F469C",
    marginRight: "10px",
  },
  label: {
    fontSize: "1rem",
    color: "#333",
  },
  optionHover: {
    backgroundColor: "#e0e0e0",
  },
};

export default Sidebar;
