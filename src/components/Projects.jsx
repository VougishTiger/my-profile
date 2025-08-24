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
          <a href="https://quotify-1-jdpz.onrender.com">View Project</a>
        </div>
        <div className="project-card">
          <h3>Jupyter Notebook</h3>
          <p>In my Jupyter Notebook I explore data science basics by analyzing sample datasets, creating visualizations, and building small experiments that show how data can tell stories.</p>
          <a href="https://github.com/VougishTiger/jupyter-notebook">View Project</a>
        </div>
      </div>
      <div className="projects-sidebar">
        <h3>Editor’s Pick</h3>
        <p><strong>robinsingh.onrender.com</strong> — praised for creativity in design and unique presentation.</p>
      </div>
    </section>
  );
};

export default Projects;
