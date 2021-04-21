import React from "react"
import { Link } from "gatsby"
import { FaTimes, FaArrowLeft } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isVisible, setIsVisible] = React.useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div>
        <ul
          className={`${isOpen ? "sidebar-links" : ""} ${
            isVisible ? "" : "sidebar-invisible "
          }`}
        >
          <li>
            <Link to="/o-nama/posao">Posao</Link>
          </li>

          <li>
            <Link to="/usluge">Usluge</Link>
          </li>
          <li>
            <Link to="/certifikati">Certifikati</Link>
          </li>
          <li>
            <Link to="/o-nama">O nama</Link>
          </li>
          <li>
            <Link to="/podrska">Podrška</Link>
          </li>
          <li>
            <Link to="#" onClick={toggleVisibility}>
              Kontakt
            </Link>
          </li>
        </ul>
        <ul
          className={`${isOpen ? "sidebar-links" : ""} ${
            !isVisible ? "" : "sidebar-invisible"
          }`}
        >
          <li>
            <Link to="#" onClick={toggleVisibility}>
              {" "}
              <FaArrowLeft />
            </Link>
          </li>
          <li>
            <Link to="/kontakt/uprava">Uprava</Link>
          </li>
          <li>
            <Link to="/kontakt/financije">
              Sektor Računovodstva i Financija
            </Link>
          </li>
          <li>
            <Link to="/kontakt/pravniposlovi">
              Sektor Pravnih, kadrovskih i Općih Poslova
            </Link>
          </li>
          <li>
            <Link to="/kontakt/tehnicka">Operativno Tehnički Sektor</Link>
          </li>
          <li>
            <Link to="/kontakt/podugovaranje">
              Služba za poslove ugovaranja i upravljanja nabavom
            </Link>
          </li>
          <li>
            <Link to="/kontakt/beton">odjel proizvodnje betona</Link>
          </li>
          <li>
            <Link to="/kontakt/asfalt">
              Odjel proizvodnje i ugradnje asfalta
            </Link>
          </li>
          <li>
            <Link to="/kontakt/transport">
              Odjel transporta, građevinske mehanizacije i radione
            </Link>
          </li>
          <li>
            <Link to="/kontakt/geodeti">Odjel geodetskih poslova</Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
