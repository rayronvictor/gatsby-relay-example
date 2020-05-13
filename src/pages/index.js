import React from "react"
import { Link, graphql as gql } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Site description from gatsby-config</h1>
      <p>{data.site.siteMetadata.description}</p>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      {' '}
      <Link to="/app/">Go to App</Link>
    </Layout>
  );
}

export default IndexPage

export const query = gql`
  query IndexPage {
    site {
      siteMetadata {
        description
      }
    }
  }
`
