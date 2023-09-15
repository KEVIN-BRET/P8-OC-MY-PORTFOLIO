import React from 'react'
import styled from 'styled-components'

import colors from '../style/colors'
import { useContext } from 'react'
import { ThemeContext } from '../utils/context/ThemeProvider'

import RoundButton from './RoundButton'

const StyledOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 200;
`

const StyledModal = styled.div`
	position: fixed;
	display: flex;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80%;
	height: 80%;
	border-radius: 6px;
	background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    ${'' /* box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight}; */}
	z-index: 210;
	& .closeModal {
		position: absolute;
		top: 1rem;
		right: 1rem;
	}
	& .content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: auto;
		color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	}
`

export default function ModaleContent({ closeModal }) {
	const { darkMode } = useContext(ThemeContext)

	return (
		<>
			<StyledOverlay
				// $isDarkMode={darkMode}
				onClick={closeModal}>
			</StyledOverlay>

			<StyledModal $isDarkMode={darkMode}>

				<div className="closeModal"
					onClick={closeModal}>
					<RoundButton className="symbol" symbol="×" />
				</div>

				<div className="content">
					<h1>CONTENU A VENIR ;)</h1>
				</div>
			</StyledModal>
		</>
	)
}
