import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

import Contact from "./components/Contact/Contact";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
