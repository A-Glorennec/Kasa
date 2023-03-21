import Header from '../components/header/Header'
import Banner from '../../src/components/banners/Banner'
import Gallery from '../components/home/Gallery'
import Footer from '../components/Footer'
import image from '../assets/home_cover.png'
import '../styles/home/Home.css'
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
