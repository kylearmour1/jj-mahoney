import React from 'react';
import { Link } from 'react-router-dom';

const tapList = [
  { name: "Guinness Stout", price: "$9.5" },
  { name: "Smithwick's Red Ale", price: "$9.5" },
  { name: "Harp Lager", price: "$9.5" },
  { name: "Stella Artois", price: "$9.5" },
  { name: "Kilkenny Irish Cream Ale", price: "$9.5" },
  { name: "Black Raven Trickster IPA", price: "$8.5 / $13" },
  { name: "Georgetown Bodhizafa IPA", price: "$8.5 / $13" },
  { name: "Mac & Jack's African Amber", price: "$8.5 / $13" },
  { name: "Pelican Kiwanda Cream Ale", price: "$8.5 / $13" },
  { name: "Magners Irish Cider", price: "$9.5 / $15" },
  { name: "Founders Solid Gold Lager", price: "$8.5 / $13" }
];

function TapList() {
  return (
    <div className="p-4 text-white min-h-screen">
      <div className="flex items-center mb-4">
        <Link to="/menu" className="text-white font-semibold hover:underline mr-4">&larr; Back</Link>
        <h1 className="text-2xl font-bold">Tap List</h1>
      </div>
      <ul className="space-y-4">
        {tapList.map((item, index) => (
          <li key={index} className="p-4 rounded shadow-md bg-gray-800">
            <p className="font-bold text-xl">{item.name}</p>
            <p className="text-right font-semibold">{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TapList;
