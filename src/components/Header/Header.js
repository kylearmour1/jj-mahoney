// import React from "react";
// import Navigation from "./Navigation";
// import "./Header.css";

// function Header() {
//   return (
//     <header>
//       <h1>JJ Mahoney's</h1>
//       <Navigation />
//     </header>
//   );
// }

// export default Header;

import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="flex items-center justify-between p-2.5 bg-gradient-to-r from-green-800 to-gray-200">
      <h1 className="text-4xl text-black font-bold">JJ Mahoney's</h1>
      <Navigation />
    </header>
  );
}

export default Header;
