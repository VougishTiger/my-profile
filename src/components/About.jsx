const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p className="byline">By Robin Singh · Published: Aug 20, 2025</p>
      <div className="about-container">
        <img src="/images/profile-about.jpg" alt="Profile" className="profile-pic" />
        <p>
          I am a full-stack web developer with strong skills in frontend (React, HTML, CSS, JavaScript) and backend technologies, 
          alongside a growing foundation in data science. My journey began at Fullstack Academy, where I learned to build web 
          applications with modern frameworks. More recently, I explored Python, R, SQL, and GIS to better understand and visualize data.
        </p>
      </div>
      <div className="about-sidebar">
        <h3>Quick Facts</h3>
        <ul>
          <li>Bootcamp graduate</li>
          <li>Full-stack web developer</li>
          <li>Exploring data science</li>
          <li>Always learning</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
