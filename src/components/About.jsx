const About= ()=> {
  return(
    <section id="about">
      <h2>About Me</h2>
      <p className="byline">By [Robin Singh], Staff Writer · Published: Aug 20, 2025</p>
      <div className="about-container">
        <img 
          src="/images/profile-about.jpg" 
          alt="About me" 
          className="profile-pic"
        />
        <p>
          Hi, I’m Robin Singh! 🌍  
          I started my journey with web development (HTML, CSS, JavaScript, React) 
          and expanded into data science (Python, R, SQL, GIS). I am US ARMY Veteran and i have 3 french bulldogs. 
        </p>
        <p>
          I love combining these worlds — building interactive websites that integrate 
          data analysis and visualization. My mission is to create projects that are not 
          only functional, but also out of the ordinary.
        </p>
      </div>
    </section>
  );
};

export default About;