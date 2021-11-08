import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import { App } from './App'
import { AppProvider } from './Context/Context'

const client = new ApolloClient({
  uri: 'https://petgramapionedrako.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <AppProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppProvider>,
  document.getElementById('root')
)
