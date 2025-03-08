import styles from './Dashboard.module.css';
import CompanyList from '../company/CompanyList';

const Invoices = () => {
	return (
		<div className={styles.vertical}>
			<div className={styles.sectionHead}>
				<h1>Firmy.</h1>
			</div>
			<button className={styles.createInvoiceButton}>Dodaj nową firmę</button>
			<CompanyList />
		</div>
	);
};

export default Invoices;
