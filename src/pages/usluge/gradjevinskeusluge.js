import React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import constructionservices from "../../constants/constructionservices"
const ConstructionServices = ({
  data: {
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  return (
    <Layout>
      <div className="img-wrapper img-wrapper-about">
        <Image Tag="div" fluid={fluid} className=" bcg bcg-about  " />
        <h2 className="about-header visibility-filter ">Građevinske Usluge</h2>
        <h2 className="about-header mobile-visible">Usluge</h2>
      </div>
      <section className="section bg-grey">
        <div className="section-center">
          {constructionservices.map(service => {
            const { id, icon, title, text, classStyle } = service
            return (
              <div className="services-link">
                <article key={id} className="service">
                  {icon}
                  <h4>{title}</h4>
                  <div className={`underline ${classStyle}`}></div>
                  <p>{text}</p>
                </article>
              </div>
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "gradj-usluge-ok.jpg" }) {
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
export default ConstructionServices
