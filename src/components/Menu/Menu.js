
import React, { useState, useRef } from "react";

// Explicitly import images
import SpecialtyCocktails from "../photos/cocktails.jpg";
import HappyHour from "../photos/happyhour.png";
import Entrees from "../photos/entrees.jpg";
import BurgersSandwiches from "../photos/burgers.jpg";
import Appetizers from "../photos/apps.jpg";
import Brunch from "../photos/brunch.jpg";
import TapList from "../photos/tablist.jpg";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "Specialty Cocktails", ref: useRef(null), image: SpecialtyCocktails },
    { name: "Tap List", ref: useRef(null), image: TapList },
    { name: "Happy Hour", ref: useRef(null), image: HappyHour },
    { name: "Appetizers", ref: useRef(null), image: Appetizers },
    { name: "Entrees", ref: useRef(null), image: Entrees },
    { name: "Burgers and Sandwiches", ref: useRef(null), image: BurgersSandwiches },
    { name: "Brunch", ref: useRef(null), image: Brunch },
  ];

  const scrollToCategory = (categoryName) => {
    setIsOpen(false); // Close dropdown
    const category = categories.find(c => c.name === categoryName);
    if (category && category.ref.current) {
      category.ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="sticky top-0 z-50 w-full text-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 m-2 bg-gradient-to-r from-green-800 to-gray-500 text-white font-semibold rounded hover:opacity-90 transition duration-300"
        >
          Categories
        </button>

        {isOpen && (
          <div className="absolute mt-1 bg-white shadow-md rounded px-4 py-2 w-full text-center">
            {categories.map((category) => (
              <p key={category.name} onClick={() => scrollToCategory(category.name)} className="text-black cursor-pointer py-2">
                {category.name}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="w-full p-4">
        {categories.map((category) => (
          <div key={category.name} ref={category.ref} className="mb-8 flex flex-col items-center">
            <h2 className="text-xl font-bold text-whitesmoke mb-2">{category.name}</h2>
            <img src={category.image} alt={category.name} className="w-96 h-auto mx-auto" /> {/* Adjust the width here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
