import { useNavigate } from "react-router-dom"
import { HeaderWrapper, Logo, Button } from "./style"
import LogoImg from "../../assets/logo.png"

const Header = () => {
  const navigate = useNavigate()

  const navigateToFavourite = (id) => {
    navigate(`/favourite`)
  }
  return (
    <HeaderWrapper>
      <div className="container">
        <Logo src={LogoImg} alt="logo" />
        <Button onClick={navigateToFavourite}>Favourite Pokemons</Button>
      </div>
    </HeaderWrapper>
  )
}

export default Header
