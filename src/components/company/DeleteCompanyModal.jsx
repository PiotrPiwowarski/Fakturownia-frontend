import styles from './Company.module.css';
import { useUrlStore } from '../useStore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteCompanyModal = ({
	setError,
	company,
	onDeleteSuccess,
	setIsModalOpen,
}) => {
	const { url } = useUrlStore();
	const navigate = useNavigate();

	const handleYesBtn = async () => {
		try {
			const id = company.id;
			const jwt = localStorage.getItem('jwt');
			if(!jwt) {
				navigate('/');
				return;
			}
			console.log(id);
			await axios.delete(`${url}/api/companies/${id}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			onDeleteSuccess();
			setIsModalOpen(false);
			setError('');
		} catch (e) {
			console.log(e.message);
			setError('Usuwanie firmy się nie powiodło');
		}
	};

	const handleNoBtn = () => {
		setIsModalOpen(false);
	};

	return (
		<div className={styles.modalBgc}>
			<div className={styles.modalContent}>
				<p>Czy na pewno chcesz usunąć tą firmę?</p>
				<div className={styles.buttonSection}>
					<button className={styles.deleteButton} onClick={handleYesBtn}>
						Tak
					</button>
					<button className={styles.previewButton} onClick={handleNoBtn}>
						Nie
					</button>
				</div>
			</div>
		</div>
	);
};

export default DeleteCompanyModal;