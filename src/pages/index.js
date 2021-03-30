import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"

export default () => {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  )
}
