

// import React from "react";
// import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

// function Footer() {
//   return (
//     <footer>
//       <a href="https://www.facebook.com/jjmahoneysirishpub" target="_blank" rel="noopener noreferrer">
//         <FontAwesomeIcon icon={faFacebookSquare} />
//       </a>
//       <a href="https://www.instagram.com/jjmahoneysirishpub/" target="_blank" rel="noopener noreferrer">
//         <FontAwesomeIcon icon={faInstagram} />
//       </a>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="all-rights-reserved">
        © [2024] Kyle Armour. <span className="small">All rights reserved.</span>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/jjmahoneysirishpub" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="https://www.instagram.com/jjmahoneysirishpub/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;


