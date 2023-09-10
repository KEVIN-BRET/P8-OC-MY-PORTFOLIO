import React from 'react';
import styled from 'styled-components';
import photo from '../assets/images/avatar.png';

import colors from '../style/colors';
import { useContext } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';

import SmallBadge from './SmallBadge';
import sassLogoColored from '../assets/images/svg/sass-colored.svg';
import reactLogoColored from '../assets/images/svg/react-colored.svg';
import cofeeCup from '../assets/images/svg/coffee-colored.svg';

import linkedin from '../assets/images/svg/linkedin.png';
import github from '../assets/images/svg/github.png';
import email from '../assets/images/svg/email.png';

import linkedinDark from '../assets/images/svg/linkedin-dark.png';
import githubDark from '../assets/images/svg/github-dark.png';
import emailDark from '../assets/images/svg/email-dark.png';



const StyledAboutMe = styled.div`
	${'' /* height: 500px; */}
	${'' /* border: 1px solid pink; */}
	
	padding-top: 120px;
	margin:  0 Auto;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	gap: 3rem;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
`

const StyledInfos = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	height: 500px;

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
		& .badgeContainer {
			display: flex;
			gap: 1.5rem;
			${'' /* flex-direction: row; */}
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

export default function AboutMe(props) {
	const { darkMode } = useContext(ThemeContext);

	return (
		<StyledAboutMe $isDarkMode={darkMode} >
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
							<SmallBadge logo={linkedin} logoDark={linkedinDark} hoverable />
							<SmallBadge logo={github} logoDark={githubDark} hoverable />
							<SmallBadge logo={email} logoDark={emailDark} hoverable />
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

