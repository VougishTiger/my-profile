import PageWrapper from "./PageWrapper";

const Skills = () => {
  return (
    <PageWrapper>
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div>
            <h3>Frontend</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <div>
            <h3>Data Science</h3>
            <ul>
              <li>Python</li>
              <li>R</li>
              <li>SQL</li>
              <li>GIS</li>
            </ul>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Skills;

