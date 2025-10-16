import styles from './Modals.module.css';
import { useState } from 'react';
import axios from 'axios';
import XIcon from '../../img/XIcon';
import AcceptModal from './AcceptModal';

const PaymentPlanModal = ({
	setPaymentPlanModalOpen,
	activePlan,
	navigate,
	url,
	fetchData,
}) => {
	const [error, setError] = useState('');
	const [paymentPlan, setPaymentPlan] = useState(activePlan);
	const [paymentPlanAcceptModalOpen, setPaymentPlanAcceptModalOpen] =
		useState(false);

	const handleXIconBtn = () => {
		setPaymentPlanModalOpen(false);
	};

	const changeActivePlan = () => {
		setPaymentPlanAcceptModalOpen(true);
	};

	const updateData = async () => {
		const jwt = localStorage.getItem('jwt');
	
		if (!jwt) {
			navigate('/');
			return;
		}
		const newPlan = paymentPlan === 'PRO' ? 'LITE' : 'PRO';
	
		try {
			const updatePaymenPlandDto = {
				paymentPlan: newPlan,
			};
	
			await axios.put(`${url}/api/users/paymentPlan`, updatePaymenPlandDto, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			setPaymentPlan(newPlan);
			await fetchData();
			setPaymentPlanAcceptModalOpen(false);
			setPaymentPlanModalOpen(false);
			setError('');
		} catch (e) {
			setError('Edycja planu zakończyła się niepowodzeniem');
		}
	};

	const handleNoBtn = () => {
		setPaymentPlanAcceptModalOpen(false);
		setPaymentPlanModalOpen(false);
	};

	return (
		<div className={styles.background}>
			<div className={styles.component}>
				<button className={styles.xBtn} onClick={handleXIconBtn}>
					<XIcon />
				</button>
				<h1>Zmień swój plan</h1>
				<p className={styles.error}>{error}</p>
				<div className={styles.plans}>
					<div
						className={`${styles.tile} ${
							activePlan === 'LITE' && styles.active
						}`}>
						<h2>Plan LITE</h2>
						<p>POPULARNY</p>
						<ul>
							<li>Darmowy</li>
							<li>3 faktury w miesiącu</li>
							<li>Brak statystyk</li>
							<li>Historia faktur ograniczona do 3 ostatnich</li>
							<li>Brak zapisu danych firm</li>
						</ul>
						<div className={styles.btns}>
							{paymentPlan === 'LITE' ? (
								<p className={styles.important}>AKTUALNY PLAN</p>
							) : (
								<button className={styles.planBtn} onClick={changeActivePlan}>
									Zmieniam na LITE
								</button>
							)}
						</div>
					</div>
					<div
						className={`${styles.tile} ${
							activePlan === 'PRO' && styles.active
						}`}>
						<h2>Plan PRO</h2>
						<p>POLECANY</p>
						<ul>
							<li>9 zł</li>
							<li>Brak limitu faktur</li>
							<li>Rozbudowane statystyki</li>
							<li>Cała historia wygenerowanych faktur</li>
							<li>Zapis danych firm</li>
						</ul>
						<div className={styles.btns}>
							{paymentPlan === 'PRO' ? (
								<p className={styles.important}>AKTUALNY PLAN</p>
							) : (
								<button className={styles.planBtn} onClick={changeActivePlan}>
									Zmieniam na PRO
								</button>
							)}
						</div>
					</div>
				</div>
				{paymentPlanAcceptModalOpen && (
					<AcceptModal
						title='Czy chcesz zmienić swój plan?'
						onYesFunction={updateData}
						onNoFunction={handleNoBtn}
					/>
				)}
			</div>
		</div>
	);
};

export default PaymentPlanModal;
