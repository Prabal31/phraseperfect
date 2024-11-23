import React from "react";
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
    { icon: <FaFileAlt />, label: "Paraphraser", color: "#2ECC71" },
    { icon: <FaCheckCircle />, label: "Grammar Checker", color: "#FF6F61" },
    { icon: <FaRobot />, label: "AI Detector", color: "#F4D03F" },
    { icon: <FaSearch />, label: "Plagiarism Checker", color: "#E67E22" },
    { icon: <FaQuoteRight />, label: "Summarizer", color: "#8E44AD" },
    { icon: <FaLanguage />, label: "Translator", color: "#34495E" },
    { icon: <FaPenNib />, label: "Citation Generator", color: "#3498DB" },
    { icon: <FaStream />, label: "Flow", description: "Write with AI", color: "#5DADE2" },
  ];

  return (
    <div style={styles.sidebar}>
      <ul style={styles.options}>
        {options.map((option, index) => (
          <li key={index} style={styles.option}>
            <div style={{ ...styles.icon, backgroundColor: option.color }}>
              {option.icon}
            </div>
            <span style={styles.label}>{option.label}</span>
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
    boxShadow: "0px 0 5px rgba(0, 0, 0, 0)",
    borderRight:"1px solid #ddd",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  logo: {
    fontSize: "1.5rem",
    color: "#6F469C",
    marginBottom: "20px",
    fontWeight: "bold",
    alignSelf: "center",
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
    fontFamily: "'Arial', sans-serif",
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
