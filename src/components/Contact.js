import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via the form below:</p>

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
    </section>
  );
}

export default Contact;