import PageWrapper from "./PageWrapper";

const Projects = () => {
  return (
    <PageWrapper>
      <section className="projects">
        <h2>Projects</h2>
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
      </section>
    </PageWrapper>
  );
};

export default Projects;
