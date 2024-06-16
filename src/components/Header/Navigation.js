import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../photos/Logo.png"; // Import the logo

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-screen sticky top-0 z-[100]" style={{ background: 'linear-gradient(to right, #172554, #172554)' }}>
            <div className="flex items-center justify-between py-1 px-2">
                <Link to="/home">
                    <img src={Logo} alt="JJ Mahoney's Logo" className="h-6" />
                </Link>
                <button
                    aria-label="Toggle navigation menu"
                    className="z-20 px-2 py-1 text-white font-semibold focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} w-screen py-1 flex-col`} style={{ background: 'linear-gradient(to right, #172554, #172554)' }}>
                <ul className="text-[55%]"> {/* Reduced font size by 45% */}
                    <li>
                        <Link to="/home" className="block px-2 py-1 text-white hover:bg-gray-800" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="block px-2 py-1 text-white hover:bg-gray-800" onClick={() => setIsOpen(false)}>About Us</Link>
                    </li>
                    <li>
                        <a href="https://order.toasttab.com/online/jj-mahoneys" target="_blank" rel="noopener noreferrer" className="block px-2 py-1 text-white hover:bg-gray-800">
                            Takeout
                        </a>
                    </li>
                    <li>
                        <Link to="/menu" className="block px-2 py-1 text-white hover:bg-gray-800" onClick={() => setIsOpen(false)}>Menu</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block px-2 py-1 text-white hover:bg-gray-800" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navigation;
