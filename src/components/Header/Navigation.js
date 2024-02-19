

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css"; 
// function Navigation() {
//   const [isOpen, setIsOpen] = useState(false); 

//   return (
//     <nav className="navbar">
//       <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</button>
//       {isOpen && (
//         <ul className="dropdown">
//           <li><Link to="/home" onClick={() => setIsOpen(false)}>Home</Link></li>
//           <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
//         </ul>
//       )}
//     </nav>
//   );
// }

// export default Navigation;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// function Navigation() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="flex-1 relative">
//             <button
//                 className="hamburger lg:hidden px-4 py-2 text-black font-semibold rounded focus:outline-none"
//                 onClick={() => setIsOpen(!isOpen)}
//             >
//                 ☰
//             </button>
//             {isOpen && (
//                 <ul className="dropdown absolute bg-white left-0 right-0 mt-2 py-2 rounded-lg shadow-lg flex flex-col items-start lg:items-center lg:flex-row lg:gap-10 lg:bg-transparent lg:shadow-none lg:absolute lg:z-20">
//                     <li className="w-full lg:w-auto">
//                         <Link to="/home" className="block px-4 py-2 text-black hover:underline lg:inline lg:p-0" onClick={() => setIsOpen(false)}>Home</Link>
//                     </li>
//                     <li className="w-full lg:w-auto">
//                         <Link to="/contact" className="block px-4 py-2 text-black hover:underline lg:inline lg:p-0" onClick={() => setIsOpen(false)}>Contact</Link>
//                     </li>
//                 </ul>
//             )}
//         </nav>
//     );
// }

// export default Navigation;


import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative flex flex-1 justify-end items-center">
            <button
                aria-label="Toggle navigation menu"
                className="z-20 px-4 py-2 text-black font-semibold rounded focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
            <div className={`${isOpen ? "flex" : "hidden"} absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10 flex-col`}>
                <ul>
                    <li>
                        <Link to="/home" className="block px-4 py-2 text-black hover:bg-gray-200 hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block px-4 py-2 text-black hover:bg-gray-200 hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
