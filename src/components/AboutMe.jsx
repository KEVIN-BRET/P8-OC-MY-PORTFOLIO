import React from 'react';
import styled from 'styled-components';
import photo from '../assets/images/profile.webp';

import colors from '../style/colors';
import { useContext } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';

import FindMe from './FindMe';
import BestSkill from './BestSkill';


const StyledAboutMe = styled.div`
	${'' /* height: 500px; */}
	${'' /* border: 1px solid pink; */}
	
	padding-top: 140px;
	margin:  0 Auto;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	max-width: 1440px;
	height: 100vh;
	gap: 3rem;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	@media screen and (max-width: 1100px) {
		height: auto;
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
		font-style: inherit;
	}
	& .welcome {
		font-size: 1.3rem;
	}

	& .title {
		font-size: 2rem;
    	line-height: 1.2;	
		& .myName {
			color: ${colors.primary};
		}
	}
	& #myDescription {
		font-size: 1.1rem; ! important;
		line-height: 1.5;
		font-style: italic;
	}
	
	& .badges {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
		@media screen and (max-width: 1200px) {
			grid-template-columns: 1fr;
			gap: 1rem;
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
	@media screen and (max-width: 1100px) {
		height: 400px;
		margin: 0 1rem;
		
	}
	@media screen and (max-width: 768px) {
		height: 300px;
		
	}
`

export default function AboutMe() {
	const { darkMode } = useContext(ThemeContext);

	return (
		<StyledAboutMe id='accueil' $isDarkMode={darkMode} >
			<StyledInfos>
				<div className='text'>
					<p className='welcome'>Bienvenue sur mon Portfolio !</p>
					<h1 className='title'>
						Bonjour, je suis
						<span className='myName'> Kevin BRET</span>,
						<br />
						<span className='title-cation'>Développeur Web Junior.</span>
					</h1>
					{/* <p>Passionné d'informatique depuis toujours, particulièrement par le développent Front-end</p> */}


					<div id='myDescription'>
						<p>
							Je suis passionné en développement web Front-end. J'ai suivi la formation développeur web d'OpenClassrooms et je suis depuis peu, titulaire d'un Diplome de niveau 5.
							{/* <br />
							J'ai des compétences en HTML, CSS, JavaScript, ainsi que React.
							<br />
							Mais également en Back-end, Seo, Methodes agiles, .. */}
						</p>

						<p>
							{/* <br /> */}
							J'ai des compétences en HTML, CSS, JavaScript, ainsi que React.
							<br />
							Mais également en Back-end, SEO, Methodes agiles, ..
						</p>

						{/* <p>
							N'hésitez pas à explorer mes réalisations ci-dessous et à me contacter si vous êtes intéressés par mon profil.
						</p> */}

						{/* <p>
							Je suis actuellement à la recherche de ma première opportunité en tant que développeur Front-End junior. N'hésitez pas à explorer mes réalisations ci-dessous et à me contacter si vous êtes intéressés par mon profil. Je suis enthousiaste à l'idée de mettre en pratique mes compétences au sein d'une équipe dynamique et de contribuer au succès de projets web.
						</p> */}

						{/* <p>
							Je suis passionné en développement web. J'ai suivi la formation développeur web d'openClassrooms. J'ai des compétences en HTML, CSS, JavaScript, ainsi que React. Je dispose aussi de quelques notions de photoshop, d'illustrator et de dessin acquises lors de mes expériences passées. Je suis actuellement à la recherche de ma première opportunité en tant que développeur Front-End junior. N'hésitez pas à explorer mes réalisations ci-dessous et à me contacter si vous êtes intéressés par mon profil. Je suis enthousiaste à l'idée de mettre en pratique mes compétences au sein d'une équipe dynamique et de contribuer au succès de projets web.
						</p> */}
					</div>

				</div>
				<div className='badges'>

					<FindMe />
					<BestSkill />

				</div>
			</StyledInfos>

			<StyledPhoto>
				<img src={photo} alt="" />
			</StyledPhoto>
		</StyledAboutMe>
	);
}

