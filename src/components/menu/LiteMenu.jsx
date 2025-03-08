import styles from './Menu.module.css';

const LiteMenu = ({
	activePage,
	handleInvoicesBtn,
}) => {
    return (
        <div className={styles.menuLite}>
			<button
				className={`${styles.menuButton} ${
					activePage === 'invoices' ? styles.activeButton : ''
				}`}
				onClick={handleInvoicesBtn}>
				Faktury
			</button>
		</div>
    );
}

export default LiteMenu;