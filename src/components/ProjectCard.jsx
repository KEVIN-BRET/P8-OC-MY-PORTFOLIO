import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';

import colors from '../style/colors';
// import { ThemeContext } from '../utils/context/ThemeProvider';

// import projectsData from '../assets/datas/projectsData.json';

const StyledProjectCard = styled.div`
    width: 350px;
    height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    border-radius: 6px;
    padding: 1rem;
    cursor: pointer;
    background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
    transition: 0.3s ease;
        &:hover {
            ${'' /* color: ${colors.bodyDark}; */}
            ${'' /* background: ${colors.primary}; */}
            transform: translateY(-3px);
			& img {
				transform: scale(1.1);
			}
			& h2 {
				color: ${colors.white};
				transition: 0.3s ease;
			}
        }
	& h2,h3 {
		color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
		transition: 0.3s ease;
		&:hover {
			color: ${colors.primary};
			& .arrow {
				visibility: visible;
			}
		}
	}
	& .thumbnail {
		height: 200px;
		width: 100%;
		overflow: hidden;
	}
	& img {
		height: 200px;
		width: 100%;
		object-fit: cover;
		transition: 0.6s ease;
	}
	& .arrow {
		visibility: hidden;
	}
	
`;

const StyledSkillsContainer = styled.div`
	display: flex;
	width: 100%;
	margin: 1rem 0 0.5rem;
	justify-content: flex-start;
	gap: 0.5rem;
	color: ${colors.primary};

`

const StyledSkill = styled.div`
	display: flex;
`

const StyledNav = styled.div`
	display: flex;
	margin-top: 0.5rem;
	width: 100%;
	gap: 1rem;
	font-size: 0.9rem;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	transition: 0.3s ease;
	&>div {
		text-decoration: underline;
		font-style: italic;
		transition: 0.3s ease;
		&:hover {
			text-decoration: none;
			color: ${colors.primary};
			transition: 0.3s ease;
			& .arrow {
				visibility: visible;
			}
		}
	}
	
`

export default function ProjectCard({ id, title, cover, skills }) {

	const { darkMode } = useContext(ThemeContext);

	return (
		<StyledProjectCard $isDarkMode={darkMode}>

			<div className="thumbnail">
				<img className='card__picture' src={cover} alt="" />
			</div>

			<StyledSkillsContainer>
				{skills.map((skill, index) => (
					<StyledSkill key={`${skill}-${index}`}>
						{skill}
					</StyledSkill>
				))}
			</StyledSkillsContainer>

			<h3>{title} <span className="arrow">➚</span></h3>

			<StyledNav $isDarkMode={darkMode} >
				<div>Live Demo<span className="arrow"> ➚</span></div>
				<div>Repo GitHub<span className="arrow"> ➚</span></div>
				<div> + </div>
			</StyledNav>
		</StyledProjectCard>
	);
};