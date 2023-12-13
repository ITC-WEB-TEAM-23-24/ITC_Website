import React, { useState, useEffect } from "react";
import logoImage from "./logo.png";
import "./Navbar.css";
import "../fonts.css";
import iconsvg from "./icon.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

function Navbar() {
  const [onTop, setonTop] = useState(true);
  const [sidebarOpen, setsidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 80;
      if (window.scrollY > scrollThreshold) {
        setonTop(false);
      } else {
        setonTop(true);
        setsidebar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // set the x value of below links such that they move to the rightmost corner of screen
  const links = [
    { text: "EVENTS", x: "48vw", delay: 1 },
    { text: "CLUBS", x: "42vw", delay: 0.8 },
    { text: "TECH TEAMS", x: "34vw", delay: 0.6 },
    { text: "PORTALS", x: "24vw", delay: 0.4 },
    { text: "OTHER BODIES", x: "14vw", delay: 0.2 },
    { text: "WORK REPORT", x: "2vw", delay: 0 },
  ];

  const handlesidebar = () => {
    setsidebar(!sidebarOpen);
    console.log(sidebarOpen);
    // const element = document.querySelector(".sidebar");
    // element.classList.add(".animate");
  };

  return (
    <>
      <motion.nav
        className="navbar"
        initial={{ zIndex: 10 }}
        animate={{
          zIndex: onTop ? 10 : -10,
          transition: { delay: onTop ? 0 : 2 },
        }}
      >
        <AnimatePresence>
          {onTop && (
            <motion.div
              initial={{ opacity: 1, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: "-100%" }}
              transition={{
                duration: 1,
                delay: 0.75,
                type: "spring",
                mass: 0.6,
              }}
              className="navbar-logo"
            >
              <img src={logoImage} alt="Logo" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="elements">
          <ul className="navbar-links">
            <AnimatePresence>
              {onTop &&
                links.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: link.x, opacity: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: link.x }}
                    transition={{
                      duration: 0.5,
                      delay: link.delay,
                      type: "spring",
                      mass: 0.2,
                    }}
                    className={`links`}
                  >
                    <a href={`#${link.text}`}>{link.text}</a>
                  </motion.li>
                ))}
            </AnimatePresence>
          </ul>
        </div>
      </motion.nav>
      <AnimatePresence>
        {!onTop && (
          <>
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.9, type: "spring", mass: 0.6 }}
              className="lucide-menu"
            >
              <svg
                onClick={handlesidebar}
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                cursor={"pointer"}
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </motion.div>
            <AnimatePresence>
              {sidebarOpen && (
                <motion.div
                  initial={{ opacity: 1, zIndex: 10, x: "100%" }}
                  animate={{ opacity: 1, zIndex: 10, x: 0 }}
                  exit={{ opacity: 1, zIndex: 10, x: "100%" }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    mass: 0.6,
                  }}
                  className="sidebar"
                >
                  <div className="sidebar-links">
                    <ul>
                      {links.map((link, index) => (
                        <li key={index} className={`links`}>
                          <AnimatePresence>
                            <motion.a
                              initial={{ opacity: 1, y: "100%" }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 1, y: "100%" }}
                              transition={{
                                duration: 0.6,
                                delay: 0.8,
                                type: "spring",
                                mass: 0.1,
                              }}
                              href={`#${link.text}`}
                            >
                              {link.text}
                            </motion.a>
                          </AnimatePresence>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;