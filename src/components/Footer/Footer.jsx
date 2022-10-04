import "./Footer.css"
import logo from './logo-footer.png'
import copyright from './copyright.png'

function Footer() {
    return (
        <div className="footer">
            <img className="logo" src={logo} alt="Logo kasa" />
            <img className="copyright" src={copyright} alt="Logo kasa" />
        </div>
    )
}

export default Footer