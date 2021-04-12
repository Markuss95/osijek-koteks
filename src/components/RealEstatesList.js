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
            <Link key={id} to={`/${id}`} className="job">
              <GatsbyImage
                image={slika.gatsbyImageData}
                alt={naslov}
                className=""
              />
              <h5>{naslov}</h5>
              <p>Oglas je otvoren do {vrijediDo}.</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default RealEstatesList
