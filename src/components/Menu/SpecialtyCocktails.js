// import React from 'react';

// const specialtyCocktails = [
//   { name: "Jameson Cold Brew", description: "A smooth blend of Jameson Irish Whiskey and natural cold brew coffee flavor.", price: "$9" },
//   { name: "Blackberry Mojito", description: "A refreshing mix of rum, fresh blackberries, mint, lime juice, and soda.", price: "$10" },
//   { name: "Irish Mule", description: "A classic mule with an Irish twist, featuring whiskey, ginger beer, and lime.", price: "$10" },
//   { name: "Classic Margarita", description: "A traditional mix of tequila, triple sec, lime juice, and simple syrup.", price: "$10" },
//   { name: "Pineapple Paradise", description: "Rum, pineapple juice, coconut cream, and a splash of lime.", price: "$11" },
//   { name: "Spicy Paloma", description: "Tequila, grapefruit juice, lime, simple syrup, and a touch of cayenne.", price: "$12" },
//   { name: "Cucumber Collins", description: "Gin, lemon juice, simple syrup, and muddled cucumber topped with soda water.", price: "$11" },
//   { name: "Blueberry Basil Smash", description: "Vodka, fresh blueberries, basil leaves, lemon juice, and simple syrup.", price: "$12" },
// ];

// function SpecialtyCocktails() {
//   return (
//     <div>
//       <h1>Specialty Cocktails</h1>
//       <ul>
//         {specialtyCocktails.map((item, index) => (
//           <li key={index}>
//             <p><span className="font-bold">{item.name}:</span> {item.description} {item.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SpecialtyCocktails;




import React from 'react';
import { Link } from 'react-router-dom';

const specialtyCocktails = [
  { name: "Jameson Cold Brew", description: "A smooth blend of Jameson Irish Whiskey and natural cold brew coffee flavor.", price: "$9" },
  { name: "Blackberry Mojito", description: "A refreshing mix of rum, fresh blackberries, mint, lime juice, and soda.", price: "$10" },
  { name: "Irish Mule", description: "A classic mule with an Irish twist, featuring whiskey, ginger beer, and lime.", price: "$10" },
  { name: "Classic Margarita", description: "A traditional mix of tequila, triple sec, lime juice, and simple syrup.", price: "$10" },
  { name: "Pineapple Paradise", description: "Rum, pineapple juice, coconut cream, and a splash of lime.", price: "$11" },
  { name: "Spicy Paloma", description: "Tequila, grapefruit juice, lime, simple syrup, and a touch of cayenne.", price: "$12" },
  { name: "Cucumber Collins", description: "Gin, lemon juice, simple syrup, and muddled cucumber topped with soda water.", price: "$11" },
  { name: "Blueberry Basil Smash", description: "Vodka, fresh blueberries, basil leaves, lemon juice, and simple syrup.", price: "$12" },
];

function SpecialtyCocktails() {
  return (
    <div className="p-4 text-white min-h-screen">
      <div className="flex items-center mb-4">
        <Link to="/menu" className="text-white font-semibold hover:underline mr-4">&larr; Back</Link>
        <h1 className="text-2xl font-bold">Specialty Cocktails</h1>
      </div>
      <ul className="space-y-4">
        {specialtyCocktails.map((item, index) => (
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

export default SpecialtyCocktails;
