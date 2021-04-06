import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const JobsList = ({ jobs = [] }) => {
  return (
    <div className="jobs-list">
      {jobs.map(job => {
        const { id, naslov, slika, PrijaveDo } = job
        return (
          <div className="job-little-wrapper">
            <Link key={id} to={`/${id}`} className="job">
              <GatsbyImage
                image={slika.gatsbyImageData}
                alt={naslov}
                className=""
              />
              <h5>{naslov}</h5>
              <p>Oglas je otvoren do {PrijaveDo}.</p>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default JobsList
