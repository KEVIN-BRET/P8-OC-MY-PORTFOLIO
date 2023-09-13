import { useState, useEffect, useContext } from 'react';
import profilePhoto from '../assets/images/3d-avatar.webp';
import ToggleThemeButton from './ToggleThemeButton';
import styled from 'styled-components';
import colors from '../style/colors';
import { ThemeContext } from '../utils/context/ThemeProvider';
import RoundButton from './RoundButton';


const StyledLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1rem 0;
	gap: 1rem;
	transition: 0.3s ease;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	
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
		display: flex;
		align-items: center;
		margin: 0 1rem;
		
		& ul {
			display: flex;
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
				transform: translateY(-3px);
	}
		}


`
const StyledProfilePhoto = styled.img`
	border: 2px solid lightgray;
	display: flex;
	width: 65px;
	height: 65px;
	border-radius: 50%;
	object-fit: cover;	
	background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
	box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
`

const StyledBacToTop = styled.div`
	position: fixed;
    bottom: 50px;
    right: 50px;
    ${'' /* cursor: pointer;
	font-size: 3rem;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
    z-index: 999;
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
}
`

function handleNavigation(event, targetId) {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}


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
					<StyledProfilePhoto src={profilePhoto} alt="logo" $isDarkMode={darkMode}/>
					<h3>Kevin BRET</h3>
				</StyledLogo>

				<ToggleThemeButton />

				<StyledNav $isDarkMode={darkMode}>
                    <ul className='header__nav'>
                        <li>
                            <a href="#accueil" onClick={(e) => handleNavigation(e, "accueil")}>
                                Accueil
                            </a>
                        </li>
                        <li>
                            <a href="#skills" onClick={(e) => handleNavigation(e, "skills")}>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={(e) => handleNavigation(e, "projects")}>
                                Projets
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={(e) => handleNavigation(e, "contact")}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="cv">Télécharger mon CV</div>
                </StyledNav>

			</StyledHeader>

			<StyledBacToTop $isDarkMode={darkMode} className={isScrolled ? 'page--scrolled' : ''}>
				<RoundButton className="symbol" symbol="↑"/>
			</StyledBacToTop>
		</>
	);
}
