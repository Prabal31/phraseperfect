import React from "react";

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Choose an Action</h1>
      <div style={styles.buttonContainer}>
        <div
          style={styles.button}
          onClick={() => alert("Paraphrase button clicked!")}
        >
          Paraphrase
        </div>
        <div
          style={styles.button}
          onClick={() => alert("Check Grammar button clicked!")}
        >
          Check Grammar
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    fontFamily: "'Arial', sans-serif",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#333",
  },
  buttonContainer: {
    display: "flex",
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#6F469C",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#5A3A82",
  },
};

export default App;
