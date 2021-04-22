import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import AllAssets from "../../components/AllAssets"
import SEO from "../../components/SEO"

const Assets = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Imovina" />
      <div className="img-wrapper img-wrapper-about">
        <Image Tag="div" fluid={fluid} className=" bcg bcg-about  " />
        <h2 className="about-header visibility-filter ">Imovina na prodaju</h2>
        <h2 className="about-header mobile-visible">Imovina</h2>
      </div>
      <AllAssets />
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
