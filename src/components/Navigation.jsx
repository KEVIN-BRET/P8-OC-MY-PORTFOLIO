import React from 'react';
import styled from 'styled-components';

import colors from '../style/colors';

// Si vous avez défini StyledNav ailleurs, assurez-vous de l'importer ici. Sinon, définissez-le dans ce fichier.
// import { StyledNav } from './path-to-styled-nav';

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


export default function Navigation({ darkMode }) {
	return (
		<StyledNav $isDarkMode={darkMode}>
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
