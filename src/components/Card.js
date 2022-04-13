import "../style.css"
import Star from "../images/redstar.svg.png"
import katie from "../images/katie-zaferes.png"

export default function Card() {
  return (
      <div className="card">
        <div className="card--photo">
          
          <img src={katie} alt="" />
        </div>
        <div className="card--data">
          <img src={Star} alt="" />
          <p className="gray">5.0</p>
          <p className="gray">(6)·USA</p>
        </div>
        <div className="card--description">
          <p>Life lessons with Katie Zaferes</p>
        </div>
        <div className="card--price">
          <p className="card--price--rate bold">From $136 /</p>
          <p className="card--price--person">person</p>
        </div>
      </div>
  )
}