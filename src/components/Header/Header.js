import "./Header.css"
import LOGO from './LOGO.png'

function Header() {
    return (
        <div className="header">
            <img src={LOGO} alt="Logo kasa" />
            <ul>
                <li><a href="#"> Accueil</a></li>
                <li><a href="#">A Propos</a></li>
            </ul>
        </div>
    )
}

export default Header