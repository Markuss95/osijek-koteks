import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const helpdesk = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Helpdesk" />
      <div className="img-wrapper img-wrapper-about">
        <Image Tag="div" fluid={fluid} className=" bcg bcg-about  " />
        <h2 className="about-header visibility-filter ">Helpdesk</h2>
        <h2 className="about-header mobile-visible">Helpdesk</h2>
      </div>
      {/* <div className="about-content mobile-visible">
        <h4 className="about-paragraph">
          Shvaćajući važnost stalnog unapređivanja poslovnih procesa i kvalitete
          svoje usluge, zaštite okoliša, zdravlja i sigurnosti na radu, tvrtka
          Osijek-Koteks d.d. uvela je Integrirani Sustav upravljanja kvalitetom,
          zaštitom okoliša, zdravlja i sigurnosti na radu prema normama ISO
          9001:2015, ISO 14001:2015, BS OHSAS 18001:2007.
        </h4>
      </div> */}
      <div className="about-content ">
        <h4 className="about-paragraph">
          <div className="login-window-wrapper">
            <div className="login-window">
              <div className="login-window-input">
                <p className="input-text">Username</p>
                <input type="text" className="input"></input>
              </div>
              <div className="login-window-input">
                <p className="input-text">Password</p>
                <input type="text" className="input"></input>
              </div>
            </div>
          </div>
        </h4>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "pexels-jéshoots-218863.jpg" }) {
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
export default helpdesk
