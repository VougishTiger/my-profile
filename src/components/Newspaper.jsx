import HTMLFlipBook from "react-pageflip";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Newspaper= ()=> {
  return (
    <HTMLFlipBook width={600} height={800} className="newspaper">
      {/* 📰 Front Page */}
      <div className="page front-page">
        <h1>📰 The Daily Me</h1>
        <h2>Headlines</h2>
        <p><strong>About Me:</strong> From bootcamp to data science, the journey of a modern developer.</p>
        <p><strong>Skills:</strong> From React to Python, a full spectrum...</p>
        <p><strong>Projects:</strong> Building the future, one web app, data dashboard, and geospatial visualization at a time...</p>
        <p><strong>Contact:</strong> Reach out to collaborate today!</p>
        <img 
            src="/images/profile-front.jpg"
            alt="Front page profile" 
            className="front-profile"
        />
        <div className="quote-section">
          <h3>Quote of the Day</h3>
          <QuoteOfTheDay />
        </div>
      </div>

      {/* Full Pages */}
      <div className="page"><About /></div>
      <div className="page"><Skills /></div>
      <div className="page"><Projects /></div>
      <div className="page"><Contact /></div>
      <div className="page"><Footer /></div>
    </HTMLFlipBook>
  );
};

export default Newspaper;