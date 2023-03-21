import { useState } from 'react'

import arrowRight from '../../assets/arrow_right.png'
import arrowLeft from '../../assets/arrow_left.png'

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current + 1)
    if (current === slides.length - 1) setCurrent(0)
  }

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
            className="carousel_arrow carousel arrow_right"
            src={arrowRight}
            alt="next"
            onClick={nextSlide}
          />
          <img
            className="carousel_arrow carousel_arrow_left"
            src={arrowLeft}
            alt="previous"
            onClick={previousSlide}
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