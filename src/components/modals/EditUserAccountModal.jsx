import styles from './Modals.module.css';
import { useState } from 'react';
import axios from 'axios';
import XIcon from '../../img/XIcon';
import AcceptModal from './AcceptModal';
import { useUrlStore } from '../useStore';
import { useNavigate } from 'react-router-dom';

const EditUserAccountModal = ({
	setModalOpen,
	firstName,
	lastName,
	email,
	phoneNumber,
	fetchData,
	setError,
}) => {
	const [acceptModalOpen, setAcceptModalOpen] = useState(false);
	const navigate = useNavigate();
	const { url } = useUrlStore();

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
			setAcceptModalOpen(false);
			setModalOpen(false);
			setError('');
		} catch (e) {
			console.log(e.message);
			setError('Edycja danych zakończyła się niepowodzeniem');
		}
	};

	const handleNoBtn = () => {
		setAcceptModalOpen(false);
		setModalOpen(false);
	};

	return (
		<div className={styles.background}>
			<div className={styles.component}>
				<h2>Zmień dane</h2>
				<button className={styles.xBtn} onClick={handleXIconBtn}>
					<XIcon />
				</button>
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

				<button className={styles.yesBtn} onClick={handleChangeBtn}>
					Zmień
				</button>
			</div>
			{acceptModalOpen && (
				<AcceptModal
					title='Czy na pewno chcesz zmienić dane?'
					onYesFunction={updateData}
					onNoFunction={handleNoBtn}
				/>
			)}
		</div>
	);
};

export default EditUserAccountModal;
