import { useContext } from 'react';
import React from 'react';
import styled from 'styled-components';

import colors from '../style/colors';

import { ThemeContext } from '../utils/context/ThemeProvider';


const StyledNav = styled.div`
		display: flex;
		align-items: center;
		margin: 0 1rem;
		
		& ul {
			display: flex;
			flex-direction: ${props => props.$isMobile ? 'column' : 'row'};
			align-items: ${props => props.$isMobile ? 'flex-start' : 'center'};
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


export default function Navigation({ isMobile = false  }) {

const { darkMode } = useContext(ThemeContext);

	return (
		<StyledNav $isDarkMode={darkMode} $isMobile={isMobile} >
			<ul className='header__nav'>
				<li>
					<a href="#accueil">
						Accueil
					</a>
				</li>
				<li>
					<a href="#skills">
						Skills
					</a>
				</li>
				<li>
					<a href="#projects">
						Projets
					</a>
				</li>
				<li>
					<a href="#contact">
						Contact
					</a>
				</li>
			</ul>
		</StyledNav>
	);
}
