import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const RealEstatesList = ({ realEstates = [] }) => {
  return (
    <div className="jobs-list">
      {realEstates.map(realEstate => {
        const { id, naslov, slika, vrijediDo } = realEstate
        return (
          <div className="job-little-wrapper">
            {naslov === "Prazna stranica" ? (
              <h3 className="about-paragraph estate">
                *Trenutno nema nekretnina koje su na prodaju*
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

export default RealEstatesList
