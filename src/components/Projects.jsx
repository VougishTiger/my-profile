import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [commits, setCommits] = useState(0);
  const [projects, setProjects] = useState(0);
  const [liveProjects, setLiveProjects] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users/VougishTiger/repos")
      .then(res => res.json())
      .then(data => {
        setProjects(data.length);
        setLiveProjects(data.filter(repo => repo.homepage && repo.homepage !== "").length);
      });

    fetch("https://api.github.com/users/VougishTiger/events")
      .then(res => res.json())
      .then(events => {
        const thisMonth = new Date().getMonth();
        let commitCount = 0;

        events.forEach(event => {
          if (event.type === "PushEvent") {
            const eventMonth = new Date(event.created_at).getMonth();
            if (eventMonth === thisMonth) {
              commitCount += event.payload.commits.length;
            }
          }
        });

        setCommits(commitCount);
      });
  }, []);

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Projects</h2>
      <p>Here’s a quick snapshot of my GitHub activity this month:</p>

      <div className="projects-stats">
        <div className="stat-card">
          <h3>{commits}</h3>
          <p>Commits this month</p>
        </div>
        <div className="stat-card">
          <h3>{projects}</h3>
          <p>Total Projects</p>
        </div>
        <div className="stat-card">
          <h3>{liveProjects}</h3>
          <p>Live Projects</p>
        </div>
      </div>

      <div className="projects-list">
        <div className="project-card">
          <h3>InstaVoicePDF</h3>
          <p>ReceiptRocket is a full-stack Python web application that allows businesses to instantly generate and email professional PDF receipts to their clients. Users can securely enter client, business, and transaction data through a dynamic web form, which automatically produces a clean, printable receipt.</p>
          <a href="https://github.com/VougishTiger/invoice-automation" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href="https://instavoicePDF.onrender.com/" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>

        <div className="project-card">
          <h3>MealSmith</h3>
          <p>A Flask-based pantry tracker and recipe manager with user login, saved recipes, and ingredient-comparison using a live PostgreSQL cloud database.</p>
          <a href="https://github.com/VougishTiger/MealSmith" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href="https://mealsmith.onrender.com/" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
