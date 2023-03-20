import Header from '../components/Header'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import image from '../assets/home_cover.png'
import '../styles/Home.css'
const text = 'Chez vous, partout et ailleurs'

function Home() {
  return (
    <div>
      <Header />
      <main className="home">
        <Banner image={image} title={text} />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default Home
