import { useState, useEffect, useContext } from 'react';

import ToggleThemeButton from './ToggleThemeButton';
import RoundButton from './RoundButton';
import DownloadCVButton from './DownloadCVButton';
import Navigation from './Navigation';


import colors from '../style/colors';

import styled from 'styled-components';
import { ThemeContext } from '../utils/context/ThemeProvider';

import avatar from '../assets/images/avatar.webp';
import burgerMenu from '../assets/images/burger-menu.png';

import MobileMenu from './MobileMenu';

// imports pour utiliser les icônes fontawesome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
// import de toutes les icônes :
import { faBullhorn, faXmark } from '@fortawesome/free-solid-svg-icons'
// import de chaque icône utilisée :
fontawesome.library.add(faBullhorn, faXmark);


const StyledLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1rem 0;
	margin-right: 2rem;
	gap: 1rem;
	transition: 0.3s ease;
	${'' /* color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight}; */}
	color: ${colors.primary};
	& h3 {
		@media screen and (max-width: 1100px) {
				display: none;
			}
	}
	& .circle {
		position: relative;
		display: flex;
		border: 2px solid lightgray;
		width: 50px;
		min-width: 50px;
		height: 50px;
		border-radius: 50%;
		padding: 3px;
		object-fit: cover;	
		background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
		box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};

		& img {
			@media screen and (max-width: 1100px) {
				display: none;
			}
		}
			
		& .mobileTitle {
			position: absolute;
			left: calc(50% - 1rem);
			top: calc(50% - 1rem);
			display: none;
			@media screen and (max-width: 1100px) {
				display: flex;
			}
		}
		
	}
	& h3 {
	font-family: 'Permanent Marker', cursive;
	font-size: 1.5rem;
	line-height: 1.3;
	}
	&:hover {
		color: ${colors.primary};
	}
`

const StyledHeader = styled.header`
	position: fixed;
	width: 100%;
	left: 0;
	top: 0;
	z-index: 1000;
`

const StyledPopupBanner = styled.div`
	position: relative;
	background-color: ${colors.primary};
	color: ${colors.bodyDark};
	display: flex;
	align-items: center;
	z-index: 1000;
	& .bannerText {
        font-size: 1.1rem;
        font-style: italic;
		font-weight: 500;
		margin: 0.5rem 1rem;
		/* empêche le texte de passer à la ligne */
        white-space: nowrap; 
        max-width: calc(100% - 3rem); /* laisse un espace pour le bouton de fermeture */
        animation: marqueeDesktop 25s linear infinite;
		/* Animation accélérée pour les écrans mobiles */
        @media screen and (max-width: 1100px) {
            animation: marqueeTablet 20s linear infinite;
			
        }
        @media screen and (max-width: 768px) {
            animation: marqueeMobile 20s linear infinite;
			
        }
    }
    @keyframes marqueeDesktop {
        0%   { transform: translateX(100%); }
        100% { transform: translateX(-150%); }
    }
    @keyframes marqueeTablet {
        0%   { transform: translateX(100%); }
        100% { transform: translateX(-300%); }
    }
    @keyframes marqueeMobile {
        0%   { transform: translateX(100%); }
        100% { transform: translateX(-600%); }
    }
	& .closeWrapper {
		position: absolute;
		height: 100%;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 1rem;
		background: ${colors.primary};
		background: linear-gradient(90deg, rgba(35,158,186,0) 0%, ${colors.primary} 30%);
		& .closeBanner {
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			padding: 0.5rem;
			width: 2rem;
			height: 2rem;
			font-size: 1.2rem;
			color: ${colors.bodyDark};
			z-index: 1000;
			&:hover {
				transform: scale(1.2);
				transition: all 0.3s;
			}
		}
	}
	& .megaphoneWrapper {
		${'' /* border: 1px solid red; */}

		position: absolute;
		height: 100%;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 1rem;
		background: ${colors.primary};
		background: linear-gradient(270deg, rgba(35,158,186,0) 0%, ${colors.primary} 30%);
		& .megaphone {
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			padding: 0.5rem;
			width: 2rem;
			height: 2rem;
			font-size: 1.2rem;
			color: ${colors.bodyDark};
			z-index: 2000;
			&:hover {
				transform: scale(1.2);
				transition: all 0.3s;
			}
		}
	}
`

const StyledMenu = styled.div`
	${'' /* border: 1px solid pink; */}
	
	${'' /* position: fixed; */}

	background-color: ${({ $isDarkMode }) => $isDarkMode ? colors.backgroundDark : colors.backgroundLight};
	${'' /* border-bottom: 1px solid var(--color-lightgray); */}
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 2rem;
	width: 100%;
	${'' /* left: 0; */}
	${'' /* top: 0; */}
	z-index: 100;
	height: 100px;
	transition: 0.5s ease;
	& .nav-cv {
		align-items: center;
		display: none;
		@media screen and (min-width: 1000px) {
				display: flex;
			}
	}
	
	&.header--scrolled {
        height: 60px;
        box-shadow: 10px 10px 19px rgba(0, 0, 0, 0.1);
		opacity: 0.9;
		
        ${StyledLogo} {
            transform: scale(0.8);
        }
    }
`

const StyledBurgerMenu = styled.img`
	display: flex;
	align-items: center;
	height: 50px;
	width: 50px;
	cursor: pointer;
	${'' /* z-index: 2000; */}
	@media screen and (min-width: 1000px) {
		display: none;
	}	
`

const StyledBacToTop = styled.div`
	position: fixed;
    bottom: 50px;
    right: 50px;
	z-index: 200;
	line-height: 46px;
	border-radius: 50%;
	visibility: hidden;
	opacity: 0;
	&.page--scrolled {
    opacity: 1;
    visibility: visible;
	@media screen and (max-width: 900px) {
		bottom: 20px;
    	right: 20px;
	}
}
`

export default function Header() {
	const { darkMode } = useContext(ThemeContext);
	// est-ce que le menu est ouvert ?
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// est-ce que la page est scrollée ?
	const [isScrolled, setIsScrolled] = useState(false);
	// est-ce que la Banner est visible ?
	const [isPBannerVisible, setIsBannerVisible] = useState(true);

	// fonction pour fermer la Banner
	const closeBanner = () => {
		setIsBannerVisible(false);
	};

	// fonction pour verifier si la page est scrollée
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
				// console.log('scroll');
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<StyledHeader >

				{isPBannerVisible && (
					<StyledPopupBanner>
						<p className='bannerText'>
							Je suis actuellement à la recherche de ma première opportunité en tant que développeur Front-End junior. N'hésitez pas à explorer mes réalisations ci-dessous et à me contacter si vous êtes intéressé par mon profil <span>😉</span>
						</p>
						<div className="megaphoneWrapper">
							<div className="megaphone">
								<FontAwesomeIcon icon={faBullhorn} />
							</div>
						</div>
						<div className="closeWrapper">
							<div className="closeBanner" onClick={closeBanner}>
								<FontAwesomeIcon icon={faXmark} />
							</div>
						</div>
					</StyledPopupBanner>)}

				<StyledMenu $isDarkMode={darkMode} className={isScrolled ? 'header--scrolled' : ''} >
					<StyledLogo $isDarkMode={darkMode}>
						<div className="circle">
							<img src={avatar} alt="logo" />
							<h3 className='mobileTitle'>KB</h3>
						</div>
						<h3 className='desktopTitle'>Kevin BRET</h3>
					</StyledLogo>

					<ToggleThemeButton />

					{/* <p>start-
					<FontAwesomeIcon icon="check-square" />
					<FontAwesomeIcon icon="coffee" />
					<FontAwesomeIcon icon="bars" />
					-end</p> */}

					<StyledBurgerMenu
						src={burgerMenu}
						alt="burgerMenu"
						onClick={() => {
							setIsMenuOpen(true)
							// console.log("Menu opened ...");
						}}
					// onClose={() => setIsMenuOpen(false)}
					/>

					<div className='nav-cv'>
						<Navigation isMobile={false} />
						<DownloadCVButton $isDarkMode={darkMode} />
					</div>
				</StyledMenu>

			</StyledHeader>

			<MobileMenu
				$isDarkMode={darkMode}
				isMenuOpen={isMenuOpen}
				onClose={() => setIsMenuOpen(false)}
			/>

			<StyledBacToTop $isDarkMode={darkMode} className={isScrolled ? 'page--scrolled' : ''}>
				<a href="#accueil">
					<RoundButton className="symbol" symbol="↑" />
				</a>
			</StyledBacToTop>
		</>
	);
}
