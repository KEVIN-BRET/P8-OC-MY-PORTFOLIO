import React from 'react'
import styled from 'styled-components'

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
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80%;
	height: 80%;
	broder-radius: 10px;
	background-color: white;
	z-index: 210;
`

export default function ModaleContent({ closeModal }) {
	return (
		<>
			<StyledOverlay
				onClick={(e) => e.stopPropagation()}
			></StyledOverlay>
			<StyledModal>
				<p>Contenu du modal</p>
			</StyledModal>
		</>
	)
}
