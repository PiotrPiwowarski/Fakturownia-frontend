import styles from './Menu.module.css';

const UserMenu = ({
	activePage,
	handleUserAccountBtn,
	handleSettingsBtn,
	handleLogoutBtn,
}) => {
	return (
		<div className={styles.menu}>
			<button
				className={`${styles.menuButton} ${
					activePage === 'userAccount' ? styles.activeButton : ''
				}`}
				onClick={handleUserAccountBtn}>
				Konto
			</button>
			<button
				className={`${styles.menuButton} ${
					activePage === 'settings' ? styles.activeButton : ''
				}`}
				onClick={handleSettingsBtn}>
				Ustawienia
			</button>
			<button className={styles.menuButton} onClick={handleLogoutBtn}>
				Wyloguj się
			</button>
		</div>
	);
};

export default UserMenu;
