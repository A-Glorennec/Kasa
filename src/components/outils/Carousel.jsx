import { useState } from 'react'

import arrowRight from '../../assets/arrow_right.png'
import arrowLeft from '../../assets/arrow_left.png'

import '../../styles/housing/Carousel.css'

function Carousel({ slides }) {
  // Déclare une variable d'état initialisée à 0
  const [current, setCurrent] = useState(0)
  // Fonction  qui incrémente l'image actuelle de 1
  // Si current atteint la fin de la liste de photos, revient à la première
  const nextSlide = () => {
    setCurrent(current + 1)
    if (current === slides.length - 1) setCurrent(0)
  }
  // Fonction qui décrémente l'image actuelle de 1
  // Si current est à la première photo, va à la dernière photo
  const previousSlide = () => {
    setCurrent(current - 1)
    if (current === 0) setCurrent(slides.length - 1)
  }

  return (
    <section
      style={{ backgroundImage: `url(${slides[current]})` }}
      className="carousel"
    >
      {slides.length > 1 && (
        <>
          <img
            className="carousel_arrow carousel_arrow_left"
            src={arrowLeft}
            alt="next"
            onClick={previousSlide}
          />
          <img
            className="carousel_arrow carousel_arrow_right"
            src={arrowRight}
            alt="previous"
            onClick={nextSlide}
          />
          <p className="carouselCount">
            {current + 1} / {slides.length}
          </p>
        </>
      )}
    </section>
  )
}

export default Carousel
