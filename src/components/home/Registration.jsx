import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useStore from '../useStore';

const Registration = () => {
	const navigate = useNavigate();
	const { url } = useStore();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState(null);
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

	const handleHeaderBtn = () => {
		navigate('/');
	};

	const onClickRegister = async () => {
		if (
			firstName.length === 0 ||
			lastName.length === 0 ||
			email.length === 0 ||
			password.length === 0
		) {
			setError('Należy wypełnić wszystkie pola oznaczone jako obowiązkowe');
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
				navigate('/login');
			} catch (e) {
				setError('Rejestracja zakończona niepowodzeniem');
			}
		}
	};

	return (
		<div className='app'>
			<button className='app-h1-button' onClick={handleHeaderBtn}>
				FAKTUROWNIA
			</button>
			<div className='app-form'>
				<h2>Zarejestruj się</h2>
				<p className='app-error'>{error}</p>
				<label className='app-label'>
					* imię
					<input
						className='app-input'
						type='text'
						value={firstName}
						placeholder=''
						onChange={handleFirstNameInput}
						required
					/>
				</label>
				<label className='app-label'>
					* nazwisko
					<input
						className='app-input'
						type='text'
						value={lastName}
						placeholder=''
						onChange={handleLastNameInput}
						required
					/>
				</label>
				<label className='app-label'>
					nr. telefonu
					<input
						className='app-input'
						type='text'
						value={phoneNumber}
						placeholder=''
						onChange={handlePhoneNumberInput}
					/>
				</label>
				<label className='app-label'>
					* email
					<input
						className='app-input'
						type='email'
						value={email}
						placeholder=''
						onChange={handleEmailInput}
						required
					/>
				</label>
				<label className='app-label'>
					* hasło
					<input
						className='app-input'
						type='password'
						value={password}
						placeholder=''
						onChange={handlePasswordInput}
						required
					/>
				</label>
				<label className='app-label'>
					* powtórz hasło
					<input
						className='app-input'
						type='password'
						value={repeatedPassword}
						placeholder=''
						onChange={handleRepeatedPasswordInput}
						required
					/>
				</label>
				<p className='app-paragraph'>* wymagane pola</p>
				<button className='app-button' onClick={onClickRegister}>
					zarejestruj się
				</button>
			</div>
		</div>
	);
};

export default Registration;
