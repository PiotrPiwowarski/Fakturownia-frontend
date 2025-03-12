import { ReactComponent as Logo } from '../../img/logo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUrlStore } from '../useStore';
import axios from 'axios';
import styles from './Login.module.css';

const Login = () => {
	const navigate = useNavigate();
	const { url } = useUrlStore();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleRegisterBtn = () => {
		navigate('/choosePlan');
	};

	const handleLogoBtn = () => {
		setEmail('');
		setPassword('');
		setError('');
		navigate('/');
	};

	const handlePasswordForgot = () => {
		navigate('/passwordForgot');
	};

	const handleEmailInput = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordInput = (e) => {
		setPassword(e.target.value);
	};

	const handleLoginBtn = async () => {
		if (email.length === 0 || password.length === 0) {
			setError('Wypełnij wszystkie pola formularza');
			return;
		}
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
			localStorage.setItem('paymentPlan', response.data.paymentPlan);
			if(response.data.paymentPlan === 'PRO') {
				navigate('/dashboardPro');
			} else {
				navigate('/dashboardLite');
			}
		} catch (e) {
			console.log(e.message);
			setError('Błąd logowania');
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
						<h1>Logowanie.</h1>
						<p className={styles.error}>{error}</p>
						<p>
							Nie masz jeszcze konta?{' '}
							<button
								className={styles.registerBtn}
								onClick={handleRegisterBtn}>
								Zarejestruj się.
							</button>
						</p>
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
				</div>
			</div>
			<div className={styles.footer}>
					<p>Copyright &copy; 2025 All Rights Reserved</p>
			</div>
		</div>
	);
};

export default Login;
