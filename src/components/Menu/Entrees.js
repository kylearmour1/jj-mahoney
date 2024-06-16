// import React from 'react';

// const entrees = [
//   { name: "Corned Beef & Cabbage", description: "Guinness-braised corned beef brisket with buttered cabbage, garlic mash, vegetables, au jus, and horseradish served with soda bread.", price: "$25" },
//   { name: "Bangers Colcannon", description: "Pork sausage served with garlic mash mixed with bacon, leeks, green onion, cabbage, and sour cream, topped with Guinness gravy and served with soda bread.", price: "$24" },
//   { name: "Cottage Pie", description: "Ground chuck with carrots, onions, and peas, topped with garlic mash, Cheddar-Jack cheese, and dressed greens.", price: "$21" },
//   { name: "Steak & Guinness Pie", description: "Steak, mushrooms, and root vegetables simmered in Guinness, topped with flaky puff pastry and dressed greens.", price: "$21" },
//   { name: "Harp Beer-Battered Fish & Chips", description: "Three pieces of fresh Pacific cod in house-made Harp beer batter, served with steak fries and Irish mustard coleslaw.", price: "$22" },
//   { name: "Bangers & Mash", description: "Pork sausages served with garlic mash, vegetables, soda bread, and stew broth.", price: "$22" },
//   { name: "Chicken Pot Pie", description: "Creamy chicken and vegetables topped with flaky puff pastry and dressed greens.", price: "$20" },
//   { name: "Chicken Schnitzel", description: "Breaded chicken served with garlic mash, sautéed vegetables, and creamy Dijon sauce.", price: "$22" },
//   { name: "Grilled Salmon", description: "Six-ounce grilled salmon topped with champagne butter sauce, served with garlic mash and sautéed vegetables.", price: "$24" },
//   { name: "Corned Beef Mac & Cheese", description: "Dubliner, Jack, and Cheddar cheese mac and cheese with cubed Guinness-braised corned beef brisket, topped with toasted Panko.", price: "$19" },
// ];

// function Entrees() {
//   return (
//     <div>
//       <h1>Entrees</h1>
//       <ul>
//         {entrees.map((item, index) => (
//           <li key={index}>
//             <p><span className="font-bold">{item.name}:</span> {item.description} {item.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Entrees;




import React from 'react';
import { Link } from 'react-router-dom';

const entrees = [
  { name: "Corned Beef & Cabbage", description: "Guinness-braised corned beef brisket with buttered cabbage, garlic mash, vegetables, au jus, and horseradish served with soda bread.", price: "$25" },
  { name: "Bangers Colcannon", description: "Pork sausage served with garlic mash mixed with bacon, leeks, green onion, cabbage, and sour cream, topped with Guinness gravy and served with soda bread.", price: "$24" },
  { name: "Cottage Pie", description: "Ground chuck with carrots, onions, and peas, topped with garlic mash, Cheddar-Jack cheese, and dressed greens.", price: "$21" },
  { name: "Steak & Guinness Pie", description: "Steak, mushrooms, and root vegetables simmered in Guinness, topped with flaky puff pastry and dressed greens.", price: "$21" },
  { name: "Harp Beer-Battered Fish & Chips", description: "Three pieces of fresh Pacific cod in house-made Harp beer batter, served with steak fries and Irish mustard coleslaw.", price: "$22" },
  { name: "Bangers & Mash", description: "Pork sausages served with garlic mash, vegetables, soda bread, and stew broth.", price: "$22" },
  { name: "Chicken Pot Pie", description: "Creamy chicken and vegetables topped with flaky puff pastry and dressed greens.", price: "$20" },
  { name: "Chicken Schnitzel", description: "Breaded chicken served with garlic mash, sautéed vegetables, and creamy Dijon sauce.", price: "$22" },
  { name: "Grilled Salmon", description: "Six-ounce grilled salmon topped with champagne butter sauce, served with garlic mash and sautéed vegetables.", price: "$24" },
  { name: "Corned Beef Mac & Cheese", description: "Dubliner, Jack, and Cheddar cheese mac and cheese with cubed Guinness-braised corned beef brisket, topped with toasted Panko.", price: "$19" },
];

function Entrees() {
  return (
    <div className="p-4 text-white min-h-screen">
      <div className="flex items-center mb-4">
        <Link to="/menu" className="text-white font-semibold hover:underline mr-4">&larr; Back</Link>
        <h1 className="text-2xl font-bold">Entrees</h1>
      </div>
      <ul className="space-y-4">
        {entrees.map((item, index) => (
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

export default Entrees;
