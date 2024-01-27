import React, { useState, useEffect } from "react";
import logoImage from "./logo.png";
import "./Navbar.css";
import "../../fonts.css";
import iconsvg from "./icon.svg";
import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

function Navbar() {
  const [onTop, setonTop] = useState(true);
  const [sidebarOpen, setsidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 80;
      if (window.scrollY > scrollThreshold) {
        setonTop(false);
      } else {
        setonTop(true);
        setsidebarOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let clickCount = 0;

    const handleOutsideClick = (e) => {
      if (
        sidebarOpen &&
        e.target.className !== "sidebar" &&
        e.target.className !== "sidebar-links" &&
        e.target.className !== "lucide-menu" &&
        e.target.className !== "lucide-menu-icon" &&
        e.target.className !== "links" &&
        e.target.className !== "sidebarlinkslist"
      ) {
        clickCount += 1;
        console.log(clickCount);

        if (clickCount === 2) {
          setsidebarOpen(false);
          clickCount = 0; // Reset click count after closing the sidebar
        }
      }
    };

    if (sidebarOpen) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [sidebarOpen]);

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
    setsidebarOpen(!sidebarOpen);
    console.log(sidebarOpen);
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
              {/* <Link to="/"> */}
              <img src={logoImage} alt="Logo" />
              {/* </Link> */}
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
                    <motion.a href={`#${link.text}`}>{link.text}</motion.a>
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
                <motion.line
                  animate={{ opacity: sidebarOpen ? 0 : 1 }}
                  x1="5"
                  x2="19"
                  y1="6"
                  y2="6"
                />
                <motion.line
                  animate={{ rotate: sidebarOpen ? [0, 10, 45] : 0 }}
                  x1="5"
                  x2="19"
                  y1="12"
                  y2="12"
                />
                <motion.line
                  animate={{
                    rotate: sidebarOpen ? [0, -10, -45] : 0,
                    duration: 5,
                  }}
                  x1="5"
                  x2="19"
                  y1="12"
                  y2="12"
                />
                <motion.line
                  animate={{ opacity: sidebarOpen ? 0 : 1, duration: 2 }}
                  x1="5"
                  x2="19"
                  y1="18"
                  y2="18"
                />
              </svg>
            </motion.div>
            <AnimatePresence>
              {!onTop && sidebarOpen && (
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
                    <ul className="sidebarlinkslist">
                      {links.map((link, index) => (
                        <motion.li key={index} href={`#${link.text}`}>
                          <AnimatePresence>
                            <motion.a
                              initial={{ opacity: 1, y: "100%" }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 1, y: "100%" }}
                              transition={{
                                duration: 0.6,
                                delay: 0.8,
                                type: "spring",
                                mass: 0.2,
                              }}
                              href={`#${link.text}`}
                            >
                              {link.text}
                            </motion.a>
                          </AnimatePresence>
                        </motion.li>
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
