import { useState } from "react";

const Contact= ()=> {
  const [formData, setFormData]= useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange= (e)=> {
    const { name, value }= e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit= (e)=> {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (Currently just logs to console.)");
  
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p className="byline">By Staff Reporter · Published: Aug 20, 2025</p>
      <p>
        Reach out for collaborations, freelance opportunities, or just to chat about code
        and data.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>

      <div className="contact-sidebar">
        <h3>Office Hours</h3>
        <p>Available for calls and messages Mon–Fri, 9am–5pm EST.</p>
        <h3>Location</h3>
        <p>📍 Los Banos, CA USA</p>
      </div>

      <div className="contact-info">
        <p>Email: vougishtiger187@gmail.com</p>
        <p>
          GitHub: <a href="https://github.com/VougishTiger" target="_blank" rel="noreferrer">
            github.com/VougishTiger
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;

