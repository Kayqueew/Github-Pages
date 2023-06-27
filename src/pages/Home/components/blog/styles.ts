import styled from 'styled-components'

export const GitBlog = styled.div`
  width: 26rem;
  height: 16.75rem;
  text-decoration: none;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme['base-post']};
  padding: 2rem;
  background: ${(props) => props.theme['base-post']};

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    h1 {
      width: 17.6rem;
      font-family: 'Nunito';
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;

      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-family: 'Nunito';
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      margin-top: 6px;

      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    max-width: 22rem;
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }

  :hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  @media (max-width: 909px) {
    width: 22rem;
  }

  @media (max-width: 775px) {
    width: 19rem;
  }

  @media (max-width: 680px) {
    width: 28rem;
  }

  @media (max-width: 450px) {
    width: 24rem;
  }

  @media (max-width: 375px) {
    width: 21rem;
  }
`

export const BlogText = styled.div`
  max-width: 22rem;
  max-height: 7rem;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;

    font-family: 'Nunito';
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: ${(props) => props.theme['base-text']};
  }
`
