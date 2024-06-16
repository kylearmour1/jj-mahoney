
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  const categories = [
    { name: "Specialty Cocktails ", path: "SpecialtyCocktails" },
    { name: "Tap List", path: "TapList" },
    { name: "Bottles/Cans", path: "BottlesCan" },
    { name: "Happy Hour", path: "HappyHour" },
    { name: "Appetizers", path: "Appetizers" },
    { name: "Entrees", path: "Entrees" },
    { name: "Burgers & Sandwiches", path: "BurgersSandwiches" },
    { name: "Brunch", path: "Brunch" },
  ];

  return (
    <div className="flex flex-col items-center w-full pb-16">
      <div className="mt-4 flex flex-col items-center">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/menu/${category.path}`}
            className="py-2 m-2 text-white font-semibold hover:underline"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
