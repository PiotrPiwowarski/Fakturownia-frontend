import styles from './Modals.module.css';
import XIcon from '../../img/XIcon';

const InvoiceModal = ({ showDetails, setShowDetails }) => {

    const handleXIconBtn = () => {
		setShowDetails(false);
	};

	return (
		<div className={showDetails ? styles.show : `${styles.hide} ${styles.background}`}>
			<div className={styles.background}>
				<div className={styles.component}>
                    <button className={styles.xBtn} onClick={handleXIconBtn}>
					<XIcon />
				</button>
                </div>
			</div>
		</div>
	);
};

export default InvoiceModal;
