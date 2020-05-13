/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from 'gatsby'
import {
  graphql as gql,
  preloadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';

import SEO from './seo'
import RelayEnvironment from "../lib/RelayEnvironment"

// Define a query
const RepositoryNameQuery = gql`
  query repositoryNameQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = preloadQuery(RelayEnvironment, RepositoryNameQuery, {
  /* query variables */
});

const Repository = () => {
  const data = usePreloadedQuery(RepositoryNameQuery, preloadedQuery);

  return (
    <>
      <SEO title="Repository" />
      <h1>
        {data.repository.name}
      </h1>
      <Link to="/">Go to Home</Link>
    </>
  )
}

export default Repository
