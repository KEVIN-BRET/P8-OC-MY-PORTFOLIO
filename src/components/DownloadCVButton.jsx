import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';

import colors from '../style/colors';

const StyledButton = styled.div`
  	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${colors.primary};
	border-radius: 6px;
	margin: 0 1rem;
	padding: 10px;
	height: 40px;
	background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
	box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
	transition: 0.3s ease;
	font-weight: 500;
	

		&:hover {
		color: ${colors.white};
		background: ${colors.gradienPrimaryColor};
		transform: translateY(-3px);
		}
`;

export default function DownloadCVButton() {
	const { darkMode } = useContext(ThemeContext);

  return <StyledButton $isDarkMode={darkMode} >Télécharger mon CV</StyledButton>;
}

