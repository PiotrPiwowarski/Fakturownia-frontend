import styles from './Modals.module.css';
import XIcon from '../../img/XIcon';
import InvoiceView from '../invoice/InvoiceView';

const InvoiceModal = ({ showDetails, setShowDetails, invoice }) => {
	const handleXIconBtn = () => setShowDetails(false);

	return (
		<div
			className={
				showDetails ? styles.show : `${styles.hide} ${styles.background}`
			}>
			<div className={styles.background}>
				<div className={styles.component}>
					<button
						className={styles.xBtn}
						onClick={handleXIconBtn}>
						<XIcon />
					</button>
					<div className={styles.invoiceScroll}>
						<InvoiceView invoice={invoice} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvoiceModal;
