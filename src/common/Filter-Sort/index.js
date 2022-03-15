import React, { useState, useEffect } from "react"
import { Wrapper, SelectWrapper } from "./style"
import { useQuery } from "@apollo/client"
import { LOAD_TYPES } from "../../GraphQL/Queries"

const FitlerAndSort = ({
  filter,
  setFilter,
  sortBy,
  setSortBy,
  sortPokemons,
}) => {
  const [types, setTypes] = useState([])
  const { data } = useQuery(LOAD_TYPES)

  useEffect(() => {
    if (data) {
      setTypes(data.allTypes)
    }
  }, [data])

  return (
    <Wrapper>
      <SelectWrapper>
        <label htmlFor="filter">Filter By:</label>

        <select
          name="filter"
          id="filter"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value)
          }}>
          <option>Select Type</option>
          {types.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </SelectWrapper>
      <SelectWrapper>
        <label htmlFor="sort">Sort By:</label>

        <select
          name="sort"
          id="sort"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value)
            sortPokemons(e.target.value)
          }}>
          <option></option>
          <option value="name-asc">Sort By Name (A-Z)</option>
          <option value="name-desc">Sort By Name (Z-A)</option>
          <option value="type-asc">Sort By Type (A-Z)</option>
          <option value="type-desc">Sort By Type (Z-A)</option>
        </select>
      </SelectWrapper>
    </Wrapper>
  )
}

export default FitlerAndSort
