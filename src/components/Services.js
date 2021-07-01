import React from "react"
import services from "../constants/services"
import { Link } from "gatsby"
import { FaBriefcase } from "react-icons/fa"
const Services = () => {
  return (
    <section className="section bg-grey">
      <div className="section-center services-grid">
        <Link to="/o-nama/posao" className="services-link" key="rndasda">
          <article key={"nsadas"} className="service">
            <FaBriefcase className="service-icon" />
            <h4>Natječaj za posao</h4>
            <div className="underline underline-sm"></div>
            <p>
              Osijek Koteks traži stručnjaka za EU projekte. Potrebna je VSS.
              Dvije godine radnog iskustva i odlično poznavanje engleskog jezika
              u govoru i pismu.
            </p>
          </article>
        </Link>
        {services.map(service => {
          const { id, icon, title, text, classStyle, link } = service
          return (
            <Link to={link} className="services-link" key={service.id}>
              <article key={id} className="service">
                {icon}
                <h4>{title}</h4>
                <div className={`underline ${classStyle}`}></div>
                <p>{text}</p>
              </article>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Services
