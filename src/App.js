import React from "react";
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

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <div className="flex flex-grow">
          <Sidebar />
          <main className="flex-grow p-5 text-center">
            <Routes>
              {/* Define the routes for different pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/paraphrase" element={<ParaphrasingTool />} />
              <Route path="/grammar-checker" element={<GrammarcheckerTool />} />
              <Route path="/ai-detector" element={<AIdectectorTool />} />
              <Route path="/summarizer" element={<SummarizingTool />} />
              <Route path="/translator" element={<TranslatorTool />} />
              <Route path="/citation-generator" element={<CitationgeneratorTool />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
