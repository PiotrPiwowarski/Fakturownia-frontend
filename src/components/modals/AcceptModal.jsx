import styles from './Modals.module.css';
import XIcon from '../../img/XIcon';
import { useState } from 'react';

const AcceptModal = ({ title, onYesFunction, onNoFunction }) => {
	const [error, setError] = useState('');

	return (
		<div className={styles.background}>
			<div className={styles.component}>
				<button className={styles.xBtn} onClick={onNoFunction}>
					<XIcon />
				</button>
				<p>{title}</p>
				<p className={styles.error}>{error}</p>
				<button
					className={styles.yesBtn}
					onClick={() => onYesFunction(setError)}>
					Tak
				</button>
			</div>
		</div>
	);
};

export default AcceptModal;
