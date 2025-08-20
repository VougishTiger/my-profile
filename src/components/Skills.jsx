const Skills= ()=> {
  return(
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend / Web Dev</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Data Science</h3>
          <ul>
            <li>Python</li>
            <li>R</li>
            <li>SQL</li>
            <li>GIS</li>
          </ul>
        </div>
      </div>
      <div className="skills-image">
        <img src="/images/skills-footer.jpg" alt="Skills illustration" />
      </div>
    </section>
  );
};

export default Skills;