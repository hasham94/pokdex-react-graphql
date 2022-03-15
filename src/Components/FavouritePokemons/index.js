import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Wrapper, BackButton } from "./style"
import Card from "../../common/Card"

function FavouritePokemons() {
  const navigate = useNavigate()

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const data = localStorage.getItem("favourites")
    if (data) {
      setPokemons(JSON.parse(data))
    }
  }, [])

  return (
    <>
      <BackButton onClick={() => navigate("/")}>Go Back</BackButton>
      <Wrapper>
        {pokemons &&
          pokemons.map((item) => (
            <Card item={item} key={item.id} page="favourite" />
          ))}
      </Wrapper>
    </>
  )
}

export default FavouritePokemons
