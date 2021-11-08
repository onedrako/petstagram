import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { App } from './App'
import { AppProvider } from './Context/Context'

const client = new ApolloClient({
  uri: 'https://petgramapionedrako.vercel.app/graphql',
  cache: new InMemoryCache(),
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  }
})

ReactDOM.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,
  document.getElementById('root')
)
