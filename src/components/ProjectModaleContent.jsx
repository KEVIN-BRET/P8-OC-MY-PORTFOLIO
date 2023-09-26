import { React, useContext } from 'react'
import styled from 'styled-components'

import colors from '../style/colors'
import { ThemeContext } from '../utils/context/ThemeProvider'

import RoundButton from './RoundButton'

const StyledOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
`

const StyledNav = styled.div`
	${'' /* position: absolute; */}
	background: ${colors.primary};
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	padding: 0.5rem 2rem;
	border-radius: 0 0 10px 10px;
	gap: 1rem;
	font-size: 1rem;
	color: ${colors.bodyDark};
	transition: 0.3s ease;
	@media (max-width: 768px) {
			font-size: 0.8rem;
		}	
	&>a {
		font-style: italic;
		border-bottom: transparent;
		transition: 0.3s ease;
		font-weight: bold;
		& .arrow {
			visibility: hidden;
		}
		&:hover {
			${'' /* color: ${colors.primary}; */}
			border-bottom: 1px solid ${colors.bodyDark};
			transition: 0.3s ease;
			& .arrow {
				visibility: visible;
			}
		}
	}	
`

const StyledModal = styled.div`
	${'' /* ::-webkit-scrollbar {
		width: 0;      
		height: 0;     
	} */}
	position: fixed;
	display: flex;
	flex-direction: column;
	top: 50%;
	left: 50%;
	padding: 0rem 2rem 2rem 2rem;
	transform: translate(-50%, -50%);
	width: 80%;
	height: 80%;
	border-radius: 6px;
	background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
	z-index: 150;
	@media (max-width: 1000px) {
		width: 90%;
		height: 90%;
	}
	@media (max-width: 768px) {
			padding: 0 0.5rem;
		}	
	& .closeModal {
		transform: scale(0.8);
		position: absolute;
		top: 1rem;
		right: 1rem;
		@media (max-width: 768px) {
			transform: scale(0.6);
			top: 0.5rem;
			right: 0.5rem;
		}	
	}
	& .content {
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: nowrap;
		align-items: flex-start;
		justify-content: center;
		width: 100%;
		margin: auto;
		color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
		max-height: 70vh;
        overflow-y: auto;
		@media (max-width: 1000px) {
			max-height: 80vh;
		}
		@media (max-width: 768px) {
			flex-wrap: wrap;
			max-height: auto;
		}	
		& .pictures {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex-wrap: wrap;
			width: 50%;
			padding: 1rem;
			gap: 1rem;
			@media (max-width: 768px) {
				width: 100%;
			}	
				& .desktopPicture {
					border-radius: 3px;
					width: 100%;
					box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.30)
				}
				& .tabletPicture {
					border-radius: 3px;
					width: 70%;
					box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.30)
				}
				& .mobilePicture {
					display:flex;
					align-items: center;
					border-radius: 3px;
					width: 30%;
					height: fit-content;
					box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.30)
				}
			} 
		& .infos {
			${'' /* border: 1px solid red; */}
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			${'' /* justify-content: center; */}
			flex-wrap: wrap;
			width: 50%;
			padding: 1rem;
			gap: 1rem;
			color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
			@media (max-width: 768px) {
				width: 100%;
			}
			& h4 {
				margin-left: 1rem;
				&.skills {
					font-size: 1.2rem;
					font-style: italic;
					margin-left: 0;	
					color: ${colors.primary};
				}
			}
			& li {
				list-style: disc;
				margin-left: 2rem;
				font-size: 0.9rem;
			}
			& a:hover {
				color: ${colors.primary};
			}
			& .constraints {
				display: flex;
				flex-direction: column;
				gap: 1rem;
				& h4 {
					margin-bottom: 0.2rem;
				}

			}
			& .link {
				color: ${colors.primary};
				&:hover {
					font-weight: bold;
					text-decoration: underline;
				}
			}
		}
	}
`

const StyledBacToTop = styled.div`
	position: absolute;
	transform: scale(0.8);
    bottom: 1rem;
    right: 1rem;
	z-index: 3000;
	line-height: 46px;
	border-radius: 50%;
		@media (max-width: 768px) {
			transform: scale(0.6);
			botttom: 0.5rem;
			right: 0.5rem;
		}
	
`




export default function ModaleContent({ closeModal, cover, pictures, mobilePictures, title, skills, origin, scenario, constraints, links, demo, repo }) {
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

				<StyledNav $isDarkMode={darkMode} >
					<a href={demo} target="_blank" rel="noopener noreferrer">Live Demo<span className="arrow"> ➚</span></a>
					<a href={repo} target="_blank" rel="noopener noreferrer">Repo GitHub<span className="arrow"> ➚</span></a>
				</StyledNav>

				<div className="content" id='content'>

					<div className="infos" id='infos'>

						<h2>{title}</h2>

						<h4 className='skills'>{skills.map((skill, index) => (
							<span
								key={index}>{skill} </span>
						))}</h4>

						<p>{origin}</p>

						<h3>Scénario :</h3>
						<p>{scenario}</p>

						<h3>Contraintes Techniques :</h3>


						<div className='constraints'>
							{constraints.map((constraintObj, outerIndex) => (
								<div key={outerIndex}>
									<h4>{constraintObj.name}</h4>
									<ul>
										{constraintObj.list.map((item, innerIndex) => (
											<li key={innerIndex}>{item}</li>
										))}
									</ul>
								</div>
							))}
						</div>


						<h3>Liens annexes :</h3>
						<ul>
							{links.map((linkObj, index) => (
								<a href={linkObj.url} target="_blank" rel="noopener noreferrer" key={index} > <li className="link" key={index}>{linkObj.name}</li></a>
							))}
						</ul>


					</div>

					<div className="pictures" pictures={pictures} >

						{pictures[0].desktopPictures.map((src, index) => (
							<img
								key={index}
								className='desktopPicture'
								src={src}
								alt="" />
						))}

						{pictures[1].tabletPictures.map((src, index) => (
							<img
								key={index}
								className='tabletPicture'
								src={src}
								alt="" />
						))}

						{pictures[2].mobilePictures.map((src, index) => (
							<img
								key={index}
								className='mobilePicture'
								src={src}
								alt="" />
						))}

					</div>

				</div>

				<StyledBacToTop $isDarkMode={darkMode}>
					<a href="#infos">
						<RoundButton className="symbol" symbol="↑" />
					</a>
				</StyledBacToTop>
			</StyledModal>
		</>
	)
}
