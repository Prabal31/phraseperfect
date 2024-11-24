import React, { useState } from "react";

const TranslatorTool = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("Detect Language");
  const [targetLanguage, setTargetLanguage] = useState("English");

  const handleTranslate = () => {
    if (!inputText.trim()) {
      setTranslatedText("Please enter some text to translate.");
      return;
    }
    // Simulate translation logic
    setTranslatedText(`Translated text for "${inputText}" in ${targetLanguage}`);
  };

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
      justifyContent: "space-between",
      alignItems: "center",
    },
    dropdown: {
      padding: "8px 12px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
      color: "#555",
      backgroundColor: "#f9f9f9",
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
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center",
    },
    textarea: {
      width: "100%",
      height: "400px",
      fontSize: "16px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      resize: "none",
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
    translateButton: {
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
        <select
          value={sourceLanguage}
          onChange={(e) => setSourceLanguage(e.target.value)}
          style={styles.dropdown}
        >
          <option>Detect Language</option>
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
        </select>
        <button
          onClick={() => {
            const temp = sourceLanguage;
            setSourceLanguage(targetLanguage);
            setTargetLanguage(temp);
          }}
          style={styles.button}
        >
          ↔
        </button>
        <select
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
          style={styles.dropdown}
        >
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
          <option>German</option>
        </select>
      </header>

      <main style={styles.content}>
        <div style={styles.leftPanel}>
          <textarea
            style={styles.textarea}
            placeholder="Enter text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button style={styles.button}>Paste Text</button>
        </div>
        <div style={styles.leftPanel}>
          <textarea
            style={styles.textarea}
            placeholder="Translated text will appear here"
            value={translatedText}
            readOnly
          />
        </div>
      </main>
      <button style={styles.translateButton} onClick={handleTranslate}>
        Translate
      </button>
    </div>
  );
};

export default TranslatorTool;
