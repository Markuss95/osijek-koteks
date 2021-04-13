import React from "react"
import RealEstatesList from "./RealEstatesList"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
{
    allContentfulNekretnine(limit: 10, sort: { fields: createdAt, order: DESC }) {
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
  const realEstates = data.allContentfulNekretnine.nodes
  return (
    <div className="section section-center">
      {realEstates.length > 0 ? (
        <RealEstatesList realEstates={realEstates} />
      ) : (
        <h4 className="about-paragraph assets">
          *Trenutno nema nekretnina koje su na prodaju*
        </h4>
      )}
    </div>
  )
}

export default AllRealstates
