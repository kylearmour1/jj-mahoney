


import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-green-800 to-gray-200 w-screen">
            <div className="flex items-center justify-between p-2.5">
                <h1 className="text-4xl text-black font-bold">JJ Mahoney's</h1>
                <button
                    aria-label="Toggle navigation menu"
                    className="z-20 px-4 py-2 text-black font-semibold focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>
            {/* Dropdown Menu */}
            <div className={`${isOpen ? "block" : "hidden"} w-screen bg-gradient-to-r from-green-800 to-gray-200 py-2 flex-col`}>
                <ul>
                    <li>
                        <Link to="/home" className="block px-4 py-2 text-black hover:bg-whitesmoke-700 hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/menu" className="block px-4 py-2 text-black hover:bg-whitesmoke-700 hover:underline" onClick={() => setIsOpen(false)}>Menu</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="block px-4 py-2 text-black hover:bg-whites-700 hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navigation;

