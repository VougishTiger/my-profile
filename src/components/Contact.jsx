import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-info">
        <p>Email: vougishtiger187@gmail.com</p>
        <p>GitHub: <a href="https://github.com/VougishTiger">VougishTiger</a></p>
      </div>
    </motion.section>
  );
};

export default Contact;
