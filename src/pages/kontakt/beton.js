import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
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
          <h3 className="contact-us-header contact-us-header-operativa">
            ODJEL PROIZVODNJE BETONA
          </h3>
          <ul className="contact-us-list">
            <li className="contact-list-name">Zdenko Anić</li>
            <li>
              <address>
                email:{" "}
                <a href="mailto:  zdenko.anic@osijek-koteks.hr">
                  zdenko.anic@osijek-koteks.hr
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
export default Concrete
