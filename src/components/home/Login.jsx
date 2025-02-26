import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../useStore';
import axios from 'axios';
import styles from './Login.module.css';

const Login = ({ setDisplayedComponent }) => {
	const navigate = useNavigate();
	const { url } = useStore();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleRegisterBtn = () => {
		setDisplayedComponent('registration');
	};

	const handleEmailInput = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordInput = (e) => {
		setPassword(e.target.value);
	};

	const handlePasswordForgot = () => {};

	const handleLoginBtn = async () => {
		if (email.length === 0 || password.length === 0) {
			setError('Wypełnij wszystkie pola formularza');
		} else {
			setError('');
			try {
				const loginDto = {
					email,
					password,
				};
				const response = await axios.post(`${url}/api/users/login`, loginDto, {
					headers: {
						'Content-Type': 'application/json',
					},
				});
				localStorage.setItem('jwt', response.data.token);
				localStorage.setItem('role', response.data.role);
				navigate('/dashboard');
			} catch (e) {
				setError('Logowanie zakończone niepowodzeniem');
			}
		}
	};

	return (
		<div className={styles.form}>
			<h1>Zaczynijmy.</h1>
			<p className={styles.error}>{error}</p>
			<div className={styles.registration}>
				<p>
					Nie masz jeszcze konta?{' '}
					<button className={styles.registerBtn} onClick={handleRegisterBtn}>
						Zarejestruj się.
					</button>
				</p>
			</div>
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
			<button
				className={styles.passwordForgotBtn}
				onClick={handlePasswordForgot}>
				Zapomniałeś hasła?
			</button>
			<button className={styles.loginBtn} onClick={handleLoginBtn}>
				Zaloguj się
			</button>
		</div>
	);
};

export default Login;
