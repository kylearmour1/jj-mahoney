// import React from 'react';

// const burgersSandwiches = [
//   { name: "Classic JJ Burger*", description: "Burger with Cheddar, grilled onions, lettuce, tomato, and house aioli.", price: "$21" },
//   { name: "Lucky Burger*", description: "Burger with Dubliner cheese, grilled onions, HP sauce, Irish bacon, lettuce, and tomato.", price: "$24" },
//   { name: "Bacon Bleu Burger*", description: "Burger with bacon, Bleu cheese dressing, grilled onions, lettuce, and tomato.", price: "$24" },
//   { name: "Impossible Burger", description: "Plant-based juicy patty with avocado, lettuce, tomato, and house aioli.", price: "$24" },
//   { name: "Beef Sliders*", description: "Three 2-ounce house sliders with Cheddar, lettuce, tomato, and house aioli.", price: "$19.5" },
//   { name: "Buffalo Chicken Burger", description: "Chicken strips with Provolone, buffalo sauce, house aioli, lettuce, and tomato.", price: "$19.5" },
//   { name: "Classic Reuben", description: "Corned beef with sauerkraut, grilled onions, Swiss cheese, and 1000 island dressing on marbled rye.", price: "$21" },
//   { name: "Irish Grilled Cheese", description: "Dubliner, Jack, and Cheddar cheese with Irish bacon on sourdough.", price: "$19" },
//   { name: "Cod Sandwich", description: "Panko-breaded Pacific cod fillet with lettuce, tomato, and tartar sauce on a potato bun.", price: "$19" },
//   { name: "Chipotle Wrap", description: "Steak or chicken with Cheddar, grilled onions, jalapeños, lettuce, tomato, and house chipotle aioli.", price: "$19" },
//   { name: "Baja Tacos", description: "Grilled chicken, tempura shrimp, or crispy cod topped with avocado, cilantro lime sauce, and Pico de Gallo. Substitute steak for $4.", price: "$17" },
//   { name: "Beef Dip", description: "Six-ounce steak with Provolone, grilled onions, and au jus. Make it three-quarters of a pound of steak for $5.", price: "$20" },
//   { name: "Bookmaker’s", description: "Six-ounce steak with Provolone, grilled onions, peppers, mushrooms, lettuce, tomato, and house aioli.", price: "$21" },
//   { name: "Club Sandwich", description: "Turkey, ham, bacon, Swiss cheese, avocado, lettuce, tomato, and house aioli on toasted sourdough.", price: "$21" },
//   { name: "Crispy Chicken w/ Bacon & Swiss", description: "Breaded chicken breast with Swiss cheese, bacon, lettuce, tomato, and honey mustard.", price: "$19.5" },
//   { name: "Vegetarian Wrap", description: "Provolone, mushrooms, grilled onions, roasted red peppers, carrots, spring mix, and house aioli.", price: "$21" },
// ];

// function BurgersSandwiches() {
//   return (
//     <div>
//       <h1>Burgers & Sandwiches</h1>
//       <ul>
//         {burgersSandwiches.map((item, index) => (
//           <li key={index}>
//             <p><span className="font-bold">{item.name}:</span> {item.description} {item.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BurgersSandwiches;






import React from 'react';
import { Link } from 'react-router-dom';

const burgersSandwiches = [
  { name: "Classic JJ Burger*", description: "Burger with Cheddar, grilled onions, lettuce, tomato, and house aioli.", price: "$21" },
  { name: "Lucky Burger*", description: "Burger with Dubliner cheese, grilled onions, HP sauce, Irish bacon, lettuce, and tomato.", price: "$24" },
  { name: "Bacon Bleu Burger*", description: "Burger with bacon, Bleu cheese dressing, grilled onions, lettuce, and tomato.", price: "$24" },
  { name: "Impossible Burger", description: "Plant-based juicy patty with avocado, lettuce, tomato, and house aioli.", price: "$24" },
  { name: "Beef Sliders*", description: "Three 2-ounce house sliders with Cheddar, lettuce, tomato, and house aioli.", price: "$19.5" },
  { name: "Buffalo Chicken Burger", description: "Chicken strips with Provolone, buffalo sauce, house aioli, lettuce, and tomato.", price: "$19.5" },
  { name: "Classic Reuben", description: "Corned beef with sauerkraut, grilled onions, Swiss cheese, and 1000 island dressing on marbled rye.", price: "$21" },
  { name: "Irish Grilled Cheese", description: "Dubliner, Jack, and Cheddar cheese with Irish bacon on sourdough.", price: "$19" },
  { name: "Cod Sandwich", description: "Panko-breaded Pacific cod fillet with lettuce, tomato, and tartar sauce on a potato bun.", price: "$19" },
  { name: "Chipotle Wrap", description: "Steak or chicken with Cheddar, grilled onions, jalapeños, lettuce, tomato, and house chipotle aioli.", price: "$19" },
  { name: "Baja Tacos", description: "Grilled chicken, tempura shrimp, or crispy cod topped with avocado, cilantro lime sauce, and Pico de Gallo. Substitute steak for $4.", price: "$17" },
  { name: "Beef Dip", description: "Six-ounce steak with Provolone, grilled onions, and au jus. Make it three-quarters of a pound of steak for $5.", price: "$20" },
  { name: "Bookmaker’s", description: "Six-ounce steak with Provolone, grilled onions, peppers, mushrooms, lettuce, tomato, and house aioli.", price: "$21" },
  { name: "Club Sandwich", description: "Turkey, ham, bacon, Swiss cheese, avocado, lettuce, tomato, and house aioli on toasted sourdough.", price: "$21" },
  { name: "Crispy Chicken w/ Bacon & Swiss", description: "Breaded chicken breast with Swiss cheese, bacon, lettuce, tomato, and honey mustard.", price: "$19.5" },
  { name: "Vegetarian Wrap", description: "Provolone, mushrooms, grilled onions, roasted red peppers, carrots, spring mix, and house aioli.", price: "$21" },
];

function BurgersSandwiches() {
  return (
    <div className="p-4 text-white min-h-screen">
      <div className="flex items-center mb-4">
        <Link to="/menu" className="text-white font-semibold hover:underline mr-4">&larr; Back</Link>
        <h1 className="text-2xl font-bold">Burgers & Sandwiches</h1>
      </div>
      <ul className="space-y-4">
        {burgersSandwiches.map((item, index) => (
          <li key={index} className="p-4 rounded shadow-md bg-gray-800">
            <p className="font-bold text-xl">{item.name}</p>
            <p>{item.description}</p>
            <p className="text-right font-semibold">{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BurgersSandwiches;
