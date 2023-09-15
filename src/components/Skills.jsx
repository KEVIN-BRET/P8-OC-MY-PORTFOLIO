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
import RoundButton from './RoundButton';

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
	align-items: flex-start;
	justify-content: center;
	gap: 2rem;
`;

const StyledCard = styled.div`
	position: relative;
    width: 350px;
    height: 130px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
    border-radius: 6px;
    padding: 1.5rem 1rem;
    cursor: pointer;
    background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
    transition: all 0.3s ease;
	&.active {
		height: auto;
		background: ${colors.primary};
	}
    &:hover {
        ${'' /* color: ${colors.bodyDark}; */}
        background: ${colors.gradienPrimaryColor};
        transform: translateY(-3px);
		& h3 {
			${'' /* color: ${colors.white}; */}
			transition: 0.3s ease;
		}
    }
	& h2,h3 {
		color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	}
	& .moreContentBtn {
		position: absolute;
		bottom: -1.5rem;
		scale: 0.6;
		z-index: 10;
	}
	& .content {
		visibility: hidden;
        margin-top: 1rem;
        margin-bottom: 0.3rem;
        padding: 1rem;
        width: 100%;
        border-radius: 6px;
        background-color: ${colors.backgroundLight};
        color: ${colors.bodyLight};
        transform: scaleY(0);
        transform-origin: top;  // Ce paramètre indique que le contenu s'étend à partir du haut
        transition: transform 0.3s ease;
        box-shadow: ${colors.innerShadowDark};

        &.active {
			visibility: visible;
            transform: scaleY(1);
        }
        & ul li {
            margin-left: 1rem;
			margin-bottom: 0.4rem;
			font-size: 0.9rem;
            font-style: italic; 
            list-style: inherit;
            &:hover {
                color: ${colors.primary};
            }
        }
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

	// Initialiser le state avec un objet
	const [activeCards, setActiveCards] = useState({
		frontend: false,
		jsReact: false,
		backendJs: false,
		seoDebug: false,
		learning: false,
		softSkils: false
	});

	// Prend en argument l'identifiant de la carte
	const handleToggle = (cardId) => {
		setActiveCards(prevState => ({
			...prevState,
			[cardId]: !prevState[cardId]
		}));
	};



	return (
		<StyledSkills id='skills' $isDarkMode={darkMode}>
			<h1>Mes compétences</h1>

			<StyledCardsContainer>
			
				<StyledCard className={`card ${activeCards.frontend && 'active'}`} $isDarkMode={darkMode}>
					<StyledLogosContainer className='logos'>
						<img src={darkMode ? htmlLogoDark : htmlLogoLight} alt="HTML" />
						<img src={darkMode ? cssLogoDark : cssLogoLight} alt="CSS" />
						<img src={darkMode ? sassLogoDark : sassLogoLight} alt="CSS" />
					</StyledLogosContainer>
					<h3>Intégration Front-end</h3>
					<div className="moreContentBtn" onClick={() => handleToggle('frontend')}>
						<RoundButton symbol={activeCards.frontend ? "-" : "+"} />
					</div>
					<div className={`content ${activeCards.frontend && 'active'}`}>
						<ul>
							<li>Intégrer du contenu conformément à une maquette,</li>
							<li>Implémenter une interface responsive,</li>
							<li>Utilisation des fonctionnalités Sass</li>
						</ul>
					</div>
				</StyledCard>

				<StyledCard className={`card ${activeCards.jsReact && 'active'}`} $isDarkMode={darkMode}>
					<StyledLogosContainer className='logos'>
						<img src={darkMode ? jsLogoDark : jsLogoLight} alt="JavaScript" />
						<img src={darkMode ? reactLogoDark : reactLogoLight} alt="React" />
					</StyledLogosContainer>
					<h3>JavaScript React Js</h3>
					<div className="moreContentBtn" onClick={() => handleToggle('jsReact')}>
						<RoundButton symbol={activeCards.jsReact ? "-" : "+"} />
					</div>
					<div className={`content ${activeCards.jsReact && 'active'}`}>
						<ul>
							<li>Manipuler les éléments du DOM,</li>
							<li>Récupérer des données via des formulaires,</li>
							<li>Gérer les évènements utilisateur,</li>
							<li>Interagir avec des API externe,</li>
							<li>Manipuler des données au format JSON</li>
						</ul>
					</div>
				</StyledCard>

				<StyledCard className={`card ${activeCards.backendJs && 'active'}`} $isDarkMode={darkMode}>
					<StyledLogosContainer className='logos'>
						<img src={darkMode ? nodeLogoDark : nodeLogoLight} alt="JavaScript" />
						<img src={darkMode ? expressLogoDark : expressLogoLight} alt="React" />
						<img src={darkMode ? mongoLogoDark : mongoLogoLight} alt="React" />
					</StyledLogosContainer>
					<h3>Back-end JavaScript</h3>
					<div className="moreContentBtn" onClick={() => handleToggle('backendJs')}>
						<RoundButton symbol={activeCards.backendJs ? "-" : "+"} />
					</div>
					<div className={`content ${activeCards.backendJs && 'active'}`}>
						<ul>
							<li>Node.Js / Express.Js / MongoDB :</li>
							<li>Implémenter, un modèle logique de donner,</li>
							<li>Mettre en œuvre des opérations CRUD,</li>
							<li>Stocker des données de manière sécurisée,</li>
							<li>Intégration d'un système d'authentification par JWT,</li>
							<li>Utilisation des bonnes pratiques du Green Code</li>
						</ul>
					</div>
				</StyledCard>

				<StyledCard className={`card ${activeCards.seoDebug && 'active'}`} $isDarkMode={darkMode}>
					<StyledLogosContainer className='logos'>
						<img src={darkMode ? seoLogoDark : seoLogoLight} alt="JavaScript" />
						<img src={darkMode ? debugLogoDark : debugLogoLight} alt="React" />
					</StyledLogosContainer>
					<h3>SEO Optimisation Debug</h3>
					<div className="moreContentBtn" onClick={() => handleToggle('seoDebug')}>
						<RoundButton symbol={activeCards.seoDebug ? "-" : "+"} />
					</div>
					<div className={`content ${activeCards.seoDebug && 'active'}`}>
						<ul>
							<li>Optimiser les performances d’un site web,</li>
							<li>Débugger un site web grâce aux Chrome DevTools,</li>
							<li>Optimisation du référencement naturel d'un site web,</li>
							<li>Rédiger un cahier de recette pour tester un site</li>
						</ul>
					</div>
				</StyledCard>

				<StyledCard className={`card ${activeCards.learning && 'active'}`} $isDarkMode={darkMode}>
					<StyledLogosContainer className='logos'>
						<img src={darkMode ? userLogoDark : userLogoLight} alt="JavaScript" />
						<img src={darkMode ? bookLogoDark : bookLogoLight} alt="React" />
					</StyledLogosContainer>
					<h3>Compétences à développer</h3>
					<div className="moreContentBtn" onClick={() => handleToggle('learning')}>
						<RoundButton symbol={activeCards.learning ? "-" : "+"} />
					</div>
					<div className={`content ${activeCards.learning && 'active'}`}>
						<ul>
							<li>Les frameworks CSS Bootstrap & Tailwin </li>
							<li>Le framework Next.Js</li>
							<li>Les différents tests en JavaScript</li>
							<li>TypeScript</li>
							<li>Wordpress</li>
						</ul>
					</div>
				</StyledCard>

				<StyledCard className={`card ${activeCards.softSkils && 'active'}`} $isDarkMode={darkMode}>
					<StyledLogosContainer className='logos'>
						<img src={darkMode ? userLogoDark : userLogoLight} alt="JavaScript" />
						<img src={darkMode ? bookLogoDark : bookLogoLight} alt="React" />
					</StyledLogosContainer>
					<h3>Mes Soft Skills ..</h3>
					<div className="moreContentBtn" onClick={() => handleToggle('softSkils')}>
						<RoundButton symbol={activeCards.softSkils ? "-" : "+"} />
					</div>
					<div className={`content ${activeCards.softSkils && 'active'}`}>
						<ul>
							{/* <li>Je suis HPI ! (ahah non je rigole XD),</li> */}
							<li>Je suis sociable, j'aime communiquer,</li>
							<li>Je suis curieux et j'aime apprendre en permanence,</li>
							<li>J'ai une plutôt bonne capacité à m'adapter,</li>
							<li>Je sais être autonome,</li>
							<li>J'aime la musique, le cinéma, cuisiner ... et plein d'autres choses :)</li>
						</ul>
					</div>
				</StyledCard>

			</StyledCardsContainer>

			{/* <h3 className='parcour'>Mon parcour & expérience</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit laboriosam voluptatibus ut nemo qui voluptates placeat eveniet impedit dignissimos earum aut officia voluptas quae commodi quidem cum pariatur odit, aspernatur, praesentium, iure esse inventore nobis. Dolore quaerat facilis iste amet. Porro perferendis temporibus vel ipsum molestiae reiciendis neque exercitationem?</p> */}

		</StyledSkills>
	);
}

export default Skills;
