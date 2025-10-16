import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUrlStore } from '../useStore';
import styles from './User.module.css';
import PaymentPlanModal from '../modals/PaymentPlanModal';
import PasswordModal from '../modals/PasswordModal';

const Settings = () => {
	const { url } = useUrlStore();
	const navigate = useNavigate();
	const [error, setError] = useState('');
	const [paymentPlan, setPaymentPlan] = useState('');
	const [passwordModalOpen, setPasswordModalOpen] = useState(false);
	const [paymentPlanModalOpen, setPaymentPlanModalOpen] = useState(false);

	const fetchData = async () => {
		try {
			const jwt = localStorage.getItem('jwt');
			if (!jwt) {
				navigate('/');
				return;
			}
			const response = await axios.get(`${url}/api/users/paymentPlan`, {
				headers: { Authorization: `Bearer ${jwt}` },
			});
			setPaymentPlan(response.data.paymentPlan);
		} catch (e) {
			console.log(e.message);
			setError('Błąd pobierania danych');
		}
	};

	const changePassword = () => {
		setPasswordModalOpen(true);
	};

	const changePaymentPlan = () => {
		setPaymentPlanModalOpen(true);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className={styles.vertical}>
			<div className={styles.sectionHead}>
				<h1>Ustawienia.</h1>
			</div>
			<div className={styles.userData}>
				<p className={styles.error}>{error}</p>
				<div className={styles.row}>
					<dl className={styles.column}>
						<dt>Hasło:</dt>
						<dd>ukryte</dd>
						<button
							className={styles.changeDataButton}
							onClick={changePassword}>
							Zmień
						</button>
						{passwordModalOpen && (
							<PasswordModal
								setPasswordModalOpen={setPasswordModalOpen}
								navigate={navigate}
								fetchData={fetchData}
								url={url}
							/>
						)}
					</dl>
					<dl className={styles.column}>
						<dt>Plan:</dt>
						<dd>{paymentPlan}</dd>
						<button
							className={styles.changeDataButton}
							onClick={changePaymentPlan}>
							Zmień
						</button>
						{paymentPlanModalOpen && (
							<PaymentPlanModal
								setPaymentPlanModalOpen={setPaymentPlanModalOpen}
								navigate={navigate}
								activePlan={paymentPlan}
								fetchData={fetchData}
								url={url}
							/>
						)}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default Settings;
