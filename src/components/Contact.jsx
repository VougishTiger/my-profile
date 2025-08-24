const Contact= ()=> {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p className="byline">By Staff Reporter · Published: Aug 20, 2025</p>
      <p>
        Reach out for collaborations, freelance opportunities, or just to chat about code
        and data.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="contact-sidebar">
        <h3>Office Hours</h3>
        <p>Available for calls and messages Mon–Fri, 9am–5pm EST.</p>
        <h3>Location</h3>
        <p>📍 New York, USA</p>
      </div>
      <div className="contact-info">
        <p>Email: robin@example.com</p>
        <p>GitHub: github.com/robin</p>
      </div>
    </section>
  );
};

export default Contact;
