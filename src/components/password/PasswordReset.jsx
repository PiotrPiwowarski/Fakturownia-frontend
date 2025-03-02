import styles from './Password.module.css';
import { ReactComponent as Logo } from './../../img/logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useUrlStore } from '../useStore';

const PasswordReset = () => {
	const navigate = useNavigate();
	const { url } = useUrlStore();
	const location = useLocation();
	const email = location.state;

	const [resetToken, setResetToken] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [repeatedNewPassword, setRepeatedNewPassword] = useState('');
	const [error, setError] = useState('');

	const handleLogoBtn = () => {
		setError('');
		navigate('/');
	};

	const handleResetTokenInput = (e) => {
		setResetToken(e.target.value);
	};

	const handlePasswordInput = (e) => {
		setNewPassword(e.target.value);
	};

	const handleRepeatedPasswordInput = (e) => {
		setRepeatedNewPassword(e.target.value);
	};

	const handleResetBtn = async () => {
		try {
			if (newPassword.length === 0 || repeatedNewPassword === 0) {
				setError('Należy wypełnić wszystkie pola');
				return;
			}

			if (newPassword.length < 5) {
				setError('Hasło musi mieć co najmniej 5 znaków');
				return;
			}

			if (newPassword !== repeatedNewPassword) {
				setError('Powtórzone hasło musi być takie jak pierwotne');
				return;
			}

			const resetPasswordDto = {
				email,
				resetToken,
				newPassword,
			};
			await axios.put(`${url}/api/users/resetPassword`, resetPasswordDto, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			navigate('/passwordResetSuccess');
		} catch (e) {
			navigate('/passwordResetFailure');
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
						<h1>Resetowanie hasła.</h1>
						<p className={styles.error}>{error}</p>
						<p className={styles.bold}>
							Na twój email został wysłany token. W celu zresetowania
							dotychczasowego hasła wprowadź go do formularza wraz z nowym
							hasłem.
						</p>
						<label>
							Token
							<input
								type='text'
								value={resetToken}
								onChange={handleResetTokenInput}
							/>
						</label>
						<label>
							Nowe hasło
							<input
								type='password'
								value={newPassword}
								onChange={handlePasswordInput}
							/>
						</label>
						<label>
							Powtórz nowe hasło
							<input
								type='password'
								value={repeatedNewPassword}
								onChange={handleRepeatedPasswordInput}
							/>
						</label>
						<button className={styles.loginBtn} onClick={handleResetBtn}>
							Zresetuj hasło
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PasswordReset;
