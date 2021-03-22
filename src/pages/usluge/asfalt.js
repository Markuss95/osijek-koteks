import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { AsphaltTableOne } from "../../components/AsphaltTableOne"
import { AsphaltTableTwo } from "../../components/AsphaltTableTwo"

const Asphalt = ({
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
        <h2 className="about-header visibility-filter contact-header">
          Asfaltni Asortiman
        </h2>
        <h2 className="about-header mobile-visible">Asfalt</h2>
      </div>
      <div className="about-content">
        <div className="asphalt-wrapper">
          <AsphaltTableOne />
          <div className="asphalt-tabletwo-wrapper">
            <AsphaltTableTwo />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "asfalt-new.jpg" }) {
      childImageSharp {
        fluid(
          sizes: "(max-width: 300px) calc(100vw - 25px), (max-width: 600px) calc(100vw - 15px),1300px"
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Asphalt
