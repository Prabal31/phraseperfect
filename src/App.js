import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./Home/HomePage";
import ParaphrasingTool from "./Tools/ParaphrasingTool"; // Add your paraphraser tool page/component

const App = () => {
  return (
    <Router>
      <div style={styles.page}>
        <Header />
        <div style={styles.container}>
          <Sidebar />
          <main style={styles.content}>
            <Routes>
              {/* Define the routes for different pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/paraphrase" element={<ParaphrasingTool />} />
              {/* Add more routes here for other tools */}
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
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
