import logo from "./logo.svg";
import "./App.css";
import TT_Pack from "./component/techteam";
import Navbar from "./component/Navbar/Navbar";
import Mainbody from "./component/Mainbody/Mainbody";
import Page1 from "./component/Chirag/Page1";
import "./component/Chirag/sytle1.css";
import "./component/Chirag/style2.css";
import "./component/Chirag/style3.css";
import "./component/Chirag/magicscroll/magicscroll.css"
function App() {
  return (
    <>
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
