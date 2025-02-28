import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useStore from '../useStore';
import styles from './Home.module.css';
import { ReactComponent as Logo } from '../../img/logo.svg';

const Registration = ({ setDisplayedComponent }) => {
	const navigate = useNavigate();
	const { url } = useStore();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatedPassword, setRepeatedPassword] = useState('');
	const [error, setError] = useState('');

	const handleFirstNameInput = (e) => {
		setFirstName(e.target.value);
	};

	const handleLastNameInput = (e) => {
		setLastName(e.target.value);
	};

	const handlePhoneNumberInput = (e) => {
		setPhoneNumber(e.target.value);
	};

	const handleEmailInput = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordInput = (e) => {
		setPassword(e.target.value);
	};

	const handleRepeatedPasswordInput = (e) => {
		setRepeatedPassword(e.target.value);
	};

	const handleLogoBtn = () => {
		navigate('/');
	};

	const handleRegistrationBtn = async () => {
		if (
			firstName.length === 0 ||
			lastName.length === 0 ||
			phoneNumber.length === 0 ||
			email.length === 0 ||
			password.length === 0
		) {
			setError('Należy wypełnić wszystkie pola');
		} else if (password.length < 5) {
			setError('Hasło musi mieć co najmniej 5 znaków');
		} else if (password !== repeatedPassword) {
			setError('Powtórzone hasło musi być takie jak pierwotne');
		} else if (!email.includes('@')) {
			setError('Niepoprawny email');
		} else if (password.length < 5) {
			setError('Hasło musi zawierać przynajmniej pięć znaków');
		} else {
			setError('');
			try {
				const newUserDto = {
					firstName,
					lastName,
					phoneNumber,
					email,
					password,
				};

				const response = await axios.post(
					`${url}/api/users/register`,
					newUserDto,
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);

				console.log(response);

				setError('');
				setDisplayedComponent('login');
			} catch (e) {
				setError('Rejestracja zakończona niepowodzeniem');
			}
		}
	};

	return (
		<div className={styles.bgc}>
			<div className={styles.header}>
				<button className={styles.logoButton} onClick={handleLogoBtn}>
					<Logo className={styles.logo} />
				</button>
			</div>
			<div className={styles.main}>
				<div className={styles.content}>
					<div className={styles.form}>
						<h1>Poznajmy się.</h1>
						<p className={styles.error}>{error}</p>
						<label>
							Imię
							<input
								type='text'
								value={firstName}
								onChange={handleFirstNameInput}
							/>
						</label>
						<label>
							Nazwisko
							<input
								type='text'
								value={lastName}
								onChange={handleLastNameInput}
							/>
						</label>
						<label>
							Numer telefonu
							<input
								type='text'
								value={phoneNumber}
								onChange={handlePhoneNumberInput}
							/>
						</label>
						<label>
							Email
							<input type='email' value={email} onChange={handleEmailInput} />
						</label>
						<label>
							Hasło
							<input
								type='password'
								value={password}
								onChange={handlePasswordInput}
							/>
						</label>
						<label>
							Powtórz hasło
							<input
								type='password'
								value={repeatedPassword}
								onChange={handleRepeatedPasswordInput}
							/>
						</label>
						<button className={styles.loginBtn} onClick={handleRegistrationBtn}>
							Zarejestruj się
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registration;
