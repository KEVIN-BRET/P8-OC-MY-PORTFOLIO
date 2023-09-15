import React from 'react';
import styled from 'styled-components';

import SmallBadge from './SmallBadge';

import sassLogoColored from '../assets/images/logos/sass-color.png';
import reactLogoColored from '../assets/images/logos/react-color.png';
import cofeeCup from '../assets/images/logos/coffee-colored.svg';

const StyledBestSkills = styled.div`
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
		<StyledBestSkills>
			<p>Bests Skills</p>
			<div className="badgeContainer">
				<SmallBadge logo={sassLogoColored} />
				<SmallBadge logo={reactLogoColored} />
				<SmallBadge logo={cofeeCup} />
			</div>
		</StyledBestSkills>
	);
}
