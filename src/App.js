import React from "react";
import "./App.css";
import img from './img 1.jpg';


const App = () => {
  const projects = [
    { title: "Project 1", description: "Stock Price Prediction System." },
    { title: "Project 2", description: "Loan Approval Prediction." },
    { title: "Project 3", description: "Route And Distance Tracking System." },
  ];

  const skills = ["C","C++","React", "JavaScript", "CSS", "HTML", "Node.js", "Python"];

  return (
    <div className="portfolio">
      {/* Hero Section */}
      <header className="hero">
        {/* Profile Picture */}
        <img src={img} alt="Harikrishnan" className="profile-img" />
        
        <h1>Hi, I'm <span className="name">HARIKRISHNAN E</span></h1>
        <p>Web Developer | Designer | Innovator</p>
        <a href="#contact" className="hero-btn">Get in Touch</a>

        {/* Navigation Links */}
        <nav className="hero-nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer who loves creating interactive and dynamic web applications.
          My goal is to craft meaningful digital experiences that make a difference.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-badge" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
