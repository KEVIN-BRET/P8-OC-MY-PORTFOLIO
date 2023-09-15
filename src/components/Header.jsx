import { useState, useEffect, useContext } from 'react';
import ToggleThemeButton from './ToggleThemeButton';
import styled from 'styled-components';
import colors from '../style/colors';
import { ThemeContext } from '../utils/context/ThemeProvider';
import RoundButton from './RoundButton';

import avatar from '../assets/images/avatar.webp';
import burgerMenu from '../assets/images/burger-menu.png';

import DownloadCVButton from './DownloadCVButton';


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


const StyledNav = styled.div`
		display: none;
		align-items: center;
		margin: 0 1rem;
		@media screen and (min-width: 1000px) {
				display: flex;
			}
		${props => props.inMobileNav && `
			& .circle img {
				@media screen and (max-width: 1100px) {
					display: flex; // Ou tout autre style que vous voulez appliquer
				}
			}
			& h3 {
				@media screen and (max-width: 1100px) {
					display: flex; // Ou tout autre style que vous voulez appliquer
				}
			}
		`}
		
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

const StyledNavMobile = styled.div`

${'' /* ------------------------------------------------------------------------------- */}
	display: none;
${'' /* ------------------------------------------------------------------------------- */}
	
	z-index: 3000;
	position: fixed;
	width: 100%;
	height: 100vw;
	background-color: rgba(0, 0, 0, 0.8);
	transition: 0.5s ease;
	& .menu {
		padding: 0.5rem 1.5rem;
		width: 400px;
		height: 100%;
		background-color: ${({ $isDarkMode }) => $isDarkMode ? colors.backgroundDark : colors.backgroundLight};
		display: flex;
		flex-direction: column;
		color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
		& .mobileHeader {
			${StyledLogo} {
				& .circle img {
					@media screen and (max-width: 1100px) {
						display: block; // Ou tout autre style que vous voulez appliquer
					}
				}
			& h3 {
				@media screen and (max-width: 1100px) {
					display: block; // Ou tout autre style que vous voulez appliquer
				}
			}
	}
			display: flex;
			align-items: center;
			justify-content: space-between;
			${'' /* margin: 0.5rem 1.5rem; */}
			& h3 {
				color: ${colors.primary};
			}
		}
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
						<img src={avatar} alt="logo" $isDarkMode={darkMode} />
						<h3 className='mobileTitle'>KB</h3>
					</div>
					<h3 className='desktopTitle'>Kevin BRET</h3>
				</StyledLogo>

				<ToggleThemeButton />

				<StyledBurgerMenu src={burgerMenu} alt="burgerMenu" />

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
				</StyledNav>
				<DownloadCVButton />

			</StyledHeader>

			<StyledNavMobile $isDarkMode={darkMode}>
				<div className="menu">
					<div className='mobileHeader'>
						<StyledLogo $isDarkMode={darkMode} inMobileNav>
							<div className="circle">
								<img src={avatar} alt="logo" $isDarkMode={darkMode} />
							</div>
							<h3 className='desktopTitle'>Kevin BRET</h3>
						</StyledLogo>


						<RoundButton className="symbol" symbol="×" />
					</div>


					<h3 className='desktopTitle'>Kevin BRET</h3>
					<h2>Menu test !</h2>
					<h2>Menu test !</h2>
					<h2>Menu test !</h2>
					<h2>Menu test !</h2>
					<h2>Menu test !</h2>
				</div>
			</StyledNavMobile>

			<StyledBacToTop $isDarkMode={darkMode} className={isScrolled ? 'page--scrolled' : ''}>

				<a href="#accueil">
					<RoundButton className="symbol" symbol="↑" />
				</a>

			</StyledBacToTop>
		</>
	);
}
