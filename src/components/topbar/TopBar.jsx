import "./topBar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topBar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            .genius
          </a>
          <div className="container">
            <Person className="icon" />
            <span>+91 62826 49883</span>
          </div>
          <div className="container">
            <Mail className="icon" />
            <span>naufalnazeer059@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hambarger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
