import { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [menu, setMenu] = useState('hide');
  return (
    <nav>
      <div className="nav-section" id="nav-logo-section">
        <a href="#">
          <i className="fa-solid fa-dumpster-fire"></i>
        </a>
      </div>
      <div className="nav-section" id="nav-link-section">
        <a href="https://kiransbaliga.engineer">ABOUT</a>
        <a href="https://kiransbaliga.engineer#projects">WORK</a>
      </div>
      <div className="nav-section" id="nav-social-section">
        <a href="https://twitter.com/kiransbaliga">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://instagram.com/kiransbaliga">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://github.com/kiransbaliga">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div className="nav-section" id="nav-contact-section">
        <a href="https://www.dylanbrouwer.design/work">ORIGINAL WORK BY</a>
      </div>
      <div className="nav-section" id = "menubar" onClick={()=>setMenu('suku')}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={"menuitems "+menu}>
        <div className="close" onClick={()=>setMenu('hide')}>
          <i className="fa-solid fa-close"></i>
        </div>
        <a href="https://kiransbaliga.engineer">ABOUT</a>
        <a href="https://kiransbaliga.engineer#projects">WORK</a>
        <a href="https://www.dylanbrouwer.design/work">ORIGINAL WORK BY</a>
        <div className="social-row">
        <a href="https://twitter.com/kiransbaliga">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://instagram.com/kiransbaliga">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://github.com/kiransbaliga">
          <i className="fa-brands fa-github"></i>
        </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
