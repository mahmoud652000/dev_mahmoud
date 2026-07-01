import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <div className="footer-left">
        <p>© 2024 Mahmoud Elbana. All rights reserved.</p>
        <p className="footer-tagline">Built with React &amp; Framer Motion</p>
      </div>

      <ul className="flex">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#dashboard">Dashboard</a>
        </li>
      </ul>

      <div className="footer-social flex">
        <a
          href="https://github.com/mahmoud652000"
          target="_blank"
          rel="noopener noreferrer"
          className="icon icon-github"
        ></a>
        <a
          href="https://www.linkedin.com/in/mahmoud-elbana-25473b150"
          target="_blank"
          rel="noopener noreferrer"
          className="icon icon-linkedin"
        ></a>
        <a
          href="https://x.com/Mahmoud36468898"
          target="_blank"
          rel="noopener noreferrer"
          className="icon icon-twitter"
        ></a>
        <a
          href="https://www.instagram.com/mahmoud_elbana47"
          target="_blank"
          rel="noopener noreferrer"
          className="icon icon-instagram"
        ></a>
      </div>
    </footer>
  );
};

export default Footer;
