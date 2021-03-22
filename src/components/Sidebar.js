import React from "react"
import Links from "../constants/links"
<<<<<<< HEAD

import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
=======
import { Link } from "gatsby"
import { FaTimes,FaArrowLeft } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isVisible, setIsVisible] = React.useState(true)
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }
  console.log(Links)
>>>>>>> 09b060ce33f550594b4fb25a3590f09b5b3d1869
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div>
<<<<<<< HEAD
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
=======
        <ul className={`${isOpen ? "sidebar-links" : ""} ${isVisible ? "":"sidebar-invisible"}`}>
          <li>
          <Link to="/o-nama">O nama</Link>
          </li>
          <li>
          <Link to="/usluge">Usluge</Link>
          </li>
          <li>
          <Link to="/certifikati">Certifikati</Link>
          </li>
          <li>
          <Link to="/podrška">Podrška</Link>
          </li>
          <li>
          <Link to="/kontakt" onClick={toggleVisibility}>Kontakt</Link>
          </li>
        </ul>
        <ul className={`${isOpen ? "sidebar-links" : ""} ${!isVisible ? "":"sidebar-invisible"}`}>
        <li>
          <Link to="/kontakt" onClick={toggleVisibility}> <FaArrowLeft/></Link>
          </li>
          <li>
          <Link to="/kontakt/uprava">Uprava</Link>
          </li>
          <li>
          <Link to="/kontakt/financije">Financije</Link>
          </li>
          <li>
          <Link to="/kontakt/pravniposlovi">Pravni Poslovi</Link>
          </li>
          <li>
          <Link to="/kontakt/tehnicka">Tehnicka Priprema</Link>
          </li>
          <li>
          <Link to="/kontakt/Podugovaranje">Podugovaranje</Link>
          </li>
          <li>
          <Link to="/kontakt/nabava">Nabava</Link>
          </li>
          <li>
          <Link to="/kontakt/prijevoz">Prijevoz</Link>
          </li>
          <li>
          <Link to="/kontakt/operativa">Građevinske Operacije</Link>
          </li>
        </ul>
>>>>>>> 09b060ce33f550594b4fb25a3590f09b5b3d1869
      </div>
    </aside>
  )
}

export default Sidebar
