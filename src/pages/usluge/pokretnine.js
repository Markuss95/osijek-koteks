import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import AllMovables from "../../components/AllMovables"
import SEO from "../../components/SEO"

const Movables = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Pokretnine" />
      <div className="img-wrapper img-wrapper-about">
        <Image Tag="div" fluid={fluid} className=" bcg bcg-about  " />
        <h2 className="about-header visibility-filter ">
          Pokretnine na prodaju
        </h2>
        <h2 className="about-header mobile-visible">Pokretnine</h2>
      </div>
      <AllMovables />
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
export default Movables
