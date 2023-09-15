import React, { useContext } from 'react';
import styled from 'styled-components';
import colors from '../style/colors';
import avatar from '../assets/images/avatar.webp';
import RoundButton from './RoundButton';
import Navigation from './Navigation';
import FindMe from './FindMe';
import DownloadCVButton from './DownloadCVButton';
import { ThemeContext } from '../utils/context/ThemeProvider';
import { useState, useEffect } from 'react';


const StyledLogo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1rem 0;
	margin-right: 2rem;
	gap: 1rem;
	transition: 0.3s ease;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	& h3 {
		@media screen and (max-width: 1100px) {
				display: none;
			}
	}
	& .circle {
		position: relative;
		display: flex;
		border: 2px solid lightgray;
		width: 50px;
		min-width: 50px;
		height: 50px;
		border-radius: 50%;
		padding: 3px;
		object-fit: cover;	
		background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
		box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};

		& img {
			@media screen and (max-width: 1100px) {
				display: none;
			}
		}
			
		& .mobileTitle {
			position: absolute;
			left: calc(50% - 1rem);
			top: calc(50% - 1rem);
			display: none;
			@media screen and (max-width: 1100px) {
				display: flex;
			}
		}
		
	}
	& h3 {
	font-family: 'Permanent Marker', cursive;
	font-size: 1.5rem;
	line-height: 1.3;
	}
	&:hover {
		color: ${colors.primary};
	}
`

const StyledNavMobile = styled.div`

	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};	
	
	z-index: 3000;
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	transition: 0.5s ease;
	& .menu {
		
		padding: 0.5rem 1.5rem;
		width: 350px;
		height: 100%;
		background-color: ${({ $isDarkMode }) => $isDarkMode ? colors.backgroundDark : colors.backgroundLight};
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
		& .mobileHeader {
			${StyledLogo} {
				& .circle img {
					@media screen and (max-width: 1100px) {
						display: block; // Ou tout autre style que vous voulez appliquer
					}
				}
			& h3 {
				@media screen and (max-width: 1100px) {
					display: block; // Ou tout autre style que vous voulez appliquer
				}
			}
	}
			display: flex;
			align-items: center;
			justify-content: space-between;
			${'' /* margin: 0.5rem 1.5rem; */}
			& h3 {
				color: ${colors.primary};
			}
		}
		& .separation {
			height: 1px;
			width: 100%;
			margin: 0.5rem 0;
			background-color: lightgray;
		}
		& .links {
			transform-origin: top;
			transform: scale(80%);
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 1rem;
		}
	}
`



export default function MobileMenu({ isOpen, onClose }) {
	const { darkMode } = useContext(ThemeContext);

	return (
		<StyledNavMobile $isDarkMode={darkMode} isOpen={isOpen}>
			<div className="menu">
				<div className='mobileHeader'>
					<StyledLogo $isDarkMode={darkMode} $inMobileNav>
						<div className="circle">
							<img src={avatar} alt="logo"/>
						</div>
						<h3 className='desktopTitle'>Kevin BRET</h3>
					</StyledLogo>


					<RoundButton className="symbol" symbol="×" onClick={onClose} />
				</div>

				<div className="separation"></div>

				<Navigation $isDarkMode={darkMode} isMobile={true} />

				<div className="separation"></div>

				<div className="links">
					<FindMe />
					{/* <BestSkill /> */}
				</div>
				<DownloadCVButton />

			</div>
		</StyledNavMobile>
	);
}
