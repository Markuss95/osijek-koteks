import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const AssetsList = ({ assets = [] }) => {
  return (
    <div className="jobs-list">
      {assets.map(asset => {
        const { id, naslov, slika, vrijediDo } = asset
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

export default AssetsList
