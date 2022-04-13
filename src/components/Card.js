import "../style.css"
import Star from "../images/redstar.svg.png"

export default function Card(props) {
  console.log(props)
  return (
      <div className="card">
        <div className="card--photo">
          
        <img src={require(`../images/${props.img}`)} alt="" />
        </div>
        <div className="card--data">
          <img src={Star} alt="" />
          <p>{props.rating}</p>
          <p className="gray">({props.reviewCount})·{props.country}</p>
        </div>
        <div className="card--description">
          <p>{props.title}</p>
        </div>
        <div className="card--price">
          <p className="card--price--rate bold">From ${props.price} /</p>
          <p className="card--price--person">person</p>
        </div>
      </div>
  )
}