import { createGlobalStyle } from 'styled-components'
import colors from './colors'

const GlobalStyle = createGlobalStyle`

${'' /* import des polices */}
${'' /* @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap'); */}

	html {
		scroll-behavior: smooth;
	}
	
	input, textarea:focus {
		outline: none;
		}

   	*,
	::before,
	::after {
		${'' /* border: 1px solid pink; */}

		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Montserrat';
		font-style: normal;
		/* ? désactivation de la bordure au focus */
		input:focus {
		outline: none;
		}
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