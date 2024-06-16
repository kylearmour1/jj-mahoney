import React from "react";
import coverphoto from '../photos/cover.jpg'; // Import the background cover photo
import mapImage from '../photos/map.png'; // Import the map image

function Home() {
  return (
    <div className="flex flex-col items-center mb-20">
      {/* Section for the background image and links */}
      <section className="relative bg-cover bg-no-repeat bg-center w-full" style={{ backgroundImage: `url(${coverphoto})`, height: '60vh', paddingTop: '4rem' }}>
        <div className="absolute bottom-0 w-full flex flex-col sm:flex-row justify-between items-center p-4 space-y-2 sm:space-y-0 sm:space-x-2">
          <a href="https://order.toasttab.com/online/jj-mahoneys" target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-[#172554] text-white text-xs rounded hover:bg-gray-800">Order Takeout</a>
          <a href="https://www.doordash.com/store/jj-mahoneys-irish-pub-redmond-18893/" target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-[#172554] text-white text-xs rounded hover:bg-gray-800">Order Delivery with DoorDash</a>
          <a href="https://www.toasttab.com/jj-mahoneys/giftcards" target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-[#172554] text-white text-xs rounded hover:bg-gray-800">Purchase eGift Card</a>
        </div>
      </section>

      {/* Location, Phone, and Hours section */}
      <div className="mt-8 text-left text-xs"> 
        <h1 className="text-lg font-semibold text-left">Location</h1>
        <p className="mt-2">8932 161st Ave NE Redmond, WA 98052</p>
        
        <h1 className="text-lg font-semibold">Phone</h1>
        <p className="mt-2">
            <a href="tel:4255581866" className="text-blue-500 underline">425-558-1866</a>
        </p>

        <h1 className="text-lg font-semibold mt-4">Hours</h1>
        <p className="mt-2">
            Monday-Thursday: 11am-11pm <br />
            Friday: 11am-12am<br />
            Saturday: 9:30am-12am<br />
            Sunday: 9:30am-11pm
        </p>
      </div>

      <div className="mt-8">
        <a href="https://www.google.com/maps/place/JJ+Mahoney's+Irish+Pub/@47.6818932,-122.1255647,17z/data=!3m1!4b1!4m5!3m4!1s0x54900d4b7d0c1865:0x3071fd68fe582b19!8m2!3d47.6818896!4d-122.123376?shorturl=1" target="_blank" rel="noopener noreferrer">
          <img src={mapImage} alt="Map to JJ Mahoney's Irish Pub" className="max-w-full h-auto" />
        </a>
      </div>
      
      <p className="text-center mt-4 text-xs">
        Haven't been before? Take an interactive tour of our bar and restaurant!
      </p>
      <a href="https://www.google.com/maps/place/JJ+Mahoney's+Irish+Pub/@47.6818154,-122.1233737,3a,75y,66.72h,77.9t/data=!3m7!1e1!3m5!1sAF1QipPuDMbmxyGoNpDwmMajUq0R_ZpWzWhpNenzoSqR!2e10!3e12!7i13312!8i6656!4m5!3m4!1s0x54900d4b7d0c1865:0x3071fd68fe582b19!8m2!3d47.6818896!4d-122.123376" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 text-white font-bold py-1 px-2 rounded hover:bg-blue-700 text-xs">
        Take Tour
      </a>
    </div>
  );
}

export default Home;


