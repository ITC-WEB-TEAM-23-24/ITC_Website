import logo from "./logo.svg";
import "./App.css";
import Mainbody from "./component/Mainbody/Mainbody";
import "./component/Chirag/sytle1.css"; 
import "./component/Chirag/style2.css";
import "./component/Chirag/style3.css";
import React, { useRef,useState, useEffect } from "react";
import Newpage from "./component/Chirag/Newpage";

import Hexgrid from "./component/Techclubs/index"
import video2 from "./assets/bg.mp4";
import TT_Pack from "./component/techteam";
import Footer from "./component/Footer";

function App() {
  const [loadpage, setloadpage] = useState(false);

  useEffect(() => {
    const storedLoadPage = localStorage.getItem("loadpage");
    if (storedLoadPage === null) {
      setTimeout(() => {
        setloadpage(true);
      }, 8500);
    } else {
      // If the value is in localStorage, set loadpage to true immediately
      setloadpage(true);
    }
  }, []);

  useEffect(() => {
    if (loadpage) {
      document.getElementById("video").play();
    }
  }, [loadpage]);

  return (
    <div className="app">
        <video autoPlay muted id="video">
          <source src={video2} type="video/mp4" />
        </video>
      {loadpage && (
        <div className="maincontainer">
          <div className="mainpage">
            <Mainbody />
          </div>
          <div className="page">
            <Newpage />
            <Hexgrid />
            <TT_Pack />
            <Footer />
          </div>
        </div>
      )}
    </div>
    
  );
}

export default App;
