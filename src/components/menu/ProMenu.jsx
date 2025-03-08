import styles from './Menu.module.css';

const ProMenu = ({
	activePage,
	handleStatisticsBtn,
	handleInvoicesBtn,
	handleCompaniesBtn,
}) => {
	return (
		<div className={styles.menuPro}>
			<button
				className={`${styles.menuButton} ${
					activePage === 'statistics' ? styles.activeButton : ''
				}`}
				onClick={handleStatisticsBtn}>
				Statystyki
			</button>
			<button
				className={`${styles.menuButton} ${
					activePage === 'invoices' ? styles.activeButton : ''
				}`}
				onClick={handleInvoicesBtn}>
				Faktury
			</button>
			<button
				className={`${styles.menuButton} ${
					activePage === 'companies' ? styles.activeButton : ''
				}`}
				onClick={handleCompaniesBtn}>
				Firmy
			</button>
		</div>
	);
};

export default ProMenu;
