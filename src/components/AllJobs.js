import React from "react"
import JobsList from "./JobsList"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allContentfulPoslovi(sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
        datumPrijaveDo(formatString: "DD.MM.YYYY")
        naslov
        slika {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
const AllJobs = () => {
  const data = useStaticQuery(query)
  const jobs = data.allContentfulPoslovi.nodes
  return (
    <div className="section section-center">
      {jobs.length > 0 ? (
        <JobsList jobs={jobs} />
      ) : (
        <h4 className="about-paragraph assets">
          *Trenutno nema objavljenih natječaja za posao*
        </h4>
      )}
    </div>
  )
}

export default AllJobs
