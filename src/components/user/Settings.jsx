import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import XIcon from '../../img/XIcon';
import { useUrlStore } from '../useStore';
import styles from './User.module.css';

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

const PasswordModal = ({ setPasswordModalOpen, navigate, fetchData, url }) => {
	const [newPassword, setNewPassword] = useState('');
	const [repeatedPassword, setRepeatedPassword] = useState('');
	const [passwordAcceptModalOpen, setPasswordAcceptModalOpen] = useState(false);
	const [error, setError] = useState('');

	const handleXIconBtn = () => {
		setPasswordModalOpen(false);
	};

	const handleChangeBtn = () => {
		if (newPassword.length === 0 || repeatedPassword.length === 0) {
			setError('Należy wypełnić wszystkie pola');
			return;
		}

		if (newPassword !== repeatedPassword) {
			setError('Hasła się różnią');
			return;
		}
		setError('');
		setPasswordAcceptModalOpen(true);
	};

	const handleNewPasswordInput = (e) => {
		setNewPassword(e.target.value);
	};

	const handleRepeatedPasswordInput = (e) => {
		setRepeatedPassword(e.target.value);
	};

	const updateData = async () => {
		const jwt = localStorage.getItem('jwt');

		if (!jwt) {
			navigate('/');
			return;
		}

		setError('');

		try {
			const updatePasswordDto = {
				newPassword,
			};

			await axios.put(`${url}/api/users/password`, updatePasswordDto, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			await fetchData();
			setError('');
		} catch (e) {
			setError('Edycja hasła zakończyła się niepowodzeniem');
		}
	};

	return (
		<div className={styles.modalBgc}>
			<div className={styles.modalContent}>
				<button className={styles.xIcon} onClick={handleXIconBtn}>
					<XIcon />
				</button>
				<h1>Edytuj hasło</h1>
				<p className={styles.error}>{error}</p>
				<label>
					Nowe hasło
					<input
						type='password'
						value={newPassword}
						onChange={handleNewPasswordInput}
					/>
				</label>
				<label>
					Powtórz nowe hasło
					<input
						type='password'
						value={repeatedPassword}
						onChange={handleRepeatedPasswordInput}
					/>
				</label>
				<button className={styles.changeDataButton} onClick={handleChangeBtn}>
					Zmień
				</button>
				{passwordAcceptModalOpen && (
					<PasswordAcceptModal
						setPasswordModalOpen={setPasswordModalOpen}
						setPasswordAcceptModalOpen={setPasswordAcceptModalOpen}
						updateData={updateData}
					/>
				)}
			</div>
		</div>
	);
};

const PasswordAcceptModal = ({
	setPasswordModalOpen,
	setPasswordAcceptModalOpen,
	updateData,
}) => {
	const handleYesBtn = async () => {
		await updateData();
		setPasswordAcceptModalOpen(false);
		setPasswordModalOpen(false);
	};

	const handleNoBtn = () => {
		setPasswordAcceptModalOpen(false);
	};

	return (
		<div className={styles.modalBgc}>
			<div className={styles.modalContent}>
				<p>Czy na pewno chcesz zmienić hasło?</p>
				<div className={styles.buttonSection}>
					<button className={styles.yesButton} onClick={handleYesBtn}>
						Tak
					</button>
					<button className={styles.deleteButton} onClick={handleNoBtn}>
						Nie
					</button>
				</div>
			</div>
		</div>
	);
};

const PaymentPlanModal = ({
	setPaymentPlanModalOpen,
	activePlan,
	navigate,
	url,
	fetchData
}) => {

	const [error, setError] = useState('');
	const [paymentPlan, setPaymentPlan] = useState(activePlan);
	const [paymentPlanAcceptModalOpen, setPaymentPlanAcceptModalOpen] = useState(false);

	const handleXIconBtn = () => {
		setPaymentPlanModalOpen(false);
	};

	const changeActivePlan = () => {
		if(activePlan === 'PRO') {
			setPaymentPlan('LITE');
			console.log('lite');
		} else {
			setPaymentPlan('PRO');
			console.log('pro');
		}
		setPaymentPlanAcceptModalOpen(true);
	}

	const updateData = async () => {
		const jwt = localStorage.getItem('jwt');

		if (!jwt) {
			navigate('/');
			return;
		}

		setError('');

		try {
			const updatePaymenPlandDto = {
				paymentPlan,
			};

			await axios.put(`${url}/api/users/paymentPlan`, updatePaymenPlandDto, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			await fetchData();
			setError('');
		} catch (e) {
			setError('Edycja hasła zakończyła się niepowodzeniem');
		}
	};

	return (
		<div className={styles.modalBgc}>
			<div className={styles.modalContent}>
				<button className={styles.xIcon} onClick={handleXIconBtn}>
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
						<div className={styles.btnDiv}>
							{paymentPlan === 'LITE' ? (
								<p className={styles.important}>AKTUALNY PLAN</p>
							) : (
								<button className={styles.changeDataButton} onClick={changeActivePlan}>
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
						<div className={styles.btnDiv}>
							{paymentPlan === 'PRO' ? (
								<p className={styles.important}>AKTUALNY PLAN</p>
							) : (
								<button className={styles.changeDataButton} onClick={changeActivePlan}>
									Zmieniam na PRO
								</button>
							)}
						</div>
					</div>
				</div>
				{paymentPlanAcceptModalOpen && <PaymentPlanAcceptModal setPaymentPlanAcceptModalOpen={setPaymentPlanAcceptModalOpen} setPaymentPlanModalOpen={setPaymentPlanModalOpen} updateData={updateData} />}
			</div>
		</div>
	);
};

const PaymentPlanAcceptModal = ({setPaymentPlanAcceptModalOpen, setPaymentPlanModalOpen, updateData}) => {
	const handleYesBtn = async () => {
		updateData();
		setPaymentPlanAcceptModalOpen(false);
		setPaymentPlanModalOpen(false);
	};

	const handleNoBtn = () => {
		setPaymentPlanAcceptModalOpen(false);
	};

	return (
		<div className={styles.modalBgc}>
			<div className={styles.modalContent}>
				<p>Czy na pewno chcesz zmienić plan?</p>
				<div className={styles.buttonSection}>
					<button className={styles.yesButton} onClick={handleYesBtn}>
						Tak
					</button>
					<button className={styles.deleteButton} onClick={handleNoBtn}>
						Nie
					</button>
				</div>
			</div>
		</div>
	);
};
