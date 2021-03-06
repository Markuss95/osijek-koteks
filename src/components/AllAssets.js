import React from "react"
import AssetsList from "./AssetsList"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    allContentfulImovina(limit: 10, sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
        kontakt
        vrijediDo(formatString: "DD.MM.YYYY")
        slika {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
        naslov
      }
    }
  }
`
const AllAssets = () => {
  const data = useStaticQuery(query)
  const assets = data.allContentfulImovina.nodes
  return (
    <div className="section section-center">
      {assets.length > 0 ? (
        <AssetsList assets={assets} />
      ) : (
        <h4 className="about-paragraph assets">
          *Trenutno nema imovine na prodaju*
        </h4>
      )}
    </div>
  )
}

export default AllAssets
