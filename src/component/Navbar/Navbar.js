import React, { useState, useEffect } from "react";
import logoImage from "./logo.png";
import "./Navbar.css";
import "../fonts.css";
import iconsvg from "./icon.svg";
import { motion } from "framer-motion";

function Navbar() {
  const [onTop, setonTop] = useState(true);
  const [sidebar, setsidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 80;
      if (window.scrollY > scrollThreshold) {
        setonTop(false);
      } else {
        setonTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { text: "EVENTS", x: "48vw", delay: 1 },
    { text: "CLUBS", x: "42vw", delay: 0.8 },
    { text: "TECH TEAMS", x: "34vw", delay: 0.6 },
    { text: "PORTALS", x: "24vw", delay: 0.4 },
    { text: "OTHER BODIES", x: "14vw", delay: 0.2 },
    { text: "WORK REPORT", x: "2vw", delay: 0 },
  ];

  const handleClick = () => {
    setsidebar(!sidebar);
    const navlinks = document.querySelector(".navbar-links");
    navlinks.style.flexDirection = sidebar ? "column" : "row";
    console.log("clicked")
  };

  return (
    <nav className="navbar">
      <motion.div
        animate={{
          opacity: onTop ? 1 : 0,
          duration: 0.5,
          zIndex: onTop ? 5 : -5,
        }}
        className="navbar-logo"
      >
        <img src={logoImage} alt="Logo" />
      </motion.div>

      <div className="elements">
        <ul className="navbar-links">
          {links.map((link, index) => (
            <motion.li
              key={index}
              initial={{ x: 0, opacity: 1 }}
              animate={{
                opacity: onTop ? 1 : 0,
                zIndex: -5,
                x: onTop ? 0 : link.x,
              }}
              transition={{ duration: 0.5, delay: link.delay }}
              className={`links`}
            >
              <a href={`#${link.text}`}>{link.text}</a>
            </motion.li>
          ))}
        </ul>
        <motion.div
          onClick={() => handleClick()}
          animate={{
            type: "spring",
            duration: 1,
            zIndex: onTop ? -5 : 5,
            opacity: onTop ? 0 : 1,
          }}
          className="navbar-icon"
        >
          <img src={iconsvg} alt="icon" />
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;