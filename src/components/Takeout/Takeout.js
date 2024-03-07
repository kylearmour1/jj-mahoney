import React from "react";
import booobs from "../photos/Boobs.jpg"; // Make sure the path is correct

function Takeout() {
  return (
    <div>
      <img src={booobs} alt="Descriptive text" /> {/* Use the imported image here */}
    </div>
  );
}

export default Takeout;

