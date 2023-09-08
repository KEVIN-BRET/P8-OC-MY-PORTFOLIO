import React from 'react';
import styled from 'styled-components';

const StyledSkills = styled.div`
	margin: 1rem 2rem;
	border: 1px solid green;
	background: rgb(219, 235, 194);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 500px;
`

function Skills(props) {
	return (
		<StyledSkills>
			SECTION 2 : MES SKILLS
		</StyledSkills>
	);
}

export default Skills;