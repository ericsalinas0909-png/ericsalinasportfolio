import { useState, useEffect } from 'react'
import {
  FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone,
  FaMapMarkerAlt, FaDownload, FaLaptopCode, FaTools, FaPalette,
  FaServer, FaReact, FaJava, FaPython, FaMicrosoft,
  FaGraduationCap, FaCertificate, FaBars, FaTimes, FaCode,
  FaImages
} from 'react-icons/fa'
import { SiFlutter } from 'react-icons/si'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (galleryOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [galleryOpen])

  const closeMenu = () => setMenuOpen(false)

  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'UI/UX Design', icon: <FaPalette /> },
    { name: 'Computer System Servicing', icon: <FaTools /> },
    { name: 'Hardware & Software Config', icon: <FaServer /> },
    { name: 'IT Support', icon: <FaLaptopCode /> },
    { name: 'MS Office', icon: <FaMicrosoft /> },
  ]

  const certifications = [
    { title: 'Computer System Servicing NC II', org: 'TESDA', date: 'January 2024' },
    { title: 'AWS Academy Cloud Foundations', org: 'AWS Academy', date: 'August 2024' },
    { title: 'Java Fundamental (OOP)', org: 'STI College Batangas', date: 'June 2023' },
    { title: 'Onshape Introduction to Drawing', org: 'PTC / Onshape', date: 'December 2024' },
    { title: 'Onshape Introduction to Simulation', org: 'PTC / Onshape', date: 'December 2024' },
    { title: 'On-the-Job Training Certificate', org: 'Citimart Group of Companies', date: 'April 2026' },
  ]

  return (
    <>
      {/* Animated Background */}
      <div className="bg-animated" aria-hidden="true">
        <img src="/bg.jpg" alt="" />
      </div>
      <div className="bg-overlay" aria-hidden="true" />

      {/* HEADER */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav">
          <a href="#home" className="logo" onClick={closeMenu}>
            Eric<span>.</span>
          </a>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>Contact</a>
          </nav>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <div>
            <div className="hero-badge">
              <span className="dot"></span>
              Available for opportunities
            </div>
            <h1>
              Hi, I'm <span className="highlight">Jhon Eric</span>
            </h1>
            <p className="hero-title">Junior Software Engineer</p>
            <p className="hero-desc">
              Computer Engineering graduate with hands-on IT Support experience.
              Passionate about building reliable systems, troubleshooting technical
              challenges, and creating digital solutions.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a
                href="/Jhon_Eric_Salinas_Resume.pdf"
                download
                className="btn btn-outline"
              >
                <FaDownload /> Download CV
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/eric-salinas-a9284a422" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/eric.salinas.954549/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/minawarihh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="mailto:ericsalinas0909@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="avatar-placeholder">
              <img src="/pfp.jpg" alt="Jhon Eric Baler Salinas" className="avatar-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know who I am and what I do</p>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a Computer Engineering graduate from STI College Batangas with
                hands-on experience in IT Support, particularly in hardware and
                technical-related tasks. I enjoy troubleshooting, solving technical
                problems, and using my knowledge and skills to provide reliable
                support in the workplace.
              </p>
              <p>
                I also have experience in wholesale and retail operations, including
                value card production using IBM iSeries systems. Beyond tech, I'm
                also an artist and songwriter who loves expressing creativity through
                music and design.
              </p>
              <p>
                I'm willing to learn new skills, adapt to different work environments,
                and take on new challenges. I'm committed to doing my best in every
                task and contributing positively to the team and organization.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon"><FaLaptopCode /></div>
                <div>
                  <h4>IT Support Specialist</h4>
                  <p>Hardware troubleshooting, network setup & system maintenance</p>
                </div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon"><FaCode /></div>
                <div>
                  <h4>Software Development</h4>
                  <p>React, Java, Python & Flutter application development</p>
                </div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon"><FaPalette /></div>
                <div>
                  <h4>Artist & Songwriter</h4>
                  <p>Creative expression through music, design and storytelling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey so far</p>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3>IT Support Intern</h3>
                  <span className="timeline-date">Feb 2026 – Apr 2026</span>
                </div>
                <p className="timeline-company">Citimart Group of Companies · P. Burgos St, Batangas</p>
                <ul>
                  <li>Provided technical support by troubleshooting and maintaining desktop computers, system units, printers, UPS devices, and other computer hardware.</li>
                  <li>Managed file sharing and network resources by configuring shared folders, user permissions, and server access.</li>
                  <li>Processed and managed wholesale and retail ValueCard transactions using the IBM iSeries system, ensuring accurate data entry and transaction records.</li>
                  <li>Collaborated with team members to maintain IT infrastructure and provide technical assistance across multiple departments.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I've built and more coming soon</p>

          <div className="featured-project">
            <div className="featured-header">
              <div className="featured-logo">
                <img src="/floodlock-logo.jpg" alt="FloodLock logo" />
              </div>
              <div className="featured-info">
                <h3>FloodLock – Portable Flood Barrier System</h3>
                <p>
                  A portable flood barrier system with real-time water level monitoring
                  and mobile alerts. Built as a thesis project combining hardware
                  (ESP-32, sensors, auto-extending barrier) and a Flutter + Firebase
                  mobile/web app for live monitoring, predictive alerts, and evacuation guidance.
                </p>
                <div className="project-tags">
                  <span className="tag">Flutter</span>
                  <span className="tag">Firebase</span>
                  <span className="tag">ESP-32</span>
                  <span className="tag">IoT Sensors</span>
                  <span className="tag">Real-time</span>
                  <span className="tag">Hardware</span>
                </div>
                <div className="project-links" style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <SiFlutter style={{ marginRight: 6 }} /> Hardware + WebApp Development · Thesis Defended
                  </span>
                  <button
                    type="button"
                    className="btn-gallery"
                    onClick={() => setGalleryOpen(true)}
                  >
                    <FaImages />
                    View Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Modal */}
          {galleryOpen && (
            <div className="gallery-modal-overlay" onClick={() => setGalleryOpen(false)}>
              <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
                <div className="gallery-modal-header">
                  <h3>FloodLock – Project Gallery</h3>
                  <button
                    type="button"
                    className="gallery-modal-close"
                    onClick={() => setGalleryOpen(false)}
                    aria-label="Close gallery"
                  >
                    <FaTimes />
                  </button>
                </div>
                <div className="project-gallery">
                  <div className="gallery-item gallery-wide">
                    <img src="/floodlock-ui-sample.png" alt="FloodLock app UI – Low, Moderate and High flood levels" />
                    <span className="gallery-caption">Mobile App UI – Flood Level States</span>
                  </div>
                  <div className="gallery-item">
                    <img src="/floodlock-app.png" alt="FloodLock app monitoring screen" />
                    <span className="gallery-caption">Live Monitoring Screen</span>
                  </div>
                  <div className="gallery-item">
                    <img src="/floodlock-door.jpg" alt="FloodLock barrier installed on doorway" />
                    <span className="gallery-caption">Barrier Installed on Doorway</span>
                  </div>
                  <div className="gallery-item">
                    <img src="/floodlock-circuits.jpg" alt="FloodLock ESP-32 circuit board and electronics" />
                    <span className="gallery-caption">ESP-32 Circuit and Electronics</span>
                  </div>
                  <div className="gallery-item gallery-wide">
                    <img src="/floodlock-infographic.jpg" alt="FloodLock product infographic" />
                    <span className="gallery-caption">Product Infographic</span>
                  </div>
                  <div className="gallery-item">
                    <img src="/floodlock-thesis.jpg" alt="Thesis defense team photo" />
                    <span className="gallery-caption">Thesis Defended</span>
                  </div>
                  <div className="gallery-item">
                    <img src="/floodlock-hardbind.jpg" alt="Hardbound thesis at STI College" />
                    <span className="gallery-caption">Hardbound Thesis Submission</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="projects-grid" style={{ marginTop: 32 }}>
            <div className="project-card">
              <div className="project-image">
                <FaCode />
                <span className="coming-badge">Coming Soon</span>
              </div>
              <div className="project-body">
                <h3>More Projects Coming Soon</h3>
                <p>
                  I'm currently working on new software and hardware projects.
                  Check back soon for updates on my latest work!
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Java</span>
                  <span className="tag">Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="container">
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-subtitle">Academic background and professional credentials</p>
          <div className="edu-grid">
            <div className="edu-card">
              <div style={{ marginBottom: 16, color: 'var(--accent-light)', fontSize: '1.8rem' }}>
                <FaGraduationCap />
              </div>
              <h3>Bachelor of Science in Computer Engineering</h3>
              <p className="edu-school">STI College Batangas</p>
              <p className="edu-year">2022 – 2026 · Graduated June 2026</p>
              <p>
                Major in Hardware & Software — combination of Computer Science and
                Electrical Engineering principles.
              </p>
            </div>
            <div className="cert-card">
              <div style={{ marginBottom: 16, color: 'var(--accent-light)', fontSize: '1.8rem' }}>
                <FaCertificate />
              </div>
              <h3 style={{ marginBottom: 16 }}>Certifications & Trainings</h3>
              <div className="certs-list">
                {certifications.map((cert) => (
                  <div className="cert-item" key={cert.title}>
                    <span className="cert-icon"><FaCertificate /></span>
                    <div>
                      <h4>{cert.title}</h4>
                      <span>{cert.org} · {cert.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's connect and build something great together</p>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>I'd love to hear from you</h3>
              <p>
                Whether you have a question, a project idea, or just want to say hello —
                feel free to reach out. I'm always open to new opportunities and
                collaborations.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon"><FaEnvelope /></div>
                  <a href="mailto:ericsalinas0909@gmail.com">ericsalinas0909@gmail.com</a>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><FaPhone /></div>
                  <a href="tel:+639929446072">+63 992 944 6072</a>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><FaMapMarkerAlt /></div>
                  <span>Sampaga West, Batangas City</span>
                </div>
              </div>
              <div className="contact-socials">
                <a href="https://www.linkedin.com/in/eric-salinas-a9284a422" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/eric.salinas.954549/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/minawarihh/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="contact-cta-box">
              <h3>Download My Resume</h3>
              <p>Get a complete overview of my experience, skills, and education.</p>
              <a
                href="/Jhon_Eric_Salinas_Resume.pdf"
                download
                className="btn btn-primary"
                style={{ marginTop: 8 }}
              >
                <FaDownload /> Download CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} <span>Jhon Eric Baler Salinas</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
