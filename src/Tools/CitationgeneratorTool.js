import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { BsKeyboard } from "react-icons/bs";

const CitationGenerator = () => {
  const [citationStyle, setCitationStyle] = useState("APA 7th edition");
  const [searchText, setSearchText] = useState("");

  const handleCite = () => {
    if (!searchText.trim()) {
      alert("Please enter a title, URL, DOI, ISBN, or keyword to cite.");
      return;
    }
    alert(`Citing "${searchText}" using ${citationStyle}`);
  };

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "50px 20px",
      backgroundColor: "#f9f9f9",
      minHeight: "100vh",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#2c3e50",
      marginBottom: "10px",
    },
    subtitle: {
      fontSize: "1rem",
      color: "#7f8c8d",
      marginBottom: "40px",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "20px",
    },
    dropdown: {
      fontSize: "1rem",
      padding: "8px 12px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      cursor: "pointer",
      backgroundColor: "#eef0f4",
      fontWeight: "bold",
    },
    searchContainer: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      maxWidth: "600px",
      marginTop: "20px",
      position: "relative",
    },
    searchBox: {
      width: "100%",
      padding: "15px 20px",
      fontSize: "1rem",
      border: "1px solid #ddd",
      borderRadius: "50px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    searchIcon: {
      position: "absolute",
      left: "15px",
      fontSize: "1.2rem",
      color: "#95a5a6",
    },
    citeButton: {
      padding: "10px 20px",
      backgroundColor: "#2ECC71",
      color: "#fff",
      border: "none",
      borderRadius: "50px",
      cursor: "pointer",
      fontSize: "1rem",
      marginLeft: "10px",
    },
    actions: {
      display: "flex",
      gap: "20px",
      marginTop: "20px",
      fontSize: "1rem",
      color: "#2ECC71",
    },
    actionIcon: {
      marginRight: "5px",
      fontSize: "1.2rem",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Free Citation Generator</h1>
      <p style={styles.subtitle}>
        Instantly create, edit, and save citations in over 1,000 different
        styles, for free and without limits.
      </p>
      <div style={styles.toolbar}>
        <select
          value={citationStyle}
          onChange={(e) => setCitationStyle(e.target.value)}
          style={styles.dropdown}
        >
          <option>APA 7th edition</option>
          <option>MLA 9th edition</option>
          <option>Chicago 17th edition</option>
          <option>Harvard Referencing</option>
        </select>
      </div>
      <div style={styles.searchContainer}>
        <FaSearch style={styles.searchIcon} />
        <input
          type="text"
          placeholder="Cite webpages, books, articles, and more"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={styles.searchBox}
        />
        <button style={styles.citeButton} onClick={handleCite}>
          Cite
        </button>
      </div>
      <div style={styles.actions}>
        <span>
          <AiOutlineCloudUpload style={styles.actionIcon} />
          Upload PDF
        </span>
        <span>
          <BsKeyboard style={styles.actionIcon} />
          Cite manually
        </span>
      </div>
    </div>
  );
};

export default CitationGenerator;
