import React from "react"
import services from "../constants/services"
import { Link } from "gatsby"
const Services = () => {
  return (
    <section className="section bg-grey">
      <div className="section-center">
        {services.map(service => {
          const { id, icon, title, text, classStyle, link } = service
          return (
            <Link to={link} className="services-link">
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
