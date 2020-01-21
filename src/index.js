import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './Components/App.js'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter } from 'react-router-dom'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App/>
      <footer>
        Case 02 - EnfaseLabs
      </footer>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
