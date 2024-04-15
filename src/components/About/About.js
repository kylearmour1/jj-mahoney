


// import React from "react";
// import johnJamesPhoto from '../photos/johnjames.jpg'; // Import John James's photo
// // Import additional photos
// import jj1 from '../photos/jj1.jpg';
// import jj2 from '../photos/jj2.jpg';
// import jj3 from '../photos/jj3.jpg';
// import jj4 from '../photos/jj4.jpg';
// import jj5 from '../photos/jj5.jpg';
// import jj6 from '../photos/jj6.jpg';
// import jj7 from '../photos/jj7.jpg';
// import jj8 from '../photos/jj8.jpg';

// function About() {
//   // Array of additional photos
//   const additionalPhotos = [jj1, jj2, jj3, jj4, jj5, jj6, jj7, jj8];

//   return (
//     <div className="flex flex-col items-center mb-20">
//       {/* About JJ Mahoney's section with photo */}
//       <div className="py-4 px-4 max-w-4xl flex flex-col md:flex-row text-center md:text-left items-center md:items-start">
//         <div className="md:flex-1">
//           <h2 className="text-2xl text-gray-200 mb-4">About JJ Mahoney's</h2>
//           <p className="text-gray-200 mb-2">
//             John James Mahoney was born in 1874 in Cork County Ireland...
//           </p>
//           <p className="text-gray-200">
//             ...This pub has been opened in his honor.
//           </p>
//         </div>
        
//         <div className="md:ml-8 mt-4 md:mt-0">
//           <img src={johnJamesPhoto} alt="John James Mahoney" className="w-full md:w-70 h-auto mx-auto" />
//         </div>
//       </div>

//       {/* Photo grid section */}
//       <div className="w-full max-w-4xl p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {additionalPhotos.map((photo, index) => (
//           <img key={index} src={photo} alt={`JJ Mahoney's Photo ${index + 1}`} className="w-full h-auto object-cover" />
//         ))}
//       </div>

//       {/* Location, Phone, and Hours section */}
//       <div className="mt-8 text-left"> 
//         <h1 className="text-2xl font-semibold">Location</h1>
//         <p className="mt-2 text-lg">8932 161st Ave NE Redmond, WA 98052</p>
        
//         <h1 className="text-2xl font-semibold">Phone</h1>
//         <p className="mt-2 text-lg">
//             <a href="tel:4255581838" className="text-blue-500 underline">425-558-1838</a>
//         </p>

//         <h1 className="text-2xl font-semibold mt-4">Hours</h1>
//         <p className="mt-2 text-lg">
//             Monday-Thursday: 11am-11pm <br />
//             Friday: 11am-12am<br />
//             Saturday: 9:30am-12am<br />
//             Sunday: 9:30am-11pm
//         </p>
//       </div>
//     </div>
//   );
// }

// export default About;











import React from "react";
import johnJamesPhoto from '../photos/johnjames.jpg'; // Import John James's photo
// Import additional photos
import jj1 from '../photos/jj1.jpg';
import jj2 from '../photos/jj2.jpg';
import jj3 from '../photos/jj3.jpg';
import jj4 from '../photos/jj4.jpg';
import jj5 from '../photos/jj5.jpg';
import jj6 from '../photos/jj6.jpg';
import jj7 from '../photos/jj7.jpg';
import jj8 from '../photos/jj8.jpg';

function About() {
  // Array of additional photos
  const additionalPhotos = [jj1, jj2, jj3, jj4, jj5, jj6, jj7, jj8];

  return (
    <div className="flex flex-col items-center mb-20">
      {/* About JJ Mahoney's section with photo */}
      <div className="py-4 px-4 max-w-4xl flex flex-col md:flex-row text-center md:text-left items-center md:items-start">
        <div className="md:flex-1">
          <h2 className="text-2xl text-gray-200 mb-4">About JJ Mahoney's</h2>
          <p className="text-gray-200 mb-2">
            John James Mahoney was born in 1874 in Cork County Ireland. He left Ireland on March 27, 1893 from Queenstown on the S.S. Pavonia in search of opportunity in the "New World". After 7 days at sea, he arrived in Boston on April 3, 1893. He had nothing more than the shirt on his back and a small bag of personal items.
          </p>
          <p className="text-gray-200 mb-2">
            In the fall of 1896 he joined the US Marine Corps and served for 38 years fighting in the Spanish American War and World War 1. He obtained his official citizenship in 1910 just before meeting his wife-to-be, Lillian Schutte. John & Lillian married in 1915. They had 6 children before his passing in 1951, at the age of 77. His youngest daughter, Maureen, married, has 4 children, one of whom is owner of this pub.
          </p>
          <p className="text-gray-200">
            John J. Mahoney was a classic Irishman sharing his culture and heritage with his children and grandchildren. This pub has been opened in his honor.
          </p>
        </div>
        
        <div className="md:ml-8 mt-4 md:mt-0">
          <img src={johnJamesPhoto} alt="John James Mahoney" />

        </div>
      </div>

      {/* Photo grid section */}
      <div className="w-full max-w-4xl p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {additionalPhotos.map((photo, index) => (
          <img key={index} src={photo} alt={`JJ Mahoney's Photo ${index + 1}`} className="w-full h-auto object-cover" />
        ))}
      </div>

      {/* Location, Phone, and Hours section */}
      <div className="mt-8 "> 
        <h1 className="text-2xl font-semibold ">Location</h1>
        <p className="mt-2 text-lg">8932 161st Ave NE Redmond, WA 98052</p>
        
        <h1 className="text-2xl font-semibold">Phone</h1>
        <p className="mt-2 text-lg">
            <a href="tel:4255581838" className="text-blue-500 underline">425-558-1838</a>
        </p>

        <h1 className="text-2xl font-semibold mt-4">Hours</h1>
        <p className="mt-2 text-lg ">
            Monday-Thursday: 11am-11pm <br />
            Friday: 11am-12am<br />
            Saturday: 9:30am-12am<br />
            Sunday: 9:30am-11pm
        </p>
      </div>
    </div>
  );
}

export default About;

