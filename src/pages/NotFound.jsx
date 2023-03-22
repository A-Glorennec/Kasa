import Header from '../components/header/Header'
import { Link } from 'react-router-dom'
import '../styles/NotFound.css'

function NotFound() {
  return (
    <div>
      <Header />
      <div className="notFound">
        <div className="notFound_txt">
          <h1 className="notFound_title">404</h1>
          <p className="notFound_description">
            Oups! La page que vous recherchez n'existe pas.
          </p>

          <Link className="notFound_return_home" to="/Kasa/">
            Retouner sur la page d'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
