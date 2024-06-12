import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#006fbf',
  secondary: '#ffbe76',
  bgColor: '#f1f2f6',
  save: '#27ae60',
  edit: '#e67e22',
  delete: '#c0392b'
}

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        list-style: none;
    }

    body {
      background-color: ${colors.bgColor};
        padding-top: 80px;
        padding-bottom: 80px;
    }
`

export default GlobalStyle

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 180px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`