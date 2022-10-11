import "./Footer.css";
import logo from "./logo-footer.png";
import copyright from "./copyright.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="logo" src={logo} alt="Logo kasa" />
      <img className="copyright" src={copyright} alt="Logo kasa" />
    </footer>
  );
}

export default Footer;
