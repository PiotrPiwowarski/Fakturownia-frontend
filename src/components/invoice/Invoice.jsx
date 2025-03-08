import styles from './Invoice.module.css';
import {useState} from 'react';
import DeleteInvoiceModal from './DeleteInvoiceModal';

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
