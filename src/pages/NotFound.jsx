import Header from '../components/Header'
import { Link } from 'react-router-dom'
import '../styles/NotFound.css'

function NotFound() {
  return (
    <div className="notFound">
      <Header />
      <div className="notFound_txt">
        <h1 className="notFound_title">404</h1>
        <p className="notFound_description">
          Oups! La page que vous recherchez n'existe pas.
        </p>

        <Link className="notFound_return_home" to="/">
          Retouner sur la page d'accueil
        </Link>
      </div>
    </div>
  )
}

export default NotFound
