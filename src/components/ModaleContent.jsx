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
	padding: 2rem;
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
		${'' /* flex-direction: column; */}
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		width: 100%;
		${'' /* height: auto; */}
		margin: auto;
		color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
		overflow: hidden;
			& .pictures {
				display: flex;
				${'' /* align-items: center; */}
				justify-content: center;
				flex-wrap: wrap;
				${'' /* flex-direction: column; */}
				width: 50%;
				padding: 1rem;
				gap: 1rem;
				max-height: 70vh; // Ajustez cette valeur selon vos besoins
            	overflow-y: auto;
				& .picture {
					width: 100%;
					${'' /* box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight}; */}
					box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.30)
				}
				& .mobilePicture {
					display:flex;
					align-items: center;
					justify-content: center;
					width: 30%;
					height: fit-content;
					box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.30)
				}
			} 
			& .infos {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 50%;
			}
	}
`

export default function ModaleContent({ closeModal, cover, pictures, mobilePictures, title, skills, demo, repo }) {
	const { darkMode } = useContext(ThemeContext)

	console.log(pictures);

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

					<div className="pictures" pictures={pictures} >

						{pictures && pictures.map((picture, index) =>
						(
							<img
								key= { index }
								className='picture'
								src={picture}
								alt="" />
						))}

						{mobilePictures && mobilePictures.map((mobilePicture, index) =>
						(
							<img
								key= { index }
								className='mobilePicture'
								src={mobilePicture}
								alt="" />
						))}

						


					</div>

					<div className="infos">

						<h1>CONTENU A VENIR ;)</h1>

					</div>

				</div>
			</StyledModal>
		</>
	)
}
