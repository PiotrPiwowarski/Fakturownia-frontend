import styles from './Company.module.css';

const AcceptModal = () => {

    const handleYesBtn = () => {

    }

    const handleNoBtn = () => {

    }


    return (
		<div className={styles.modalBgc}>
			<div className={styles.modalContent}>
				<p>Czy na pewno chcesz zmienić dane?</p>
				<div className={styles.buttonSection}>
					<button className={styles.yesButton} onClick={handleYesBtn}>
						Tak
					</button>
					<button className={styles.deleteButton} onClick={handleNoBtn}>
						Nie
					</button>
				</div>
			</div>
		</div>
	);
}

export default AcceptModal;