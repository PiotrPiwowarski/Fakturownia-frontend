import styles from './Password.module.css';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { useNavigate } from 'react-router-dom';

const PasswordResetFailure = () => {
	const navigate = useNavigate();

	const handleLogoBtn = () => {
		navigate('/');
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
						<h1 className={styles.error}>Niepowodzenie.</h1>
						<p className={styles.bold}>
							Reset hasła zakończony niepowodzeniem.
						</p>
						<button className={styles.loginBtn} on onClick={handleLogoBtn}>
							Wróć
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PasswordResetFailure;
