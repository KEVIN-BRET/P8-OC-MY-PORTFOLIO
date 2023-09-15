import React from 'react';
import styled from 'styled-components';

import colors from '../style/colors';

const StyledButton = styled.div`
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
`;

export default function DownloadCVButton() {
  return <StyledButton>Télécharger mon CV</StyledButton>;
}

