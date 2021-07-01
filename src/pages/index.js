import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import SEO from "../components/SEO"
import JobsList from "../components/JobsList"

export default () => {
  return (
    <Layout>
      <SEO title="Osijek Koteks d.d." />
      <Hero />
      <Services />
    </Layout>
  )
}
