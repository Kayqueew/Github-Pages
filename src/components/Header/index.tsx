import logoHeader from '../../assets/logoHeader.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={logoHeader} alt=""></img>
      </HeaderContainer>
    </>
  )
}
