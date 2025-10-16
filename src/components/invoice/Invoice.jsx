import styles from './Invoice.module.css';
import { useState } from 'react';
import { useUrlStore } from '../useStore';
import axios from 'axios';
import AcceptModal from '../modals/AcceptModal';
import { useNavigate } from 'react-router-dom';
import InvoiceModal from '../modals/InvoiceModal';

const Invoice = ({ invoice, setError, fetchData }) => {
	const navigate = useNavigate();
	const { url } = useUrlStore();
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [showDetails, setShowDetails] = useState(false);

	const handleDeleteBtn = () => {
		setIsDeleteModalOpen(true);
	};

	const handleViewButton = () => {
		setShowDetails(prev => !prev);
		console.log(showDetails);
	}

	const deleteInvoice = async () => {
		const jwt = localStorage.getItem('jwt');
		if (!jwt) {
			navigate('/');
			return;
		}
		try {
			await axios.delete(`${url}/api/invoices/${invoice.id}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			fetchData();
			setIsDeleteModalOpen(false);
		} catch (e) {
			setError('Usuwanie faktury zakończone niepowodzeniem');
		}
	};

	return (
		<div className={styles.component}>
			<InvoiceModal showDetails={showDetails} setShowDetails={setShowDetails} />
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
				<button className={styles.previewButton} onClick={handleViewButton}>Podgląd</button>
			</div>
			<div className={styles.delete}>
				<button
					className={styles.deleteButton}
					onClick={handleDeleteBtn}>
					Usuń
				</button>
			</div>
			{isDeleteModalOpen && (
				<AcceptModal
					title='Czy na pewno chcesz usunąć fakturę'
					onYesFunction={deleteInvoice}
					onNoFunction={() => setIsDeleteModalOpen(false)}
				/>
			)}
		</div>
	);
};

export default Invoice;
