import "./App.css";
import TT_Pack from "./component/techteam";
import Mainbody from "./component/Mainbody/Mainbody";
import Page1 from "./component/Chirag/Page1";
import "./component/Chirag/sytle1.css";
import "./component/Chirag/style2.css";
import "./component/Chirag/style3.css";
import React, { useRef, useEffect } from "react";
import Newpage from "./component/Chirag/Newpage";

function App() {
  return (
    <div className="app">
      <div className="mainpage">
        <Mainbody />
      </div>
      <div className="page">
        <Newpage />
      </div>
      <div className="techteam">
        {/* <TT_Pack /> */}
      </div>
    </div>
  );
}

export default App;
