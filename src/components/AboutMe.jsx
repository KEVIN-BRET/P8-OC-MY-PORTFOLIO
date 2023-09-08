import React from 'react';
import styled from 'styled-components';

const StyledAboutMe = styled.div`
padding-top: 120px;
margin: Auto 2rem;
border: 1px solid blue;
background: lightblue;
display: flex;
align-items: center;
justify-content: center;
height: 500px;
width: 600px;
`

export default function AboutMe(props) {
	return (
		<StyledAboutMe>
			SECTION 1 : ABOUT ME
		</StyledAboutMe>
	);
}

