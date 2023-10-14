import logo from "./logo.svg";
import "./App.css";
import TT_Pack from "./component/techteam";
import Navbar from "./component/Navbar/Navbar";
import Mainbody from "./component/Mainbody/Mainbody";

function App() {
  return (
    <div className="App">
      <div className="mainpage">
        <Navbar />
        <Mainbody />
      </div>
      <div className="tt">
        <TT_Pack />
      </div>
    </div>
  );
}

export default App;
