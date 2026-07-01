import { motion } from "framer-motion";
import "./skills.css";
import { mySkills } from "./mySkills";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      <div className="skills-grid">
        {mySkills.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="skill-card glass-card"
          >
            <div className="skill-card-header flex">
              <span className="skill-icon">{group.icon}</span>
              <h3 className="skill-category">{group.category}</h3>
            </div>
            <div className="skill-tags flex">
              {group.skills.map((skill, j) => (
                <span key={j} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
