import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const MovablesList = ({ movables = [] }) => {
  return (
    <div className="jobs-list">
      {movables.map(movable => {
        const { id, naslov, slika, vrijediDo } = movable
        return (
          <div className="job-little-wrapper">
            {naslov === "Prazna stranica" ? (
              <h3 className="about-paragraph estate">
                *Trenutno nema pokretnina koje su na prodaju*
              </h3>
            ) : (
              <Link key={id} to={`/${id}`} className="job">
                <GatsbyImage
                  image={slika.gatsbyImageData}
                  alt={naslov}
                  className=""
                />
                <h5>{naslov}</h5>
                {vrijediDo ? <p>Oglas je otvoren do {vrijediDo}.</p> : ""}
              </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default MovablesList
