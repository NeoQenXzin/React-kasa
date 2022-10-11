import "./Header.css";
import LOGO from "./LOGO.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

function Header() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <header className="header">
      <img src={LOGO} alt="Logo kasa" />
      <nav>
        <ul>
          <li>
            <Link
              className={location.pathname === "/" ? "on-page" : "off-page"}
              to="/"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className={
                location.pathname === "/a-propos" ? "on-page" : "off-page"
              }
              to="/a-propos"
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
