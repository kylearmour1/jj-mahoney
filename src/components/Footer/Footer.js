// import React from "react";
// import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faLinkedin,
//   faStackOverflow,
// } from "@fortawesome/free-brands-svg-icons";

// function Footer() {
//   return (
//     <footer>
//       <a href="https://github.com/kylearmour1">
//         <FontAwesomeIcon icon={faGithub} />
//       </a>
//       <a href="https://www.linkedin.com/in/kyle-armour-5879aa261/">
//         <FontAwesomeIcon icon={faLinkedin} />
//       </a>
//       <a href="https://stackoverflow.com/users/20619295/kyle-armour">
//         <FontAwesomeIcon icon={faStackOverflow} />
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
    <footer>
      <a href="https://www.facebook.com/jjmahoneysirishpub" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a href="https://www.instagram.com/jjmahoneysirishpub/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </footer>
  );
}

export default Footer;
