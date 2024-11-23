import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const App = () => {
  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.content}>
        <h1>Welcome to PhrasePerfect</h1>
        <p>Select an option from the sidebar to get started.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Arial', sans-serif",
  },
  content: {
    flexGrow: 1,
    padding: "20px",
    textAlign: "center",
  },
};

export default App;
