import Invoice from './Invoice';
import styles from './Invoice.module.css';

const InvoiceList = ({error, setError, invoices, fetchData}) => {

	return (
		<div className={styles.contener}>
			<p className={styles.error}>{error}</p>
			<div className={`${styles.component} ${styles.marginBottom}`}>
				<div className={styles.number}>
					<p>Numer</p>
				</div>
				<div className={styles.dateOfIssue}>
					<p>Data wystawienia</p>
				</div>
				<div className={styles.customer}>
					<p>Klient</p>
				</div>
				<div className={styles.nettoValue}>
					<p>Wartość netto</p>
				</div>
				<div className={styles.preview}></div>
				<div className={styles.delete}></div>
			</div>
			{invoices.length === 0 ? (
				<p>Brak faktur do wyświetlenia.</p>
			) : (
				invoices.map((invoice) => {
					return <Invoice key={invoice.id} invoice={invoice} setError={setError} fetchData={fetchData} />;
				})
			)}
		</div>
	);
};

export default InvoiceList;
