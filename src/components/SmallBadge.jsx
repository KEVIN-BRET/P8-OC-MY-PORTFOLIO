import React from 'react';
import styled from 'styled-components';
// import sassLogo from '../assets/images/svg/sass-colored.svg';

import colors from '../style/colors';
import { useContext } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';


const StyledSmallBadge = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 6px;
	padding: 10px;

	background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
	box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
	transition: 0.5s ease;
	
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};

`


const StyledImg = styled.img`
    width: 100%;
`;

export default function SmallBadge({logo}) {

	const { darkMode } = useContext(ThemeContext);

	return (
		<StyledSmallBadge $isDarkMode={darkMode}>

			<StyledImg src={logo} alt='' />

		</StyledSmallBadge>
	);
}
