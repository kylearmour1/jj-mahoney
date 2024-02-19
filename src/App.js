// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";

// import Contact from "./components/Contact/Contact";

// import Footer from "./components/Footer/Footer";

// function App() {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
        
//         <Route path="/contact" element={<Contact />} />
        
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Update the import to reflect the new combined component
import Navigation from "./components/Header/Navigation"; // Adjust the path as necessary
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/* Use the combined HeaderWithNavigation component */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
