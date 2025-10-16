import styles from './User.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useUrlStore } from '../useStore';
import { useNavigate } from 'react-router-dom';
import EditUserAccountModal from '../modals/EditUserAccountModal';

const UserAccount = () => {
	const { url } = useUrlStore();
	const [error, setError] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const navigate = useNavigate();

	const fetchData = async () => {
		try {
			const jwt = localStorage.getItem('jwt');
			if (!jwt) {
				navigate('/');
				return;
			}
			const response = await axios.get(`${url}/api/users`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			const data = response.data;
			setFirstName(data.firstName);
			setLastName(data.lastName);
			setEmail(data.email);
			setPhoneNumber(data.phoneNumber);
			setError('');
		} catch (e) {
			console.log(e.message);
			setError('Błąd pobierania danych użytkownika');
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleEditDataBtn = () => {
		setModalOpen(true);
	};

	return (
		<div className={styles.vertical}>
			<div className={styles.sectionHead}>
				<h1>Twoje konto.</h1>
			</div>
			<div className={styles.userData}>
				<p className={styles.error}>{error}</p>
				<div className={styles.row}>
					<dl className={styles.column}>
						<dt>Imię:</dt>
						<dd>{firstName}</dd>

						<dt>Nazwisko:</dt>
						<dd>{lastName}</dd>
					</dl>
					<dl className={styles.column}>
						<dt>Email:</dt>
						<dd>{email}</dd>

						<dt>Numer telefonu:</dt>
						<dd>{phoneNumber}</dd>
					</dl>
				</div>
				<button className={styles.changeDataButton} onClick={handleEditDataBtn}>
					Edytuj dane
				</button>
				{modalOpen && (
					<EditUserAccountModal
						setModalOpen={setModalOpen}
						firstName={firstName}
						lastName={lastName}
						email={email}
						phoneNumber={phoneNumber}
						fetchData={fetchData}
						setError={setError}
					/>
				)}
			</div>
		</div>
	);
};

export default UserAccount;
