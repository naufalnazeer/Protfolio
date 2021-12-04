import TopBar from "./components/topbar/TopBar";
import Intro from "./components/intro/Intro";
import Protofolio from "./components/protofolio/Protofolio";
import Works from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <TopBar   menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu    menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Protofolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
