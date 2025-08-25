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
      <p>
        My skill set has grown out of a unique journey that combines both <strong>web 
        development</strong> and <strong>data science</strong>. At Fullstack Academy, 
        I mastered the tools needed to bring modern, interactive websites to life — 
        learning <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> 
        inside and out, while diving deep into <strong>React</strong> to build dynamic, 
        component-based web applications.
      </p>
      <p>
        At the same time, my exploration of data science has taught me how to look at 
        problems from another angle — by analyzing and visualizing data. With 
        <strong> Python</strong>, <strong>R</strong>, <strong>SQL</strong>, and 
        <strong> GIS</strong>, I’ve developed the ability to clean, process, and 
        interpret data, turning raw numbers into insights that can drive smarter 
        decisions. This unique combination makes me equally comfortable building 
        beautiful user experiences and building the data pipelines that power them.
      </p>
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
