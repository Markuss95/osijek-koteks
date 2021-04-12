import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const PosaoTemplate = ({ data }) => {
  const {
    naslov,
    naslovTeksta,
    PrijaveDo,
    tekst: { tekst },
    stoNudimo: { stoNudimo },
    uvjeti: { uvjeti },
    mjestoRada,
  } = data.contentfulPoslovi
  const fluid = data.file.childImageSharp.fluid
  return (
    <Layout>
      <div className="img-wrapper img-wrapper-about">
        <Image Tag="div" fluid={fluid} className=" bcg bcg-about  " />
        <h2 className="about-header">{naslov}</h2>
      </div>
      <div className="about-content job-content">
        <h4 className="job-paragraph">{naslovTeksta}</h4>
        <h4 className="job-paragraph">Mjesto rada: {mjestoRada}</h4>
        <h4 className="job-paragraph">Opis poslova: {tekst}</h4>
        <h4 className="job-paragraph">Uvjeti: {uvjeti}</h4>
        <h4 className="job-paragraph">Što nudimo: {stoNudimo}</h4>
        <h4 className="job-paragraph">Prijave do: {PrijaveDo}</h4>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query getSingleJob($id: String) {
    contentfulPoslovi(id: { eq: $id }) {
      id
      naslov
      naslovTeksta
      PrijaveDo(formatString: "DD.MM.YYYY")
      slika {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      tekst {
        tekst
      }
      stoNudimo {
        stoNudimo
      }
      uvjeti {
        uvjeti
      }
      mjestoRada
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
