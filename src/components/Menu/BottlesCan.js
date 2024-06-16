// import React from 'react';

// const bottlesCan = [
//   { name: "Coors Light", price: "$9.50" },
//   { name: "Bud Light", price: "$9.50" },
//   { name: "Truly Hard Seltzer", price: "$9.50" },
//   { name: "Heineken", price: "$9.50" },
//   { name: "Corona", price: "$9.50" },
//   { name: "Pacifico", price: "$9.50" },
//   { name: "Blue Moon", price: "$9.50" },
//   { name: "Black Butte Porter", price: "$9.50" },
//   { name: "Seattle Dry Cider (16 oz.)", price: "$9.50" },
//   { name: "Ghostfish (Gluten-Free)", price: "$9.50" },
// ];

// function BottlesCan() {
//   return (
//     <div>
//       <h1>Bottles & Cans</h1>
//       <ul>
//         {bottlesCan.map((item, index) => (
//           <li key={index}>
//             <p><span className="font-bold">{item.name}:</span> {item.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BottlesCan;





import React from 'react';
import { Link } from 'react-router-dom';

const bottlesCan = [
  { name: "Coors Light", price: "$9.50" },
  { name: "Bud Light", price: "$9.50" },
  { name: "Truly Hard Seltzer", price: "$9.50" },
  { name: "Heineken", price: "$9.50" },
  { name: "Corona", price: "$9.50" },
  { name: "Pacifico", price: "$9.50" },
  { name: "Blue Moon", price: "$9.50" },
  { name: "Black Butte Porter", price: "$9.50" },
  { name: "Seattle Dry Cider (16 oz.)", price: "$9.50" },
  { name: "Ghostfish (Gluten-Free)", price: "$9.50" },
];

function BottlesCan() {
  return (
    <div className="p-4 text-white min-h-screen">
      <div className="flex items-center mb-4">
        <Link to="/menu" className="text-white font-semibold hover:underline mr-4">&larr; Back</Link>
        <h1 className="text-2xl font-bold">Bottles & Cans</h1>
      </div>
      <ul className="space-y-4">
        {bottlesCan.map((item, index) => (
          <li key={index} className="p-4 rounded shadow-md bg-gray-800">
            <p className="font-bold text-xl">{item.name}</p>
            <p className="text-right font-semibold">{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BottlesCan;
