import React, { useState } from "react";

const ParaphrasingTool = () => {
  const [activeMode, setActiveMode] = useState("Standard"); // State to track the active mode

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "40px",
    },
    toolbar: {
      backgroundColor: "#fff",
      width: "100%",
      padding: "10px 20px",
      borderBottom: "1px solid #ddd",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    modes: {
      display: "flex",
      gap: "15px", // Spacing between modes
      padding: "10px 0", // Padding around the modes
      justifyContent: "center", // Center align the modes
      fontFamily: "'Arial', sans-serif",
    },
    mode: {
      padding: "8px 12px", // Padding inside each mode
      cursor: "pointer", // Pointer cursor to indicate clickable
      fontSize: "1rem",
      color: "#555", // Default text color
      borderRadius: "5px", // Rounded corners
      transition: "all 0.3s ease", // Smooth transition effect
      fontWeight: "bold", // Bold font for active mode

    },
    activeMode: {
      backgroundColor: "#2ECC71", // Highlighted background for active mode
      fontWeight: "bold", // Bold font for active mode
    },
    synonymsSlider: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "5px",
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
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    paraphraseButton: {
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

  const modes = ["Standard", "Fluency", "Natural", "Formal"]; // List of modes

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
              onClick={() => setActiveMode(mode)} // Change active mode on click
            >
              {mode}
            </span>
          ))}
        </div>

        <div style={styles.synonymsSlider}>
          Synonyms:
          <input type="range" min="0" max="10" />
        </div>
      </header>

      <main style={styles.content}>
        <div style={styles.leftPanel}>
          <p>
            To rewrite text, enter or paste it here and press "Paraphrase."
          </p>
          <div style={styles.actionButtons}></div>
          <button style={styles.button}>📄 Upload Doc</button>
        </div>
        <div style={styles.rightPanel}>
          <button style={styles.paraphraseButton}>Paraphrase</button>
        </div>
      </main>
    </div>
  );
};

export default ParaphrasingTool;
