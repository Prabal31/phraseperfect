import React from "react";

const ParaphrasingTool = () => {
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
    languages: {
      display: "flex",
      gap: "10px",
      fontSize: "14px",
      color: "#555",
    },
    dropdown: {
      fontWeight: "bold",
      cursor: "pointer",
    },
    modes: {
      display: "flex",
      gap: "15px",
      marginTop: "10px",
      fontSize: "14px",
      color: "#555",
      alignItems: "center",
    },
    activeMode: {
      fontWeight: "bold",
      color: "green",
      borderBottom: "2px solid green",
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
    buttonHover: {
      backgroundColor: "#f0f0f0",
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

  return (
    <div style={styles.container}>
      <header style={styles.toolbar}>
        <div style={styles.languages}>
          <span>English (US)</span>
          <span>French</span>
          <span>Spanish</span>
          <span>German</span>
          <span style={styles.dropdown}>All ▼</span>
        </div>
        <div style={styles.modes}>
          <span style={styles.activeMode}>Standard</span>
          <span>Fluency</span>
          <span>Natural</span>
          <span>Formal</span>
          <span>Academic</span>
          <span>Simple</span>
          <span>Creative</span>
          <span>Expand</span>
          <span>Shorten</span>
          <span>Custom</span>
          <div style={styles.synonymsSlider}>
            Synonyms:
            <input type="range" min="0" max="10" />
          </div>
        </div>
      </header>

      <main style={styles.content}>
        <div style={styles.leftPanel}>
          <p>To rewrite text, enter or paste it here and press "Paraphrase."</p>
          <div style={styles.actionButtons}>
            <button style={styles.button}>👋 Try Sample Text</button>
            <button style={styles.button}>📋 Paste Text</button>
          </div>
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
