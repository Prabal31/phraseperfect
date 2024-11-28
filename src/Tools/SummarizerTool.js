import React, { useState } from "react";

const SummarizingTool = ({ darkMode }) => {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [summaryLength, setSummaryLength] = useState("Short");
  const [mode, setMode] = useState("Paragraph");

  const handleSummarize = () => {
    if (!text.trim()) {
      setSummary("Please enter some text to summarize.");
      return;
    }
    // Simulate summarization logic
    const simulatedSummary =
      summaryLength === "Short"
        ? `${text.slice(0, 50)}...`
        : `${text.slice(0, 100)}...`;
    setSummary(simulatedSummary);
  };

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
      padding: "10px 20px",
      borderBottom: darkMode ? "1px solid #555" : "1px solid #ddd",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    modes: {
      display: "flex",
      gap: "15px",
    },
    mode: {
      padding: "8px 12px",
      cursor: "pointer",
      fontSize: "1rem",
      color: darkMode ? "#ddd" : "#555",
      borderRadius: "5px",
      transition: "all 0.3s ease",
      fontWeight: "bold",
    },
    activeMode: {
      backgroundColor: "#2ECC71",
      fontWeight: "bold",
    },
    lengthControl: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    content: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: "1200px",
      marginTop: "20px",
      backgroundColor: darkMode ? "#444" : "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    leftPanel: {
      flex: 1,
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
    },
    summarizeButton: {
      padding: "15px 30px",
      fontSize: "18px",
      fontWeight: "bold",
      backgroundColor: "#2ECC71",
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
      <header style={styles.toolbar}>
        <div style={styles.modes}>
          {["Paragraph", "Bullet Points", "Custom"].map((m) => (
            <span
              key={m}
              style={{
                ...styles.mode,
                ...(mode === m ? styles.activeMode : {}),
              }}
              onClick={() => setMode(m)}
              aria-label={`Select ${m} mode`}
            >
              {m}
            </span>
          ))}
        </div>
        <div style={styles.lengthControl}>
          Summary Length:
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            style={{
              accentColor: darkMode ? "#2ECC71" : "green",
            }}
            onChange={(e) =>
              setSummaryLength(e.target.value > 5 ? "Long" : "Short")
            }
          />
          <span>{summaryLength}</span>
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
          <button
            style={styles.summarizeButton}
            onClick={handleSummarize}
            aria-label="Summarize button"
          >
            Summarize
          </button>
        </div>
        <div style={styles.leftPanel}>
          <textarea
            style={styles.textarea}
            placeholder="Summary will appear here..."
            value={summary}
            readOnly
            aria-label="Summary output area"
          />
        </div>
      </main>
    </div>
  );
};

export default SummarizingTool;
