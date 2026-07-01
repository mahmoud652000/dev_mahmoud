import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="  flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#dashboard" className="dash-link">Dashboard</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <a href="#about" onClick={() => setshowModal(false)}>About</a>
            </li>
            <li>
              <a href="#skills" onClick={() => setshowModal(false)}>Skills</a>
            </li>
            <li>
              <a href="#experience" onClick={() => setshowModal(false)}>Experience</a>
            </li>
            <li>
              <a href="#projects" onClick={() => setshowModal(false)}>Projects</a>
            </li>
            <li>
              <a href="#education" onClick={() => setshowModal(false)}>Education</a>
            </li>
            <li>
              <a href="#contact" onClick={() => setshowModal(false)}>Contact</a>
            </li>
            <li>
              <a href="#dashboard" onClick={() => setshowModal(false)}>Dashboard</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
