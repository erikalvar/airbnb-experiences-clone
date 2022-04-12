import "../style.css"
import logo from "../images/Airbnb_Logo_Bélo.svg.png"

export default function Navbar() {
  return (
    <nav className="nav">
      <img className="nav--logo" src={logo} alt="airbnb logo" />
    </nav>
  )
}