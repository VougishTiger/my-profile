import { motion } from "framer-motion";

const Skills = () => {
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
    </motion.section>
  );
};

export default Skills;

