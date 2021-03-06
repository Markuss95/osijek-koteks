import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Service from "../components/Services"
import SEO from "../components/SEO"

const Services = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Usluge" />
      <div className="img-wrapper img-wrapper-about">
        <Image Tag="div" fluid={fluid} className=" bcg bcg-about  " />
        <h2 className="about-header visibility-filter ">Asortiman Usluga</h2>
        <h2 className="about-header mobile-visible">Usluge</h2>
      </div>
      <Service />
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "pexels-pixabay-327509.jpg" }) {
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
export default Services
