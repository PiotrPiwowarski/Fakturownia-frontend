import styles from './Dashboard.module.css';
import InvoiceList from '../invoice/InvoiceList';
import AddNewInvoiceModal from '../invoice/AddNewInvoiceModal';
import {useState} from 'react';

const Invoices = () => {

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleAddNewInvoiceBtn = () => {
		setIsModalOpen(true);
	}

	return (
		<div className={styles.vertical}>
			<div className={styles.sectionHead}>
				<h1>Faktury.</h1>
			</div>
			<button className={styles.createInvoiceButton} onClick={handleAddNewInvoiceBtn}>Dodaj nową fakturę</button>
			{isModalOpen && <AddNewInvoiceModal setIsModalOpen={setIsModalOpen} />}
			<InvoiceList />
		</div>
	);
};

export default Invoices;
