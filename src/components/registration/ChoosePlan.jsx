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
					<ul>
						<li>Darmowy</li>
						<li>4 faktury w miesiącu</li>
						<li>Jeden wzór</li>
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
					<ul>
						<li>9 zł</li>
						<li>Brak limitu faktur</li>
						<li>Wybór wzoru spośród dostępnych</li>
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
		</div>
	);
};

export default ChoosePlan;
