import React, { useContext } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';

import styled from 'styled-components';
import colors from '../style/colors';

import ProjectCard from './ProjectCard';

import projectsData from '../assets/datas/projectsData.json';

const StyledProjects = styled.div`
	margin: 2rem auto;
	padding-top: 120px;
	width: 90%;
	max-width: 1440px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	& h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
		color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	}
`

const StyledProjectGallery = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`

export default function Projects() {
	
	const { darkMode } = useContext(ThemeContext);

	return (
		<StyledProjects id='projects' $isDarkMode={darkMode}>
			<h1>Mes projets</h1>
			<StyledProjectGallery>
				{projectsData.map(({ 
					id,
					name, 
					cover, 
					pictures, 
					title, 
					skills, 
					origin, 
					scenario,
					constraints,
					links,
					demo, 
					repo }) =>
				(
					<ProjectCard key={id}
						id={id}
						name={name}
						cover={cover}
						pictures={pictures}
						title={title}
						skills={skills}
						origin={origin}
						scenario={scenario}
						constraints={constraints}
						links={links}
						demo={demo}
						repo={repo}
					/>
				)
				)}


			</StyledProjectGallery>
		</StyledProjects>
	);
}
