import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';
// import RoundButton from './RoundButton'; 

import colors from '../style/colors';
// import { ThemeContext } from '../utils/context/ThemeProvider';

// import projectsData from '../assets/datas/projectsData.json';

const StyledProjectCard = styled.div`
	position: relative;
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
		position: relative;
		border-radius: 10px;
		& img {
			z-index: 0;
			height: 200px;
			width: 100%;
			object-fit: cover;
			transition: 0.6s ease;
			${'' /* display: none; */}
		}
		& span {
			z-index: 10;
			position: absolute;
			color: ${colors.bodyDark};
			background: ${colors.gradienPrimaryColor};
			box-shadow: 0 0 10px rgba(0,0,0,0.5);
			padding: 0.4rem 0.6rem;
			font-style: italic;
			transition: 0.3s ease;
		}
		& .name {
			left: 0;
			top: 0;
			border-radius: 10px 0 10px 0;
			transform: translateY(-130%);

		}
		& .more {
			bottom: 0;
			right: 0;
			border-radius: 10px 0 10px 0;
			transform: translateY(130%);
		}
	}
	&:hover {
		& .name {
					transform: translateY(0%);
				}
				& .more {
					transform: translateY(0%);

				}
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
	justify-content: space-around;
	margin-top: 0.5rem;
	width: 100%;
	gap: 1rem;
	font-size: 0.9rem;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	transition: 0.3s ease;
	&>div {
		${'' /* text-decoration: underline; */}
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


export default function ProjectCard({ id, title, cover, skills, name }) {

	const { darkMode } = useContext(ThemeContext);

	return (
		<StyledProjectCard $isDarkMode={darkMode}>

			<div className="thumbnail">
				<span className="name">{name}</span>
				<img className='card__picture' src={cover} alt="" />
				<span className="more">+ d'infos</span>
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
			</StyledNav>
		</StyledProjectCard>
	);
};