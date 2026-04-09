import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <form
        action="mailto:yourname@example.com"
        method="post"
        encType="text/plain"
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <p className="contact-socials">
        Or connect via{" "}
        <a href="#">LinkedIn</a> | <a href="#">GitHub</a>
      </p>
      <p className="contact-socials">
        
      </p>
    </section>
  );
}

export default Contact;