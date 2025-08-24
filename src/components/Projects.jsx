const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p className="byline">By Robin Singh · Published: Aug 20, 2025</p>
      <div className="projects-container">
        <div className="project-card">
          <h3>Quotify</h3>
          <p>
            A web app that generates random inspirational quotes and allows users 
            to share them. Built with React and styled with CSS.
          </p>
        </div>
        <div className="project-card">
          <h3>Data Science Experiments</h3>
          <p>
            Explored Python, R, SQL, and GIS in Jupyter Notebook to analyze datasets, 
            visualize data, and create beginner-friendly dashboards.
          </p>
        </div>
      </div>
      <div className="projects-dashboard">
        <h3>At a Glance</h3>
        <ul>
          <li>2 Major Projects</li>
          <li>Frontend + Data Science Blend</li>
          <li>Open-source on GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
