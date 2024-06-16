


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./components/Header/Navigation"; // Adjust the path as necessary
// import Home from "./components/Home/Home";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import Menu from "./components/Menu/Menu";
// import About from "./components/About/About";

// function App() {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <Navigation />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/menu" element={<Menu />} />
        
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;












// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./components/Header/Navigation"; // Adjust the path as necessary
// import Home from "./components/Home/Home";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import Menu from "./components/Menu/Menu";
// import About from "./components/About/About";
// import SpecialtyCocktails from "./components/Menu/SpecialtyCocktails";
// import TapList from "./components/Menu/TapList";
// import BottlesCan from "./components/Menu/BottlesCan";
// import HappyHour from "./components/Menu/HappyHour";
// import Appetizers from "./components/Menu/Appetizers";
// import Entrees from "./components/Menu/Entrees";
// import BurgersSandwiches from "./components/Menu/BurgersSandwiches";
// import Brunch from "./components/Menu/Brunch";

// function App() {
//   return (
//     <Router basename={process.env.PUBLIC_URL}>
//       <Navigation />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/menu" element={<Menu />} />
//         <Route path="/specialtycocktails" element={<SpecialtyCocktails />} />
//         <Route path="/taplist" element={<TapList />} />
//         <Route path="/bottlescan" element={<BottlesCan />} />
//         <Route path="/happyhour" element={<HappyHour />} />
//         <Route path="/appetizers" element={<Appetizers />} />
//         <Route path="/entrees" element={<Entrees />} />
//         <Route path="/burgerssandwiches" element={<BurgersSandwiches />} />
//         <Route path="/brunch" element={<Brunch />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Header/Navigation"; // Adjust the path as necessary
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import SpecialtyCocktails from "./components/Menu/SpecialtyCocktails";
import TapList from "./components/Menu/TapList";
import BottlesCan from "./components/Menu/BottlesCan";
import HappyHour from "./components/Menu/HappyHour";
import Appetizers from "./components/Menu/Appetizers";
import Entrees from "./components/Menu/Entrees";
import BurgersSandwiches from "./components/Menu/BurgersSandwiches";
import Brunch from "./components/Menu/Brunch";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/SpecialtyCocktails" element={<SpecialtyCocktails />} />
        <Route path="/menu/TapList" element={<TapList />} />
        <Route path="/menu/BottlesCan" element={<BottlesCan />} />
        <Route path="/menu/HappyHour" element={<HappyHour />} />
        <Route path="/menu/Appetizers" element={<Appetizers />} />
        <Route path="/menu/Entrees" element={<Entrees />} />
        <Route path="/menu/BurgersSandwiches" element={<BurgersSandwiches />} />
        <Route path="/menu/Brunch" element={<Brunch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
