import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"

export default () => {
  document.title = "Osijek Koteks"
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  )
}
