import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/VougishTiger/repos")
      .then(res => res.json())
      .then(data => {
        setRepos(data);

        const labels = data.map(repo => repo.name);
        const stars = data.map(repo => repo.stargazers_count);

        setChartData({
          labels,
          datasets: [
            {
              label: "Stars per Repo",
              data: stars,
              backgroundColor: "rgba(0,0,0,0.7)"
            }
          ]
        });
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

      <div className="project-card">
        <h3>Quotify</h3>
        <p>
          A web app that generates random inspirational quotes and allows users
          to share them.
        </p>
        <a
          href="https://github.com/VougishTiger/Quotify"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>

      <div className="project-card">
        <h3>Data Science Experiments</h3>
        <p>
          Explored Python, R, SQL, and GIS in Jupyter Notebook to analyze
          datasets, visualize data, and create beginner-friendly dashboards.
        </p>
        <a
          href="https://github.com/VougishTiger/DataScienceExperiments"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>

      {chartData && (
        <div className="github-chart">
          <h3>GitHub Stars per Repository</h3>
          <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      )}

      {repos.length > 0 && (
        <div className="github-table">
          <h3>My GitHub Repositories</h3>
          <table>
            <thead>
              <tr>
                <th>Repository</th>
                <th>Stars</th>
                <th>Last Updated</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {repos.map(repo => (
                <tr key={repo.id}>
                  <td>{repo.name}</td>
                  <td>{repo.stargazers_count}</td>
                  <td>{new Date(repo.updated_at).toLocaleDateString()}</td>
                  <td>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.section>
  );
};

export default Projects;
