import styles from './Invoice.module.css';
import {useState} from 'react';
import { useUrlStore } from '../useStore';
import axios from 'axios';

const Invoice = ({invoice, setError, onDeleteSuccess}) => {

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleDeleteBtn = async () => {
		setIsModalOpen(true);
	};

	return (
		<div className={styles.component}>
			<div className={styles.number}>
				<p>{invoice.invoiceNumber}</p>
			</div>
			<div className={styles.dateOfIssue}>
				<p>{invoice.dateOfIssue}</p>
			</div>
			<div className={styles.customer}>
				<p>{invoice.buyerCompanyName}</p>
			</div>
			<div className={styles.nettoValue}>
				<p>{invoice.sumNetto}</p>
			</div>
			<div className={styles.preview}>
				<button className={styles.previewButton}>Podgląd</button>
			</div>
			<div className={styles.delete}>
				<button className={styles.deleteButton} onClick={handleDeleteBtn}>
					Usuń
				</button>
			</div>
			{isModalOpen && <DeleteInvoiceModal invoice={invoice} setError={setError} onDeleteSuccess={onDeleteSuccess} setIsModalOpen={setIsModalOpen} />}
		</div>
	);
};

export default Invoice;

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
			console.log(e.message);
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
