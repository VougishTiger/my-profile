const Projects= ()=> {
  return (
     <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>PressCss.com</h3>
          <p>A playful project showcasing creative CSS effects, animations, and styling experiments that turn simple layouts into eye-catching designs.</p>
          <a href="https://presscss.com" target="_blank">View Project</a>
        </div>

        <div className="project-card">
          <h3>Quotify</h3>
          <p>A web app that delivers random inspirational quotes at the press of a button — quick wisdom wrapped in clean design.</p>
          <a href="https://quotify-1-jdpz.onrender.com" target="_blank">View Project</a>
        </div>

        <div className="project-card">
          
          <h3>Jupyter Notebook</h3>
          <p>A growing Jupyter Notebook where I experiment with Python, R, SQL, and GIS. From cleaning data to building visualizations, it’s my hands-on journal of learning data science step by step.</p>
          <a href="https://github.com/yourusername/gis-project" target="_blank">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;