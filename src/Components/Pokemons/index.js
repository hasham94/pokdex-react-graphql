import React, { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import Utils from "../../Utils"
import { LOAD_POKEMONS } from "../../GraphQL/Queries"
import SearchBar from "../../common/SearchBar"
import FitlerAndSort from "../../common/Filter-Sort"
import { Wrapper, Loading, Button, ButtonWrapper } from "./style"
import Card from "../../common/Card"

function Pokemons() {
  const [limit, setLimit] = useState(8)

  const [pokemons, setPokemons] = useState([])
  const [pokemonsData, setPokemonsData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchInput, setSearchInput] = useState("")
  const [filter, setFilter] = useState("")
  const [sortBy, setSortBy] = useState("")
  const { error, loading, data } = useQuery(LOAD_POKEMONS, {
    variables: { limit: limit },
  })

  const sortPokemons = (sortKey) => {
    let sorted = []
    if (sortKey === "name-asc") {
      sorted = [...pokemons].sort((a, b) => (a.name > b.name ? 1 : -1))
    } else if (sortKey === "name-desc") {
      sorted = [...pokemons].sort((a, b) => (b.name > a.name ? 1 : -1))
    } else if (sortKey === "type-asc") {
      sorted = [...pokemons].sort((a, b) =>
        Utils.getStringyfyArray(a.types) > Utils.getStringyfyArray(b.types)
          ? 1
          : -1,
      )
    } else if (sortKey === "type-desc") {
      sorted = [...pokemons].sort((a, b) =>
        Utils.getStringyfyArray(a.types) < Utils.getStringyfyArray(b.types)
          ? 1
          : -1,
      )
    } else {
      sorted = pokemonsData
    }
    setPokemons([...sorted])
  }

  useEffect(() => {
    if (data) {
      setPokemons(data.allPokemon)
      setPokemonsData(data.allPokemon)
    }
    setIsLoading(loading)
  }, [data, loading])

  useEffect(() => {
    //searching
    if (searchInput.length !== 0) {
      setPokemons(Utils.filterArrayByString(pokemonsData, searchInput))
    } else {
      setPokemons(pokemonsData)
    }
  }, [pokemonsData, searchInput])

  useEffect(() => {
    //filtering
    if (filter.length !== 0) {
      setPokemons(Utils.filterArrayByType(pokemonsData, filter))
    } else {
      setPokemons(pokemonsData)
    }
  }, [pokemonsData, filter])

  return (
    <>
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Wrapper>
        <FitlerAndSort
          filter={filter}
          setFilter={setFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortPokemons={sortPokemons}
        />
        {isLoading ? (
          <Loading>Loading...</Loading>
        ) : (
          <>
            {pokemons.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </>
        )}

        <ButtonWrapper>
          <Button onClick={() => setLimit(limit + 1000)}>
            Load More Pokemons
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  )
}

export default Pokemons
