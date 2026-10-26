// ============================================================
// 1. IMPORTACIONES
// ============================================================

// useState permite guardar y actualizar estados del componente.
import { useState } from "react";

// motion permite crear animaciones con Framer Motion.
import { motion } from "framer-motion";

// Iconos de GitHub, LinkedIn y correo electrónico.
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Estilos generales del portfolio.
import "./App.css";

// Imágenes de los proyectos.
import gentiziImage from "./assets/gentiziproyect.png";
import hotelImage from "./assets/hotel.jpg";
import proyectaImage from "./assets/proyecta-mueble.png";

// Textos traducidos al español y al inglés.
import { translations } from "./i18n/translations";

// ============================================================
// 2. COMPONENTE PRINCIPAL
// ============================================================

export default function App() {
  // Controla la animación de la cortina inicial.
  const [curtainOpen, setCurtainOpen] = useState(false);

  // Controla si el menú de navegación móvil está abierto.
  const [menuOpen, setMenuOpen] = useState(false);

  // Guarda el idioma seleccionado: "es" o "en".
  const [language, setLanguage] = useState("es");

  // Obtiene los textos correspondientes al idioma actual.
  // Cuando cambia language, React actualiza los textos.
  const t = translations[language];

  // ==========================================================
  // 3. LISTA DE PROYECTOS
  // ==========================================================
  // Guardamos los proyectos en un array para poder mostrarlos
  // automáticamente usando .map(), sin repetir el mismo JSX.

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

  // ==========================================================
  // 4. LISTA DE HABILIDADES
  // ==========================================================
  // Estas habilidades se muestran automáticamente en la sección
  // Skills. Para agregar otra, simplemente añadila al array.

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

  // ==========================================================
  // 5. FUNCIONES AUXILIARES
  // ==========================================================

  // Cierra el menú móvil cuando el usuario selecciona una sección.
  const closeMenu = () => setMenuOpen(false);

  // ==========================================================
  // 6. ESTRUCTURA VISUAL DEL PORTFOLIO
  // ==========================================================

  return (
    <>
      {/* ======================================================
          CORTINA DE ENTRADA
          Dos paneles se desplazan para revelar el portfolio.
          ====================================================== */}

      <div className="intro-curtain">
        {/* Panel izquierdo de la cortina */}
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
            // Cuando termina la animación inicial,
            // actualizamos el estado para abrir la cortina.
            if (!curtainOpen) setCurtainOpen(true);
          }}
        />

        {/* Panel derecho de la cortina */}
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

        {/* Nombre que aparece durante la introducción */}
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

      {/* Contenedor general de todo el sitio */}
      <div className="app">
        {/* ====================================================
            7. BARRA DE NAVEGACIÓN
            ==================================================== */}

        <nav className="navbar">
          {/* Logo que vuelve al inicio */}
          <a className="logo" href="#home" onClick={closeMenu}>
            Fernando<span>.</span>
          </a>

          {/* Botón para abrir o cerrar el menú móvil */}
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Enlaces a las diferentes secciones */}
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#about" onClick={closeMenu}>
              {t.nav.about}
            </a>

            <a href="#education" onClick={closeMenu}>
              {t.nav.education}
            </a>

            <a href="#skills" onClick={closeMenu}>
              {t.nav.skills}
            </a>

            <a href="#projects" onClick={closeMenu}>
              {t.nav.projects}
            </a>

            <a href="#contact" onClick={closeMenu}>
              {t.nav.contact}
            </a>

            {/* Selector de idioma */}
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

        {/* ====================================================
            8. HERO
            Primera sección: presentación, foto y elementos
            visuales relacionados con el desarrollo web.
            ==================================================== */}

        <motion.section
          id="home"
          className="hero"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.8,
    delay: 0.4,
    ease: [0.34, 1.56, 0.64, 1],
  },
},
          }}
        >
          {/* Contenedor que organiza las dos columnas del hero */}
          <div className="hero-content">
            {/* Texto decorativo de fondo */}
            
<motion.div
  className="hero-watermark"
  aria-hidden="true"
>
  {"PORTFOLIO".split("").map((letter, index) => (
    <motion.span
      key={`${letter}-${index}`}
      initial={{ opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.5 + index * 0.12,
        ease: "easeOut",
      }}
      style={{ display: "inline-block" }}
    >
      {letter}
    </motion.span>
  ))}
</motion.div>


            {/* ------------------------------------------------
                COLUMNA IZQUIERDA: PRESENTACIÓN
                ------------------------------------------------ */}

            <motion.div
              className="hero-left"
              variants={{
                hidden: { opacity: 0, y: 45 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: "easeOut",
                  },
                },
              }}
            >
              {/* Texto pequeño que introduce el perfil */}
              <p className="hero-eyebrow">{t.hero.eyebrow}</p>

              {/* Nombre principal */}
              <h1>
                Fernando
                <span className="gradient-text"> Tau.</span>
              </h1>

              {/* Especialidad profesional */}
              <p className="subtitle">{t.hero.subtitle}</p>

              {/* Descripción personal */}
              <p className="hero-description">{t.hero.description}</p>

              {/* Botones principales de acción */}
              <div className="hero-buttons">
                {/* Lleva a la sección de proyectos */}
                <a href="#projects" className="btn btn-primary">
                  {t.hero.projectsButton}
                </a>

                {/* Abre el perfil de LinkedIn en otra pestaña */}
                <a
                  href="https://www.linkedin.com/in/fernando-tau/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  {t.hero.linkedin} ↗
                </a>

                {/* Descarga el CV según el idioma seleccionado */}
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

              {/* Indicadores destacados del perfil */}
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

              {/* Enlaces a redes y correo */}
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
            </motion.div>

            {/* ------------------------------------------------
                COLUMNA DERECHA: FOTO Y ELEMENTOS VISUALES

                CORRECCIÓN IMPORTANTE:
                Todo el contenido visual queda dentro de
                hero-right, incluyendo la foto, la ventana de
                código, las etiquetas flotantes y la vista previa.
                ------------------------------------------------ */}

            <motion.div
  className="hero-right"
  variants={{
  hidden: {
    opacity: 0,
    y: 180,
    scale: 0.82,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.3,
      ease: [0.22, 1.8, 0.36, 1],
    },
  },
}}
>
  {/* Foto de perfil con animación independiente */}
<motion.div
  className="profile-cutout-motion"
  initial={{ opacity: 0, y: 180, scale: 0.82 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 1,
    delay: 0.4,
    ease: [0.22, 1.4, 0.36, 1],
  }}
>
  <div className="profile-image-container">
    <img
      src="/images/fernando-profile.png"
      alt="Fernando Tau - Frontend Developer"
      className="profile-image"
    />
  </div>
</motion.div>

              {/* Capa decorativa que acompaña a la fotografía */}
              <div className="hero-image-gradient" />

              {/* ----------------------------------------------
                  VENTANA DE CÓDIGO DECORATIVA
                  Simula un editor mostrando información
                  del desarrollador.
                  ---------------------------------------------- */}

              <div className="code-window">
                {/* Cabecera de la ventana */}
                <div className="code-window-header">
                  <div className="window-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span className="code-filename">portfolio.jsx</span>
                  <span className="code-status">● LIVE</span>
                </div>

                {/* Código ilustrativo */}
                <div className="code-content">
                  <div>
                    <span className="line-number">01</span>{" "}
                    <span className="code-purple">const</span>{" "}
                    <span className="code-blue">developer</span> = {"{"}
                  </div>

                  <div>
                    <span className="line-number">02</span>
                    &nbsp; name:{" "}
                    <span className="code-green">"Fernando Tau"</span>,
                  </div>

                  <div>
                    <span className="line-number">03</span>
                    &nbsp; role:{" "}
                    <span className="code-green">"Frontend Developer"</span>,
                  </div>

                  <div>
                    <span className="line-number">04</span>
                    &nbsp; skills: [
                    <span className="code-green">"React"</span>,{" "}
                    <span className="code-green">"JS"</span>],
                  </div>

                  <div>
                    <span className="line-number">05</span>
                    &nbsp; learning:{" "}
                    <span className="code-orange">true</span>
                  </div>

                  <div>
                    <span className="line-number">06</span> {"};"}
                  </div>

                  {/* Mensaje decorativo debajo del código */}
                  <div className="code-output">
                    <span className="code-prompt">➜</span>{" "}
                    Building something great
                    <span className="typing-cursor">|</span>
                  </div>
                </div>
              </div>

              {/* ----------------------------------------------
                  ETIQUETAS FLOTANTES DE TECNOLOGÍAS
                  Cada elemento puede posicionarse con CSS.
                  ---------------------------------------------- */}

              <div className="floating-tech floating-react">⚛ React</div>

              <div className="floating-tech floating-js">
                JS JavaScript
              </div>

              <div className="floating-tech floating-css">✦ CSS</div>

              <div className="floating-tech floating-html">🌐 HTML5</div>

              <div className="floating-tech floating-git">⑂ Git</div>

              <div className="floating-tech floating-github">⌘ GitHub</div>

              <div className="floating-tech floating-vite">⚡ Vite</div>

              {/* Texto de estado debajo de la foto */}
              <div className="image-caption">
                <span className="status-dot" />
                <span>Building digital experiences</span>
              </div>

              {/* ----------------------------------------------
                  VISTA PREVIA DE PROYECTOS
                  Muestra una selección de proyectos dentro
                  del hero, antes de la sección completa.
                  ---------------------------------------------- */}

              <div className="hero-projects-preview">
                <div className="hero-projects-heading">
                  <span>01 — SELECTED WORK</span>
                  <a href="#projects">Ver todos ↗</a>
                </div>

                {/* Vista previa de Gentizi */}
                <a href="#projects" className="hero-project-mini">
                  <img
                    src={gentiziImage}
                    alt="Proyecto Gentizi Ecommerce"
                  />

                  <div>
                    <span>ECOMMERCE</span>
                    <h3>Gentizi</h3>
                    <p>React · JavaScript · CSS</p>
                  </div>

                  <span className="hero-project-arrow">↗</span>
                </a>

                {/* Vista previa de Hotel City */}
                <a href="#projects" className="hero-project-mini">
                  <img src={hotelImage} alt="Proyecto Hotel City" />

                  <div>
                    <span>WEB DESIGN</span>
                    <h3>Hotel City</h3>
                    <p>HTML · CSS · JavaScript</p>
                  </div>

                  <span className="hero-project-arrow">↗</span>
                </a>

                {/* Vista previa de Proyecta Mueble */}
                <a href="#projects" className="hero-project-mini">
                  <img
                    src={proyectaImage}
                    alt="Proyecto Proyecta Mueble"
                  />

                  <div>
                    <span>WEB DEVELOPMENT</span>
                    <h3>Proyecta Mueble</h3>
                    <p>React · Responsive Design</p>
                  </div>

                  <span className="hero-project-arrow">↗</span>
                </a>
              </div>
            </motion.div>
            {/* FIN DE HERO-RIGHT */}

          </div>
          {/* FIN DE HERO-CONTENT */}

          {/* Enlace visual que invita a bajar a la siguiente sección */}
          <a className="scroll-indicator" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
          </a>
        </motion.section>

        {/* ====================================================
            9. SOBRE MÍ
            Presentación personal y aspectos destacados.
            ==================================================== */}

        <section id="about" className="section">
          <div className="container">
            <div className="about-content">
              {/* Texto principal */}
              <div className="about-text">
                <p className="section-eyebrow">{t.about.eyebrow}</p>

                <h2 className="section-title">
                  {t.about.titleStart}{" "}
                  <span className="gradient-text">
                    {t.about.titleEnd}
                  </span>
                </h2>

                <p>{t.about.paragraph1}</p>
                <p>{t.about.paragraph2}</p>
              </div>

              {/* Tarjetas con información complementaria */}
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

        {/* ====================================================
            10. EDUCACIÓN Y CERTIFICADOS
            Los enlaces permiten abrir los documentos PDF.
            ==================================================== */}

        <section id="education" className="section section-alt">
          <div className="container">
            <p className="section-eyebrow">{t.education.eyebrow}</p>

            <h2 className="section-title">
              {t.education.titleStart}{" "}
              <span className="gradient-text">
                {t.education.titleEnd}
              </span>
            </h2>

            {/* Cuadrícula de formación académica y certificados */}
            <div className="education-grid">
              {/* Formación actual */}
              <article className="education-card">
                <span className="card-label">{t.education.current}</span>
                <h3>{t.education.softwareTitle}</h3>
                <p>{t.education.softwareDescription}</p>
              </article>

              {/* Certificado de programación web */}
              <article className="education-card">
                <span className="card-label">
                  {t.education.completed}
                </span>

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

              {/* Certificado BYU-Pathway */}
              <article className="education-card">
                <span className="card-label">
                  {t.education.completed}
                </span>

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

              {/* Certificado de inglés C1 */}
              <article className="education-card">
                <span className="card-label">
                  {t.education.language}
                </span>

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

              {/* Certificado de desarrollo con inteligencia artificial */}
              <article className="education-card">
                <span className="card-label">
                  {t.education.completedDate}
                </span>

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

              {/* Experiencia práctica desarrollando Gentizi */}
              <article className="education-card featured-education">
                <span className="card-label">{t.education.current}</span>
                <h3>{t.education.gentiziTitle}</h3>
                <p>{t.education.gentiziDescription}</p>
              </article>
            </div>
          </div>
        </section>

        {/* ====================================================
            11. HABILIDADES TÉCNICAS
            El método .map() crea una tarjeta por cada habilidad.
            ==================================================== */}

        <section id="skills" className="section">
          <div className="container">
            <p className="section-eyebrow">{t.skills.eyebrow}</p>

            <h2 className="section-title">
              {t.skills.titleStart}{" "}
              <span className="gradient-text">
                {t.skills.titleEnd}
              </span>
            </h2>

            <p className="section-description">{t.skills.description}</p>

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
                  {/* Número de orden de la habilidad */}
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Nombre de la tecnología */}
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================
            12. PROYECTOS
            Las tarjetas se generan a partir del array projects.
            ==================================================== */}

        <section id="projects" className="section section-alt">
          <div className="container">
            <p className="section-eyebrow">{t.projects.eyebrow}</p>

            <h2 className="section-title">
              {t.projects.titleStart}{" "}
              <span className="gradient-text">
                {t.projects.titleEnd}
              </span>
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
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                >
                  {/* Imagen del proyecto */}
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      loading="lazy"
                    />

                    {/* La etiqueta solo aparece si el proyecto tiene status */}
                    {project.status && (
                      <span className="project-status">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Información del proyecto */}
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    {/* Tecnologías utilizadas */}
                    <div className="tech-list">
                      {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    {/* Enlaces a la versión publicada y al código */}
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

        {/* ====================================================
            13. CONTACTO
            Ofrece tres formas de contactar o conocer el perfil.
            ==================================================== */}

        <section id="contact" className="section contact">
          <div className="container contact-content">
            <p className="section-eyebrow">{t.contact.eyebrow}</p>

            <h2 className="section-title">
              {t.contact.titleStart}{" "}
              <span className="gradient-text">
                {t.contact.titleEnd}
              </span>
            </h2>

            <p>{t.contact.description}</p>

            <div className="contact-links">
              {/* Correo electrónico */}
              <a
                href="mailto:fernandomatiastau@gmail.com"
                className="btn btn-primary"
              >
                <FaEnvelope /> {t.contact.emailButton}
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Matt091088"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <FaGithub /> GitHub
              </a>

              {/* LinkedIn */}
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

        {/* ====================================================
            14. PIE DE PÁGINA
            Información final y derechos de autor.
            ==================================================== */}

        <footer className="footer">
          {/* Logo que permite regresar al inicio */}
          <a className="logo" href="#home">
            Fernando<span>.</span>
          </a>

          <p>{t.footer.description}</p>

          <span>© 2026 Fernando Tau. {t.footer.rights}</span>
        </footer>
      </div>
    </>
  );
}