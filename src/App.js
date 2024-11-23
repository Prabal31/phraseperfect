import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div style={styles.page}>
      <Header />
      <main style={styles.container}>
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
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    flexGrow: 1,
    marginTop: "5vh",
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
    marginTop: "20px",
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
};

export default App;
