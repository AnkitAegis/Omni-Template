import { Global, css } from '@emotion/react'

const styles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --fontNormal: 'Montserrat', sans-serif;
    --fontHeading: 'Barlow Condensed', sans-serif;
    --paddingBlock: clamp(1rem, 4vw, 1.5rem);
    --paddingInline: clamp(2rem, 4vw, 4rem);
    --padding: var(--paddingBlock) var(--paddingInline);

    --colorPrimary: #000;
    --colorSecondary: #000;
    --colorTertiary: #000;
    --accentColor: #000;
  }

  body {
    font-family: var(--fontNormal);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--fontHeading);
  }

  ul {
    list-style-type: none;
  }

  button {
    border: 0;
    font-family: inherit;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
  }

  input {
    border: none;
    font-family: inherit;
    &:focus {
      outline: none !important;
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }
`

const GlobalStyle = () => <Global styles={styles} />

export default GlobalStyle