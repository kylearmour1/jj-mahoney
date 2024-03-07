

import React from "react";
import coverphoto from '../photos/cover.jpg'; // Import the image file

function Home() {
  return (
    <div className="flex flex-col items-center mb-20"> {/* Added margin-bottom to the whole container */}
      {/* Section for the background image and links */}
      <section className="bg-cover bg-no-repeat bg-center w-full" style={{ backgroundImage: `url(${coverphoto})`, height: '60vh' }}>
        <div className="flex flex-col justify-center items-center h-full">
          <div className="text-center space-y-4">
            <a href="https://order.toasttab.com/online/jj-mahoneys" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 bg-white text-black rounded hover:bg-gray-100">Order Takeout</a>
            <a href="https://www.doordash.com/store/jj-mahoneys-irish-pub-redmond-18893/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 bg-white text-black rounded hover:bg-gray-100">Order Delivery with DoorDash</a>
            <a href="https://www.toast1994
            tab.com/jj-mahoneys/giftcards" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 bg-white text-black rounded hover:bg-gray-100">Purchase eGift Card</a>
          </div>
        </div>
      </section>

      {/* HelloWorld text directly underneath the photo */}
      

      {/* About JJ Mahoney's section */}
      <div className="text-center py-4 px-4 max-w-4xl">
        <h2 className="text-2xl text-gray-200 mb-4">About JJ Mahoney's</h2>
        <p className="text-gray-200 mb-2">
          We are a relaxed bar, with friendly staff, great food and drinks.
        </p>
        <p className="text-gray-200 mb-2">
          John James Mahoney was born in 1874 in Cork County Ireland.
        </p>
        <p className="text-gray-200 mb-2">
          He left Ireland on March 27, 1893 from Queenstown on the S.S. Pavonia in search of opportunity in the "New World". After 7 days at sea, he arrived in Boston on April 3, 1893. He had nothing more than the shirt on his back and a small bag of personal items.
        </p>
        <p className="text-gray-200 mb-2">
          In the fall of 1896 he joined the US Marine Corps and served for 38 years fighting in the Spanish American War and World War 1. He obtained his official citizenship in 1910 just before meeting his wife-to-be, Lillian Schutte. John & Lillian married in 1915. They had 6 children before his passing in 1951, at the age of 77. His youngest daughter, Maureen, married, has 4 children, one of whom is owner of this pub.
        </p>
        <p className="text-gray-200">
          John J. Mahoney was a classic Irishman sharing his culture and heritage with his children and grandchildren. This pub has been opened in his honor.
        </p>
      </div>
    </div>
  );
}

export default Home;
