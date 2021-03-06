import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
const ImovinaTemplate = ({ data }) => {
  const {
    naslov,
    vrijediDo,
    kontakt,
    opis: { opis },
  } = data.contentfulImovina
  const fluid = data.file.childImageSharp.fluid
  return (
    <Layout>
      <div className="img-wrapper img-wrapper-about">
        <Image Tag="div" fluid={fluid} className=" bcg bcg-about  " />
        <h2 className="about-header">{naslov}</h2>
      </div>
      <div className="about-content job-content">
        <h4 className="job-paragraph">{opis}</h4>
        <h4 className="job-paragraph">Oglas vrijedi do: {vrijediDo}</h4>
        <h4 className="job-paragraph">
          {kontakt ? `Kontaktirajte nas na: ${kontakt}` : ""}
        </h4>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleAsset($id: String) {
    contentfulImovina(id: { eq: $id }) {
      id
      naslov
      kontakt
      vrijediDo(formatString: "DD.MM.YYYY")
      slika {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      opis {
        opis
      }
    }
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
export default ImovinaTemplate
