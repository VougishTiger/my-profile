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

const Skills= ()=> {
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

  const options= {
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <section id="skills">
      <h2>Skills</h2>
      <p className="byline">By [Robin Singh], Staff Writer · Published: Aug 20, 2025</p>
      <p className="skills-intro">
        In today’s issue, we highlight the developer’s core skills across web development and data science.
      </p>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend / Web Dev</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Data Science</h3>
          <ul>
            <li>Python</li>
            <li>R</li>
            <li>SQL</li>
            <li>GIS</li>
          </ul>
        </div>
      </div>
      <div className="skills-sidebar">
        <h3>Top Strength</h3>
        <p>React — building interactive UIs with speed and efficiency.</p>
        <h3>Currently Learning</h3>
        <p>Geospatial Information Systems (GIS) for data visualization.</p>
      </div>
      <div className="skills-chart">
        <Bar data={data} options={options} />
      </div>
    </section>
  );
};

export default Skills;
