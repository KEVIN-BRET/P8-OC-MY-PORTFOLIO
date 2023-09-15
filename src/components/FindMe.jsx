import React from 'react';
import styled from 'styled-components';

import SmallBadge from './SmallBadge';

import linkedin from '../assets/images/logos/linkedin-light.png';
import github from '../assets/images/logos/github-light.png';
import email from '../assets/images/logos/email-light.png';

import linkedinDark from '../assets/images/logos/linkedin-dark.png';
import githubDark from '../assets/images/logos/github-dark.png';
import emailDark from '../assets/images/logos/email-dark.png';

const LINKEDIN_URL = 'https://www.linkedin.com/in/kevin-bret-534a73180/';
const GITHUB_URL = 'https://github.com/KEVIN-BRET/';

const StyledFindMe = styled.div`
		display: flex;
		flex-direction: column;
		margin: 0rem 0;
		& p {
			margin-bottom: 1rem;
		}
	& .badgeContainer {
			display: flex;
			gap: 1rem;
		}
`

export default function FindMe(props) {
	return (
		<StyledFindMe>
			<p>Ou me trouver ?</p>
			<div className="badgeContainer">
				<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
					<SmallBadge logo={linkedin} logoDark={linkedinDark} hoverable />
				</a>
				<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
					<SmallBadge logo={github} logoDark={githubDark} hoverable />
				</a>
				<a href="#contact" >
					<SmallBadge logo={email} logoDark={emailDark} hoverable />
				</a>
			</div>
		</StyledFindMe>
	);
}
