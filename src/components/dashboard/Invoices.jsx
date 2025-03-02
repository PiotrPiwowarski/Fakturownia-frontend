import styles from './Dashboard.module.css';
import SearchIcon from './../../img/SearchIcon';
import InvoiceList from '../invoice/InvoiceList';

const Invoices = () => {
	return (
		<div className={styles.vertical}>
			<div className={styles.sectionHead}>
				<h1>Faktury.</h1>
				<p>Za okres:</p>
				<div className={styles.horizontal}>
					<label>
						Data początkowa
						<input type='date' />
					</label>
					<label>
						Data końcowa
						<input type='date' />
					</label>
					<button className={styles.userButton}>
						<SearchIcon />
					</button>
				</div>
			</div>
			<button className={styles.createInvoiceButton}>Stwórz nową fakturę</button>
			<InvoiceList />
		</div>
	);
};

export default Invoices;
