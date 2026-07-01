import { motion } from "framer-motion";
import "./experience.css";
import { myExperience } from "./myExperience";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          My professional journey building and leading web development projects.
        </p>
      </div>

      <div className="timeline">
        {myExperience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="timeline-item"
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <div className="timeline-header">
                <h3 className="job-role">{job.role}</h3>
                <span className="job-period">{job.period}</span>
              </div>
              <div className="job-company flex">
                <span className="company-name">{job.company}</span>
                <span className="company-separator">•</span>
                <span className="company-type">{job.type}</span>
                <span className="company-separator">•</span>
                <span className="company-location">📍 {job.location}</span>
              </div>
              <ul className="achievements">
                {job.achievements.map((achievement, j) => (
                  <li key={j} className="achievement-item">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
