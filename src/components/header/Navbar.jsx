// Permet de créer des liens entre les pages de l'application en utilisant l'url dynamiquement
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  // permet de récupérer l'emplcement actuel de l'utilisateur 
  const location = useLocation()

  return (
    <nav className="navbar">
      <ul className="nav_list">
        <li
          className={
            location.pathname === '/kasa'
              ? 'nav_list_item nav_list_active'
              : 'nav_list_item'
          }
        >
          <Link to="/kasa" className="nav_link">
            Accueil
          </Link>
        </li>
        <li
          className={
            location.pathname === '/about'
              ? 'nav_list_item nav_list_active'
              : 'nav_list_item'
          }
        >
          <Link to="/about" className="nav_link">
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
