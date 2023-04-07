import { useParams } from 'react-router-dom'
// Données
import data from '../data/data.json'
// Composants
import Carousel from '../components/outils/Carousel'
import Collapse from '../components/outils/Collapse'
import Footer from '../components/Footer'
import Header from '../components/header/Header'
// Images
import greyStar from '../assets/grey_star.png'
import redStar from '../assets/red_star.png'
// Styles
import '../styles/housing/Housing.css'

function Housing() {
  // On extrait l'id du logement depuis l'url
  const { id } = useParams()
  // On recherche le logement correspondant à l'id
  const currentHouse = data.find((housing) => housing.id === id)
  // Si l'id n'est pas trouvé, on redirige
  if (currentHouse === undefined) {
    window.location.href = '/error'
  }
  // On extrait les données du logement
  const {
    host,
    title,
    location,
    tags,
    description,
    equipments,
    rating,
    pictures: housingPictures,
  } = currentHouse

  // On extrait les données de l'hôte
  const { name, picture: hostPicture } = host
  const [firstName, lastName] = name.split(' ')
  // On itère sur un tableau de 5 étoiles pour afficher les étoiles en fonction des notes des hôtes
  const stars = [...Array(5)].map((_, i) => (
    <img key={i} src={i < rating ? redStar : greyStar} alt="star" />
  ))

  return (
    <>
      <Header />
      <main className="housing">
        <Carousel slides={housingPictures} />
        <section className="housing_content">
          <div className="housing_info">
            <h1>{title}</h1>
            <p>{location}</p>
            <div>
              {tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="housing_host">
            <div className="housing_host_name">
              <div className="host_name">
                <span>{firstName}</span>
                <span>{lastName}</span>
              </div>
              <img
                className="host_picture"
                src={hostPicture}
                alt="hôte du logement"
              />
            </div>
            <div className="host_stars">{stars}</div>
          </div>
        </section>
        <section className="housing_collapse">
          <div className="collapse_item">
            <Collapse title={'Description'} content={description} />
          </div>
          <div className="collapse_item">
            <Collapse title={'Équipements'} content={equipments} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Housing
