import { Wrapper, SearchWrapper } from "./style"

const SearchBar = ({ searchInput, setSearchInput }) => {
  return (
    <Wrapper>
      <SearchWrapper>
        <div>
          <label className="input-label">Name or Type</label>
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            className="search-field"
            type="text"
          />
        </div>
        <span className="search-hint">
          Search for a Pokémon by name or using its National Pokédex Type.
        </span>
      </SearchWrapper>
    </Wrapper>
  )
}

export default SearchBar
