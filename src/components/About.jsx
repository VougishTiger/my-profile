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
       I served in the U.S. Army as an 88M Transportation Specialist, where I learned discipline, adaptability, and the value of hard work. After leaving the military, I worked a variety of jobs—from barista to tow truck driver to CNA—each teaching me resilience and the importance of persistence. Eventually, I found my true calling in software development, something I’ve loved all my life. Outside of tech, I enjoy fishing, hunting, football, boxing, and mixed martial arts, especially the UFC. At home, I’m kept grounded and entertained by my three French Bulldogs, who are always by my side. The combination of my military background, diverse work experience, personal passions, and family life has given me the drive and perspective to grow into a strong and creative developer.
      </p>
    </motion.section>
  );
};

export default About;
