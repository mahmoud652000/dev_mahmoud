import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./dashboard.css";
import { myProjects as defaultProjects } from "../3-main/myProjects";

const STORAGE_KEY = "portfolio_projects";
const AUTH_KEY = "dashboard_auth";
const PASSWORD = "246810";

const getProjects = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    /* noop */
  }
  return defaultProjects;
};

const saveProjects = (projects) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};

const emptyForm = {
  projectTitle: "",
  category: [],
  imgPath: "",
  demoLink: "",
  codeLink: "",
  tech: [],
  date: "",
  description: "",
};

const Dashboard = () => {
  const [authed, setAuthed] = useState(
    sessionStorage.getItem(AUTH_KEY) === "true"
  );
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const [projects, setProjects] = useState(getProjects);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [techInput, setTechInput] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    saveProjects(projects);
    window.dispatchEvent(new Event("projects-updated"));
  }, [projects]);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "true");
      setAuthed(true);
      setAuthError("");
    } else {
      setAuthError("Wrong password. Try: 246810");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setAuthed(false);
    setPassword("");
  };

  const handleCategoryToggle = (cat) => {
    setForm((prev) => {
      const has = prev.category.includes(cat);
      return {
        ...prev,
        category: has
          ? prev.category.filter((c) => c !== cat)
          : [...prev.category, cat],
      };
    });
  };

  const handleTechAdd = (e) => {
    if (e.key === "Enter" || e.type === "blur") {
      const val = techInput.trim();
      if (val && !form.tech.includes(val)) {
        setForm((prev) => ({ ...prev, tech: [...prev.tech, val] }));
      }
      setTechInput("");
    }
  };

  const handleTechToggle = (tech) => {
    setForm((prev) => {
      const has = prev.tech.includes(tech);
      return {
        ...prev,
        tech: has ? prev.tech.filter((t) => t !== tech) : [...prev.tech, tech],
      };
    });
  };

  const handleTechRemove = (t) => {
    setForm((prev) => ({ ...prev, tech: prev.tech.filter((x) => x !== t) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.projectTitle.trim()) {
      showToast("Project title is required", "error");
      return;
    }

    const projectData = {
      ...form,
      imgPath: form.imgPath || "./images/img1.PNG",
    };

    if (editingId !== null) {
      setProjects((prev) =>
        prev.map((p, i) => (i === editingId ? projectData : p))
      );
      showToast("Project updated successfully");
    } else {
      setProjects((prev) => [projectData, ...prev]);
      showToast("Project added successfully");
    }

    resetForm();
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
    setTechInput("");
  };

  const handleEdit = (index) => {
    setForm({ ...projects[index] });
    setEditingId(index);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (index) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => prev.filter((_, i) => i !== index));
      showToast("Project deleted");
    }
  };

  const handleReset = () => {
    if (confirm("Reset all projects to defaults?")) {
      setProjects(defaultProjects);
      localStorage.removeItem(STORAGE_KEY);
      showToast("Projects reset to defaults");
    }
  };

  const categories = ["css", "js", "react", "node"];

const presetTechs = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js",
  "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "Bootstrap",
  "JWT", "Socket.io", "WebSockets", "REST API", "Next.js",
  "Redux", "Firebase", "MySQL", "PostgreSQL", "GraphQL", "Docker",
  "Git", "GitHub", "Figma", "Postman", "Vite", "MUI",
];

  /* ========================
     Login Screen
  ======================== */
  if (!authed) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-bg-orb dashboard-bg-orb-1" />
        <div className="dashboard-bg-orb dashboard-bg-orb-2" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="login-card glass-card"
        >
          <div className="login-icon">🔐</div>
          <h2>Dashboard Login</h2>
          <p>Enter your password to manage projects</p>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
            />
            {authError && <span className="auth-error">{authError}</span>}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <a href="#up" className="back-link">
            ← Back to Portfolio
          </a>
        </motion.div>
      </div>
    );
  }

  /* ========================
     Dashboard
  ======================== */
  return (
    <div className="dashboard-page">
      <div className="dashboard-bg-orb dashboard-bg-orb-1" />
      <div className="dashboard-bg-orb dashboard-bg-orb-2" />

      <div className="dashboard-header flex">
        <div>
          <h1 className="dashboard-title">
            <span className="gradient-text">Projects</span> Dashboard
          </h1>
          <p className="dashboard-subtitle">
            Manage your portfolio projects. Changes are saved automatically.
          </p>
        </div>
        <div className="dashboard-actions flex">
          <button className="btn-dash btn-dash-primary" onClick={() => { resetForm(); setShowForm(true); }}>
            + Add Project
          </button>
          <button className="btn-dash btn-dash-ghost" onClick={handleReset}>
            Reset
          </button>
          <button className="btn-dash btn-dash-ghost" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="dash-stats flex">
        <div className="dash-stat glass-card">
          <span className="dash-stat-value gradient-text">{projects.length}</span>
          <span className="dash-stat-label">Total Projects</span>
        </div>
        <div className="dash-stat glass-card">
          <span className="dash-stat-value gradient-text">
            {projects.filter((p) => p.category.includes("react")).length}
          </span>
          <span className="dash-stat-label">React Projects</span>
        </div>
        <div className="dash-stat glass-card">
          <span className="dash-stat-value gradient-text">
            {projects.filter((p) => p.category.includes("node")).length}
          </span>
          <span className="dash-stat-label">Node Projects</span>
        </div>
        <div className="dash-stat glass-card">
          <span className="dash-stat-value gradient-text">
            {new Set(projects.flatMap((p) => p.tech)).size}
          </span>
          <span className="dash-stat-label">Technologies</span>
        </div>
      </div>

      {/* Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="form-collapse"
          >
            <div className="dash-form-card glass-card">
              <div className="dash-form-header flex">
                <h3>{editingId !== null ? "Edit Project" : "Add New Project"}</h3>
                <button className="btn-close" onClick={resetForm}>✕</button>
              </div>

              <form onSubmit={handleSubmit} className="dash-form">
                <div className="dash-form-row">
                  <div className="dash-form-group">
                    <label>Project Title</label>
                    <input
                      type="text"
                      value={form.projectTitle}
                      onChange={(e) => setForm({ ...form, projectTitle: e.target.value })}
                      placeholder="My Awesome Project"
                    />
                  </div>
                  <div className="dash-form-group">
                    <label>Date</label>
                    <input
                      type="text"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      placeholder="Jan 2026"
                    />
                  </div>
                </div>

                <div className="dash-form-row">
                  <div className="dash-form-group">
                    <label>Image Path</label>
                    <input
                      type="text"
                      value={form.imgPath}
                      onChange={(e) => setForm({ ...form, imgPath: e.target.value })}
                      placeholder="./images/img1.PNG"
                    />
                  </div>
                  <div className="dash-form-group">
                    <label>Demo Link</label>
                    <input
                      type="text"
                      value={form.demoLink}
                      onChange={(e) => setForm({ ...form, demoLink: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>
                </div>

                <div className="dash-form-group">
                  <label>Code Link (GitHub)</label>
                  <input
                    type="text"
                    value={form.codeLink}
                    onChange={(e) => setForm({ ...form, codeLink: e.target.value })}
                    placeholder="https://github.com/..."
                  />
                </div>

                <div className="dash-form-group">
                  <label>Categories</label>
                  <div className="category-chips flex">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        className={form.category.includes(cat) ? "chip active" : "chip"}
                        onClick={() => handleCategoryToggle(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="dash-form-group">
                  <label>Tech Stack</label>
                  <div className="tech-input-area">
                    <div className="tech-chips flex">
                      {form.tech.map((t) => (
                        <span key={t} className="tech-chip">
                          {t}
                          <button type="button" onClick={() => handleTechRemove(t)}>✕</button>
                        </span>
                      ))}
                    </div>
                    <input
                      type="text"
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      onKeyDown={handleTechAdd}
                      onBlur={handleTechAdd}
                      placeholder="Type a custom tech and press Enter..."
                    />
                    <div className="preset-techs flex">
                      {presetTechs.map((tech) => (
                        <button
                          key={tech}
                          type="button"
                          className={form.tech.includes(tech) ? "preset-tech active" : "preset-tech"}
                          onClick={() => handleTechToggle(tech)}
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="dash-form-group">
                  <label>Description</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Describe your project..."
                    rows={3}
                  />
                </div>

                <div className="dash-form-actions flex">
                  <button type="submit" className="btn-dash btn-dash-primary">
                    {editingId !== null ? "Update Project" : "Add Project"}
                  </button>
                  <button type="button" className="btn-dash btn-dash-ghost" onClick={resetForm}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Projects Table */}
      <div className="dash-projects">
        {projects.length === 0 ? (
          <div className="dash-empty">
            <p>No projects yet. Click &quot;Add Project&quot; to get started.</p>
          </div>
        ) : (
          projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="dash-project-card glass-card"
            >
              <img src={project.imgPath} alt={project.projectTitle} />
              <div className="dash-project-info">
                <div className="dash-project-top flex">
                  <h4>{project.projectTitle}</h4>
                  <span className="dash-project-date">{project.date}</span>
                </div>
                <div className="dash-project-tech flex">
                  {project.tech.map((t, j) => (
                    <span key={j} className="tech-tag">{t}</span>
                  ))}
                </div>
                <p className="dash-project-desc">{project.description}</p>
                <div className="dash-project-cats flex">
                  {project.category.map((c) => (
                    <span key={c} className="cat-badge">{c}</span>
                  ))}
                </div>
              </div>
              <div className="dash-project-actions flex">
                <button className="btn-edit" onClick={() => handleEdit(i)}>Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(i)}>Delete</button>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className={`dash-toast ${toast.type}`}
          >
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
