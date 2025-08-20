const Projects= ()=> {
  return (
     <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <img src="/images/project1.jpg" alt="Project 1" />
          <h3>Portfolio Website</h3>
          <p>A responsive React portfolio showcasing my work and skills.</p>
          <a href="https://github.com/yourusername/portfolio" target="_blank">View Project</a>
        </div>

        <div className="project-card">
          <img src="/images/project2.jpg" alt="Project 2" />
          <h3>Data Dashboard</h3>
          <p>Interactive dashboard built with Python + SQL for visualizing datasets.</p>
          <a href="https://github.com/yourusername/data-dashboard" target="_blank">View Project</a>
        </div>

        <div className="project-card">
          <img src="/images/project3.jpg" alt="Project 3" />
          <h3>GIS Mapping</h3>
          <p>Geospatial analysis project using R and Leaflet to visualize real-world data.</p>
          <a href="https://github.com/yourusername/gis-project" target="_blank">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;