import image from '../../../src/assets/about_cover.png'
import '../../styles/about/AboutBanner.css'

function AboutBanner() {
  return (
    <div className="about_banner">
      <img className="about_banner_img" src={image} alt="montagnes" />
    </div>
  )
}
export default AboutBanner
