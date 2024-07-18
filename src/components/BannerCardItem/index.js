import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={className}>
      <div>
        <h1 className="heading1">{headerText}</h1>
        <p className="paragraph1">{description}</p>
        <div>
          <button className="buttonstyle">show more</button>
        </div>
      </div>
    </li>
  )
}

export default BannerCardItem
