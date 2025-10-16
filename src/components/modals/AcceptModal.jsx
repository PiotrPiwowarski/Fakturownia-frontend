import styles from './Modals.module.css';
import { useState } from 'react';

const AcceptModal = ({ title, onYesFunction, onNoFunction }) => {
	const [error, setError] = useState('');

	return (
		<div className={styles.background}>
			<div className={styles.component}>
				<p>{title}</p>
				<p className={styles.error}>{error}</p>
				<div>
					<button
						className={styles.yesBtn}
						onClick={() => onYesFunction(setError)}>
						Tak
					</button>
					<button className={styles.noBtn} onClick={onNoFunction}>
						Nie
					</button>
				</div>
			</div>
		</div>
	);
};

export default AcceptModal;
