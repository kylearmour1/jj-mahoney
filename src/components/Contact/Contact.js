import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section>
      <h2>Contact Us</h2>
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
    </section>
  );
}

export default Contact;
