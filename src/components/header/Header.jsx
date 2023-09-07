import React from 'react';
import './Header.scss';
import profilePhoto from '../../assets/images/profile_photo.png'
// import { NavLink } from 'react-router-dom';

export default function Header(props) {
	return (
		<div className='header'>

			<div className='logo'>
				<img className='profilePhoto' src={profilePhoto} alt="logo" />
				<h3>Kevin BRET</h3>
			</div>

			<div className="nav">

				<ul className='header__nav'>
					<li>Accueil</li>
					<li>Skills</li>
					<li>Projets</li>
					<li>Contact</li>
				</ul>

				<div className="cv">Mon CV</div>
				
			</div>

		</div>
	);
}

