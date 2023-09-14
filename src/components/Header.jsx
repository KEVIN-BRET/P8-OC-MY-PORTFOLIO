import { useState, useEffect, useContext } from 'react';
import profilePhoto from '../assets/images/3d-avatar.webp';
import ToggleThemeButton from './ToggleThemeButton';
import styled from 'styled-components';
import colors from '../style/colors';
import { ThemeContext } from '../utils/context/ThemeProvider';
import RoundButton from './RoundButton';

import burgerMenu from '../assets/images/burger-menu.png';


const StyledLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1rem 0;
	margin-right: 2rem;
	gap: 1rem;
	transition: 0.3s ease;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	& h3 {
		@media screen and (max-width: 1100px) {
				display: none;
			}
	}
	& .circle {
		position: relative;
		display: flex;
		border: 2px solid lightgray;
		width: 65px;
		min-width: 65px;
		height: 65px;
		border-radius: 50%;
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
	}
	&:hover {
		color: ${colors.primary};
	}
`

const StyledHeader = styled.div`
	background-color: ${({ $isDarkMode }) => $isDarkMode ? colors.backgroundDark : colors.backgroundLight};
	${'' /* border-bottom: 1px solid var(--color-lightgray); */}
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 2rem;
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	height: 100px;
	transition: 0.5s ease;
	
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
			@media screen and (min-width: 1000px) {
				display: none;
			}
		
`

const StyledNav = styled.div`
		display: none;
		align-items: center;
		margin: 0 1rem;
		@media screen and (min-width: 1000px) {
				display: flex;
			}
		
		& ul {
			display: flex;
			align-items: center;
			gap: 1rem;
			margin: 1rem;
			color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
			font-weight: 600;
			transition: 0.5s ease;
			&:hover {
				color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDarkNotHover : colors.bodyLightNotHover};

				
			}
			& li {
				cursor: pointer;
				&:hover {
					color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
					transition: 0.5s ease;
				}
			}
		}
		& .cv {
			cursor: pointer;
			display: flex;
			color: ${colors.primary};
			border-radius: 6px;
			padding: 10px;
			background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
			box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
			transition: 0.3s ease;
			font-weight: 500;

				&:hover {
				color: ${colors.white};
				background: ${colors.primary};
				
				background: ${colors.gradienPrimaryColor};
	}
				transform: translateY(-3px);
		}


`


const StyledBacToTop = styled.div`
	position: fixed;
    bottom: 50px;
    right: 50px;
	z-index: 200;
    ${'' /* cursor: pointer;
	font-size: 3rem;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
    
    width: 50px;
    height: 50px;
    line-height: 46px;
    border-radius: 50%;
    text-align: center;
	transition: 0.5s ease; */}
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
	// est-ce que la page est scrollée ?
	const [isScrolled, setIsScrolled] = useState(false);

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

			<StyledHeader $isDarkMode={darkMode} className={isScrolled ? 'header--scrolled' : ''}>
				<StyledLogo $isDarkMode={darkMode}>
					<div className="circle">
						<img src={profilePhoto} alt="logo" $isDarkMode={darkMode} />
						<h3 className='mobileTitle'>KB</h3>
					</div>
					<h3 className='desktopTitle'>Kevin BRET</h3>
				</StyledLogo>

				<ToggleThemeButton />

				<StyledBurgerMenu src={burgerMenu} alt="burgerMenu"/>


				<StyledNav $isDarkMode={darkMode}>
					<ul className='header__nav'>

						<li>
							<a href="#accueil" >
								Accueil
							</a>
						</li>
						<li>
							<a href="#skills" >
								Skills
							</a>
						</li>
						<li>
							<a href="#projects">
								Projets
							</a>
						</li>
						<li>
							<a href="#contact" >
								Contact
							</a>
						</li>
					</ul>
					<div className="cv">Télécharger mon CV</div>
				</StyledNav>

			</StyledHeader>

			<StyledBacToTop $isDarkMode={darkMode} className={isScrolled ? 'page--scrolled' : ''}>

				<a href="#accueil">
					<RoundButton className="symbol" symbol="↑" />
				</a>

			</StyledBacToTop>
		</>
	);
}
