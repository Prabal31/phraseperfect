import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFileAlt,
  FaCheckCircle,
  FaRobot,
  FaQuoteRight,
  FaLanguage,
  FaPenNib,
} from "react-icons/fa";

const Sidebar = ({ isDarkMode }) => {
  const location = useLocation();

  const options = [
    { icon: <FaFileAlt />, label: "Paraphraser", color: "#2ECC71", path: "/paraphrase" },
    { icon: <FaCheckCircle />, label: "Grammar Checker", color: "#FF6F61", path: "/grammar-checker" },
    { icon: <FaRobot />, label: "AI Detector", color: "#F4D03F", path: "/ai-detector" },
    { icon: <FaQuoteRight />, label: "Summarizer", color: "#8E44AD", path: "/summarizer" },
    { icon: <FaLanguage />, label: "Translator", color: "#34495E", path: "/translator" },
    { icon: <FaPenNib />, label: "Citation Generator", color: "#3498DB", path: "/citation-generator" },
  ];

  return (
    <div
      style={{
        ...styles.sidebar,
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
        borderRight: isDarkMode ? "1px solid #444" : "1px solid #ddd",
      }}
    >
      <ul style={styles.options}>
        {options.map((option, index) => {
          const isActive = location.pathname === option.path;
          return (
            <li
              key={index}
              style={{
                ...styles.option,
                ...(isActive ? styles.activeOption : {}),
                backgroundColor: isActive
                  ? isDarkMode
                    ? "#555"
                    : "#f5f5f5"
                  : "transparent",
                color: isDarkMode ? "#fff" : "#333",
              }}
            >
              <Link
                to={option.path}
                style={{
                  ...styles.link,
                  color: isDarkMode ? "#fff" : "#333",
                }}
              >
                <div
                  style={{
                    ...styles.icon,
                    backgroundColor: option.color,
                  }}
                >
                  {option.icon}
                </div>
                <span style={styles.label}>{option.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    
    width: "220px",
    paddingTop: "80px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    left: 0,
    transition: "background-color 0.3s ease, color 0.3s ease",
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
    position: "relative",
    padding: "10px 15px",
    borderRadius: "5px",
    marginBottom: "10px",
    cursor: "pointer",
    fontFamily: "'Arial', sans-serif",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  activeOption: {
    backgroundColor: "#f5f5f5",
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
    fontWeight: "500",
  },
};

export default Sidebar;
