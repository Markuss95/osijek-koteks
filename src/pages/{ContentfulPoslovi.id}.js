import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const PosaoTemplate = ({ data }) => {
  const {
    naslov,
    PrijaveDo,
    tekst: { tekst },
    slika,
  } = data.contentfulPoslovi
  const fluid = data.file.childImageSharp.fluid
  return (
    <Layout>
      <div className="img-wrapper img-wrapper-about">
        <Image Tag="div" fluid={fluid} className=" bcg bcg-about  " />

        <h2 className="about-header visibility-filter ">{naslov}</h2>
        <h2 className="about-header mobile-visible">Posao</h2>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleJob($id: String) {
    contentfulPoslovi(id: { eq: $id }) {
      id
      naslov
      PrijaveDo(formatString: "DD.MM.YYYY")
      slika {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      tekst {
        tekst
      }
    }
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

export default PosaoTemplate
