
import { createGlobalStyle } from 'styled-components'
// import { ThemeProvider } from '../utils/context/context'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    a {
      text-decoration: none;
    }

    body {
        background-color: ${({ isDarkMode = false }) =>
		isDarkMode ? '#2F2E41' : 'lightgrey'};
        margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
    }
`

export default GlobalStyle