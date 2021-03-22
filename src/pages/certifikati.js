import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const Certificates = ({
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
          Integrirani sustav upravljanja
        </h2>
        <h2 className="about-header mobile-visible">Certifikati</h2>
      </div>
      <div className="about-content mobile-visible">
        <h4 className="about-paragraph">
          Shvaćajući važnost stalnog unapređivanja poslovnih procesa i kvalitete
          svoje usluge, zaštite okoliša, zdravlja i sigurnosti na radu, tvrtka
          Osijek-Koteks d.d. uvela je Integrirani Sustav upravljanja kvalitetom,
          zaštitom okoliša, zdravlja i sigurnosti na radu prema normama ISO
          9001:2015, ISO 14001:2015, BS OHSAS 18001:2007.
        </h4>
        <h4 className="about-paragraph">
          Nakon provedenog audita od strane certifikacijske kuće DNVgl, Osijek
          Koteks d.d. je u svibnju 2014. Godine ishodio certifikate za sva 3
          sustava. Integrirani sustav primjenjuje se u svim procesima unutar
          Organizacije kao što su planiranje, nabava, proizvodnja betona i
          asfalta, izvođenje građenja, izobrazba i kontrola kvalitete, a u
          skladu s važećim normama, zakonskim propisima i zakonskom obvezom
          ocjenjivanja i provjere sukladnosti građevnih proizvoda. Integrirani
          sustav opisan je u slijedećim dokumentima: Priručnik integriranog
          sustava, Politika integriranog sustava, postupci, radne upute i
          pripadajući obrasci.
        </h4>
        <h4 className="about-paragraph">
          Certificiranje Sustava upravljanja kvalitetom prema normi ISO
          9001:2015 osigurava Osijek-Koteks-u kvalitetniji proizvod i usluge,
          neprestano poboljšanje odnosa sa korisnicima, te ostvarenje i
          održavanje dugoročnih poslovnih odnosa. Uspostavom i održavanjem
          Sustava upravljanja zaštitom okoliša prema normi ISO 14001:2015
          Osijek-Koteks d.d dokazuje da djelotvorno upravlja aspektima okoliša
          koji su vezani za osnovne djelatnosti u Organizaciji, istovremeno
          uzimajući u obzir zaštitu okoliša, prevenciju zagađenja i društveno
          ekonomske potrebe. Sustav upravljanja zdravljem i sigurnošću na radu
          prema normi BS OHSAS 18001:2007 omogućuje da Osijek-Koteks d.d.
          nadzire vlastite rizike zdravlja i sigurnosti na radu. Sustavni
          pristup upravljanju zaštitom zdravlja i sigurnosti na radu od velikog
          je značaja i za poslodavce i za radnike, te predstavlja temelj za
          partnerski odnos u rješavanju ovog značajnog područja rada i radnih
          odnosa.
        </h4>
      </div>
      <div className="about-content visibility-filter">
        <h4 className="about-paragraph">
          Shvaćajući važnost stalnog unapređivanja poslovnih procesa i kvalitete
          svoje usluge, zaštite okoliša, zdravlja i sigurnosti na radu, tvrtka
          Osijek-Koteks d.d. uvela je Integrirani Sustav upravljanja kvalitetom,
          zaštitom okoliša, zdravlja i sigurnosti na radu prema normama ISO
          9001:2015, ISO 14001:2015, BS OHSAS 18001:2007. Nakon provedenog
          audita od strane certifikacijske kuće DNVgl, Osijek Koteks d.d. je u
          svibnju 2014. Godine ishodio certifikate za sva 3 sustava. Integrirani
          sustav primjenjuje se u svim procesima unutar Organizacije kao što su
          planiranje, nabava, proizvodnja betona i asfalta, izvođenje građenja,
          izobrazba i kontrola kvalitete, a u skladu s važećim normama,
          zakonskim propisima i zakonskom obvezom ocjenjivanja i provjere
          sukladnosti građevnih proizvoda.Integrirani sustav opisan je u
          slijedećim dokumentima: Priručnik integriranog sustava, Politika
          integriranog sustava, postupci, radne upute i pripadajući obrasci.
          Certificiranje Sustava upravljanja kvalitetom prema normi ISO
          9001:2015 osigurava Osijek-Koteks-u kvalitetniji proizvod i usluge,
          neprestano poboljšanje odnosa sa korisnicima, te ostvarenje i
          održavanje dugoročnih poslovnih odnosa. Uspostavom i održavanjem
          Sustava upravljanja zaštitom okoliša prema normi ISO 14001:2015
          Osijek-Koteks d.d dokazuje da djelotvorno upravlja aspektima okoliša
          koji su vezani za osnovne djelatnosti u Organizaciji, istovremeno
          uzimajući u obzir zaštitu okoliša, prevenciju zagađenja i društveno
          ekonomske potrebe. Sustav upravljanja zdravljem i sigurnošću na radu
          prema normi BS OHSAS 18001:2007 omogućuje da Osijek-Koteks d.d.
          nadzire vlastite rizike zdravlja i sigurnosti na radu. Sustavni
          pristup upravljanju zaštitom zdravlja i sigurnosti na radu od velikog
          je značaja i za poslodavce i za radnike, te predstavlja temelj za
          partnerski odnos u rješavanju ovog značajnog područja rada i radnih
          odnosa.
        </h4>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "nasip_sava.jpg" }) {
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
export default Certificates
