import styles from './Modals.module.css';
import { useState } from 'react';
import axios from 'axios';
import XIcon from '../../img/XIcon';
import AcceptModal from './AcceptModal';

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
			setPasswordAcceptModalOpen(false);
			setPasswordModalOpen(false);
			setError('');
		} catch (e) {
			setError('Edycja hasła zakończyła się niepowodzeniem');
		}
	};

    const handleNoBtn = () => {
        setPasswordAcceptModalOpen(false);
    }

	return (
		<div className={styles.background}>
			<div className={styles.component}>
				<button className={styles.xBtn} onClick={handleXIconBtn}>
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
				<button className={styles.yesBtn} onClick={handleChangeBtn}>
					Zmień
				</button>
				{passwordAcceptModalOpen && (
					<AcceptModal
						title='Czy chcesz zmienić hasło'
						onYesFunction={updateData}
						onNoFunction={handleNoBtn}
					/>
				)}
			</div>
		</div>
	);
};

export default PasswordModal;
