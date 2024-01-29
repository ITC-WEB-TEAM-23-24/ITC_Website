import React, { useEffect, useState } from "react";
import "./Mainbody.css";
import "../../fonts.css";
import ReactTyped from "react-typed";
import handleIconClick from "../Navbar/Navbar";
import Navbar from "../Navbar/Navbar";
import video2 from "../../video2.mp4";  

function Mainbody() {
  const firstletter = {
    // color: "#FFC300",
    color: "lime",
  };

  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const runAnimations = async () => {
      await animateText("INSTITUTE");
      setAnimationStep(1);
      await animateText("TECHNICAL");
      setAnimationStep(2);
      await animateText("COUNCIL");
    };

    runAnimations();
  }, []);

  const animateText = (text) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, text.length * 70); // Adjust the delay as needed
    });
  };

  return (
    <>
      <video autoPlay loop muted id="video">
        <source src={video2} type="video/mp4" />
      </video>
      <Navbar />
      <div className="mainbody">
        <div className="mainbody-heading">
          <span style={firstletter}>I</span>
          {animationStep >= 0 && (
            <ReactTyped
              strings={["NSTITUTE"]}
              typeSpeed={50}
              showCursor={false}
            />
          )}
          <br />
          <span style={firstletter}>T</span>
          {animationStep >= 1 && (
            <ReactTyped
              strings={["ECHNICAL"]}
              typeSpeed={50}
              showCursor={false}
            />
          )}
          <br />
          <span style={firstletter}>C</span>
          {animationStep >= 2 && (
            <ReactTyped
              strings={["OUNCIL"]}
              typeSpeed={50}
              showCursor={false}
            />
          )}
          <br />
        </div>
      </div>
    </>
  );
}

export default Mainbody;

// const Typewriter = ({ text, delay }) => {
//     const [currentText, setCurrentText] = useState('');
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         if (currentIndex < text.length) {
//           const timeout = setTimeout(() => {
//             setCurrentText(prevText => prevText + text[currentIndex]);
//             setCurrentIndex(prevIndex => prevIndex + 1);
//           }, delay);

//           return () => clearTimeout(timeout);
//         }
//       }, [currentIndex, delay, text]);

//     return <span>{currentText}</span>;
//   };
