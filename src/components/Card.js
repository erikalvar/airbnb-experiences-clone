import "../style.css"
import Star from "../images/redstar.svg.png"
import katie from "../images/katie-zaferes.png"

export default function Card() {
  return (
      <div className="card">
        <div className="card--photo">
          <h3>Online</h3>
          <img src={katie} alt="" />
        </div>
        <div className="card--data">
          <img src={Star} alt="" />
          <p>5.0</p>
          <p>(6)·USA</p>
        </div>
        <div className="card--description">
          <p>Life lessons with Katie Zaferes</p>
        </div>
        <div className="card--price">
          <p className="card--price--rate">From $136 /</p>
          <p className="card--price--person">person</p>
        </div>
      </div>
  )
}