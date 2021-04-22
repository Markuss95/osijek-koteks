import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import SEO from "../../components/SEO"

const Subcontracting = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Kontakt" />
      <div className="img-wrapper img-wrapper-about">
        <Image
          Tag="div"
          fluid={fluid}
          className=" bcg bcg-about bcg-contact "
        />
        <h2 className="about-header visibility-filter contact-header">
          Za sve Vaše upite stojimo na raspolaganju!
        </h2>
        <h2 className="about-header mobile-visible">Kontakt</h2>
      </div>
      <div className="about-content">
        <div className="contact-content-wrapper">
          <h3 className="contact-us-header contact-us-header-podugovaranje">
            SLUŽBA ZA POSLOVE UGOVARANJA I UPRAVLJANJA NABAVOM
          </h3>
          <ul className="contact-us-list">
            <li className="podugovaranje-list-item-1">
              <address>
                Služba tehničke podrške i odnosa s podizvoditeljima :{" "}
                <a href="mailto:  valentina.kolesaric@osijek-koteks.hr">
                  valentina.kolesaric@osijek-koteks.hr
                </a>
              </address>
            </li>
            <li className="podugovaranje-list-item-1">
              <address>
                Služba za poslove nabave i marketinga :{" "}
                <a href="mailto:  mladen.tuta@osijek-koteks.hr">
                  mladen.tuta@osijek-koteks.hr
                </a>
              </address>
            </li>
            <li className="podugovaranje-list-item-1">
              <address>
                Služba za pravne poslove ugovaranja :{" "}
                <a href="mailto:  vlatko.bilic@osijek-koteks.hr">
                  vlatko.bilic@osijek-koteks.hr
                </a>
              </address>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "imovina-na-prodaju-sl.jpg" }) {
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
export default Subcontracting
