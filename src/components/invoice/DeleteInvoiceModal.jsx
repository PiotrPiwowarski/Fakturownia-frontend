import styles from './Invoice.module.css';
import axios from 'axios';
import { useUrlStore } from '../useStore';

const DeleteInvoiceModal = ({
	invoice,
	setError,
	onDeleteSuccess,
	setIsModalOpen,
}) => {
	const { url } = useUrlStore();

	const handleYesBtn = async () => {
		try {
			setError('');
			const id = invoice.id;
			console.log(id);
			const jwt = localStorage.getItem('jwt');
			await axios.delete(`${url}/api/invoices/${id}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			onDeleteSuccess();
			setIsModalOpen(false);
		} catch (e) {
			setError('Usuwanie faktury się nie powiodło');
		}
	};

	const handleNoBtn = () => {
		setIsModalOpen(false);
	};

	return (
		<div className={styles.modalBgc}>
			<div className={styles.deleteModalContent}>
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

export default DeleteInvoiceModal;
