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
      <Navbar />
      <div className="mainbody">
        <div className="mainbody-heading">
          <span style={firstletter}>
            I
            {animationStep >= 0 && (
              <ReactTyped
                strings={["NSTITUTE"]}
                typeSpeed={50}
                showCursor={false}
              />
            )}
          </span>
          <span style={firstletter}>
            T
            {animationStep >= 1 && (
              <ReactTyped
                strings={["ECHNICAL"]}
                typeSpeed={50}
                showCursor={false}
              />
            )}
          </span>
          <span style={firstletter}>
            C
            {animationStep >= 2 && (
              <ReactTyped
                strings={["OUNCIL"]}
                typeSpeed={50}
                showCursor={false}
              />
            )}
          </span>
        </div>
      </div>
    </>
  );
}

export default Mainbody;