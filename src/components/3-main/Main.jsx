import { useState, useEffect } from "react";
import "./main.css";
import { myProjects as defaultProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "portfolio_projects";

const getProjects = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {
    /* noop */
  }
  return defaultProjects;
};

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [allProjects, setAllProjects] = useState(getProjects);
  const [arr, setArr] = useState(getProjects);

  // Sync with localStorage when dashboard updates
  useEffect(() => {
    const syncProjects = () => {
      const updated = getProjects();
      setAllProjects(updated);
      setArr(updated);
      setcurrentActive("all");
    };

    window.addEventListener("projects-updated", syncProjects);
    window.addEventListener("storage", syncProjects);

    return () => {
      window.removeEventListener("projects-updated", syncProjects);
      window.removeEventListener("storage", syncProjects);
    };
  }, []);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const newArr = allProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return ZZZ === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <main id="projects" className="flex">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(allProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => handleClick("css")}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => handleClick("js")}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => handleClick("react")}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => handleClick("node")}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath + item.projectTitle}
                className="  card"
              >
                <img width={266} src={item.imgPath} alt={item.projectTitle} />

                <div style={{ width: "266px" }} className="box">
                  <div className="card-header flex">
                    <h1 className="title">{item.projectTitle}</h1>
                    <span className="card-date">{item.date}</span>
                  </div>

                  <div className="tech-tags flex">
                    {item.tech.map((t, i) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <p className="sub-title">{item.description}</p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a className="icon-link" title="Live Demo" href={item.demoLink} target="_blank" rel="noopener noreferrer"></a>
                      <a className="icon-github" title="Source Code" href={item.codeLink} target="_blank" rel="noopener noreferrer"></a>
                    </div>

                    <a className="link flex" href={item.demoLink} target="_blank" rel="noopener noreferrer">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
