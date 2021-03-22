import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "mainBcg1-min.jpg" }) {
      childImageSharp {
        fluid(sizes: "(max-width: 300px), 1800px") {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Background = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <div className="img-wrapper">
      <Image Tag="div" fluid={fluid} loading="eager" className=" bcg  " />
    </div>
  )
}

export default Background
