import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Background from "./Background"

const Hero = () => {
  return (
    <header className="hero">
      <Background />
      <div>
        <h3 className="hero-about-us visibility-filter">
          Osijek-Koteks danas je spreman odgovoriti na sve izazove investitora.
        </h3>
      </div>
    </header>
  )
}

export default Hero
