import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  max-width: 56rem;

  margin: auto;
  padding: 0 1rem;
  margin-top: -5rem;
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;

  max-width: 54rem;
  height: 13rem;
  border-radius: 10px;
  padding: 32px 40px;

  background: ${(props) => props.theme['base-profile']};

  img {
    width: 9.24rem;
    border-radius: 8px;
  }

  @media (max-width: 540px) {
    padding: 30px;
    gap: 25px;
  }
`

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  span {
    height: 3.12rem;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme['base-text']};
    margin-top: 8px;
  }

  @media (max-width: 540px) {
    span {
      font-size: 14px;
    }
  }
`

export const HeaderProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.theme['base-title']};

  img {
    width: 11.25px;
    margin-top: -1.5px;
  }

  a {
    display: flex;
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    gap: 8px;

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  a:hover {
    border-bottom: 1px solid ${({ theme }) => theme.blue};
  }

  @media (max-width: 590px) {
    h1 {
      font-size: 20px;
    }

    a {
      font-size: 12px;
    }
  }
`

export const Infos = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 1.5rem;

  p {
    display: flex;
    gap: 8.59px;
    color: ${(props) => props.theme['base-subtitle']};
  }

  img {
    width: 16.88px;
  }

  @media (max-width: 540px) {
    p {
      font-size: 14px;
    }
  }
`

export const BlogContainer = styled.div`
  max-width: 54rem;
  margin-top: 3rem;

  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  @media (max-width: 909px) {
    justify-content: center;
  }
`
