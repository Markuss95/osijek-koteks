import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "rsz_gdje-je-pečat_1.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    otherFile: file(relativePath: { eq: "rsz_11rsz_iso-certifikat.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const Footer = () => {
  const data = useStaticQuery(query)

  return (
    <footer className="footer">
      <div>
        <div>
          <p>
            Osijek-Koteks d.d. • Šamačka 11, 31000 Osijek • Tel. +385 (0)31 22
            77 00 • OIB:44610694500 • uprava@osijek-koteks.hr | Agram banka d.d.
          </p>
        </div>
      </div>
      <div>
        <p>IBAN: HR38 248 10001123001112 SWIFT: KREZHR2X</p>
      </div>
      <div>
        <p>
          Osijek-Koteks &copy; {new Date().getFullYear()} Sva prava pridržana
        </p>
      </div>
      <div className="certificates-center">
        <Image
          fixed={data.file.childImageSharp.fixed}
          className="certificates-img"
        />
        <Image
          fixed={data.otherFile.childImageSharp.fixed}
          className="iso-img"
        />
      </div>
    </footer>
  )
}

export default Footer
