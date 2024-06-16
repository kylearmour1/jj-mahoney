

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

// function Footer() {
//   return (
//     <footer className="bg-custom-blue py-1 px-2 flex justify-between items-center text-white text-sm">
//       <div className="text-xs">
//         © [2024] Kyle Armour. <span>All rights reserved.</span>
//       </div>
//       <div className="flex">
//         <a
//           href="https://www.facebook.com/jjmahoneysirishpub"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="ml-2 text-white hover:underline"
//         >
//           <FontAwesomeIcon icon={faFacebookSquare} />
//         </a>
//         <a
//           href="https://www.instagram.com/jjmahoneysirishpub/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="ml-2 text-white hover:underline"
//         >
//           <FontAwesomeIcon icon={faInstagram} />
//         </a>
//       </div>
//     </footer>
//   );
// }

// export default Footer;




import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-custom-blue py-1 px-2 flex justify-between items-center text-white text-sm">
      <div className="text-[0.45em]">
        © [2024] Kyle Armour. <span>All rights reserved.</span>
      </div>
      <div className="flex">
        <a
          href="https://www.facebook.com/jjmahoneysirishpub"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-white hover:underline"
        >
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a
          href="https://www.instagram.com/jjmahoneysirishpub/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-white hover:underline"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
