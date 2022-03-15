import { gql } from "@apollo/client"
import { Filter } from "./Types"

export const LOAD_POKEMONS = gql`
  query getPokemons($limit: Int) {
    allPokemon(limit: $limit) {
      id
      name
      sprites {
        front_default
      }
      types {
        id
        name
      }
      abilities {
        id
        name
      }
    }
  }
`

export const LOAD_TYPES = gql`
  query getPokemonTypes {
    allTypes {
      id
      name
    }
  }
`
