import '../../styles/home/Banner.css'

function Banner({ image }) {
  return (
    <div className="banner">
      <img className="banner_img" src={image} alt="falaises" />
      <h1 className="banner_txt">
        Chez vous, <br />
        partout et ailleurs
      </h1>
    </div>
  )
}
export default Banner
