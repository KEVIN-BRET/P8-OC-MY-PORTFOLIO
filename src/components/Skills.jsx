import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import colors from '../style/colors';
import { ThemeContext } from '../utils/context/ThemeProvider';
// import skillsDatas from '../assets/datas/skillsDatas.json';

import htmlLogoLight from '../assets/images/logos/html5-light.png';
import htmlLogoDark from '../assets/images/logos/html5-dark.png';

import cssLogoLight from '../assets/images/logos/css3-light.png';
import cssLogoDark from '../assets/images/logos/css3-dark.png';

import sassLogoLight from '../assets/images/logos/sass-light.png';
import sassLogoDark from '../assets/images/logos/sass-dark.png';

import jsLogoLight from '../assets/images/logos/javascript-light.png';
import jsLogoDark from '../assets/images/logos/javascript-dark.png';

import reactLogoLight from '../assets/images/logos/react-light.png';
import reactLogoDark from '../assets/images/logos/react-dark.png';

const StyledSkills = styled.div`
	margin: 2rem auto;
	padding-top: 120px;
	width: 80%;
	max-width: 1440px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	& h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	}
`;

const StyledCardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`;

const StyledCard = styled.div`
    width: 350px;
    height: 150px;
    border-radius: 6px;
    padding: 1.5rem;
    cursor: pointer;
    background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
    transition: 0.3s ease;
        &:hover {
            color: ${colors.bodyDark};
            background: ${colors.primary};
            transform: translateY(-3px);
			& h2 {
				color: ${colors.white};
				transition: 0.3s ease;
			}
        }
	& h2,h3 {
		color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	}
`;

const StyledLogosContainer = styled.div`
		height: 50px;
		margin-bottom: 1rem;
		display: flex;
		gap: 1rem;
		z-index: 10;
		transition: 0.3s ease;
		& img {
			height: 100%;
		}
	`;

function Skills() {
	const { darkMode } = useContext(ThemeContext);
	const [isHovered, setIsHovered] = useState(false);

	// let currentLogo;
	// if (isHovered) {
	// 	currentLogo = logoDark;
	// } else {
	// 	currentLogo = darkMode && logoDark ? logoDark : logoLight;
	// }

	return (
		<StyledSkills $isDarkMode={darkMode}>
			<h1>Mes compétences</h1>

			<StyledCardsContainer>
				<StyledCard
					$isDarkMode={darkMode}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<StyledLogosContainer className='logos'>
						{/* logo html5 */}
						{darkMode ? <img src={htmlLogoDark} alt="HTML" /> : <img src={htmlLogoLight} alt="HTML" />}
						{/* logo css3 */}
						{darkMode ? <img src={cssLogoDark} alt="CSS" /> : <img src={cssLogoLight} alt="CSS" />}
						{/* logo sass */}
						{darkMode ? <img src={sassLogoDark} alt="CSS" /> : <img src={sassLogoLight} alt="CSS" />}
					</StyledLogosContainer>
					<h3>Intégration (front-end)</h3>
				</StyledCard>

				<StyledCard
					$isDarkMode={darkMode}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<StyledLogosContainer className='logos'>
						{/* logo JS */}
						{darkMode ? <img src={jsLogoDark} alt="JavaScript" /> : <img src={jsLogoLight} alt="JavaScript" />}
						{/* logo React */}
						{darkMode ? <img src={reactLogoDark} alt="HTML" /> : <img src={reactLogoLight} alt="HTML" />}
					</StyledLogosContainer>
					<h3>JavaScript & React Js</h3>
				</StyledCard>
			</StyledCardsContainer>

		</StyledSkills>
	);
}

export default Skills;
