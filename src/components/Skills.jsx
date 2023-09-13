import React, { useState, useContext } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';
import styled from 'styled-components';
import colors from '../style/colors';
// import skillsDatas from '../assets/datas/skillsDatas.json';

// logos :
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
import nodeLogoLight from '../assets/images/logos/node-light.png';
import nodeLogoDark from '../assets/images/logos/node-dark.png';
import expressLogoLight from '../assets/images/logos/express-light.png';
import expressLogoDark from '../assets/images/logos/express-dark.png';
import mongoLogoLight from '../assets/images/logos/mongodb-light.png';
import mongoLogoDark from '../assets/images/logos/mongodb-dark.png';
import seoLogoLight from '../assets/images/logos/seo-light.png';
import seoLogoDark from '../assets/images/logos/seo-dark.png';
import debugLogoLight from '../assets/images/logos/debug-light.png';
import debugLogoDark from '../assets/images/logos/debug-dark.png';
import userLogoDark from '../assets/images/logos/user-dark.png';
import userLogoLight from '../assets/images/logos/user-light.png';
import bookLogoLight from '../assets/images/logos/book-light.png';
import bookLogoDark from '../assets/images/logos/book-dark.png';

const StyledSkills = styled.div`
	margin: 2rem auto;
	padding-top: 120px;
	width: 90%;
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
	& .parcour {
		margin: 2rem auto;
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
    height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    border-radius: 6px;
    padding: 1.5rem;
    cursor: pointer;
    background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
    transition: 0.3s ease;
        &:hover {
            color: ${colors.bodyDark};
            background: ${colors.gradienPrimaryColor};
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
		height: 40px;
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
		<StyledSkills id='skills' $isDarkMode={darkMode}>
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

				<StyledCard
					$isDarkMode={darkMode}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<StyledLogosContainer className='logos'>
						{/* logo Node */}
						{darkMode ? <img src={nodeLogoDark} alt="JavaScript" /> : <img src={nodeLogoLight} alt="JavaScript" />}
						{/* logo Express */}
						{darkMode ? <img src={expressLogoDark} alt="HTML" /> : <img src={expressLogoLight} alt="HTML" />}
						{/* logo MongoDB */}
						{darkMode ? <img src={mongoLogoDark} alt="HTML" /> : <img src={mongoLogoLight} alt="HTML" />}
					</StyledLogosContainer>
					<h3>Back-end (JavaScript)</h3>
				</StyledCard>

				<StyledCard
					$isDarkMode={darkMode}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<StyledLogosContainer className='logos'>
						{/* logo Seo */}
						{darkMode ? <img src={seoLogoDark} alt="JavaScript" /> : <img src={seoLogoLight} alt="JavaScript" />}
						{/* logo Debug */}
						{darkMode ? <img src={debugLogoDark} alt="HTML" /> : <img src={debugLogoLight} alt="HTML" />}
					</StyledLogosContainer>
					<h3>SEO Optimisation Debug</h3>
				</StyledCard>

				<StyledCard
					$isDarkMode={darkMode}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<StyledLogosContainer className='logos'>
						{/* logo User */}
						{darkMode ? <img src={userLogoDark} alt="JavaScript" /> : <img src={userLogoLight} alt="JavaScript" />}
						{/* logo Book */}
						{darkMode ? <img src={bookLogoDark} alt="HTML" /> : <img src={bookLogoLight} alt="HTML" />}
					</StyledLogosContainer>
					<h3>En cours d'apprentissage ...</h3>
				</StyledCard>

			</StyledCardsContainer>

			{/* <h3 className='parcour'>Mon parcour & expérience</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit laboriosam voluptatibus ut nemo qui voluptates placeat eveniet impedit dignissimos earum aut officia voluptas quae commodi quidem cum pariatur odit, aspernatur, praesentium, iure esse inventore nobis. Dolore quaerat facilis iste amet. Porro perferendis temporibus vel ipsum molestiae reiciendis neque exercitationem?</p> */}

		</StyledSkills>
	);
}

export default Skills;
