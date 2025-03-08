import { ReactComponent as Logo } from '../../img/logo.svg';
import styles from './Registration.module.css';
import { useNavigate } from 'react-router-dom';

const ChoosePlan = () => {
	const navigate = useNavigate();

	const handleLogoBtn = () => {
		navigate('/');
	};

	const handleChooseBtn = (paymentPlan) => {
		navigate('/registration', { state: paymentPlan });
	};

	return (
		<div className={styles.bgc}>
			<div className={styles.header}>
				<button className={styles.logoButton} onClick={handleLogoBtn}>
					<Logo className={styles.logo} />
				</button>
			</div>
			<h1>Wybierz swój plan.</h1>
			<div className={styles.main}>
				<div className={styles.tile}>
					<h2>Plan LITE</h2>
					<p className={styles.green}>POPULARNY</p>
					<ul>
						<li>Darmowy</li>
						<li>3 faktury w miesiącu</li>
						<li>Brak statystyk</li>
						<li>Historia faktur ograniczona do 3 ostatnich</li>
						<li>Brak zapisu danych firm</li>
					</ul>
					<div className={styles.btnDiv}>
						<button
							className={styles.loginBtn}
							onClick={() => handleChooseBtn('LITE')}>
							Wybieram LITE
						</button>
					</div>
				</div>
				<div className={styles.tile}>
					<h2>Plan PRO</h2>
					<p className={styles.green}>POLECANY</p>
					<ul>
						<li>9 zł</li>
						<li>Brak limitu faktur</li>
						<li>Rozbudowane statystyki</li>
						<li>Cała historia wygenerowanych faktur</li>
						<li>Zapis danych firm</li>
					</ul>
					<div className={styles.btnDiv}>
						<button
							className={styles.loginBtn}
							onClick={() => handleChooseBtn('PRO')}>
							Wybieram PRO
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

export default ChoosePlan;
