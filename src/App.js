import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import HomePage from "./Home/HomePage";
import ParaphrasingTool from "./Tools/ParaphrasingTool"; 
import GrammarcheckerTool from "./Tools/GrammarcheckerTool"; 
import AIdectectorTool from "./Tools/AIdetectorTool"; 
import SummarizingTool from "./Tools/SummarizerTool"; 
import TranslatorTool from "./Tools/TranslatorTool"; 
import CitationgeneratorTool from "./Tools/CitationgeneratorTool";
import Login from "./Auth/Login";
import SignIn from "./Auth/Signin";
import AccountDropdown from "./Auth/Accountdropdown"; // Import AccountDropdown

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.style.backgroundColor = darkMode ? "#fff" : "#333";
    document.body.style.color = darkMode ? "#000" : "#fff";
  };

  return (
    <Router>
      <div style={{ ...styles.page, backgroundColor: darkMode ? "#333" : "#fff", color: darkMode ? "#fff" : "#000" }}>
        <Header />
        <AccountDropdown darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> {/* Pass darkMode and toggle */}
        <div style={styles.container}>
          <Sidebar isDarkMode={darkMode} /> {/* Pass darkMode */}
          <main style={styles.content}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/paraphrase" element={<ParaphrasingTool />} />
              <Route path="/grammar-checker" element={<GrammarcheckerTool />} />
              <Route path="/ai-detector" element={<AIdectectorTool />} />
              <Route path="/summarizer" element={<SummarizingTool />} />
              <Route path="/translator" element={<TranslatorTool />} />
              <Route path="/citation-generator" element={<CitationgeneratorTool />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<SignIn />} />
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
