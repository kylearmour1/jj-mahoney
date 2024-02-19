import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section>
      <h1>Get in touch. We love hearing from you.</h1>
      <p>
        Please fill out our contact form with any comments, questions or
        concerns and we will respond as soon as possible!
      </p>
      <form>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <h1>Location</h1>
      <p>8932 161st Ave NE Redmond, WA 98052</p>

      <h1>Hours</h1>
      <p>
        Monday-Thursday: 11am-11pm <br></br>
        Friday: 11am-12am<br></br>
        Saturday: 9:30am-12am<br></br>
        Sunday: 9:30am-11pm
      </p>
    </section>
  );
}

export default Contact;
// src/components/Contact/Contact.js





// import React from "react";
// import "./Contact.css";

// function Contact() {
//   return (
//     <section>
//       <h1 className="text-custom-h1">Get in touch. We love hearing from you.</h1>
//       <p className="text-custom-p">
//         Please fill out our contact form with any comments, questions, or
//         concerns and we will respond as soon as possible!
//       </p>
//       <form>
//         <label>
//           Name:
//           <input type="text" name="name" required />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" required />
//         </label>
//         <label>
//           Message:
//           <textarea name="message" required />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>

//       <h1 className="text-custom-h1">Location</h1>
//       <p className="text-custom-p">8932 161st Ave NE Redmond, WA 98052</p>

//       <h1 className="text-custom-h1">Hours</h1>
//       <p className="text-custom-p">
//         Monday-Thursday: 11am-11pm <br />
//         Friday: 11am-12am<br />
//         Saturday: 9:30am-12am<br />
//         Sunday: 9:30am-11pm
//       </p>
//     </section>
//   );
// }

// export default Contact;
