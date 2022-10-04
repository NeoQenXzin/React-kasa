import "./Header.css";
import LOGO from "./LOGO.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={LOGO} alt="Logo kasa" />
      <nav>
        <ul>
          <li>
            <Link to="/"> Accueil</Link>
          </li>
          <li>
            <Link to="/a-propos"> A Propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
