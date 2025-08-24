import PageWrapper from "./PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      <section className="contact">
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
      </section>
    </PageWrapper>
  );
};

export default Contact;
