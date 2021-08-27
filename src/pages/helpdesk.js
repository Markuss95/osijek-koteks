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
      <div className="about-content ">
        <h4 className="about-paragraph">
          <form className="login-window-wrapper">
            <div className="login-window">
              <div className="login-window-input">
                <p className="input-text">Username</p>
                <input type="text" className="input"></input>
              </div>
              <div className="login-window-input">
                <p className="input-text">Password</p>
                <input type="text" className="input"></input>
                <button type="submit" className="helpdesk-login-btn">
                  Login
                </button>
              </div>
            </div>
          </form>
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
