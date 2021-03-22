import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const About = ({
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
        <h2 className="about-header visibility-filter ">
          Povijest, sadašnjost, budućnost…
        </h2>
        <h2 className="about-header mobile-visible">O nama</h2>
      </div>
      <div className="about-content mobile-visible">
        <h4 className="about-paragraph">
          Tijekom više od 65 godina postojanja, kao pravni slijednik GP Osijeka,
          DP Niskogradja, odnosno GP Gradnja, od 1946.g., Osijek-Koteks d.d. se
          strukturalno prilagođavao novim tržišnim i organizacionim modelima i
          zahtjevima. Svoju osnovnu graditeljsku djelatnost je proširio na
          ekspoloataciju pijeska i šljunka iz rijeke Drave od gornjeg toka do
          ušća u Dunav.
        </h4>
        <h4 className="about-paragraph">
          Svojim višegodišnjim bogatim iskustvom u primjeni moderne tehnologije
          u svim domenama djelatnosti jedno je od najstarijih građevinskih
          Društava u Hrvatskoj. Dokaz su tisuće kilometara izgrađenih cesta s
          pripadajućim objektima i stotine stanova u domeni visokogradnje.
          Osijek Koteks je danas spreman odgovoriti na sve izazove investitora.
          Sa svojim poslovnim vizijama naglasak daje izgradnji objekata
          niskogradnje na bilo kojim terenima i pod bilo kojim uvjetima.
        </h4>
        <h4 className="about-paragraph">
          Danas nam stacionirane i mobilne tvornice asfalta i betona omogućavaju
          proizvodnju velikih kapaciteta s visokom kvalitetom transporta –
          šleperi, labudice, specijalna vozila, mikseri… i strojeva za ugradnju
          na lokacijama. Za izgradnju cesta u svim se fazama izvedbe koristi
          najsuvremenija mehanizacija – bageri, grederi, buldozeri, kombinirke,
          utovarivaci, valjci, finišeri… Za izradu elemenata od prenapregnutog
          betona (kao što su nadvožnjaci, viadukti ili stanovi) društvo
          raspolaže vlastitim pogonim i kapacitetima.
        </h4>
      </div>
      <div className="about-content visibility-filter">
        <h4 className="about-paragraph">
          Tijekom više od 65 godina postojanja, kao pravni slijednik GP Osijeka,
          DP Niskogradja, odnosno GP Gradnja, od 1946.g., Osijek-Koteks d.d. se
          strukturalno prilagođavao novim tržišnim i organizacionim modelima i
          zahtjevima. Svoju osnovnu graditeljsku djelatnost je proširio na
          ekspoloataciju pijeska i šljunka iz rijeke Drave od gornjeg toka do
          ušća u Dunav. Svojim višegodišnjim bogatim iskustvom u primjeni
          moderne tehnologije u svim domenama djelatnosti jedno je od
          najstarijih građevinskih Društava u Hrvatskoj. Dokaz su tisuće
          kilometara izgrađenih cesta s pripadajućim objektima i stotine stanova
          u domeni visokogradnje. Osijek Koteks je danas spreman odgovoriti na
          sve izazove investitora. Sa svojim poslovnim vizijama naglasak daje
          izgradnji objekata niskogradnje na bilo kojim terenima i pod bilo
          kojim uvjetima. Danas nam stacionirane i mobilne tvornice asfalta i
          betona omogućavaju proizvodnju velikih kapaciteta s visokom kvalitetom
          transporta – šleperi, labudice, specijalna vozila, mikseri… i strojeva
          za ugradnju na lokacijama. Za izgradnju cesta u svim se fazama izvedbe
          koristi najsuvremenija mehanizacija – bageri, grederi, buldozeri,
          kombinirke, utovarivaci, valjci, finišeri… Za izradu elemenata od
          prenapregnutog betona (kao što su nadvožnjaci, viadukti ili stanovi)
          društvo raspolaže vlastitim pogonim i kapacitetima.
        </h4>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
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
export default About
