import React from "react"
import MovablesList from "./MovablesList"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allContentfulPokretnine(
      limit: 10
      sort: { fields: createdAt, order: DESC }
    ) {
      nodes {
        id
        vrijediDo(formatString: "DD.MM.YYYY")
        slika {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        naslov
      }
    }
  }
`
const AllRealstates = () => {
  const data = useStaticQuery(query)
  const movables = data.allContentfulPokretnine.nodes
  return (
    <div className="section section-center">
      {movables.length > 0 ? (
        <MovablesList movables={movables} />
      ) : (
        <h4 className="about-paragraph assets">
          *Trenutno nema pokretnina koje su na prodaju*
        </h4>
      )}
    </div>
  )
}

export default AllRealstates
