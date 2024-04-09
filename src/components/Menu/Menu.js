
import React, { useState, useRef } from "react";

// Explicitly import images
import SpecialtyCocktails from "../photos/cocktails.jpg";
import HappyHour from "../photos/happyhour.png";
import Entrees from "../photos/entrees.jpg";
import BurgersSandwiches from "../photos/burgers.jpg";
import Appetizers from "../photos/apps.jpg";
import Brunch from "../photos/brunch.jpg";
import TapList from "../photos/taplist.jpg";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "Specialty Cocktails", ref: useRef(null), image: SpecialtyCocktails },
    { name: "Tap List", ref: useRef(null), image: TapList },
    { name: "Happy Hour", ref: useRef(null), image: HappyHour },
    { name: "Appetizers", ref: useRef(null), image: Appetizers },
    { name: "Entrees", ref: useRef(null), image: Entrees },
    { name: "Burgers & Sandwiches", ref: useRef(null), image: BurgersSandwiches },
    { name: "Brunch", ref: useRef(null), image: Brunch },
  ];

  const scrollToCategory = (categoryName) => {
    setIsOpen(false); // Close dropdown
    const category = categories.find(c => c.name === categoryName);
    if (category && category.ref.current) {
      const headerOffset = 64; // Adjust based on your header's actual height
      const elementPosition = category.ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="fixed top-16 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 text-white font-semibold hover:opacity-90 transition duration-300 bg-black border border-gray-400 rounded"
        >
          Categories
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-1 bg-black shadow-md rounded px-4 py-2">
            {categories.map((category) => (
              // Adjusting text size to be smaller
              <p key={category.name} onClick={() => scrollToCategory(category.name)} className="text-white cursor-pointer py-2 text-sm">
                {category.name}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="pt-24 p-4">
        {categories.map((category) => (
          <div key={category.name} ref={category.ref} className="mb-8 flex flex-col items-center">
            <h2 className="text-xl font-bold text-whitesmoke mb-2">{category.name}</h2>
            <img src={category.image} alt={category.name} className="w-96 h-auto mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
