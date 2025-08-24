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

const Skills = () => {
  const data = {
    labels: ["HTML", "CSS", "JavaScript", "React", "Python", "R", "SQL", "GIS"],
    datasets: [
      {
        label: "Skill Level",
        data: [90, 85, 80, 75, 70, 65, 70, 60],
        backgroundColor: "rgba(0,0,0,0.7)"
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
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
      <div className="skills-chart">
        <Bar data={data} options={options} />
      </div>
    </motion.section>
  );
};

export default Skills;
