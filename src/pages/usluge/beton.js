import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { ConcreteTable } from "../../components/ConcreteTable"
import SEO from "../../components/SEO"

const Concrete = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Beton" />
      <div className="img-wrapper img-wrapper-about">
        <Image Tag="div" fluid={fluid} className=" bcg bcg-about  " />
        <h2 className="about-header visibility-filter contact-header">
          Ponuda Betona
        </h2>
        <h2 className="about-header mobile-visible">Beton</h2>
      </div>
      <div className="about-content">
        <div className="asphalt-wrapper">
          <ConcreteTable />
        </div>
        <h4 className="about-paragraph concrete-paragraph">
          <span className="concrete-span">*Napomena</span>: Na betonarama
          Osijek-Koteksa za zimske uvjete dodaje se aditiv melfriz koji nije u
          kalkulaciji cijena i treba se naknadno zaračunati. Sve betonske
          mješavine koje nudimo na prodaju certificirane su i kontrolirane od
          strane ovlaštenih institucija i posjeduju sve valjane certifikate
          proizvodnje i kvalitete. Za sve upite vezane za cijenu i rokove
          isporuka molimo obratiti se odjelu Centralne nabave i upravljanja
          nabavnim lancem na 091/283-1453 Ana Eržić
          (ana.erzic@osijek-koteks.hr), 091/283-1626 Ana Vinković
          (ana.vinkovic@osijek-koteks.hr) ili 091/283-1555 Ivana Grubeša
          (ivana.grubesa@osijek-koteks.hr).
        </h4>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "pexels-scott-webb-2117937.jpg" }) {
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
