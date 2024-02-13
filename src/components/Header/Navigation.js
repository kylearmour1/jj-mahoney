import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        
        <li>
          <Link to="/contact">Contact</Link>
        </li>
       
      </ul>
    </nav>
  );
}

export default Navigation;
