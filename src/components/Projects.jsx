const Projects= ()=> {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p className="byline">By [Robin Singh], Tech Correspondent · Published: Aug 20, 2025</p>
      <p>
        Each project is a story in itself — from creative coding experiments to real-world
        problem solving with full stack and data science tools.
      </p>
      <div className="projects-container">
        <div className="project-card">
          <h3>Quotify</h3>
          <p>A React app that generates motivational quotes with a sleek UI.</p>
          <img src="/images/quotify.jpg" alt="Quotify project" />
          <a href="#">View Project</a>
        </div>
        <div className="project-card">
          <h3>PressCSS</h3>
          <p>A fun CSS project that applies newspaper-style formatting to websites.</p>
          <img src="/images/presscss.jpg" alt="PressCSS project" />
          <a href="#">View Project</a>
        </div>
      </div>
      <div className="projects-sidebar">
        <h3>Editor’s Pick</h3>
        <p><strong>PressCSS</strong> — praised for creativity in design and unique presentation.</p>
      </div>
    </section>
  );
};

export default Projects;
