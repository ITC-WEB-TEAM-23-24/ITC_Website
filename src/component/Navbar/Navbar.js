// import React, { useState, useEffect } from "react";
// import logoImage from "./logo.png";
// import "./Navbar.css";
// import "../fonts.css";
// import iconsvg from "./icon.svg";

// function Navbar() {
//   const [isExpanded, setIsExpanded] = useState(true);
//   const [originalPositions, setOriginalPositions] = useState([]);

//   const animateNav = () => {
//     const navbarlinks = document.querySelector(".navbar-links");
//     const links = document.querySelectorAll(".links");
//     const icon = document.querySelector(".navbar-icon");
//     const iconPosition = icon.getBoundingClientRect().left;

//     if (!isExpanded) {
//       links.forEach((link, index) => {
//         const originalPosition = -originalPositions[index];
//         link.style.transition = "all 0.75s ease";
//         link.style.transform = `translateX(${0}em)`;
//         link.style.opacity = 1;
//       });
//       icon.style.opacity = 0;
//       icon.style.transition = "all 0.5s ease";
//       navbarlinks.style.transform = `translateX(${3.5}em)`;
//       navbarlinks.style.transition = "all 0.5s ease";
//     } else {
//       links.forEach((link, index) => {
//         const distance = originalPositions[index];
//         link.style.transition = "transform 1s ease, opacity 0.75s ease";
//         link.style.transform = `translateX(${distance - 5}em)`;
//         link.style.opacity = 0;
//       });
//       icon.style.opacity = 1;
//       icon.style.transition = "all 0.5s ease";
//       navbarlinks.style.transform = `translateX(${0}em)`;
//       navbarlinks.style.transition = "all 0.5s ease";
//       // style.transition = "all 0.5s ease";
//     }

//     setIsExpanded(!isExpanded);
//   };

//   useEffect(() => {
//     const links = document.querySelectorAll(".links");
//     const icon = document.querySelector(".navbar-icon");
//     const navbar = document.querySelector(".navbar");
//     const navbarWidth = navbar.offsetWidth; // Get the width of the navbar
//     const positions = [];

//     links.forEach((link) => {
//       const distance =
//         ((icon.offsetLeft - link.offsetLeft) / navbarWidth) * 100; // Calculate as a percentage
//       positions.push(distance);
//     });

//     setOriginalPositions(positions);
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const navbarHeight = document.querySelector(".navbar").offsetHeight;

//       if (window.scrollY > navbarHeight && isExpanded) {
//         setIsExpanded(false);
//         animateNav();
//       } else if (window.scrollY === 0 && !isExpanded) {
//         setIsExpanded(true);
//         animateNav();
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isExpanded]);

//   const [showTopNavMenu, setShowTopNavMenu] = useState(false);

//   const showNav= {
//     display: showTopNavMenu ? 'flex' : 'none'
//   }
//   const hideNav= {
//     display: showTopNavMenu ? 'none' : 'flex',
//   }

//   return (
//     <>
//       <nav className="navbar" style={showNav}>
//         <div className="navbar-logo" >
//           <img src={logoImage} alt="Logo" />
//         </div>
//         <ul className="navbar-links" >
//           <li className={`links`}>
//             <a href="#">EVENTS</a>
//           </li>
//           <li className={`links`}>
//             <a href="#">CLUBS</a>
//           </li>
//           <li className={`links`}>
//             <a href="#">TECH TEAMS</a>
//           </li>
//           <li className={`links`}>
//             <a href="#">PORTALS</a>
//           </li>
//           <li className={`links`}>
//             <a href="#">OTHER BODIES</a>
//           </li>
//           <li className={`links`}>
//             <a href="#">WORK REPORT</a>
//           </li>
//         </ul>
//       </nav>
//       <nav className="navbar" style={hideNav} >
//         <ul className="navbar-links">
//       <div className="navbar-icon" onClick={animateNav}>
//         <img src={iconsvg} alt="icon" />
//       </div>
//       </ul>
//       </nav>
//     </>
//   );
// }

// export default Navbar;



import React, { useState, useEffect } from "react";
import logoImage from "./logo.png";
import "./Navbar.css";
import "../fonts.css";
import iconsvg from "./icon.svg";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [originalPositions, setOriginalPositions] = useState([]);

  const animateNav = () => {
    const navbarlinks = document.querySelector(".navbar-links");
    const links = document.querySelectorAll(".links");
    const icon = document.querySelector(".navbar-icon");
    const iconPosition = icon.getBoundingClientRect().left;

    if (!isExpanded) {
      links.forEach((link, index) => {
        const originalPosition = -originalPositions[index];
        link.style.transition = "all 0.75s ease";
        link.style.transform = `translateX(${0}em)`;
        link.style.opacity = 1;
      });
      icon.style.opacity = 0;
      icon.style.transition = "all 0.5s ease";
      navbarlinks.style.transform = `translateX(${3.5}em)`;
      navbarlinks.style.transition = "all 0.5s ease";
    } else {
      links.forEach((link, index) => {
        const distance = originalPositions[index];
        link.style.transition = "transform 1s ease, opacity 0.75s ease";
        link.style.transform = `translateX(${distance - 5}em)`;
        link.style.opacity = 0;
      });
      icon.style.opacity = 1;
      icon.style.transition = "all 0.5s ease";
      navbarlinks.style.transform = `translateX(${0}em)`;
      navbarlinks.style.transition = "all 0.5s ease";
      // style.transition = "all 0.5s ease";
    }

    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const links = document.querySelectorAll(".links");
    const icon = document.querySelector(".navbar-icon");
    const navbar = document.querySelector(".navbar");
    const navbarWidth = navbar.offsetWidth; // Get the width of the navbar
    const positions = [];

    links.forEach((link) => {
      const distance =
        ((icon.offsetLeft - link.offsetLeft) / navbarWidth) * 100; // Calculate as a percentage
      positions.push(distance);
    });

    setOriginalPositions(positions);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector(".navbar").offsetHeight;

      if (window.scrollY > navbarHeight && isExpanded) {
        setIsExpanded(false);
        animateNav();
      } else if (window.scrollY === 0 && !isExpanded) {
        setIsExpanded(true);
        animateNav();
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isExpanded]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li className={`links`}>
          <a href="#">EVENTS</a>
        </li>
        <li className={`links`}>
          <a href="#">CLUBS</a>
        </li>
        <li className={`links`}>
          <a href="#">TECH TEAMS</a>
        </li>
        <li className={`links`}>
          <a href="#">PORTALS</a>
        </li>
        <li className={`links`}>
          <a href="#">OTHER BODIES</a>
        </li>
        <li className={`links`}>
          <a href="#">WORK REPORT</a>
        </li>
        <div className="navbar-icon" style={{ opacity: 0 }} onClick={animateNav}>
          <img src={iconsvg} alt="icon" />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
