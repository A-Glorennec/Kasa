import logo from '../assets/logo_footer.png'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Kasa, agence de location immobilière" />
      <p className="footer_copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
