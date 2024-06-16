// import React from 'react';

// const appetizers = [
//   { name: "Sausage Rolls", description: "Pork sausage wrapped in flaky pastry, served with stone ground mustard.", price: "$14" },
//   { name: "Bacon Wrapped Prawns", description: "Six jumbo prawns wrapped in bacon, served with house garlic aioli.", price: "$19" },
//   { name: "Potato Skins", description: "Six potato skins topped with Cheddar-Jack cheese, crispy bacon, and green onion.", price: "$14" },
//   { name: "8 Jumbo Wings", description: "Eight jumbo wings tossed in hot buffalo or sweet BBQ sauce.", price: "$18" },
//   { name: "Mac N Cheese Poppers", description: "Bite-sized mac and cheese bites, fried to golden perfection.", price: "$11" },
//   { name: "Mozzarella Cheese Sticks", description: "Crispy mozzarella sticks served with marinara sauce.", price: "$9" },
//   { name: "Chicken Breast Strips & Fries", description: "Breaded chicken breast strips served with fries.", price: "$18" },
//   { name: "Nachos", description: "House tortilla or potato chips topped with Cheddar-Jack cheese, Pico de Gallo, crispy bacon, and a scoop of sour cream & guacamole. Add steak, chicken, or corned beef for $5.", price: "$12" },
//   { name: "Poutine", description: "House-cut fries topped with Dubliner cheese and house Guinness gravy.", price: "$13" },
//   { name: "Roasted Red Pepper & Garlic Hummus", description: "Creamy hummus made with roasted red peppers and garlic.", price: "$15" },
//   { name: "Corned Beef & Cabbage Egg Rolls", description: "Egg rolls filled with corned beef and cabbage, served with 1000 Island dipping sauce.", price: "$15" },
// ];

// function Appetizers() {
//   return (
//     <div>
//       <h1>Appetizers</h1>
//       <ul>
//         {appetizers.map((item, index) => (
//           <li key={index}>
//             <p><span className="font-bold">{item.name}:</span> {item.description} {item.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Appetizers;


import React from 'react';
import { Link } from 'react-router-dom';

const appetizers = [
  { name: "Sausage Rolls", description: "Pork sausage wrapped in flaky pastry, served with stone ground mustard.", price: "$14" },
  { name: "Bacon Wrapped Prawns", description: "Six jumbo prawns wrapped in bacon, served with house garlic aioli.", price: "$19" },
  { name: "Potato Skins", description: "Six potato skins topped with Cheddar-Jack cheese, crispy bacon, and green onion.", price: "$14" },
  { name: "8 Jumbo Wings", description: "Eight jumbo wings tossed in hot buffalo or sweet BBQ sauce.", price: "$18" },
  { name: "Mac N Cheese Poppers", description: "Bite-sized mac and cheese bites, fried to golden perfection.", price: "$11" },
  { name: "Mozzarella Cheese Sticks", description: "Crispy mozzarella sticks served with marinara sauce.", price: "$9" },
  { name: "Chicken Breast Strips & Fries", description: "Breaded chicken breast strips served with fries.", price: "$18" },
  { name: "Nachos", description: "House tortilla or potato chips topped with Cheddar-Jack cheese, Pico de Gallo, crispy bacon, and a scoop of sour cream & guacamole. Add steak, chicken, or corned beef for $5.", price: "$12" },
  { name: "Poutine", description: "House-cut fries topped with Dubliner cheese and house Guinness gravy.", price: "$13" },
  { name: "Roasted Red Pepper & Garlic Hummus", description: "Creamy hummus made with roasted red peppers and garlic.", price: "$15" },
  { name: "Corned Beef & Cabbage Egg Rolls", description: "Egg rolls filled with corned beef and cabbage, served with 1000 Island dipping sauce.", price: "$15" },
];

function Appetizers() {
  return (
    <div className="p-4 text-white min-h-screen">
      <div className="flex items-center mb-4">
        <Link to="/menu" className="text-white font-semibold hover:underline mr-4">&larr; Back</Link>
        <h1 className="text-2xl font-bold">Appetizers</h1>
      </div>
      <ul className="space-y-4">
        {appetizers.map((item, index) => (
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

export default Appetizers;
