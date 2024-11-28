import React, { useState } from "react";

const GrammarcheckerTool = ({ darkMode }) => {
  const [text, setText] = useState(""); // Input text
  const [correctedText, setCorrectedText] = useState(""); // Corrected text output

  // Example correction function
  const correctGrammar = () => {
    if (text.trim() === "") {
      setCorrectedText("Please enter some text to check grammar."); // Handle empty input
      return;
    }

    // Simulate grammar correction by replacing common mistakes
    let corrected = text
      .replace(/\bi\b/g, "I") // Capitalize 'i'
      .replace(/\bteh\b/g, "the") // Correct 'teh' to 'the'
      .replace(/\brecieve\b/g, "receive") // Correct 'recieve' to 'receive'
      .replace(/\b([.!?])\s*(\w)/g, (match, p1, p2) => `${p1} ${p2.toUpperCase()}`); // Capitalize after punctuation

    setCorrectedText(corrected);
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
      height: "500px",
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
    grammarcheckButton: {
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

  return (
    <div style={styles.container}>
      <main style={styles.content}>
        {/* Input Area */}
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
          </div>
        </div>

        {/* Output Area */}
        <div style={styles.rightPanel}>
          <textarea
            style={styles.textarea}
            placeholder="Output will appear here..."
            value={correctedText}
            readOnly
            aria-label="Output text area"
          />
          <button
            style={styles.grammarcheckButton}
            tabIndex={0}
            aria-label="Check button"
            onClick={correctGrammar} // Trigger grammar correction
          >
            Check Grammar
          </button>
        </div>
      </main>
    </div>
  );
};

export default GrammarcheckerTool;
