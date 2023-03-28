import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import data from '../data/data.json'

import Header from '../components/header/Header'
import Carousel from '../components/outils/Carousel'
import Collapse from '../components/outils/Collapse'
import Footer from '../components/Footer'

import greyStar from '../assets/grey_star.png'
import redStar from '../assets/red_star.png'

import '../styles/housing/Housing.css'

function Housing() {
  // Initialisation de slides à un tableau vide, setSlides met à jour la valeur de slides
  const [slides, setSlides] = useState([])
  // Extraction de l'id de l'url
  const houseId = useParams('id').id
  // On recherche le logement à afficher avec son id
  const dataCurrentHouse = data.filter((data) => data.id === houseId)
  // Met à jour slides lorsque l'id du logement change
  useEffect(() => {
    const dataCurrentHouse = data.filter((data) => data.id === houseId)
    setSlides(dataCurrentHouse[0].pictures)
  }, [houseId])

  const name = dataCurrentHouse[0].host.name.split(' ')
  const rating = dataCurrentHouse[0].rating
  const description = dataCurrentHouse[0].description
  const equipments = dataCurrentHouse[0].equipments

  return (
    <>
      <Header />
      <main className="housing">
        <Carousel slides={slides} />
        <section className="housing_content">
          <div className="housing_info">
            <h1>{dataCurrentHouse[0].title}</h1>
            <p>{dataCurrentHouse[0].location}</p>
            <div>
              {dataCurrentHouse[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>
              })}
            </div>
          </div>
          <div className="housing_host">
            <div className="housing_host_name">
              <div className="host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                className="host_picture"
                src={dataCurrentHouse[0].host.picture}
                alt="hôte du logement"
              />
            </div>

            <div className="host_stars">
              {(() => {
                const stars = []
                for (let i = 1; i <= 5; i++) {
                  stars.push(
                    <img
                      key={i}
                      src={i <= rating ? redStar : greyStar}
                      alt="star"
                    />
                  )
                }
                return stars
              })()}
            </div>
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
