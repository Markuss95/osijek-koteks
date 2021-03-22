import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const Assets = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <div className="img-wrapper img-wrapper-about">
        <Image Tag="div" fluid={fluid} className=" bcg bcg-about  " />
        <h2 className="about-header visibility-filter ">Imovina na prodaju</h2>
        <h2 className="about-header mobile-visible">Imovina</h2>
      </div>
      <div className="about-content">
        <h4 className="about-paragraph assets">
          *Trenutno nema imovine za prodaju*
        </h4>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "pexels-mitchell-luo-3694708.jpg" }) {
      childImageSharp {
        fluid(
          sizes: "(max-width: 300px) calc(100vw - 25px), (max-width: 600px) calc(100vw - 15px), 1300px"
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Assets
