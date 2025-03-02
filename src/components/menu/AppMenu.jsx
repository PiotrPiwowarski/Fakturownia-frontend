import styles from './Menu.module.css';

const AppMenu = ({
	activePage,
	handleStatisticsBtn,
	handleInvoicesBtn,
	handleCompaniesBtn,
}) => {
	return (
		<div className={styles.menu}>
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

export default AppMenu;
