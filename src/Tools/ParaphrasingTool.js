import React, { useState } from "react";

const ParaphrasingTool = ({ darkMode }) => {
  const [text, setText] = useState("");
  const [activeMode, setActiveMode] = useState("Standard");

  
  const styles = {
    container: {
      
      fontFamily: "Arial, sans-serif",
      backgroundColor: darkMode ? "#333" : "#f9f9f9",
      color: darkMode ? "#fff" : "#000",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "40px",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    toolbar: {
      backgroundColor: darkMode ? "#444" : "#fff",
      color: darkMode ? "#fff" : "#000",
      width: "100%",
      padding: "10px 0px",
      borderBottom: darkMode ? "1px solid #555" : "1px solid #ddd",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    modes: {
      display: "flex",
      gap: "15px",
      justifyContent: "center",
      fontFamily: "'Arial', sans-serif",
    },
    mode: {
      padding: "8px 12px",
      cursor: "pointer",
      fontSize: "1rem",
      color: darkMode ? "#ddd" : "#555",
      borderRadius: "5px",
      transition: "all 0.3s ease",
      outline: "none",
      fontWeight: "bold",
    },
    activeMode: {
      backgroundColor: "#2ECC71",
      fontWeight: "bold",
    },
    content: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: "1200px",
      marginTop: "20px",
      backgroundColor: darkMode ? "#444" : "#fff",
      color: darkMode ? "#fff" : "#000",
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
      width: "96%",
      height: "400px",
      fontSize: "16px",
      padding: "10px",
      border: darkMode ? "1px solid #555" : "1px solid #ddd",
      borderRadius: "5px",
      backgroundColor: darkMode ? "#555" : "#fff",
      color: darkMode ? "#fff" : "#000",
      resize: "none",
    },
    rightPanel: {
      flex: 3,
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    paraphraseButton: {
      padding: "15px 30px",
      fontSize: "18px",
      fontWeight: "bold",
      backgroundColor: darkMode ? "#2ECC71" : "green",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      transition: "background-color 0.3s",
      outline: "none",
    },
    actionButtons: {
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "14px",
      fontWeight: "bold",
      border: `2px solid ${darkMode ? "#2ECC71" : "green"}`,
      borderRadius: "5px",
      cursor: "pointer",
      color: darkMode ? "#2ECC71" : "green",
      backgroundColor: darkMode ? "#444" : "white",
      transition: "background-color 0.3s",
      outline: "none",
    },
  };

  const modes = ["Standard", "Fluency", "Natural", "Formal"];

  const handleKeyPress = (e, mode) => {
    if (e.key === "Enter" || e.key === " ") {
      setActiveMode(mode);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.toolbar}>
        <div style={styles.modes}>
          {modes.map((mode) => (
            <span
              key={mode}
              style={{
                ...styles.mode,
                ...(activeMode === mode ? styles.activeMode : {}),
              }}
              tabIndex={0}
              role="button"
              aria-label={`Select ${mode} mode`}
              onClick={() => setActiveMode(mode)}
              onKeyPress={(e) => handleKeyPress(e, mode)}
            >
              {mode}
            </span>
          ))}
        </div>
      </header>

      <main style={styles.content}>
        <div style={styles.leftPanel}>
          <textarea
            style={styles.textarea}
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            aria-label="Input text area"
          />
          <div style={styles.actionButtons}>
            <button
              style={styles.button}
              tabIndex={0}
              aria-label="Upload document button"
            >
              📄 Upload Doc
            </button>
            <button
              style={styles.button}
              tabIndex={0}
              aria-label="Paste text button"
            >
              📋 Paste Text
            </button>
          </div>
        </div>
        <div style={styles.rightPanel}>
          <textarea
            style={styles.textarea}
            placeholder="Output will appear here..."
            readOnly
            aria-label="Output text area"
          />
          <button
            style={styles.paraphraseButton}
            tabIndex={0}
            aria-label="Paraphrase button"
          >
            Paraphrase
          </button>
        </div>
      </main>
    </div>
  );
};

export default ParaphrasingTool;
