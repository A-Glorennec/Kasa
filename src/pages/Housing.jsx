import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import data from '../data/data.json'

import Header from '../components/header/Header'
import Carousel from '../components/outils/Carousel'
import Collapse from '../components/outils/Collapse'
import Footer from '../components/Footer'

import greyStar from '../assets/grey_star.png'
import redStar from '../assets/red_star.png'

function Housing() {
  const [slides, setSlides] = useState([])

  const houseId = useParams('id').id
  const dataCurrentHouse = data.filter((data) => data.id === houseId)

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
      <Carousel slides={slides} />
      <main className="housing">
        <div className="housing_content">
          <div className="housing_info">
            <h1>{dataCurrentHouse[0].title}</h1>
            <p>{dataCurrentHouse[0].location}</p>
            <div>
              {dataCurrentHouse[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>
              })}
            </div>
          </div>
          <div className="housing_content_host">
            <div>
              <div className="housing_content_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                src={dataCurrentHouse[0].host.picture}
                alt="hôte du logement"
              />
            </div>

            <div className="housing_content_host_stars">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1
                return (
                  <img
                    key={index}
                    src={ratingValue <= rating ? redStar : greyStar}
                    alt="star"
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className="housing_collapse">
          <div className="housing_collapse_item">
            <Collapse title={'Description'} content={description} />
          </div>
          <div className="housing_collapse_item">
            <Collapse title={'Équipements'} content={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Housing
