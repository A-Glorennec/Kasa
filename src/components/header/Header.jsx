import logo from '../../assets/logo.png'
import Navbar from './Navbar'
import '../../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <h1>
        <img src={logo} alt="Kasa, agence de location immobilière" />
      </h1>
      <Navbar />
    </header>
  )
}

export default Header
