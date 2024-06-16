// import React from 'react';
// const brunch = [
  
//   { name: "Traditional Irish Breakfast", description: "Two eggs any style, sausages, Irish rashers, beans, grilled tomatoes, house-roasted potatoes, and soda bread.", price: "$21" },
//   { name: "American Breakfast", description: "Two eggs any style, two strips of bacon, two sausage links, house-roasted potatoes, and choice of toast or biscuit.", price: "$17" },
//   { name: "Classic French Toast", description: "Two slices of hand-battered sourdough with powdered sugar and two eggs any style.", price: "$14" },
//   { name: "Build-Your-Own Omelet", description: "Four-egg omelet with Jack and Cheddar cheese, house-roasted potatoes, and three of the following items: corned beef, ham, bacon, red or green peppers, onions, tomatoes, Cremini mushrooms, or jalapeños. Additional toppings add $3 each.", price: "$19" },
//   { name: "Southern Biscuits & Gravy", description: "House-made peppered sausage gravy smothered over flaky biscuits. Top with two eggs any style for $5.", price: "$15" },
//   { name: "Corned Beef Hash", description: "House-brined cubed corned beef with house-roasted potatoes, diced red and green peppers, onions, topped with two eggs any style and Hollandaise sauce.", price: "$18" },
//   { name: "Breakfast Sandwich", description: "Scrambled eggs, Irish bacon, sliced tomato, Cheddar cheese, toasted sourdough, and house-roasted potatoes.", price: "$16" },
//   { name: "Irish Eggs Benedict", description: "Corned beef hash or Irish rasher bacon, topped with two poached eggs and Hollandaise sauce.", price: "$18" },
// ];

// function Brunch() {
//   return (
//     <div>
//       <h1>Brunch</h1>
//       <ul>
//         {brunch.map((item, index) => (
//           <li key={index}>
//             <p><span className="font-bold">{item.name}:</span> {item.description} {item.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Brunch;





import React from 'react';
import { Link } from 'react-router-dom';

const brunch = [
  { name: "Traditional Irish Breakfast", description: "Two eggs any style, sausages, Irish rashers, beans, grilled tomatoes, house-roasted potatoes, and soda bread.", price: "$21" },
  { name: "American Breakfast", description: "Two eggs any style, two strips of bacon, two sausage links, house-roasted potatoes, and choice of toast or biscuit.", price: "$17" },
  { name: "Classic French Toast", description: "Two slices of hand-battered sourdough with powdered sugar and two eggs any style.", price: "$14" },
  { name: "Build-Your-Own Omelet", description: "Four-egg omelet with Jack and Cheddar cheese, house-roasted potatoes, and three of the following items: corned beef, ham, bacon, red or green peppers, onions, tomatoes, Cremini mushrooms, or jalapeños. Additional toppings add $3 each.", price: "$19" },
  { name: "Southern Biscuits & Gravy", description: "House-made peppered sausage gravy smothered over flaky biscuits. Top with two eggs any style for $5.", price: "$15" },
  { name: "Corned Beef Hash", description: "House-brined cubed corned beef with house-roasted potatoes, diced red and green peppers, onions, topped with two eggs any style and Hollandaise sauce.", price: "$18" },
  { name: "Breakfast Sandwich", description: "Scrambled eggs, Irish bacon, sliced tomato, Cheddar cheese, toasted sourdough, and house-roasted potatoes.", price: "$16" },
  { name: "Irish Eggs Benedict", description: "Corned beef hash or Irish rasher bacon, topped with two poached eggs and Hollandaise sauce.", price: "$18" },
];

function Brunch() {
  return (
    <div className="p-4 text-white min-h-screen">
      <div className="flex items-center mb-4">
        <Link to="/menu" className="text-white font-semibold hover:underline mr-4">&larr; Back</Link>
        <h1 className="text-2xl font-bold">Brunch</h1>
      </div>
      <ul className="space-y-4">
        {brunch.map((item, index) => (
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

export default Brunch;


