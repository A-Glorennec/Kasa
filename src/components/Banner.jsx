import '../styles/Banner.css'

function Banner({ image }) {
  const text = 'Chez vous, partout et ailleurs'
  return (
    <div className="banner">
      <img className="banner_img" src={image} alt="falaises" />
      <h1 className="banner_txt">{text}</h1>
    </div>
  )
}
export default Banner
