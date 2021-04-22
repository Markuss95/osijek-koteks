import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import SEO from "../../components/SEO"

const Tendering = ({
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
          className=" bcg bcg-about bcg-contact  "
        />
        <h2 className="about-header visibility-filter contact-header">
          Za sve Vaše upite stojimo na raspolaganju!
        </h2>
        <h2 className="about-header mobile-visible">Kontakt</h2>
      </div>
      <div className="about-content">
        <div className="contact-content-wrapper">
          <h3 className="contact-us-header contact-us-header-tehnicka">
            OPERATIVNO TEHNIČKI SEKTOR
          </h3>
          <ul className="contact-us-list">
            <li className="contact-list-name">
              Operativno Tehnički Direktor: <span>Ivan Oroz</span>
            </li>
            <li>
              <address>
                {" "}
                e-mail:{" "}
                <a href="mailto:  ivan.oroz@osijek-koteks.hr">
                  ivan.oroz@osijek-koteks.hr{" "}
                </a>
              </address>
            </li>
            <li>
              <address>
                Služba tehničke pripreme:{" "}
                <a href="mailto:  vlado.horvatek@osijek-koteks.hr">
                  vlado.horvatek@osijek-koteks.hr
                </a>
              </address>
            </li>
            <li>
              <address>
                Operativna područja:{" "}
                <div>
                  <a href="mailto:  mato.skoric@osijek-koteks.hr">
                    mato.skoric@osijek-koteks.hr
                  </a>
                </div>
                <div>
                  <a href="mailto:  kresimir.vrselja@osijek-koteks.hr">
                    kresimir.vrselja@osijek-koteks.hr
                  </a>
                </div>
                <div>
                  <a href="mailto:  frano.kordic@osijek.koteks.hrr">
                    frano.kordic@osijek.koteks.hrr
                  </a>
                </div>
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
export default Tendering
