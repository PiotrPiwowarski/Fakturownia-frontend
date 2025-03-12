import styles from './User.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useUrlStore } from '../useStore';
import { useNavigate } from 'react-router-dom';
import XIcon from '../../img/XIcon';

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
						navigate={navigate}
						setModalOpen={setModalOpen}
						firstName={firstName}
						lastName={lastName}
						email={email}
						phoneNumber={phoneNumber}
						fetchData={fetchData}
						setError={setError}
						url={url}
					/>
				)}
			</div>
		</div>
	);
};

export default UserAccount;

const EditUserAccountModal = ({
	setModalOpen,
	firstName,
	lastName,
	email,
	phoneNumber,
	fetchData,
	setError,
	url,
	navigate,
}) => {
	const [acceptModalOpen, setAcceptModalOpen] = useState(false);

	const [newFirstName, setNewFirstName] = useState(firstName);
	const [newLastName, setNewLastName] = useState(lastName);
	const [newEmail, setNewEmail] = useState(email);
	const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);

	const handleXIconBtn = () => {
		setModalOpen(false);
	};

	const handleFirstNameInput = (e) => {
		setNewFirstName(e.target.value);
	};

	const handleLastNameInput = (e) => {
		setNewLastName(e.target.value);
	};

	const handleEmailInput = (e) => {
		setNewEmail(e.target.value);
	};

	const handlePhoneNumberInput = (e) => {
		setNewPhoneNumber(e.target.value);
	};

	const handleChangeBtn = () => {
		setAcceptModalOpen(true);
	};

	const updateData = async () => {
		if (
			newFirstName.length === 0 ||
			newLastName.length === 0 ||
			newPhoneNumber.length === 0 ||
			newEmail.length === 0
		) {
			setError('Należy wypełnić wszystkie pola');
			return;
		}

		if (!newEmail.includes('@')) {
			setError('Niepoprawny email');
			return;
		}

		const jwt = localStorage.getItem('jwt');

		if (!jwt) {
			navigate('/');
			return;
		}

		setError('');

		try {
			const updateUserDto = {
				firstName: newFirstName,
				lastName: newLastName,
				phoneNumber: newPhoneNumber,
				email: newEmail,
			};

			await axios.put(`${url}/api/users`, updateUserDto, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			await fetchData();
			setError('');
		} catch (e) {
			console.log(e.message);
			setError('Edycja danych zakończyła się niepowodzeniem');
		}
	};

	return (
		<div className={styles.modalBgc}>
			<div className={styles.modalContent}>
				<h2>Zmień dane</h2>
				<button className={styles.xIcon} onClick={handleXIconBtn}>
					<XIcon />
				</button>
				<div className={styles.row}>
					<label>
						Imię
						<input
							type='text'
							value={newFirstName}
							onChange={handleFirstNameInput}
						/>
					</label>
					<label>
						Nazwisko
						<input
							type='text'
							value={newLastName}
							onChange={handleLastNameInput}
						/>
					</label>
				</div>
				<div className={styles.row}>
					<label>
						Email
						<input type='text' value={newEmail} onChange={handleEmailInput} />
					</label>
					<label>
						Numer telefonu
						<input
							type='text'
							value={newPhoneNumber}
							onChange={handlePhoneNumberInput}
						/>
					</label>
				</div>
				<button className={styles.changeDataButton} onClick={handleChangeBtn}>
					Zmień
				</button>
			</div>
			{acceptModalOpen && (
				<AcceptModal
					setAcceptModalOpen={setAcceptModalOpen}
					setModalOpen={setModalOpen}
					setError={setError}
					newFirstName={newFirstName}
					newLastName={newLastName}
					newEmail={newEmail}
					newPhoneNumber={newPhoneNumber}
					updateData={updateData}
				/>
			)}
		</div>
	);
};

const AcceptModal = ({ setAcceptModalOpen, setModalOpen, updateData }) => {
	const handleYesBtn = async () => {
		await updateData();
		setAcceptModalOpen(false);
		setModalOpen(false);
	};

	const handleNoBtn = () => {
		setAcceptModalOpen(false);
	};

	return (
		<div className={styles.modalBgc}>
			<div className={styles.modalContent}>
				<p>Czy na pewno chcesz zmienić dane?</p>
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
