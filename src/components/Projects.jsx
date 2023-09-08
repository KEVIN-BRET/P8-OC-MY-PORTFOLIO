import React from 'react';
import styled from 'styled-components';

const StyledProjects = styled.div`
	margin: 1rem 2rem;
	border: 1px solid rgb(230, 209, 28);
	background: rgb(241, 233, 160);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 500px;
`

export default function Projects(props) {
	return (
		<StyledProjects>
			SECTION 3 : MES PROJETS
		</StyledProjects>
	);
}
