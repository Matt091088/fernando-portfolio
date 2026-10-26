
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import "./App.css";
import gentiziImage from "./assets/gentiziproyect.png";
import hotelImage from "./assets/hotel.jpg";
import proyectaImage from "./assets/proyecta-mueble.png";
import { translations } from "./i18n/translations";

export default function App() {
  const [curtainOpen, setCurtainOpen] = useState(false);
  
  console.log("PORTFOLIO ACTUALIZADO");
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("es");

const t = translations[language];

  const projects = [
    {
      title: "Gentizi Ecommerce 🚀",
      status: t.projects.developing,
      description: t.projects.gentiziDescription,
      tech: [
        "React",
        "JavaScript",
        "CSS",
        "Vite",
        "React Router",
        "LocalStorage",
      ],
      image: gentiziImage,
      featured: true,
      live: "https://gentizi-ecommerce.vercel.app/",
      github: "https://github.com/Matt091088/gentizi-ecommerce",
    },
    {
      title: "Hotel City Posadas",
      description: t.projects.hotelDescription,
      tech: ["HTML", "CSS", "JavaScript"],
      image: hotelImage,
      live: "https://matt091088.github.io/hotel-city-posadas/",
      github: "https://github.com/Matt091088/hotel-city-posadas",
    },
  
     {
     title: "Proyecta Mueble",
     description: t.projects.proyectaDescription,
     tech: ["React", "JavaScript", "CSS", "Responsive Design"],
     image: proyectaImage,
     live: "https://proyecta-muebles.vercel.app/",
     github: "https://github.com/Matt091088/proyecta-muebles",
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

  const closeMenu = () => setMenuOpen(false);

return (
  <>
    {/* CORTINA DE ENTRADA */}
<div className="intro-curtain">
  <motion.div
    className="curtain-panel curtain-panel-left"
    initial={{ x: 0 }}
    animate={{ x: curtainOpen ? "-100%" : 0 }}
    transition={{
      duration: 2,
      ease: [0.76, 0, 0.24, 1],
      delay: curtainOpen ? 0 : 1.8,
    }}
    onAnimationComplete={() => {
      if (!curtainOpen) setCurtainOpen(true);
    }}
  />

  <motion.div
    className="curtain-panel curtain-panel-right"
    initial={{ x: 0 }}
    animate={{ x: curtainOpen ? "100%" : 0 }}
    transition={{
      duration: 2,
      ease: [0.76, 0, 0.24, 1],
      delay: curtainOpen ? 0 : 0.8,
    }}
  />

  <motion.span
    className="curtain-name"
    initial={{ opacity: 1, scale: 1 }}
    animate={{
      opacity: curtainOpen ? 0 : 1,
      scale: curtainOpen ? 1.05 : 1,
    }}
    transition={{ duration: 2.5 }}
  >
    FERNANDO TAU<span>.</span>
  </motion.span>
</div>

    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          Fernando<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        
<div className={`nav-links ${menuOpen ? "active" : ""}`}>
  <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
  <a href="#education" onClick={closeMenu}>{t.nav.education}</a>
  <a href="#skills" onClick={closeMenu}>{t.nav.skills}</a>
  <a href="#projects" onClick={closeMenu}>{t.nav.projects}</a>
  <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>

  <div className="language-switch">
    <button
      type="button"
      className={language === "es" ? "active" : ""}
      onClick={() => setLanguage("es")}
      aria-pressed={language === "es"}
    >
      ES
    </button>

    <span aria-hidden="true">|</span>

    <button
      type="button"
      className={language === "en" ? "active" : ""}
      onClick={() => setLanguage("en")}
      aria-pressed={language === "en"}
    >
      EN
    </button>
  </div>
</div>

      </nav>

      {/* HERO: PRESENTACIÓN Y FOTO GRANDE */}
      <motion.section
        id="home"
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <div className="hero-left">
            <p className="hero-eyebrow">
                    {t.hero.eyebrow}
            </p>

            <h1>
              Fernando
              <span className="gradient-text"> Tau.</span>
            </h1>

            <p className="subtitle">
              {t.hero.subtitle}
            </p>

            <p className="hero-description">
                {t.hero.description}
            </p>

            <div className="hero-buttons">
             <a href="#projects" className="btn btn-primary">
             {t.hero.projectsButton}
            </a>

              <a
                href="https://www.linkedin.com/in/fernando-tau/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                {t.hero.linkedin} ↗
              </a>

              <a
                href={
                 language === "es"
                ? "/Fernando-Tau-CV-2026-ES.pdf"
                : "/Fernando-Tau-CV-2026.pdf"
                   }
                download
                className="btn btn-text"
                >
                {t.hero.downloadCV} ↓
              </a>
            </div>

            <div className="stats">
              <div className="stat">
                <h3>03</h3>
                {t.hero.projectsStat}
              </div>

              <div className="stat">
                <h3>React</h3>
                {t.hero.focusStat}
              </div>

              <div className="stat">
                <h3>100%</h3>
                {t.hero.motivationStat}
              </div>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/Matt091088"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/fernando-tau/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:fernandomatiastau@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* FOTO Y ROBOT */}
          <div className="hero-right">
            <div className="profile-image-container">
              <img
                src="/images/fernando-profile.png"
                alt="Fernando Tau - Frontend Developer"
                className="profile-image"
              />
            </div>

            <div className="hero-image-gradient" />

            {/* INTERFAZ HOLOGRÁFICA */}
{/* VENTANA DE CÓDIGO ANIMADA */}
<div className="code-window">
  <div className="code-window-header">
    <div className="window-dots">
      <span />
      <span />
      <span />
    </div>

    <span className="code-filename">portfolio.jsx</span>
    <span className="code-status">● LIVE</span>
  </div>

  <div className="code-content">
    <div><span className="line-number">01</span> <span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</div>
    <div><span className="line-number">02</span> &nbsp; name: <span className="code-green">"Fernando Tau"</span>,</div>
    <div><span className="line-number">03</span> &nbsp; role: <span className="code-green">"Frontend Developer"</span>,</div>
    <div><span className="line-number">04</span> &nbsp; skills: [<span className="code-green">"React"</span>, <span className="code-green">"JS"</span>],</div>
    <div><span className="line-number">05</span> &nbsp; learning: <span className="code-orange">true</span></div>
    <div><span className="line-number">06</span> {"};"}</div>
    <div className="code-output">
      <span className="code-prompt">➜</span> Building something great
      <span className="typing-cursor">|</span>
    </div>
  </div>
</div>

<div className="floating-tech floating-react">⚛ React</div>
<div className="floating-tech floating-js">JS JavaScript</div>
<div className="floating-tech floating-css">✦ CSS</div>
<div className="floating-tech floating-html">🌐 HTML5</div>
<div className="floating-tech floating-git">⑂ Git</div>
<div className="floating-tech floating-github">⌘ GitHub</div>
<div className="floating-tech floating-vite">⚡ Vite</div>


      <div className="image-caption">
  <span className="status-dot" />
  <span>Building digital experiences</span>
</div>

{/* VISTA PREVIA DE PROYECTOS */}
<div className="hero-projects-preview">
  <div className="hero-projects-heading">
    <span>01 — SELECTED WORK</span>
    <a href="#projects">Ver todos ↗</a>
  </div>

  <a
    href="#projects"
    className="hero-project-mini"
  >
    <img src={gentiziImage} alt="Proyecto Gentizi Ecommerce" />
    <div>
      <span>ECOMMERCE</span>
      <h3>Gentizi</h3>
      <p>React · JavaScript · CSS</p>
    </div>
    <span className="hero-project-arrow">↗</span>
  </a>

  <a
    href="#projects"
    className="hero-project-mini"
  >
    <img src={hotelImage} alt="Proyecto Hotel City" />
    <div>
      <span>WEB DESIGN</span>
      <h3>Hotel City</h3>
      <p>HTML · CSS · JavaScript</p>
    </div>
    <span className="hero-project-arrow">↗</span>
  </a>

  <a
    href="#projects"
    className="hero-project-mini"
  >
    <img src={proyectaImage} alt="Proyecto Proyecta Mueble" />
    <div>
      <span>WEB DEVELOPMENT</span>
      <h3>Proyecta Mueble</h3>
      <p>React · Responsive Design</p>
    </div>
    <span className="hero-project-arrow">↗</span>
  </a>
</div>
</div>
</div>

        <a className="scroll-indicator" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
        </a>
      </motion.section>

      {/* ABOUT */}
<section id="about" className="section">
  <div className="container">
    <div className="about-content">
      <div className="about-text">
        <p className="section-eyebrow">{t.about.eyebrow}</p>

        <h2 className="section-title">
          {t.about.titleStart}{" "}
          <span className="gradient-text">{t.about.titleEnd}</span>
        </h2>

        <p>{t.about.paragraph1}</p>
        <p>{t.about.paragraph2}</p>
      </div>

      <div className="about-details">
        <div className="about-card">
          <span className="about-card-number">01</span>
          <h3>{t.about.card1Title}</h3>
          <p>{t.about.card1Description}</p>
        </div>

        <div className="about-card">
          <span className="about-card-number">02</span>
          <h3>{t.about.card2Title}</h3>
          <p>{t.about.card2Description}</p>
        </div>
      </div>
    </div>
  </div>
</section>

           {/* EDUCATION */}
      <section id="education" className="section section-alt">
        <div className="container">
          <p className="section-eyebrow">{t.education.eyebrow}</p>

          <h2 className="section-title">
            {t.education.titleStart}{" "}
            <span className="gradient-text">{t.education.titleEnd}</span>
          </h2>

          <div className="education-grid">
            <article className="education-card">
              <span className="card-label">{t.education.current}</span>
              <h3>{t.education.softwareTitle}</h3>
              <p>{t.education.softwareDescription}</p>
            </article>

            <article className="education-card">
              <span className="card-label">{t.education.completed}</span>
              <h3>{t.education.certificateTitle}</h3>
<p>{t.education.certificateDescription}</p>
              <a
                href="/certificates/web-programming.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                {t.education.viewCertificate} ↗
              </a>
            </article>

            <article className="education-card">
              <span className="card-label">{t.education.completed}</span>
              <h3>{t.education.pathwayTitle}</h3>
<p>{t.education.pathwayDescription}</p>
              <a
                href="/certificates/byu-pathway.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                {t.education.viewCertificate} ↗
              </a>
            </article>

            <article className="education-card">
              <span className="card-label">{t.education.language}</span>
              <h3>{t.education.englishTitle}</h3>
<p>{t.education.englishDescription}</p>
              <a
                href="/certificates/CertificateC1.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                {t.education.viewCertificate} ↗
              </a>
            </article>

            <article className="education-card">
              <span className="card-label">{t.education.completedDate}</span>
              <h3>{t.education.aiTitle}</h3>
              <p>{t.education.aiDescription}</p>
              <p className="institution">
                <strong>{t.education.institution}</strong> BIG school
              </p>
              <a
                href="/certificates/Certificado-desarrolloconIA.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                {t.education.viewCertificate} ↗
              </a>
            </article>

            <article className="education-card featured-education">
              <span className="card-label">{t.education.current}</span>
              <h3>{t.education.gentiziTitle}</h3>
              <p>{t.education.gentiziDescription}</p>
            </article>
          </div>
        </div>
      </section>

            {/* SKILLS */}
      <section id="skills" className="section">
        <div className="container">
          <p className="section-eyebrow">{t.skills.eyebrow}</p>

          <h2 className="section-title">
            {t.skills.titleStart}{" "}
            <span className="gradient-text">{t.skills.titleEnd}</span>
          </h2>

          <p className="section-description">
            {t.skills.description}
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                viewport={{ once: true }}
              >
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <p className="section-eyebrow">{t.projects.eyebrow}</p>

<h2 className="section-title">
  {t.projects.titleStart}{" "}
  <span className="gradient-text">{t.projects.titleEnd}</span>
</h2>

<p className="section-description">
  {t.projects.description}
</p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className={`project-card ${
                  project.featured ? "featured" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                  {project.status && (
                    <span className="project-status">{project.status}</span>
                  )}
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="live-btn"
                    >
                      {t.projects.liveDemo} ↗
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="github-btn"
                    >
                      <FaGithub /> {t.projects.sourceCode}
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">
        <div className="container contact-content">
        

         <p className="section-eyebrow">{t.contact.eyebrow}</p>

<h2 className="section-title">
  {t.contact.titleStart}{" "}
  <span className="gradient-text">{t.contact.titleEnd}</span>
</h2>

<p>{t.contact.description}</p>

          <div className="contact-links">
            <a href="mailto:fernandomatiastau@gmail.com" className="btn btn-primary">
              <FaEnvelope /> {t.contact.emailButton}
            </a>

            <a
              href="https://github.com/Matt091088"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/fernando-tau/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
<footer className="footer">
  <a className="logo" href="#home">
    Fernando<span>.</span>
  </a>

  <p>{t.footer.description}</p>

  <span>
    © 2026 Fernando Tau. {t.footer.rights}
  </span>
</footer>
      </div>
    </>
  );
}
