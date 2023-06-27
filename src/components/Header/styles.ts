import styled from 'styled-components'
import backgroundHeader from '../../assets/backgroundHeader.svg'

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 18.5rem;
  justify-content: center;
  align-items: flex-start;
  padding-top: 4rem;
  background-image: url(${backgroundHeader});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  img {
    max-width: 9.25rem;
  }
`
