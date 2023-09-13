import React from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../utils/context/ThemeProvider';

const StyledContact = styled.div`
margin: 1rem 2rem;
border: 1px solid red;
background: rgb(234, 175, 175);
display: flex;
align-items: center;
justify-content: center;
height: 500px;
`

export default function Contact() {
	const { darkMode } = useContext(ThemeContext);

	return (
		<StyledContact className='contact' id='contact' $isDarmode={darkMode} >
			SECTION 4 : CONTACT
		</StyledContact>
	);
}
