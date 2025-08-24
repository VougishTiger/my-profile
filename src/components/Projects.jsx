import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
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
    </motion.section>
  );
};

export default Projects;
