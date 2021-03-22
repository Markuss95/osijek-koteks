import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "O nama",
    url: "/o-nama",
  },
  {
    id: 2,
    text: "Usluge",
    url: "/usluge",
  },
  {
    id: 3,
    text: "Certifikati",
    url: "/certifikati/",
  },
  {
    id: 5,
    text: "Podrška",
    url: "/podrska/",
  },
  {
    id: 6,
    text: "Kontakt",
    url: "/kontakt/",
  },
]

const tempLinks = data.map(link => {
  if (link.text === "Kontakt") {
    return (
      <li key={link.id} className="dropdown-list">
        <Link to={link.url}>{link.text}</Link>
        <ul className="dropdown">
          <li>
            <Link to="/kontakt/uprava">Uprava</Link>
          </li>
          <li>
            <Link to="/kontakt/financije">Financije</Link>
          </li>
          <li>
            <Link to="/kontakt/pravniposlovi">Pravni Poslovi </Link>
          </li>
          <li>
            <Link to="/kontakt/tehnicka">Tehnička Priprema</Link>
          </li>
          <li>
            <Link to="/kontakt/podugovaranje">
<<<<<<< HEAD
              Podugovaranje i Odnos s Kooperantima
=======
              Podugovaranje
>>>>>>> 09b060ce33f550594b4fb25a3590f09b5b3d1869
            </Link>
          </li>
          <li>
            <Link to="/kontakt/nabava">Nabava</Link>
          </li>
          <li>
            <Link to="/kontakt/prijevoz">Prijevoz</Link>
          </li>
          <li>
<<<<<<< HEAD
            <Link to="/kontakt/operativa">Građevinske Operacije</Link>
=======
            <Link to="/kontakt/operativa">Građevinske Operacije </Link>
>>>>>>> 09b060ce33f550594b4fb25a3590f09b5b3d1869
          </li>
        </ul>
      </li>
    )
  } else if (link.text === "Usluge") {
    return (
      <li key={link.id} className="dropdown-list">
        <Link to={link.url}>{link.text}</Link>
        <ul className="dropdown">
          <li>
            <Link to="/usluge/asfalt">Asfalt</Link>
          </li>
          <li>
            <Link to="/usluge/beton">Beton</Link>
          </li>
          <li>
            <Link to="/usluge/gradjevinskeusluge">Građevinske Usluge </Link>
          </li>
          <li>
            <Link to="/usluge/imovina">Imovina</Link>
          </li>
        </ul>
      </li>
    )
  } else {
    return (
      <li key={link.id}>
        <Link to={link.url}>{link.text}</Link>
      </li>
    )
  }
})

export default ({ styleClass }) => {
  return <ul className={`${styleClass ? styleClass : ""}`}>{tempLinks}</ul>
}
