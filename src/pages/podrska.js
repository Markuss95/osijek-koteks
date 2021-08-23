import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/SEO"

const query = graphql`
  {
    file(relativePath: { eq: "support-pic-min.jpg" }) {
      childImageSharp {
        fluid(
          sizes: "(max-width: 300px) calc(100vw - 25px), (max-width: 600px) calc(100vw - 15px), 1300px"
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    otherFile: file(
      relativePath: { eq: "rsz_1rsz_teamviewer-mac-icon-100800939-large.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Support = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Podrška" />
      <div className="img-wrapper img-wrapper-about">
        <Image
          Tag="div"
          fluid={data.file.childImageSharp.fluid}
          className=" bcg bcg-about  "
        />
        <h2 className="about-header visibility-filter ">
          Upute za preuzimanje
        </h2>
        <h2 className="about-header mobile-visible">Podrška</h2>
      </div>
      <div className="about-content visibility-filter">
        <h4 className="about-paragraph support-paragraph ">
          <ol>
            <li>Pritisnuti ikonu TeamViewera (plava ikona desno)</li>
            <li>Na sljedećem prozoru pritisnuti tipku “Run”</li>
            <li>
              Nakon što se program izvrši molimo dostaviti sistem administratoru
              “Vaš ID”
            </li>
          </ol>
        </h4>
      </div>
      <div className="about-content support-mobile-visible">
        <h4 className="about-paragraph  ">
          Podrška je trenutno dostupna samo za osobna računala!
        </h4>
      </div>
      <Link
        to="https://get.teamviewer.com/6rtn9pi"
        className="teamviewer-img visibility-filter"
      >
        <Image fluid={data.otherFile.childImageSharp.fluid}></Image>
      </Link>
    </Layout>
  )
}

export default Support
