import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import colors from '../style/colors';
import { ThemeContext } from '../utils/context/ThemeProvider';

const StyledImg = styled.img`
    width: 100%;
    z-index: 10;
    transition: 0.5s ease;
`;

const StyledSmallBadge = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 6px;
    padding: 10px;
    cursor: pointer;
    background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
    transition: 0.5s ease;
    ${({ $hoverable }) => $hoverable && `
        &:hover {
            color: ${colors.white};
            background: ${colors.primary};
            transform: translateY(-3px);
        }
    `}
`;

export default function SmallBadge({ logo, logoDark, hoverable = false }) {
    const { darkMode } = useContext(ThemeContext);
    const [isHovered, setIsHovered] = useState(false);

    // Déterminer l'image à afficher
    let currentLogo;
    if (isHovered && hoverable) {
        currentLogo = logoDark;
    } else {
        currentLogo = darkMode && logoDark ? logoDark : logo;
    }

    return (
        <StyledSmallBadge 
            $isDarkMode={darkMode} // si le thème est sombre
            $hoverable={hoverable} // si le composant est hoverable
            onMouseEnter={() => setIsHovered(true)} // quand la souris entre dans le composant
            onMouseLeave={() => setIsHovered(false)} // quand la souris sort du composant
        >
            <StyledImg src={currentLogo} alt='' />
        </StyledSmallBadge>
    );
}
