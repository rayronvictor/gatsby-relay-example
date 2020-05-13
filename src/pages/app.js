import React, { Suspense } from "react"
import Layout from "../components/layout"
import { Router, Redirect } from "@reach/router"

import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from '../lib/RelayEnvironment';

import Repository from "../components/repository"
import SEO from "../components/seo"

const App = () => (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense fallback={'Loading...'}>
      <Layout>
        <SEO title="App" />
        <Router basepath="/app">
          <Repository path="repository" />
          <Redirect noThrow from="/" to="/app/repository" />
        </Router>
      </Layout>
    </Suspense>
  </RelayEnvironmentProvider>
)

export default App
