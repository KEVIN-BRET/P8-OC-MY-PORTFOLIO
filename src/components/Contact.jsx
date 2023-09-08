import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.div`
margin: 1rem 2rem;
border: 1px solid red;
background: rgb(234, 175, 175);
display: flex;
align-items: center;
justify-content: center;
height: 500px;
`

export default function Contact(props) {
	return (
		<StyledContact className='contact' id='contact'>
			SECTION 4 : CONTACT
		</StyledContact>
	);
}
