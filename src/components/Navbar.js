import React from "react"
import logo from "../assets/LogoOsijekKoteks1-1024x217_4_270x60.png"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" className="logo-img" />
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <div>
          <PageLinks styleClass="nav-links"></PageLinks>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
