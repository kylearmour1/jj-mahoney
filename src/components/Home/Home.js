

import React from "react";

function Home() {
  return (
    <section className="home-section flex justify-center items-center h-screen">
      <div className="home-content text-center space-y-4">
        <a href="https://order.toasttab.com/online/jj-mahoneys" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 bg-white text-black rounded hover:bg-gray-100">Order Takeout</a>
        <a href="https://www.doordash.com/store/jj-mahoney's-irish-pub-redmond-18893/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 bg-white text-black rounded hover:bg-gray-100">Order Delivery with DoorDash</a>
        <a href="https://www.toasttab.com/jj-mahoneys/giftcards" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 bg-white text-black rounded hover:bg-gray-100">Purchase eGift Card</a>
      </div>
    </section>
  );
}

export default Home;
