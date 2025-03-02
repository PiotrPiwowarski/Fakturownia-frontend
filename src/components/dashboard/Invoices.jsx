import styles from './Dashboard.module.css';
import SearchIcon from './../../img/SearchIcon';
import InvoiceList from '../invoice/InvoiceList';

const Invoices = () => {
	return (
		<div className={styles.vertical}>
			<div className={styles.sectionHead}>
				<h1>Faktury.</h1>
			</div>
			<button className={styles.createInvoiceButton}>Stwórz nową fakturę</button>
			<InvoiceList />
		</div>
	);
};

export default Invoices;
