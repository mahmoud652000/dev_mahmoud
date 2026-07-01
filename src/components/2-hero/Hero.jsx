import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full Stack Developer",
  "Node.js & React Expert",
  "MERN Stack Developer",
  "API Architect",
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
];

const Hero = () => {
  const lottieRef = useRef();
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullText = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentRole.length < fullText.length) {
          setCurrentRole(fullText.slice(0, currentRole.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentRole.length > 0) {
          setCurrentRole(fullText.slice(0, currentRole.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentRole, isDeleting, roleIndex]);

  const skills = [
    "Node.js",
    "React.js",
    "TypeScript",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
  ];

  return (
    <section id="about" className="hero">
      {/* Background effects */}
      <div className="hero-bg-grid" />
      <div className="hero-bg-orb hero-bg-orb-1" />
      <div className="hero-bg-orb hero-bg-orb-2" />

      <div className="hero-content flex">
        <div className="left-section">
          {/* Avatar + Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="avatar-wrapper"
          >
            <div className="avatar-ring">
              <motion.img
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ damping: 6, type: "spring", stiffness: 100 }}
                src="./Picsart_25-07-02_04-23-26-215-modified.png"
                className="avatar"
                alt="Mahmoud Elbana"
              />
              <div className="icon-verified"></div>
            </div>
            <span className="availability-badge">
              <span className="availability-dot" />
              Available for work
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-greeting"
          >
            <span className="wave">👋</span> Hello, I&apos;m
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="hero-name"
          >
            Mahmoud <span className="gradient-text">Elbana</span>
          </motion.h1>

          {/* Typewriter Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hero-typewriter"
          >
            <span className="gradient-text">{currentRole}</span>
            <span className="cursor">|</span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="hero-bio"
          >
            Full Stack Developer with 3+ years of experience specializing in
            Node.js backend and React.js frontend. Founder of Qodix, leading
            teams that delivered 15+ Full Stack projects on Upwork, Fiverr, and
            Mostaql with 100% client satisfaction.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hero-stats flex"
          >
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <span className="stat-value gradient-text">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Skills Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="skills-tags flex"
          >
            {skills.map((skill, i) => (
              <span key={i} className="skill-tag">
                {skill}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="hero-cta flex"
          >
            <a href="#projects" className="btn-primary">
              <span className="btn-shine" />
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.25 }}
            className="all-icons flex"
          >
            <a
              href="https://github.com/mahmoud652000"
              target="_blank"
              rel="noopener noreferrer"
              className="icon icon-github"
              data-tooltip="GitHub"
            ></a>
            <a
              href="https://www.linkedin.com/in/mahmoud-elbana-25473b150"
              target="_blank"
              rel="noopener noreferrer"
              className="icon icon-linkedin"
              data-tooltip="LinkedIn"
            ></a>
            <a
              href="https://x.com/Mahmoud36468898"
              target="_blank"
              rel="noopener noreferrer"
              className="icon icon-twitter"
              data-tooltip="X (Twitter)"
            ></a>
            <a
              href="https://www.instagram.com/mahmoud_elbana47"
              target="_blank"
              rel="noopener noreferrer"
              className="icon icon-instagram"
              data-tooltip="Instagram"
            ></a>
          </motion.div>
        </div>

        {/* Right: Floating Animation Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="right-section animation"
        >
          <div className="animation-card glass-card">
            <Lottie
              lottieRef={lottieRef}
              onLoadedImages={() => {
                // @ts-ignore
                lottieRef.current.setSpeed(0.5);
              }}
              animationData={devAnimation}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
