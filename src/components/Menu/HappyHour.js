// import React from 'react';

// const happyHour = [
//   { name: "Frickles", description: "Fried pickle chips served with ranch dressing.", price: "$6.5" },
//   { name: "Fried Mushrooms", description: "House-breaded Cremini mushrooms served with Tiger Sauce.", price: "$6.5" },
//   { name: "JJ’s House-Cut Fries", description: "Freshly cut fries seasoned to perfection.", price: "$6.5" },
//   { name: "Mini Corn Dogs", description: "Bite-sized corn dogs served with mustard and ketchup.", price: "$7.5" },
//   { name: "Garlic Parmesan Fries", description: "House fries topped with garlic and Parmesan cheese.", price: "$8.5" },
//   { name: "Soft Pretzel Bites", description: "Served with beer cheese dip.", price: "$7.5" },
//   { name: "Fried Pickles", description: "Served with ranch dressing.", price: "$6.5" },
//   { name: "Buffalo Cauliflower", description: "Fried cauliflower tossed in buffalo sauce, served with ranch.", price: "$8.5" },
// ];

// function HappyHour() {
//   return (
//     <div>
//       <h1>3:00p-6:00PM</h1>
//       <h1>9:00PM to Close</h1>
      
//       <h1>Sunday All Day</h1>
//       <br></br>
//       <ul>
//         {happyHour.map((item, index) => (
//           <li key={index}>
//             <p><span className="font-bold">{item.name}:</span> {item.description} {item.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default HappyHour;







// import React from 'react';
// import { Link } from 'react-router-dom';

// const happyHour = [
//   { name: "Frickles", description: "Fried pickle chips w/ ranch.", price: "$6.5" },
//   { name: "Fried Mushrooms", description: "House-breaded Cremini mushrooms w/ Tiger Sauce.", price: "$6.5" },
//   { name: "JJ’s House-Cut Fries", description: "", price: "$6.5" },
//   { name: "Small House Salad", description: "", price: "$6.5" },
//   { name: "Nachos", description: "Cheddar, bacon, choice beef $4.", price: "$7.5" },
//   { name: "Chicken Bites", description: "Breaded chicken tossed in BBQ, Buffalo, or sweet & spicy chili sauce.", price: "$7.5" },
//   { name: "Jalapeño Poppers", description: "Breaded jalapeños filled w/ cream cheese.", price: "$7.5" },
//   { name: "Beef Sliders", description: "Two 2 oz. house sliders, Cheddar, lettuce, tomato, house aioli.", price: "$7.5" },
//   { name: "Potato Skins", description: "Four skins w/ Cheddar-Jack, crispy bacon, green onion, sour cream.", price: "$7.5" },
//   { name: "Buffalo Chicken Strip Burger", description: "Chicken strips, hot sauce, Provolone, lettuce, tomato, house aioli.", price: "$7.5" },
//   { name: "Baja Chicken Tacos", description: "2 corn tortillas, grilled chicken, avocado, Pico de Gallo, cilantro lime sauce.", price: "$7.5" },
// ];

// function HappyHour() {
//   return (
//     <div className="p-4 bg-gradient-to-r from-blue-800 to-blue-900 text-white min-h-screen">
//       <div className="flex items-center mb-4">
//         <Link to="/" className="text-white font-semibold hover:underline mr-4">&larr; Back</Link>
//         <h1 className="text-2xl font-bold">Happy Hour</h1>
//       </div>
//       <p className="text-lg">Mon - Sat: 3pm - 6pm, 9pm to close</p>
//       <p className="text-lg mb-6">Sunday: All Day</p>
//       <ul className="space-y-4">
//         {happyHour.map((item, index) => (
//           <li key={index} className="bg-blue-700 p-4 rounded shadow-md">
//             <p className="font-bold text-xl">{item.name}</p>
//             <p>{item.description}</p>
//             <p className="text-right font-semibold">{item.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default HappyHour;




// import React from 'react';
// import { Link } from 'react-router-dom';

// const happyHour = [
//   { name: "Frickles", description: "Fried pickle chips w/ ranch.", price: "$6.5" },
//   { name: "Fried Mushrooms", description: "House-breaded Cremini mushrooms w/ Tiger Sauce.", price: "$6.5" },
//   { name: "JJ’s House-Cut Fries", description: "", price: "$6.5" },
//   { name: "Small House Salad", description: "", price: "$6.5" },
//   { name: "Nachos", description: "Cheddar, bacon, choice beef $4.", price: "$7.5" },
//   { name: "Chicken Bites", description: "Breaded chicken tossed in BBQ, Buffalo, or sweet & spicy chili sauce.", price: "$7.5" },
//   { name: "Jalapeño Poppers", description: "Breaded jalapeños filled w/ cream cheese.", price: "$7.5" },
//   { name: "Beef Sliders", description: "Two 2 oz. house sliders, Cheddar, lettuce, tomato, house aioli.", price: "$7.5" },
//   { name: "Potato Skins", description: "Four skins w/ Cheddar-Jack, crispy bacon, green onion, sour cream.", price: "$7.5" },
//   { name: "Buffalo Chicken Strip Burger", description: "Chicken strips, hot sauce, Provolone, lettuce, tomato, house aioli.", price: "$7.5" },
//   { name: "Baja Chicken Tacos", description: "2 corn tortillas, grilled chicken, avocado, Pico de Gallo, cilantro lime sauce.", price: "$7.5" },
// ];

// function HappyHour() {
//   return (
//     <div className="p-4 bg-gradient-to-r from-blue-800 to-blue-900 text-white min-h-screen">
//       <div className="flex items-center mb-4">
//         <Link to="/menu" className="text-white font-semibold hover:underline mr-4">&larr; Back</Link>
//         <h1 className="text-2xl font-bold">Happy Hour</h1>
//       </div>
//       <p className="text-lg">Mon - Sat: 3pm - 6pm, 9pm to close</p>
//       <p className="text-lg mb-6">Sunday: All Day</p>
//       <ul className="space-y-4">
//         {happyHour.map((item, index) => (
//           <li key={index} className="bg-blue-700 p-4 rounded shadow-md">
//             <p className="font-bold text-xl">{item.name}</p>
//             <p>{item.description}</p>
//             <p className="text-right font-semibold">{item.price}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default HappyHour;








import React from 'react';
import { Link } from 'react-router-dom';

const happyHour = [
  { name: "Frickles", description: "Fried pickle chips w/ ranch.", price: "$6.5" },
  { name: "Fried Mushrooms", description: "House-breaded Cremini mushrooms w/ Tiger Sauce.", price: "$6.5" },
  { name: "JJ’s House-Cut Fries", description: "", price: "$6.5" },
  { name: "Small House Salad", description: "", price: "$6.5" },
  { name: "Nachos", description: "Cheddar, bacon, choice beef $4.", price: "$7.5" },
  { name: "Chicken Bites", description: "Breaded chicken tossed in BBQ, Buffalo, or sweet & spicy chili sauce.", price: "$7.5" },
  { name: "Jalapeño Poppers", description: "Breaded jalapeños filled w/ cream cheese.", price: "$7.5" },
  { name: "Beef Sliders", description: "Two 2 oz. house sliders, Cheddar, lettuce, tomato, house aioli.", price: "$7.5" },
  { name: "Potato Skins", description: "Four skins w/ Cheddar-Jack, crispy bacon, green onion, sour cream.", price: "$7.5" },
  { name: "Buffalo Chicken Strip Burger", description: "Chicken strips, hot sauce, Provolone, lettuce, tomato, house aioli.", price: "$7.5" },
  { name: "Baja Chicken Tacos", description: "2 corn tortillas, grilled chicken, avocado, Pico de Gallo, cilantro lime sauce.", price: "$7.5" },
];

function HappyHour() {
  return (
    <div className="p-4 text-white min-h-screen">
      <div className="flex items-center mb-4">
        <Link to="/menu" className="text-white font-semibold hover:underline mr-4">&larr; Back</Link>
        <h1 className="text-2xl font-bold">Happy Hour</h1>
      </div>
      <p className="text-lg">Mon - Sat: 3pm - 6pm, 9pm to close</p>
      <p className="text-lg mb-6">Sunday: All Day</p>
      <ul className="space-y-4">
        {happyHour.map((item, index) => (
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

export default HappyHour;

