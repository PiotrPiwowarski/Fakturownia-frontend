import { ReactComponent as Logo } from '../../img/logo.svg';
import styles from './Password.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useUrlStore } from '../useStore';
import AcceptModal from '../modals/AcceptModal';

const PasswordForgot = () => {
	const navigate = useNavigate();

	const { url } = useUrlStore();

	const [error, setError] = useState('');
	const [email, setEmail] = useState('');
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleLogoBtn = () => {
		setError('');
		navigate('/');
	};

	const handleEmailInput = (e) => {
		setEmail(e.target.value);
	};

	const setNewPassword = () => {
		if(email === '') {
			setError('Podaj email');
			return;
		}
		setIsModalOpen(true);
	}

	const handleYesFunction = async () => {
		try {
			await axios.post(
				`${url}/api/users/sendResetPasswordToken`,
				{ email },
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			navigate('/passwordReset', { state: email });
			setError('');
		} catch (e) {
			console.log(e.message);
			setError("Błąd resetowania hasła");
		}
	};

	const handleNoFunction = () => {
		setIsModalOpen(false);
		navigate('/');
	}

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
						<h1>Odzyskiwanie hasła.</h1>
						<p className={styles.bold}>Poczekaj na automatyczne przekierowanie po naciśnięciu przycisku tworzenia nowego hasła</p>
						<p className={styles.error}>{error}</p>
						<label>
							Email
							<input type='email' value={email} onChange={handleEmailInput} />
						</label>
						<button className={styles.loginBtn} onClick={setNewPassword}>
							Ustaw nowe hasło
						</button>
					</div>
				</div>
			</div>
			{isModalOpen && <AcceptModal title={"Czy chcesz zresetować hasło?"} onYesFunction={handleYesFunction} onNoFunction={handleNoFunction}  />}
		</div>
	);
};

export default PasswordForgot;
