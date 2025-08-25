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
        src="/images/profile-about.jpg"
        alt="Profile"
        className="profile-pic"
      />
      <p>
        My journey into tech started with a passion for solving problems and 
        finding creative ways to bring ideas to life. I graduated from Fullstack 
        Academy’s Web Development Bootcamp, where I built a strong foundation in 
        modern frontend tools like <strong>React</strong>, <strong>JavaScript</strong>, 
        and <strong>CSS</strong>. Alongside this, I dove into <strong>data science</strong> 
        through hands-on projects with <strong>Python</strong>, <strong>R</strong>, 
        <strong>SQL</strong>, and <strong>GIS</strong>, learning how to analyze data 
        and turn numbers into meaningful stories.
      </p>
      <p>
        This mix of skills makes me a hybrid developer: someone who can design and build 
        smooth user experiences on the frontend while also digging into data to uncover 
        insights that guide smarter decisions. Whether it’s building dynamic web apps or 
        creating data-driven dashboards, I love using code to make complex ideas easier 
        to understand and more impactful.
      </p>
    </motion.section>
  );
};

export default About;
