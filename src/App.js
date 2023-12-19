import logo from "./logo.svg";
import "./App.css";
import TT_Pack from "./component/techteam";
import Navbar from "./component/Navbar/Navbar";
import Mainbody from "./component/Mainbody/Mainbody";
import Page1 from "./component/Chirag/Page1";
import "./component/Chirag/sytle1.css";
import "./component/Chirag/style2.css";
import "./component/Chirag/style3.css";
import video from "./video.mp4";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
function App() {
  return (
    <>
      <video autoPlay loop muted id="video">
        <source src={video2} type="video/mp4" />
      </video>
      <div className="mainpage">
        <Navbar />
        <Mainbody />
      </div>
      <div className="page">
        <Page1 />
      </div>
      <div className="tt">
        <TT_Pack />
      </div>
    </>
  );
}

export default App;
