import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';
import styled from 'styled-components';
import colors from '../style/colors';


const StyledRoundButton = styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;
    cursor: pointer;
	font-size: 3rem;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
    z-index: 999;
    width: 50px;
    height: 50px;
    line-height: 46px;
    border-radius: 50%;
    background-color: #212428;
    text-align: center;
    z-index: 1999 !important;
    box-shadow: var(--shadow-1);
	transition: 0.5s ease;
	visibility: hidden;
	opacity: 0;
	background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
	&.page--scrolled {
		opacity: 1;
		visibility: visible;
		&:hover {
			transition: 0.2s ease;
			color: ${colors.primary};
		}
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
