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
      fontWeight: "bold",
      color:"#F4D03F",
      fontSize: "2rem",
    },
    textarea: {
      width: "90%",
      height: "400px",
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
      gap: "20px",
      borderLeft: "1px solid #ddd",
    },
    resultTitle: {
      fontSize: "3rem",
      fontWeight: "bold",
      color: "#555",
      marginBottom: "10px",
    },
    resultSubtitle: {
      fontSize: "1.1rem",
      color: "#888",
      marginBottom: "20px",
      textAlign: "center",
    },
    progressBar: {
      width: "100%",
      height: "10px",
      backgroundColor: "#f0f0f0",
      borderRadius: "5px",
      overflow: "hidden",
      position: "relative",
    },
    progressFill: {
      width: "40%", // Adjust based on the result value
      height: "100%",
      backgroundColor: "#2ECC71",
      borderRadius: "5px",
    },
    resultList: {
      listStyle: "none",
      padding: 0,
      margin: "10px 0",
      width: "100%",
    },
    resultItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0",
      fontSize: "1rem",
      borderBottom: "1px solid #eee",
      color: "#555",
    },
    resultLabel: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    resultIcon: {
      width: "12px",
      height: "12px",
      borderRadius: "50%",
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

  const resultData = [
    { label: "AI-generated", color: "#FFD700", value: "--%" },
    { label: "AI-generated & AI-refined", color: "#D8BFD8", value: "--%" },
    { label: "Human-written & AI-refined", color: "#ADD8E6", value: "--%" },
    { label: "Human-written", color: "#F0F0F0", value: "--%" },
  ];

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
            <button style={styles.button}>📄 Upload doc</button>
          </div>
        </div>

        {/* Right Panel */}
        <div style={styles.rightPanel}>
          <div>
            <p style={styles.resultTitle}>%</p>
            <p style={styles.resultSubtitle}>of text is likely AI-generated</p>
            <div style={styles.progressBar}>
              <div style={styles.progressFill}></div>
            </div>
          </div>
          <ul style={styles.resultList}>
            {resultData.map((item, index) => (
              <li key={index} style={styles.resultItem}>
                <div style={styles.resultLabel}>
                  <span
                    style={{
                      ...styles.resultIcon,
                      backgroundColor: item.color,
                    }}
                  ></span>
                  {item.label}
                </div>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>
          <button style={styles.analyzeButton}>Analyze text</button>
        </div>
      </main>
    </div>
  );
};

export default AIDetectorTool;
