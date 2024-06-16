import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "Specialty Cocktails", path: "SpecialtyCocktails" },
    { name: "Tap List", path: "TapList" },
    { name: "Bottles/Cans", path: "BottlesCan" },
    { name: "Happy Hour", path: "HappyHour" },
    { name: "Appetizers", path: "Appetizers" },
    { name: "Entrees", path: "Entrees" },
    { name: "Burgers & Sandwiches", path: "BurgersSandwiches" },
    { name: "Brunch", path: "Brunch" },
  ];

  const menuItems = {
    "Specialty Cocktails": [
      <p><span className="font-bold">Jameson Cold Brew:</span> A smooth blend of Jameson Irish Whiskey and natural cold brew coffee flavor. $9</p>,
      <p><span className="font-bold">Blackberry Mojito:</span> A refreshing mix of rum, fresh blackberries, mint, lime juice, and soda. $10</p>,
      <p><span className="font-bold">Irish Mule:</span> A classic mule with an Irish twist, featuring whiskey, ginger beer, and lime. $10</p>,
      <p><span className="font-bold">Classic Margarita:</span> A traditional mix of tequila, triple sec, lime juice, and simple syrup. $10</p>,
      <p><span className="font-bold">Pineapple Paradise:</span> Rum, pineapple juice, coconut cream, and a splash of lime. $11</p>,
      <p><span className="font-bold">Spicy Paloma:</span> Tequila, grapefruit juice, lime, simple syrup, and a touch of cayenne. $12</p>,
      <p><span className="font-bold">Cucumber Collins:</span> Gin, lemon juice, simple syrup, and muddled cucumber topped with soda water. $11</p>,
      <p><span className="font-bold">Blueberry Basil Smash:</span> Vodka, fresh blueberries, basil leaves, lemon juice, and simple syrup. $12</p>,
    ],
    "Tap List": [
      <p><span className="font-bold">Guinness Stout:</span> $9.50</p>,
      <p><span className="font-bold">Smithwicks Red Ale:</span> $9.50</p>,
      <p><span className="font-bold">Harp Lager:</span> $9.50</p>,
      <p><span className="font-bold">Stella Artois:</span> $9.50</p>,
      <p><span className="font-bold">Kilkenny Irish Cream Ale:</span> $9.50</p>,
      <p><span className="font-bold">Black Raven Trickster IPA:</span> $9.50</p>,
      <p><span className="font-bold">Georgetown Bodhizafa IPA:</span> $9.50</p>,
      <p><span className="font-bold">Mac & Jacks African Amber:</span> $9.50</p>,
      <p><span className="font-bold">Pelican Hefeweizen:</span> $9.50</p>,
      <p><span className="font-bold">Magners Irish Cider:</span> $9.50</p>,
      <p><span className="font-bold">Founders Solid Gold Lager:</span> $9.50</p>,
    ],
    "Bottles/Cans": [
      <p><span className="font-bold">Coors Light:</span> $9.50</p>,
      <p><span className="font-bold">Bud Light:</span> $9.50</p>,
      <p><span className="font-bold">Truly Hard Seltzer:</span> $9.50</p>,
      <p><span className="font-bold">Heineken:</span> $9.50</p>,
      <p><span className="font-bold">Corona:</span> $9.50</p>,
      <p><span className="font-bold">Pacifico:</span> $9.50</p>,
      <p><span className="font-bold">Blue Moon:</span> $9.50</p>,
      <p><span className="font-bold">Black Butte Porter:</span> $9.50</p>,
      <p><span className="font-bold">Seattle Dry Cider (16 oz.):</span> $9.50</p>,
      <p><span className="font-bold">Ghostfish (Gluten-Free):</span> $9.50</p>,
    ],
    "Happy Hour": [
      <p><span className="font-bold">Frickles:</span> Fried pickle chips served with ranch dressing. $6.5</p>,
      <p><span className="font-bold">Fried Mushrooms:</span> House-breaded Cremini mushrooms served with Tiger Sauce. $6.5</p>,
      <p><span className="font-bold">JJ’s House-Cut Fries:</span> Freshly cut fries seasoned to perfection. $6.5</p>,
    ],
    "Appetizers": [
      <p><span className="font-bold">Sausage Rolls:</span> Pork sausage wrapped in flaky pastry, served with stone ground mustard. $14</p>,
      <p><span className="font-bold">Bacon Wrapped Prawns:</span> Six jumbo prawns wrapped in bacon, served with house garlic aioli. $19</p>,
      <p><span className="font-bold">Potato Skins:</span> Six potato skins topped with Cheddar-Jack cheese, crispy bacon, and green onion. $14</p>,
      <p><span className="font-bold">8 Jumbo Wings:</span> Eight jumbo wings tossed in hot buffalo or sweet BBQ sauce. $18</p>,
      <p><span className="font-bold">Mac N Cheese Poppers:</span> Bite-sized mac and cheese bites, fried to golden perfection. $11</p>,
      <p><span className="font-bold">Mozzarella Cheese Sticks:</span> Crispy mozzarella sticks served with marinara sauce. $9</p>,
      <p><span className="font-bold">Chicken Breast Strips & Fries:</span> Breaded chicken breast strips served with fries. $18</p>,
      <p><span className="font-bold">Nachos:</span> House tortilla or potato chips topped with Cheddar-Jack cheese, Pico de Gallo, crispy bacon, and a scoop of sour cream & guacamole. Add steak, chicken, or corned beef for $5. $12</p>,
      <p><span className="font-bold">Poutine:</span> House-cut fries topped with Dubliner cheese and house Guinness gravy. $13</p>,
      <p><span className="font-bold">Roasted Red Pepper & Garlic Hummus:</span> Creamy hummus made with roasted red peppers and garlic. $15</p>,
      <p><span className="font-bold">Corned Beef & Cabbage Egg Rolls:</span> Egg rolls filled with corned beef and cabbage, served with 1000 Island dipping sauce. $15</p>,
    ],
    "Entrees": [
      <p><span className="font-bold">Corned Beef & Cabbage:</span> Guinness-braised corned beef brisket with buttered cabbage, garlic mash, vegetables, au jus, and horseradish served with soda bread. $25</p>,
      <p><span className="font-bold">Bangers Colcannon:</span> Pork sausage served with garlic mash mixed with bacon, leeks, green onion, cabbage, and sour cream, topped with Guinness gravy and served with soda bread. $24</p>,
      <p><span className="font-bold">Cottage Pie:</span> Ground chuck with carrots, onions, and peas, topped with garlic mash, Cheddar-Jack cheese, and dressed greens. $21</p>,
      <p><span className="font-bold">Steak & Guinness Pie:</span> Steak, mushrooms, and root vegetables simmered in Guinness, topped with flaky puff pastry and dressed greens. $21</p>,
      <p><span className="font-bold">Harp Beer-Battered Fish & Chips:</span> Three pieces of fresh Pacific cod in house-made Harp beer batter, served with steak fries and Irish mustard coleslaw. $22</p>,
      <p><span className="font-bold">Bangers & Mash:</span> Pork sausages served with garlic mash, vegetables, soda bread, and stew broth. $22</p>,
      <p><span className="font-bold">Chicken Pot Pie:</span> Creamy chicken and vegetables topped with flaky puff pastry and dressed greens. $20</p>,
      <p><span className="font-bold">Chicken Schnitzel:</span> Breaded chicken served with garlic mash, sautéed vegetables, and creamy Dijon sauce. $22</p>,
      <p><span className="font-bold">Grilled Salmon:</span> Six-ounce grilled salmon topped with champagne butter sauce, served with garlic mash and sautéed vegetables. $24</p>,
      <p><span className="font-bold">Corned Beef Mac & Cheese:</span> Dubliner, Jack, and Cheddar cheese mac and cheese with cubed Guinness-braised corned beef brisket, topped with toasted Panko. $19</p>,
    ],
    "Burgers & Sandwiches": [
      <p><span className="font-bold">Classic JJ Burger*:</span> Burger with Cheddar, grilled onions, lettuce, tomato, and house aioli. $21</p>,
      <p><span className="font-bold">Lucky Burger*:</span> Burger with Dubliner cheese, grilled onions, HP sauce, Irish bacon, lettuce, and tomato. $24</p>,
      <p><span className="font-bold">Bacon Bleu Burger*:</span> Burger with bacon, Bleu cheese dressing, grilled onions, lettuce, and tomato. $24</p>,
      <p><span className="font-bold">Impossible Burger:</span> Plant-based juicy patty with avocado, lettuce, tomato, and house aioli. $24</p>,
      <p><span className="font-bold">Beef Sliders*:</span> Three 2-ounce house sliders with Cheddar, lettuce, tomato, and house aioli. $19.5</p>,
      <p><span className="font-bold">Buffalo Chicken Burger:</span> Chicken strips with Provolone, buffalo sauce, house aioli, lettuce, and tomato. $19.5</p>,
      <p><span className="font-bold">Classic Reuben:</span> Corned beef with sauerkraut, grilled onions, Swiss cheese, and 1000 island dressing on marbled rye. $21</p>,
      <p><span className="font-bold">Irish Grilled Cheese:</span> Dubliner, Jack, and Cheddar cheese with Irish bacon on sourdough. $19</p>,
      <p><span className="font-bold">Cod Sandwich:</span> Panko-breaded Pacific cod fillet with lettuce, tomato, and tartar sauce on a potato bun. $19</p>,
      <p><span className="font-bold">Chipotle Wrap:</span> Steak or chicken with Cheddar, grilled onions, jalapeños, lettuce, tomato, and house chipotle aioli. $19</p>,
      <p><span className="font-bold">Baja Tacos:</span> Grilled chicken, tempura shrimp, or crispy cod topped with avocado, cilantro lime sauce, and Pico de Gallo. Substitute steak for $4. $17</p>,
      <p><span className="font-bold">Beef Dip:</span> Six-ounce steak with Provolone, grilled onions, and au jus. Make it three-quarters of a pound of steak for $5. $20</p>,
      <p><span className="font-bold">Bookmaker’s:</span> Six-ounce steak with Provolone, grilled onions, peppers, mushrooms, lettuce, tomato, and house aioli. $21</p>,
      <p><span className="font-bold">Club Sandwich:</span> Turkey, ham, bacon, Swiss cheese, avocado, lettuce, tomato, and house aioli on toasted sourdough. $21</p>,
      <p><span className="font-bold">Crispy Chicken w/ Bacon & Swiss:</span> Breaded chicken breast with Swiss cheese, bacon, lettuce, tomato, and honey mustard. $19.5</p>,
      <p><span className="font-bold">Vegetarian Wrap:</span> Provolone, mushrooms, grilled onions, roasted red peppers, carrots, spring mix, and house aioli. $21</p>,
    ],
    "Brunch": [
      <p><span className="font-bold">Traditional Irish Breakfast:</span> Two eggs any style, sausages, Irish rashers, beans, grilled tomatoes, house-roasted potatoes, and soda bread. $21</p>,
      <p><span className="font-bold">American Breakfast:</span> Two eggs any style, two strips of bacon, two sausage links, house-roasted potatoes, and choice of toast or biscuit. $17</p>,
      <p><span className="font-bold">Classic French Toast:</span> Two slices of hand-battered sourdough with powdered sugar and two eggs any style. $14</p>,
      <p><span className="font-bold">Build-Your-Own Omelet:</span> Four-egg omelet with Jack and Cheddar cheese, house-roasted potatoes, and three of the following items: corned beef, ham, bacon, red or green peppers, onions, tomatoes, Cremini mushrooms, or jalapeños. Additional toppings add $3 each. $19</p>,
      <p><span className="font-bold">Southern Biscuits & Gravy:</span> House-made peppered sausage gravy smothered over flaky biscuits. Top with two eggs any style for $5. $15</p>,
      <p><span className="font-bold">Corned Beef Hash:</span> House-brined cubed corned beef with house-roasted potatoes, diced red and green peppers, onions, topped with two eggs any style and Hollandaise sauce. $18</p>,
      <p><span className="font-bold">Breakfast Sandwich:</span> Scrambled eggs, Irish bacon, sliced tomato, Cheddar cheese, toasted sourdough, and house-roasted potatoes. $16</p>,
      <p><span className="font-bold">Irish Eggs Benedict:</span> Corned beef hash or Irish rasher bacon, topped with two poached eggs and Hollandaise sauce. $18</p>,
    ],
  };

  return (
    <div className="flex flex-col items-center w-full pb-16">
      <div className="fixed top-15 right-0 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 text-white font-semibold hover:opacity-90 transition duration-300 bg-black border border-gray-400 rounded"
        >
          Categories
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-1 bg-black shadow-md rounded px-4 py-2">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/menu/${category.path}`}
                onClick={() => setIsOpen(false)}
                className="text-white cursor-pointer py-2 text-xs hover:underline block"
              >
                {category.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="pt-24 p-4 w-full">
        {categories.map((category) => (
          <div key={category.name} className="mb-8 flex flex-col items-center">
            <h2 className="text-lg font-bold text-white mb-2">{category.name}</h2>
            <ul className="space-y-2 text-xs text-white">
              {menuItems[category.name].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Location, Phone, and Hours section */}
        <div className="mt-8 text-left text-xs">
          <h1 className="text-lg font-semibold">Location</h1>
          <p className="mt-2">8932 161st Ave NE Redmond, WA 98052</p>

          <h1 className="text-lg font-semibold">Phone</h1>
          <p className="mt-2">
            <a href="tel:4255581866" className="text-blue-500 underline">
              425-558-1866
            </a>
          </p>

          <h1 className="text-lg font-semibold mt-4">Hours</h1>
          <p className="mt-2">
            Monday-Thursday: 11am-11pm <br />
            Friday: 11am-12am<br />
            Saturday: 9:30am-12am<br />
            Sunday: 9:30am-11pm
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;

