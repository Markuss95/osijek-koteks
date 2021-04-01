import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const JobsList = ({ jobs = [] }) => {
  return (
    <div className="jobs-list">
      {jobs.map(job => {
        const { id, naslov, slika, datumPrijaveDo } = job
        return (
          <div className="job-little-wrapper">
            <Link key={id} to={`/${naslov}`} className="job">
              <GatsbyImage
                image={slika.gatsbyImageData}
                alt={naslov}
                className=""
              />
              <h5>{naslov}</h5>
              <p>Oglas je otvoren do {datumPrijaveDo}.</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default JobsList
