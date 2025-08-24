import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <img
        src="/images/profile.jpg"
        alt="Profile"
        className="profile-pic"
      />
      <p>
        I am a passionate developer with skills in frontend, backend, and data science. 
        My journey started with a web development bootcamp and expanded into data exploration 
        using Python, R, SQL, and GIS.
      </p>
    </motion.section>
  );
};

export default About;
