import { useState, useEffect } from 'react';
import './Header.scss';
import profilePhoto from '../../assets/images/profile_photo.png'
import DarkLightSwitch from '../ToggleThemeButton';
import styled from 'styled-components';


const StyledHeader = styled.div`
	${'' /* border: 1px solid red; */}
	${'' /* background: var(--color-white); */}
	
	background-color: #ECF0F3;
	border-bottom: 1px solid var(--color-lightgray);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 2rem;
	width: 100%;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 100;
	height: 100px;
	transition: 0.5s ease;
	&--scrolled {
		height: 60px;
		box-shadow: 10px 10px 19px rgba(0, 0, 0, 0.1);
		& .logo {
			transform: scale(0.8);
		}
	}
`

export default function Header(props) {

	// est-ce que la page est scrollée ?
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
				console.log('scroll');
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<StyledHeader className={`header ${isScrolled ? 'header--scrolled' : ''}`}>

			<div className='logo'>
				<img className='profilePhoto' src={profilePhoto} alt="logo" />
				<h3>Kevin BRET</h3>
			</div>

			<DarkLightSwitch />

			<div className="nav">

				<ul className='header__nav'>
					<li>Accueil</li>
					<li>Skills</li>
					<li>Portfolio</li>
					<li>Contact</li>
				</ul>

				<div className="cv">Télécharger mon CV</div>

			</div>

		</StyledHeader>
	);
}

