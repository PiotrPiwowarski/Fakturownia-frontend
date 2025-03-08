import axios from 'axios';
import { useUrlStore } from '../useStore';
import styles from './Company.module.css';

const DeleteCompanyModal = ({
	setError,
	company,
	onDeleteSuccess,
	setIsModalOpen,
}) => {
	const { url } = useUrlStore();

	const handleYesBtn = async () => {
		try {
			const id = company.id;
			console.log(id);
			const jwt = localStorage.getItem('jwt');
			await axios.delete(`${url}/api/companies/${id}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			onDeleteSuccess();
			setError('');
		} catch (e) {
			setError('Usuwanie firmy się nie powiodło');
		}
	};

	const handleNoBtn = () => {
		setIsModalOpen(false);
	};

	return (
		<div className={styles.modalBgc}>
			<div className={styles.modalContent}>
				<p>Czy na pewno chcesz usunąć tą fakturę?</p>
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
