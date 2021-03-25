import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import {ReferencesTable} from "../components/ReferencesTable"

const Concrete = ({
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
          Naše Reference
        </h2>
        <h2 className="about-header mobile-visible">Reference</h2>
      </div>
      <div className="about-content">
        <div className="asphalt-wrapper">
          <ReferencesTable />
        </div>
      
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "pexels-tima-miroshnichenko-6474345-min.jpg" }) {
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
export default Concrete
