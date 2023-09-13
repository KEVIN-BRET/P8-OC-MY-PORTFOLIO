import React, { useContext } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';

import styled from 'styled-components';
import colors from '../style/colors';

import handshake from '../assets/images/handshake.webp';

import SmallBadge from './SmallBadge';

import linkedin from '../assets/images/logos/linkedin-light.png';
import github from '../assets/images/logos/github-light.png';
import email from '../assets/images/logos/email-light.png';

import linkedinDark from '../assets/images/logos/linkedin-dark.png';
import githubDark from '../assets/images/logos/github-dark.png';
import emailDark from '../assets/images/logos/email-dark.png';

const LINKEDIN_URL = 'https://www.linkedin.com/in/kevin-bret-534a73180/';
const GITHUB_URL = 'https://github.com/KEVIN-BRET/';
const MAIL_TO_KEVIN = 'mailto:kevinbret.dev@gmail.com'




const StyledContact = styled.div`
	margin: 2rem auto;
	padding-top: 120px;
	width: 80%;
	max-width: 1440px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	& h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
		${'' /* color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight}; */}
	}
`
const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	
`

const StyledInfos = styled.div`
	display: flex;
	width: 37%;
	flex-direction: column;
	justify-content: center;
	border-radius: 6px;
	padding: 2rem;
	gap: 1rem;
	background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
	transition: 0.3s ease;
	& .thumbnail {
		height: 200px;
		width: 100%;
		margin-bottom: 2rem;
		border-radius: 6px;
		overflow: hidden;
		& img {
			z-index: 0;
			height: 200px;
			width: 100%;
			object-fit: cover;
			transition: 0.6s ease;
			${'' /* display: none; */}
		}
	}
	& .badgeContainer {
			margin-top: 1rem;
			display: flex;
			gap: 1.5rem;
		}
	&:hover {
            transform: translateY(-3px);
			& .thumbnail img {
				transform: scale(1.2);
			}
	}

`

const StyledForm = styled.div`
	display: flex;
	width: 57%;
	flex-direction: column;
	justify-content: center;
	border-radius: 6px;
	padding: 2rem;
	gap: 1rem;
	background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
	transition: 0.3s ease;
	`

export default function Contact() {

	const { darkMode } = useContext(ThemeContext);

	return (
		<StyledContact id='contact' $isDarkMode={darkMode} >
			<h1>Me contacter</h1>
			<StyledContainer>

				<StyledInfos $isDarkMode={darkMode}>
					<div className="thumbnail">
						<img className='picture' src={handshake} alt="" />
					</div>

					<h3>Kevin BRET</h3>
					<p>Développeur Web</p>
					<p>Je suis actuellement disponible, en recherche d'un poste dans une équipe .. :)</p>
					<p>Téléphone : <span>07 82 42 30 30</span></p>
					<p>Email : <span>kevinbret.dev@gmail.com</span></p>

					<div className="findMe">
						<p>Ou me trouver ?</p>
						<div className="badgeContainer">
							<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
								<SmallBadge logo={linkedin} logoDark={linkedinDark} hoverable />
							</a>
							<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
								<SmallBadge logo={github} logoDark={githubDark} hoverable />
							</a>
							<a href={MAIL_TO_KEVIN} >
								<SmallBadge logo={email} logoDark={emailDark} hoverable />
							</a>
						</div>
					</div>
				</StyledInfos>

				<StyledForm $isDarkMode={darkMode}>
					<form action="">
						<input type="text" placeholder='Nom' />
						<input type="text" placeholder='Téléphone' />
						<input type="text" placeholder='Email' />
						<input type="text" placeholder='Sujet' />
						<textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
					</form>
				</StyledForm>

			</StyledContainer>
		</StyledContact>
	);
}
