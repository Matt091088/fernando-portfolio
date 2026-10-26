import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import "./App.css";
import gentiziImage from "./assets/gentiziproyect.png";
import hotelImage from "./assets/hotel.jpg";
import templeImage from "./assets/temple-gallery.jpg";
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Gentizi Ecommerce 🚀",
      status: "Currently Developing",
      description:
        "Currently developing a full ecommerce platform for custom furniture featuring product catalog, shopping cart, category filters and responsive React architecture.",
      tech:[
  "React",
  "JavaScript",
  "CSS",
  "Vite",
  "React Router",
  "LocalStorage"
],
      image: gentiziImage,
      featured: true,
      live: "https://gentizi-ecommerce.vercel.app/",
      github: "https://github.com/Matt091088/gentizi-ecommerce",
    },

    {
      title: "Hotel City Posadas",
      description:
        "Hotel landing page with booking features and responsive layout.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: hotelImage,
      live: "https://matt091088.github.io/hotel-city-posadas/",
      github: "https://github.com/Matt091088/hotel-city-posadas",
    },

    {
  title: "Temple Gallery",
  description:
    "Interactive gallery project with filters and responsive design.",
  tech: ["HTML", "CSS", "JavaScript"],
  image: templeImage,
  live: "https://matt091088.github.io/wdd131/temples.html",
  github: "https://github.com/Matt091088/wdd131",
},
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub",
    "Responsive Design",
    "REST APIs",
    "Vite",
    "React Router",
  ];

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

        <h2 className="logo">Fernando Tau</h2>

        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>
      <motion.section
  className="hero"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="hero-content">

    <div className="hero-left">

      <h1>Fernando Tau</h1>

      <p className="subtitle">
        Frontend Developer | React & JavaScript
      </p>
     

      <section id="about" className="section">

  <h2>About Me</h2>

  <p>
    Frontend Developer passionate about building modern and responsive web applications.
    Currently studying Software Engineering and developing real-world projects using
    React, JavaScript, HTML and CSS.
  </p>

  <p>
    I enjoy creating clean user interfaces, improving user experiences and continuously
    learning new technologies. My goal is to grow as a professional developer while
    building projects that solve real problems.
  </p>

</section>

      <div className="hero-buttons">

        <a
          href="https://github.com/Matt091088"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/fernando-tau/"
          target="_blank"
          rel="noreferrer"
          className="secondary-btn"
        >
          LinkedIn
        </a>

        <a
          href="/Fernando-Tau-CV-2026.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>

        <div className="stats">

  <div>
    <h3>3+</h3>
    <span>Projects</span>
  </div>

  <div>
    <h3>3+</h3>
    <span>Years Learning</span>
  </div>

  <div>
    <h3>100%</h3>
    <span>Passion</span>
  </div>
</div>

      </div>

    </div>

    <div className="hero-right">

      <div className="spline-container">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-O34orRtG0OMNieyVwCIgDQ66/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="Spline Animation"
        ></iframe>
      </div>

    </div>

  </div>
</motion.section>

      {/* EDUCATION */}
<section id="education" className="section">

  <h2>Education & Certifications</h2>

  <div className="education-card">

    <h3>Software Engineering Student</h3>

    <p>
      Currently studying Software Engineering with a focus on
      frontend development, React, JavaScript, and modern web technologies.
    </p>

  </div>

  <div className="education-card">

  <h3>Web and Computer Programming Certificate</h3>

  <p>
    Completed coursework focused on programming fundamentals,
    web development, JavaScript, HTML, CSS, and software development practices.
  </p>

  <a
    href="/certificates/web-programming.pdf"
    target="_blank"
    className="certificate-btn"
  >
    View Certificate
  </a>

</div>

  <div className="education-card">

  <h3>BYU Pathway Worldwide</h3>

  <p>
    Completed academic courses focused on professional development,
    communication, problem solving, and technology skills.
  </p>

  <a
    href="/certificates/byu-pathway.pdf"
    target="_blank"
    className="certificate-btn"
  >
    View Certificate
  </a>

</div>
  <div className="education-card">

  <h3>English Level C1</h3>

  <p>
    Advanced English proficiency, with the ability to
    communicate effectively and understand technical documentation.
  </p>

  <a
    href="/certificates/CertificateC1.pdf"
    target="_blank"
    rel="noreferrer"
    className="certificate-btn"
  >
    View Certificate
  </a>

</div>

<div className="education-card">

  <h3>Introduction to AI Development</h3>

  <p>
    Completed a 6-hour training program on AI-powered
    development and AI agents, organized by BIG school.
  </p>

  <p>
    <strong>Institution:</strong> BIG school
  </p>

  <p>
    <strong>Completed:</strong> October 2026
  </p>

  <a
    href="/certificates/Certificado-desarrolloconIA.pdf"
    target="_blank"
    rel="noreferrer"
    className="certificate-btn"
  >
    View Certificate
  </a>

</div>

<section className="section">

  <h2>Currently Building</h2>

  <div className="education-card">

    <h3>Gentizi Ecommerce</h3>

    <p>
      Currently developing a full ecommerce platform for custom furniture.
      Features include product catalog, shopping cart, category filters,
      responsive design and modern React architecture.
    </p>

  </div>

</section>

</section>

      {/* SKILLS */}
      <section id="skills" className="section">

        <h2>Skills</h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <h2>Projects</h2>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              className={`project-card ${
                project.featured ? "featured" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >

              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">

                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}

              </div>

              <div className="project-links">

                <a
                  href={project.live}
                  target="_blank"
                  className="live-btn"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="github-btn"
                >
                  GitHub
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      <section id="contact" className="section contact">

  <h2>Contact</h2>

  <p>
    Interested in working together or discussing opportunities?
  </p>

  <div className="contact-links">

    <a
      href="mailto:fernandomatiastau@gmail.com"
      target="_blank"
      rel="noreferrer"
    >
      <FaEnvelope />
      Email
    </a>

    <a
      href="https://github.com/Matt091088"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/fernando-tau/"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />
      LinkedIn
    </a>

  </div>

</section>

      {/* FOOTER */}
      <footer className="footer">

        <h3>Fernando Tau</h3>

        <p>
          Frontend Developer focused on React and modern UI.
        </p>

        <div className="footer-links">

          <a
            href="https://github.com/Matt091088"
            target="_blank"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/fernando-tau/"
            target="_blank"
          >
            LinkedIn
          </a>

        </div>

        <span>
          © 2026 Fernando Tau. All rights reserved.
        </span>

      </footer>

    </div>
  );
}