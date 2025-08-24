import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="home"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Hi, I’m Robin Singh</h1>
      <p>Full-Stack Developer | Data Enthusiast</p>
    </motion.section>
  );
};

export default Home;
