import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';
import styled from 'styled-components';
import colors from '../style/colors';


const StyledRoundButton = styled.div`
    cursor: pointer;
	font-size: 3rem;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
    z-index: 999;
    width: 50px;
    height: 50px;
    text-align: center;
	transition: 0.2s ease;
    border-radius: 50%;
	background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
	&:hover {
        color: ${colors.primary};  // Choisissez la couleur que vous souhaitez pour l'effet de survol.
    }
	
`

export default function RoundButton({ symbol }) {
	const { darkMode } = useContext(ThemeContext);

	// est-ce que la page est scrollée ?
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
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
		<StyledRoundButton $isDarkMode={darkMode} className={isScrolled ? 'page--scrolled' : ''} >
				{symbol}
		</StyledRoundButton>
	);
}
