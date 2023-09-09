import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`
   	*,
	::before,
	::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Montserrat';
		font-style: normal;
		// border: 0.7px solid skyblue;
	}

    body {
        background-color: ${({ isDarkMode }) =>
		!isDarkMode ? colors.backgroundLight : colors.backgroundDark};
        margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transition: 0.5s ease;
    }

	a {
		text-decoration: none;
		color: inherit;
	}

	li {
		list-style: none;
	}

    @media screen and (max-width: 500px) {
        padding-top: 20px;
    }
`

export default GlobalStyle