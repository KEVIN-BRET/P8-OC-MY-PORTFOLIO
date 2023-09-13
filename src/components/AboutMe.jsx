import React from 'react';
import styled from 'styled-components';
import photo from '../assets/images/avatar.png';

import colors from '../style/colors';
import { useContext } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';

import SmallBadge from './SmallBadge';
import sassLogoColored from '../assets/images/logos/sass-color.png';
import reactLogoColored from '../assets/images/logos/react-color.png';
import cofeeCup from '../assets/images/logos/coffee-colored.svg';

import linkedin from '../assets/images/logos/linkedin-light.png';
import github from '../assets/images/logos/github-light.png';
import email from '../assets/images/logos/email-light.png';

import linkedinDark from '../assets/images/logos/linkedin-dark.png';
import githubDark from '../assets/images/logos/github-dark.png';
import emailDark from '../assets/images/logos/email-dark.png';

const LINKEDIN_URL = 'https://www.linkedin.com/in/kevin-bret-534a73180/';
const GITHUB_URL = 'https://github.com/KEVIN-BRET/';


const StyledAboutMe = styled.div`
	${'' /* height: 500px; */}
	${'' /* border: 1px solid pink; */}
	
	padding-top: 120px;
	margin:  0 Auto;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	max-width: 1440px;
	gap: 3rem;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	@media screen and (max-width: 1200px) {
		flex-direction: column-reverse;
		
	}
`

const StyledInfos = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	${'' /* height: 500px; */}

	& p {
		margin: 1rem 0;
		font-size: 1.2rem;
	}

	& .title {
		font-size: 2rem;
    	line-height: 1.2;	
		& .myName {
			color: ${colors.primary};
		}
	}
	
	& .badges {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
		@media screen and (max-width: 1200px) {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
		& .badgeContainer {
			display: flex;
			gap: 1.5rem;
		}
	}
`

const StyledPhoto = styled.div`
	display: flex;
	align-items: center;
	height: 500px;
	& img {
		height: 100%;
	}
`

export default function AboutMe() {
	const { darkMode } = useContext(ThemeContext);

	return (
		<StyledAboutMe id='accueil' $isDarkMode={darkMode} >
			<StyledInfos>
				<div className='text'>
					<p>Bienvenue sur mon Portfolio !</p>
					<h1 className='title'>
						Bonjour, je suis
						<span className='myName'> Kevin BRET</span>,
						<br />
						<span className='title-cation'>Développeur Web Junior.</span>
					</h1>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae eum autem omnis ex, aliquam labore unde quo illum voluptatibus quibusdam facere neque saepe vitae odio iusto debitis vel magni nisi.</p>
				</div>
				<div className='badges'>
					<div className="findMe">
						<p>Ou me trouver ?</p>
						<div className="badgeContainer">
							<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
								<SmallBadge logo={linkedin} logoDark={linkedinDark} hoverable />
							</a>
							<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
								<SmallBadge logo={github} logoDark={githubDark} hoverable />
							</a>
							<a href="#contact" >
								<SmallBadge logo={email} logoDark={emailDark} hoverable />
							</a>
						</div>
					</div>

					<div className="bestSkills">
						<p>Bests Skills</p>
						<div className="badgeContainer">
							<SmallBadge logo={sassLogoColored} />
							<SmallBadge logo={reactLogoColored} />
							<SmallBadge logo={cofeeCup} />
						</div>
					</div>
				</div>
			</StyledInfos>

			<StyledPhoto>
				<img src={photo} alt="" />
			</StyledPhoto>
		</StyledAboutMe>
	);
}

