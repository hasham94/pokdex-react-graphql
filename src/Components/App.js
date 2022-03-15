import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client"
import { onError } from "@apollo/client/link/error"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Pokemons from "./Pokemons"
import FavouritePokemons from "./FavouritePokemons"
import Header from "../common/Header"
import Footer from "../common/Footer"
import "../App.css"

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`Graphql error ${message}`)
    })
  }
})

const link = from([
  errorLink,
  new HttpLink({ uri: "https://dex-server.herokuapp.com/" }),
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Pokemons />} />
          <Route path="/favourite" element={<FavouritePokemons />} />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  )
}

export default App
