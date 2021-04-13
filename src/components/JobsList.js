import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const JobsList = ({ jobs = [] }) => {
  return (
    <div className="jobs-list">
      {jobs.map(job => {
        const { id, naslov, slika, PrijaveDo } = job
        return (
          <div className="job-little-wrapper">
            {naslov === "Prazna stranica" ? (
              <h3 className="about-paragraph estate">
                *Trenutno nema aktivnih oglasa za posao*
              </h3>
            ) : (
              <Link key={id} to={`/${id}`} className="job">
                <GatsbyImage
                  image={slika.gatsbyImageData}
                  alt={naslov}
                  className=""
                />
                <h5>{naslov}</h5>
                {PrijaveDo ? <p>Oglas je otvoren do {PrijaveDo}.</p> : ""}
              </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default JobsList
