import { useEffect, useState } from "react"
import { BoxWrapper, BoxContent } from "./style"
import Utils from "../../Utils"

function Card({ item, page }) {
  const [pokemon, setPokemon] = useState(null)
  const [isFavourite, setIsFavourite] = useState(false)

  useEffect(() => {
    setPokemon(item)
  }, [item])
  return (
    pokemon && (
      <BoxWrapper key={pokemon.id}>
        <img
          className="mainImg"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <BoxContent>
          <h1 className="title">{pokemon.name}</h1>
          {!page && (
            <>
              {Utils.isFavourite(pokemon) ? (
                <button
                  className="favourite"
                  onClick={() => {
                    setIsFavourite(true)
                    Utils.addItemToFavourite(pokemon)
                  }}>
                  Mark As Favourite
                </button>
              ) : (
                <button
                  className="unfavourite"
                  onClick={() => {
                    setIsFavourite(false)
                    Utils.removeItemFromFavourite(pokemon)
                  }}>
                  Mark As UnFavourite
                </button>
              )}
            </>
          )}

          {pokemon.types.map((type) => (
            <span
              className={`type ${type.name.replace(/\s/g, "-")}`}
              key={type.id}>
              {type.name}
            </span>
          ))}
        </BoxContent>
      </BoxWrapper>
    )
  )
}

export default Card
