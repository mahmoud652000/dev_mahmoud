import { motion } from "framer-motion";
import "./education.css";
import { myEducation, myLanguages } from "./myEducation";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="section-header">
        <h2 className="section-title">Education &amp; Languages</h2>
        <p className="section-subtitle">
          Academic background and language proficiency.
        </p>
      </div>

      <div className="education-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="education-card glass-card"
        >
          <div className="edu-icon">🎓</div>
          <h3 className="edu-degree">{myEducation.degree}</h3>
          <p className="edu-institution">{myEducation.institution}</p>
          <div className="edu-details">
            <div className="edu-row flex">
              <span className="edu-label">Period</span>
              <span className="edu-value">{myEducation.period}</span>
            </div>
            <div className="edu-row flex">
              <span className="edu-label">Location</span>
              <span className="edu-value">{myEducation.location}</span>
            </div>
            <div className="edu-row flex">
              <span className="edu-label">Major</span>
              <span className="edu-value">{myEducation.major}</span>
            </div>
            <div className="edu-row flex">
              <span className="edu-label">Grade</span>
              <span className="edu-value grade-badge">{myEducation.grade}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="languages-card glass-card"
        >
          <div className="edu-icon">🌐</div>
          <h3 className="lang-title">Languages</h3>
          <div className="lang-list">
            {myLanguages.map((lang, i) => (
              <div key={i} className="lang-item">
                <div className="lang-header flex">
                  <span className="lang-name">{lang.name}</span>
                  <span className="lang-level">{lang.level}</span>
                </div>
                <div className="lang-bar">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="lang-progress"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
