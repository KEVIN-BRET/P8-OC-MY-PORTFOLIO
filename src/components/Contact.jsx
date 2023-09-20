import React, { useContext, useState, useEffect } from 'react';

// Merci à NonoduWeb pour le tuto emailjs -> https://www.youtube.com/watch?v=XoKzl95U-Sc
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

import { ThemeContext } from '../utils/context/ThemeProvider';

import styled from 'styled-components';
import colors from '../style/colors';

import handshake from '../assets/images/handshake.webp';

import SmallBadge from './SmallBadge';

import linkedin from '../assets/images/logos/linkedin-light.png';
import github from '../assets/images/logos/github-light.png';
import email from '../assets/images/logos/email-light.png';

import linkedinDark from '../assets/images/logos/linkedin-dark.png';
import githubDark from '../assets/images/logos/github-dark.png';
import emailDark from '../assets/images/logos/email-dark.png';

const LINKEDIN_URL = 'https://www.linkedin.com/in/kevin-bret-534a73180/';
const GITHUB_URL = 'https://github.com/KEVIN-BRET/';
const MAIL_TO_KEVIN = 'mailto:kevinbret.dev@gmail.com';





const StyledContact = styled.div`

	margin: 2rem auto;
	padding-top: 120px;
	width: 80%;
	max-width: 1440px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
	@media screen and (max-width: 1000px) {
			flex-direction: column;
			width: 100%;
			${'' /* gap: 0.5rem; */}
		}
	& h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
		${'' /* color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight}; */}
	}
`
const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;  
	gap: 2rem;
	${'' /* height: auto; */}
	@media screen and (max-width: 1000px) {
			flex-direction: column;
			width: 90%;
			${'' /* gap: 0.5rem; */}
		}
	
`

const StyledInfos = styled.div`
	display: flex;
	width: 40%;
	height: auto;
	flex-direction: column;
	justify-content: center;
	border-radius: 6px;
	padding: 2rem;
	margin: auto auto;
	gap: 1rem;
	background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
	transition: 0.3s ease;
	@media screen and (max-width: 1000px) {
				width: 100%;
			}
	& .thumbnail {
		height: 200px;
		width: 100%;
		margin-bottom: 2rem;
		border-radius: 6px;
		overflow: hidden;
		& img {
			z-index: 0;
			height: 200px;
			width: 100%;
			object-fit: cover;
			transition: 0.6s ease;
			${'' /* display: none; */}
		}
	}
	& .badgeContainer {
			margin-top: 1rem;
			display: flex;
			gap: 1.5rem;
		}
	&:hover {
            transform: translateY(-3px);
			& .thumbnail img {
				transform: scale(1.2);
			}
	}

`

const StyledForm = styled.div`
	display: flex;
	width: 60%;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	border-radius: 6px;
	padding: 1.5rem;
	margin: auto auto;
	gap: 1rem;
	background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
    box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
	transition: 0.3s ease;
	@media screen and (max-width: 1000px) {
				width: 100%;
			}
	& form {
		display: flex;
		flex-direction: column;
			& div {
			display: flex;
			flex-direction: column;
			width: 100%;
			margin: 0.5rem 0;
			& input, textarea {
				border-radius: 6px;
				height: 55px;
				transition: var(--transition);
				${'' /* border: 2px solid #191b1e; */}
				padding: 15px;
				font-size: 1rem;
				background-color: ${({ $isDarkMode }) => $isDarkMode ? colors.inputBackgroungDark : colors.white};
				color: ${({ $isDarkMode }) => $isDarkMode ? colors.bodyDark : colors.bodyLight};
				border: ${({ $isDarkMode }) => $isDarkMode ? "2px solid #191b1e" : "2px solid #DADADA"};
				box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.innerShadowDark : ""};
				letter-spacing: 1px;
				}
				& label {
					margin-bottom: 0.5rem;
				}
			}
			& textarea:focus {
				border-color: ${colors.primary};
			}
			& input:focus {
				border-color: ${colors.primary};
			}
			& .message-container textarea {
				width: 100%;
				height: 235px;
				resize: none;
			}
			& .submit-container input {
				font-weight: 500;
				font-style: italic;
				cursor: pointer;
				border: none;
				background: ${({ $isDarkMode }) => $isDarkMode ? colors.gradientBoxDark : colors.gradientBoxLight};
				box-shadow: ${({ $isDarkMode }) => $isDarkMode ? colors.boxShadowDark : colors.boxShadowLight};
				transition: 0.3s ease;
				&:hover {
					color: ${colors.white};
					background: ${colors.gradienPrimaryColor};
					transform: translateY(-3px);
				}
			}
		
		
		& .name-and-phone {
			display: flex;
			flex-direction: row;
			width: 100%;
			gap: 2rem;
			@media screen and (max-width: 1000px) {
				flex-direction: column;
				gap: 0.5rem;
			}
		}
		
	}
	
`

const StyledMessageConfirm = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	bottom: 2rem;
	left: 2rem;
	padding: 0.5rem;
	font-style: italic;
	color: ${colors.bodyDark};
	background: ${colors.primary};
	border-radius: 6px;
	visibility: ${({ $isVisible }) => $isVisible ? "visible" : "hidden"};
`

export default function Contact() {
	const { darkMode } = useContext(ThemeContext);
	const [showConfirmation, setShowConfirmation] = useState(false);

	const schema = yup
		.object({
			name: yup
				.string()
				.max(50)
				.required('Merci de rentrer votre nom et prénom'),
			email: yup
				.string()
				.email('Merci de renter une adresse mail valide')
				.max(255)
				.required('Merci de rentrer une adresse mail'),
			phone: yup
				.number()
				.typeError('Merci de rentrer une numero de téléphone valide')
				.required('Merci de rentrer un numero de téléphone'),
			message: yup.string().required('Merci de rentrer un message'),
		})
		.required();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data, r) => {
		const templateId = 'template_j0cnalf';
		const serviceId = 'service_f7rh05t';
		sendFeedback(serviceId, templateId, {
			name: data.name,
			phone: data.phone,
			email: data.email,
			// subject: data.subject,
			message: data.message,
			reply_to: r.target.reset(),
		});
		setShowConfirmation(true);  // Affiche le message de confirmation
	};

	const sendFeedback = (serviceId, templateId, variables) => {
		emailjs
			.send(serviceId, templateId, variables, 'wc_4xMk0QFiCKWjXx')
			.then((res) => {
				console.log('succes');
			})
			.catch((err) => console.error('Il y a une erreur'));
	};

	useEffect(() => {
		if (showConfirmation) {
			const timer = setTimeout(() => {
				setShowConfirmation(false);
			}, 3000);

			return () => clearTimeout(timer);  // Nettoyez le timer en cas de démontage du composant
		}
	}, [showConfirmation]);


	return (
		<StyledContact id='contact' $isDarkMode={darkMode} >
			<h1>Me contacter</h1>
			<StyledContainer>

				<StyledInfos $isDarkMode={darkMode}>
					<div className="thumbnail">
						<img className='picture' src={handshake} alt="" />
					</div>

					<h3>Kevin BRET</h3>
					<p>Développeur Web</p>
					<p>Je suis actuellement disponible, en recherche d'un poste de développeur front-end dans une équipe ..</p>
					<p>Téléphone : <span>07 82 42 30 30</span></p>
					<p>Email : <span>kevinbret.dev@gmail.com</span></p>

					<div className="findMe">
						<p>Ou me trouver ?</p>
						<div className="badgeContainer">
							<a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
								<SmallBadge logo={linkedin} logoDark={linkedinDark} hoverable />
							</a>
							<a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
								<SmallBadge logo={github} logoDark={githubDark} hoverable />
							</a>
							<a href={MAIL_TO_KEVIN} >
								<SmallBadge logo={email} logoDark={emailDark} hoverable />
							</a>
						</div>
					</div>
				</StyledInfos>

				<StyledForm $isDarkMode={darkMode}>
					<form className='contact-form' onSubmit={handleSubmit(onSubmit)}>

						<div className="name-and-phone">
							<div className="name-container">
								<label htmlFor="name">Votre nom</label>
								<input type="text" id="name" name='name' autoComplete='on' {...register('name')} />
								<span></span>
							</div>

							<div className="phone-container">
								<label htmlFor="phone">N° de téléphone</label>
								<input type="text" id="phone" name='phone' autoComplete='on' {...register('phone')} />
								<span></span>
							</div>
						</div>

						<div className="email-container">
							<label htmlFor="email">Email</label>
							<input type="email" id="email" name='email' autoComplete='on' {...register('email')} />
							<span></span>
						</div>

						<div className="message-container">
							<label htmlFor="message">Votre message</label>
							<textarea type="text" id="message" name='message' rows="" cols="" {...register('message')}></textarea>
							<span></span>
						</div>

						<div className="submit-container">
							{/* <label htmlFor="submit">Envoyer</label> */}
							<input type="submit" id="submit" name='submit' value="Envoyer" />
							<span></span>
						</div>
					</form>

				</StyledForm>

			</StyledContainer>

			<StyledMessageConfirm id='message-confirm' $isVisible={showConfirmation} >
				{showConfirmation && <div className='send-'>Votre message bien a été envoyé !</div>}
			</StyledMessageConfirm>
		</StyledContact>
	);
}
