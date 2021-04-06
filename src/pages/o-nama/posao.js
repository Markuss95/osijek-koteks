import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import AllJobs from "../../components/AllJobs"

const Jobs = ({
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
        <h2 className="about-header visibility-filter ">
          Posao u Osijek Koteksu
        </h2>
        <h2 className="about-header mobile-visible">Posao</h2>
      </div>
      <AllJobs />
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "DJI_0670 (1) (1)-min (1).jpg" }) {
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
export default Jobs
