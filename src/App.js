import React, { useState } from 'react';
import '@/App.css';
import { Menu, X, Mail, Linkedin, Github, ExternalLink, Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const experiences = [
    {
      title: "Consultant",
      company: "Infosys",
      period: "Feb 2024 - Present",
      location: "Bengaluru, India",
      description: "Working as Deployment Release Manager in Bengaluru, Karnataka. Managing release cycles and deployment processes for enterprise applications.",
      achievements: [
        "Leading deployment release management operations",
        "Driving release cycles for CPE boxes and mobile applications",
        "Managing deployments across multiple countries"
      ]
    },
    {
      title: "Software Engineer - Onsite",
      company: "Prodapt (Liberty Global)",
      period: "May 2019 - Nov 2019",
      location: "Amsterdam, Netherlands",
      description: "Worked onsite at Liberty Global in Amsterdam, Netherlands through Prodapt. Specialized in DevOps, Integration, and Development for telecom platforms.",
      achievements: [
        "Onsite deployment and integration at Liberty Global Amsterdam",
        "DevOps implementation for STB and OTT platforms",
        "Cross-functional collaboration with international teams",
        "System integration and development for European markets"
      ]
    },
    {
      title: "Software Engineer",
      company: "Prodapt",
      period: "Sep 2018 - Feb 2024",
      location: "Bengaluru, India",
      description: "Worked on-site in Bengaluru developing and deploying solutions. Specialized in programming, DevOps, and system testing for STB and mobile applications.",
      achievements: [
        "Release management for Liberty Global across 7 countries",
        "End-to-end system testing for STB & OTT platforms",
        "Built automation tasks for daily activities",
        "Developed game applications using Python"
      ]
    }
  ];

  const skills = [
    { category: "Core Skills", items: ["Release Management", "DevOps", "System Testing", "Deployment Integration"] },
    { category: "Programming", items: ["Python", "C Programming", "Web Development", "SQL"] },
    { category: "Platforms", items: ["STB Platforms", "OTT Platforms", "Mobile Applications", "CPE Boxes"] },
    { category: "Cloud & Tools", items: ["AWS Cloud", "ITIL", "Change Management", "Automation"] }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Electronics and Communication Engineering",
      institution: "Dayananda Sagar Academy of Technology and Management, Bangalore",
      year: "2014 - 2018",
      details: "Passionate about bridging the gap between hardware and software, enabling intelligent communication systems, and building innovative solutions."
    }
  ];

  const certifications = [
    { name: "AWS Cloud Associate", issuer: "Amazon Web Services", year: "Certified" },
    { name: "Python Programming Professional Level", issuer: "Professional Certification", year: "Certified" },
    { name: "ITIL Foundation", issuer: "ITIL", year: "Certified" }
  ];

  const projects = [
    {
      title: "Python Game Codes",
      description: "Collection of game applications built using Python. Demonstrates programming skills and creative problem-solving through interactive gaming experiences.",
      tech: ["Python", "Game Development", "Automation"],
      link: "https://github.com/swaroopjaggi26296/Python_game_codes_Jaggi.git"
    },
    {
      title: "Release Management System",
      description: "Managed release cycles for CPE boxes and mobile applications across Liberty Global spanning 7 countries.",
      tech: ["DevOps", "Release Management", "Deployment"],
      link: "#"
    },
    {
      title: "Automation Framework",
      description: "Built automation tasks for daily activities to improve efficiency and streamline workflows in production environments.",
      tech: ["Python", "Automation", "DevOps", "AWS"],
      link: "#"
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900" data-testid="logo">Swaroop N</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="nav-link" data-testid="nav-about">About</button>
              <button onClick={() => scrollToSection('experience')} className="nav-link" data-testid="nav-experience">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link" data-testid="nav-skills">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link" data-testid="nav-projects">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link" data-testid="nav-contact">Contact</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-900" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200" data-testid="mobile-menu">
            <div className="px-4 py-3 space-y-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left nav-link">About</button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left nav-link">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left nav-link">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left nav-link">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left nav-link">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section" data-testid="hero-section">
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-left space-y-6">
                <div className="hero-badge" data-testid="hero-badge">
                  <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold text-gray-900 border border-white/30 shadow-lg">
                    ✨ Available for opportunities
                  </span>
                </div>
                <h1 className="hero-title" data-testid="hero-title">
                  Hi, I'm <br/><span className="text-gradient">Swaroop N</span>
                </h1>
                <p className="hero-subtitle" data-testid="hero-subtitle">
                  Release Manager | DevOps Expert | System Testing Specialist
                </p>
                <p className="hero-description" data-testid="hero-description">
                  Expertise in STB & OTT Platform deployment integration. Skilled in DevOps, Python, SQL, and Web Development with experience managing releases across 7 countries.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Button 
                    onClick={() => scrollToSection('contact')} 
                    className="btn-primary"
                    data-testid="hero-contact-button"
                  >
                    <Mail className="mr-2 h-4 w-4" /> Get In Touch
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('projects')} 
                    variant="outline" 
                    className="btn-secondary"
                    data-testid="hero-projects-button"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> View Projects
                  </Button>
                </div>
                <div className="flex gap-4 mt-6">
                  <a href="https://www.linkedin.com/in/swaroopjaggi/" target="_blank" rel="noopener noreferrer" className="social-link" data-testid="social-linkedin">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/swaroopjaggi26296" target="_blank" rel="noopener noreferrer" className="social-link" data-testid="social-github">
                    <Github size={20} />
                  </a>
                  <a href="mailto:swaroopjaggi26296@outlook.com" className="social-link" data-testid="social-email">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
              
              {/* Right Column - Profile Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="profile-hero-container" data-testid="hero-profile-image">
                  <div className="profile-glow"></div>
                  <img
                    src="./images/YAS_6811__02.jpg"
                    alt="Swaroop N - Profile"
                    className="profile-hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white" data-testid="about-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title" data-testid="about-title">About Me</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="profile-image-container" data-testid="profile-image">
                <div className="profile-image-glow"></div>
                <img
                  src="./images/YAS_6811__02.jpg"
                  alt="Swaroop N"
                  className="profile-image"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed" data-testid="about-text">
                I'm an experienced Release Manager specializing in DevOps, Testing, and Validation for STB and mobile applications. 
                Currently working as Release Manager to drive release cycles for CPE boxes and mobile applications for Liberty Global across 7 countries.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My expertise includes Python programming at a professional level, AWS Cloud Associate certification, and building automation tasks for daily activities and game applications. 
                I have extensive experience in change management and ITIL domain.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As an Electronics and Communication Engineering professional, I'm passionate about bridging the gap between hardware and software, 
                enabling intelligent communication systems, and building innovative solutions.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="stat-badge">6+ Years Experience</span>
                <span className="stat-badge">7 Countries Coverage</span>
                <span className="stat-badge">AWS Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-gradient-subtle" data-testid="experience-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title" data-testid="experience-title">
              <Briefcase className="inline-block mr-3 mb-1" size={32} /> Work Experience
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="experience-card" data-testid={`experience-${index}`}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2" data-testid={`exp-title-${index}`}>{exp.title}</h3>
                      <p className="text-lg text-blue-600 font-semibold" data-testid={`exp-company-${index}`}>{exp.company}</p>
                      {exp.location && (
                        <p className="text-sm text-gray-600 mt-1 flex items-center" data-testid={`exp-location-${index}`}>
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </p>
                      )}
                    </div>
                    <span className="text-gray-600 font-medium mt-2 md:mt-0" data-testid={`exp-period-${index}`}>{exp.period}</span>
                  </div>
                  <p className="text-gray-700 mb-4" data-testid={`exp-description-${index}`}>{exp.description}</p>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-900">Key Achievements:</p>
                    <ul className="list-none space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start" data-testid={`exp-achievement-${index}-${i}`}>
                          <span className="text-blue-600 mr-2">▸</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-white" data-testid="skills-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title" data-testid="skills-title">
              <Code className="inline-block mr-3 mb-1" size={32} /> Skills & Technologies
            </h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="skill-card" data-testid={`skill-category-${index}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4" data-testid={`skill-category-title-${index}`}>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="skill-tag" data-testid={`skill-${index}-${i}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section-padding bg-gradient-subtle" data-testid="education-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="section-header">
                <h2 className="section-title text-left" data-testid="education-title">
                  <GraduationCap className="inline-block mr-3 mb-1" size={32} /> Education
                </h2>
                <div className="section-divider" style={{marginLeft: 0}}></div>
              </div>
              {education.map((edu, index) => (
                <Card key={index} className="education-card" data-testid={`education-${index}`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2" data-testid={`edu-degree-${index}`}>{edu.degree}</h3>
                    <p className="text-blue-600 font-semibold mb-1" data-testid={`edu-institution-${index}`}>{edu.institution}</p>
                    <p className="text-gray-600 mb-3" data-testid={`edu-year-${index}`}>{edu.year}</p>
                    <p className="text-gray-700" data-testid={`edu-details-${index}`}>{edu.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <div className="section-header">
                <h2 className="section-title text-left" data-testid="certifications-title">
                  <Award className="inline-block mr-3 mb-1" size={32} /> Certifications
                </h2>
                <div className="section-divider" style={{marginLeft: 0}}></div>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="certification-card" data-testid={`certification-${index}`}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-1" data-testid={`cert-name-${index}`}>{cert.name}</h3>
                      <p className="text-blue-600 font-medium" data-testid={`cert-issuer-${index}`}>{cert.issuer}</p>
                      <p className="text-gray-600 text-sm mt-1" data-testid={`cert-year-${index}`}>{cert.year}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-white" data-testid="projects-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title" data-testid="projects-title">Featured Projects</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="project-card" data-testid={`project-${index}`}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3" data-testid={`project-title-${index}`}>{project.title}</h3>
                  <p className="text-gray-700 mb-4" data-testid={`project-description-${index}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag" data-testid={`project-tech-${index}-${i}`}>{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="project-link" data-testid={`project-link-${index}`}>
                    View Project <ExternalLink size={16} className="inline ml-1" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-subtle" data-testid="contact-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-header">
            <h2 className="section-title" data-testid="contact-title">Let's Work Together</h2>
            <div className="section-divider"></div>
          </div>
          <p className="text-xl text-gray-700 mb-8" data-testid="contact-description">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:swaroopjaggi26296@outlook.com" data-testid="contact-email-button">
              <Button className="btn-primary w-full sm:w-auto">
                <Mail className="mr-2 h-5 w-5" /> Send Email
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/swaroopjaggi/" target="_blank" rel="noopener noreferrer" data-testid="contact-linkedin-button">
              <Button variant="outline" className="btn-secondary w-full sm:w-auto">
                <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8" data-testid="footer">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400" data-testid="footer-text">
            © 2024 Swaroop N. Built with React & Tailwind CSS.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://www.linkedin.com/in/swaroopjaggi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/swaroopjaggi26296" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="mailto:swaroopjaggi26296@outlook.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;