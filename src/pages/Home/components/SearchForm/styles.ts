import styled from 'styled-components'

export const Publications = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3.75rem;
  margin-bottom: 0.75rem;
  max-width: 54rem;

  p:first-child {
    font-weight: 700;
    font-size: 18px;
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`

export const SearchFormContainer = styled.form`
  display: flex;

  input {
    max-width: 54rem;
    flex: 1;
    height: 3.12rem;
    padding: 12px 16px;
    border-radius: 6px;
    outline: 0;

    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }

    &:focus::placeholder {
      color: ${(props) => props.theme['base-text']};
    }
  }
`
