

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../photos/Logo.png"; // Import the logo

// function Navigation() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <header className="bg-gradient-to-r from-blue-900 to-blue-800 w-screen sticky top-0 z-[100]"> {/* Increase the z-index here */}
//             <div className="flex items-center justify-between p-1">
//                 <img src={Logo} alt="JJ Mahoney's Logo" className="h-12" />
//                 <button
//                     aria-label="Toggle navigation menu"
//                     className="z-20 px-2 py-1 text-black font-semibold focus:outline-none"
//                     onClick={() => setIsOpen(!isOpen)}
//                 >
//                     ☰
//                 </button>
//             </div>
//             <div className={`${isOpen ? "block" : "hidden"} w-screen bg-gradient-to-r from-blue-900 to-blue-800 py-1 flex-col`}>
//                 <ul>
//                     <li>
//                         <Link to="/home" className="block px-4 py-1 text-white hover:bg-blue-700 hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/about" className="block px-4 py-1 text-white hover:bg-blue-700 hover:underline" onClick={() => setIsOpen(false)}>About Us</Link> {/* Add this line */}
//                     </li>
//                     <li>
//                         <a href="https://order.toasttab.com/online/jj-mahoneys" target="_blank" rel="noopener noreferrer" className="block px-4 py-1 text-white hover:bg-blue-700 hover:underline">
//                             Takeout
//                         </a>
//                     </li>
//                     <li>
//                         <Link to="/menu" className="block px-4 py-1 text-white hover:bg-blue-700 hover:underline" onClick={() => setIsOpen(false)}>Menu</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact" className="block px-4 py-1 text-white hover:bg-blue-700 hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
//                     </li>
//                 </ul>
//             </div>
//         </header>
//     );
// }

// export default Navigation;




import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../photos/Logo.png"; // Import the logo

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-screen sticky top-0 z-[100]" style={{ background: 'linear-gradient(to right, #172554, #172554)' }}>
            <div className="flex items-center justify-between p-1">
                <img src={Logo} alt="JJ Mahoney's Logo" className="h-12" />
                <button
                    aria-label="Toggle navigation menu"
                    className="z-20 px-2 py-1 text-white font-semibold focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} w-screen py-1 flex-col`} style={{ background: 'linear-gradient(to right, #172554, #172554)' }}>
                <ul>
                    <li>
                        <Link to="/home" className="block px-4 py-1 text-white hover:bg-blue-800 hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="block px-4 py-1 text-white hover:bg-blue-800 hover:underline" onClick={() => setIsOpen(false)}>About Us</Link>
                    </li>
                    <li>
                        <a href="https://order.toasttab.com/online/jj-mahoneys" target="_blank" rel="noopener noreferrer" className="block px-4 py-1 text-white hover:bg-blue-800 hover:underline">
                            Takeout
                        </a>
                    </li>
                    <li>
                        <Link to="/menu" className="block px-4 py-1 text-white hover:bg-blue-800 hover:underline" onClick={() => setIsOpen(false)}>Menu</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block px-4 py-1 text-white hover:bg-blue-800 hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navigation;
