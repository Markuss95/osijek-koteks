import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <main className="error-page">
        <div className="error-container">
          <h1>Ups, upali ste u slijepu ulicu</h1>
          <Link to="/" className="btn">
            Vrati me nazad!
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
