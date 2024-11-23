import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./Home/HomePage";

const App = () => {
  return (
    <div style={styles.page}>
      <Header />
      <div style={styles.container}>
        <Sidebar />
        <main style={styles.content}>
          <HomePage />
        </main>
      </div>
      <Footer />
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
