import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_45nf5nc",   
      "template_7o4plij", 
      form.current,
      "EZ5s3BwNy07inf3uT"       
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message, please try again.");
      }
    );
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact</h2>
      <p className="byline">By Staff Reporter · Published: Aug 20, 2025</p>
      <p>
        Reach out for collaborations, freelance opportunities, or just to chat about code
        and data.
      </p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-sidebar">
        <h3>Office Hours</h3>
        <p>Available for calls and messages Mon–Fri, 9am–5pm EST.</p>
        <h3>Location</h3>
        <p>📍 Los Banos, CA, USA</p>
      </div>
      <div className="contact-info">
        <p>Email: vougishtiger187@gmail.com</p>
        <p>GitHub: <a href="https://github.com/VougishTiger" target="_blank" rel="noopener noreferrer">VougishTiger</a></p>
      </div>
    </motion.section>
  );
};

export default Contact;
