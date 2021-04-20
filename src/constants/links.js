import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "Posao",
    url: "/o-nama/posao",
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
    text: "Reference",
    url: "/reference/",
  },
  {
    id: 7,
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
            <Link to="/kontakt/financije">Sektor Računovodstva i Finacija</Link>
          </li>
          <li>
            <Link to="/kontakt/pravniposlovi">
              Sektor Pravnih i Općih Poslova{" "}
            </Link>
          </li>
          <li>
            <Link to="/kontakt/tehnicka">Tehnička Priprema</Link>
          </li>
          <li>
            <Link to="/kontakt/podugovaranje">Podugovaranje</Link>
          </li>
          <li>
            <Link to="/kontakt/nabava">Nabava</Link>
          </li>
          <li>
            <Link to="/kontakt/ljudskiresursi">Ljudski resursi</Link>
          </li>
          <li>
            <Link to="/kontakt/prijevoz">Prijevoz</Link>
          </li>
          <li>
            <Link to="/kontakt/operativa">Građevinske Operacije </Link>
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
          <li>
            <Link to="/usluge/nekretnine">Nekretnine</Link>
          </li>
          <li>
            <Link to="/usluge/pokretnine">Pokretnine</Link>
          </li>
        </ul>
      </li>
    )
  } else if (link.text === "Posao") {
    return (
      <li key={link.id} className="dropdown-list">
        <Link to={link.url}>{link.text}</Link>
        <ul className="dropdown">
          <li>
            <Link to="/o-nama">O Nama</Link>
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
