import styled from 'styled-components'

export const PostContainer = styled.div`
  margin: auto;
  padding: 0 1rem;
  margin-top: -5rem;
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 54rem;
  height: 10rem;
  border-radius: 10px;
  padding: 32px;

  background: ${(props) => props.theme['base-profile']};
`

export const HeaderInfo = styled.header`
  display: flex;
  justify-content: space-between;

  a,
  p {
    display: flex;
    align-items: center;
    border: 0;
    cursor: pointer;

    font-family: 'Nunito';
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;

    color: ${(props) => props.theme.blue};
    gap: 8px;

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
  }

  img {
    margin-top: -1.5px;
  }

  a:hover {
    border-bottom: 1px solid ${({ theme }) => theme.blue};
  }
`

export const TitleInfo = styled.div`
  display: flex;
  margin-top: 20px;

  p {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 24px;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 32px;

  p {
    display: flex;
    gap: 8.59px;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;

    color: ${(props) => props.theme['base-span']};
  }
`

export const PostInfos = styled.div`
  display: flex;
  max-width: 54rem;

  padding: 32px 40px;

  font-family: 'Nunito';

  div {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;

    color: ${(props) => props.theme['base-text']};
  }
`
