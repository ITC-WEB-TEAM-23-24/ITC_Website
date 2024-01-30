import React, { useRef } from "react";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page5 from "./Page5";
import Page6 from "./Page6";
import "./newpage.css";
import "./sytle1.css";
import "./style2.css";
import "./style3.css";
import { motion, useTransform, useScroll } from "framer-motion";

function Newpage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <>
      <div className="scroll-container" ref={targetRef}>
        <div className="scrollthis">
          <motion.div style={{ x }} className="page_1 col-md-6 col-12">
            <Page2 />
          </motion.div>
          <motion.div style={{ x }} className="page_2 col-md-12">
            <Page3 />
          </motion.div>
        </div>
      </div>
      <div className="row imgrow">
        <div className="col-10 circle-col">
          <div className="row circle-row">
            <div className="container-fluid main_fluid">
              <div className="row main_row">
                <div className="col-md-10 col-sm-11 mx-auto main_col">
                  <div className="escroll"></div>
                  <Page6 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pg4row">
        <Page5 />
      </div>
    </>
  );
}

export default Newpage;
