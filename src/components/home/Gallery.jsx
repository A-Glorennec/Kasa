import data from '../../data/data.json'
import Card from './Card'
import '../../styles/home/Gallery.css'
import '../../styles/home/Card.css'

function Gallery() {
  return (
    <main className="home_gallery">
      {data.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        )
      })}
    </main>
  )
}

export default Gallery
