import React, { useState } from "react";

const AIDetectorTool = () => {
  const [text, setText] = useState("");

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    },
    content: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: "1200px",
      marginTop: "20px",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    leftPanel: {
      flex: 3,
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    textarea: {
      width: "100%",
      height: "200px",
      fontSize: "16px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      resize: "none",
    },
    actionButtons: {
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "14px",
      fontWeight: "bold",
      border: "2px solid green",
      borderRadius: "5px",
      cursor: "pointer",
      color: "green",
      backgroundColor: "white",
      transition: "background-color 0.3s",
    },
    rightPanel: {
      flex: 1,
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
    },
    resultTitle: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#555",
    },
    resultList: {
      listStyle: "none",
      padding: 0,
      width: "100%",
    },
    resultItem: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid #ddd",
    },
    analyzeButton: {
      padding: "15px 30px",
      fontSize: "18px",
      fontWeight: "bold",
      backgroundColor: "green",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      transition: "background-color 0.3s",
    },
  };

  return (
    <div style={styles.container}>
      <main style={styles.content}>
        {/* Left Panel */}
        <div style={styles.leftPanel}>
          <p>To analyze text, add at least 80 words.</p>
          <textarea
            style={styles.textarea}
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div style={styles.actionButtons}>
            <button style={styles.button}>📋 Paste text</button>
            <button style={styles.button}>📄 Upload doc</button>
          </div>
        </div>

        {/* Right Panel */}
        <div style={styles.rightPanel}>
          <p style={styles.resultTitle}>
            {text.length > 80 ? "Processing..." : "%"}
          </p>
          <ul style={styles.resultList}>
            <li style={styles.resultItem}>
              <span>AI-generated</span>
              <span>--%</span>
            </li>
            <li style={styles.resultItem}>
              <span>AI-generated & AI-refined</span>
              <span>--%</span>
            </li>
            <li style={styles.resultItem}>
              <span>Human-written & AI-refined</span>
              <span>--%</span>
            </li>
            <li style={styles.resultItem}>
              <span>Human-written</span>
              <span>--%</span>
            </li>
          </ul>
          <button style={styles.analyzeButton}>Analyze text</button>
        </div>
      </main>
    </div>
  );
};

export default AIDetectorTool;
