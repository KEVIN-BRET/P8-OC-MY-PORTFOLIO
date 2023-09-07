import { useState, useEffect } from 'react';
import './Header.scss';
import profilePhoto from '../../assets/images/profile_photo.png'
// import { NavLink } from 'react-router-dom';

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
		<div className={`header ${isScrolled ? 'header--scrolled' : ''}`}>

			<div className='logo'>
				<img className='profilePhoto' src={profilePhoto} alt="logo" />
				<h3>Kevin BRET</h3>
			</div>

			<div className="nav">

				<ul className='header__nav'>
					<li>Accueil</li>
					<li>Skills</li>
					<li>Portfolio</li>
					<li>Contact</li>
				</ul>

				<div className="cv">Télécharger mon CV</div>

			</div>

		</div>
	);
}

