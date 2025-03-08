import styles from './Dashboard.module.css';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { useState } from 'react';
import UserIcon from '../../img/UserIcon';
import MenuIcon from '../../img/MenuIcon';
import Invoices from './Invoices';
import UserMenu from '../menu/UserMenu';
import LiteMenu from '../menu/LiteMenu';
import Settings from '../user/Settings';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUrlStore } from '../useStore';

const DashboardLite = () => {
	const { url } = useUrlStore();
	const navigate = useNavigate();
	const [activeMenu, setActiveMenu] = useState('app');
	const [activePage, setActivePage] = useState('invoices');

	const handleAppMenuBtn = () => {
		setActiveMenu('app');
	};

	const handleUserMenuBtn = () => {
		setActiveMenu('user');
	};

	const handleInvoicesBtn = () => {
		setActivePage('invoices');
	};

	const handleUserAccountBtn = () => {
		setActivePage('userAccount');
	};

	const handleSettingsBtn = () => {
		setActivePage('settings');
	};

	const handleLogoutBtn = async () => {
		try {
			const jwt = localStorage.getItem('jwt');
			if (!jwt) {
				return;
			}

			await axios.post(
				`${url}/api/users/logout`,
				{},
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${jwt}`,
					},
				}
			);
		} catch (e) {
			console.error(e.message);
		}
		try {
			localStorage.removeItem('jwt');
			localStorage.removeItem('role');
			localStorage.removeItem('paymentPlan');
		} catch (e) {
			console.log(e.message);
		}
		navigate('/');
	};

	const handleLogoBtn = () => {
		setActivePage('invoices');
	};

	return (
		<div className={styles.bgc}>
			<div className={styles.header}>
				<button className={styles.userButton} onClick={handleAppMenuBtn}>
					<MenuIcon className={styles.userIcon} />
				</button>
				<button className={styles.logoButton} onClick={handleLogoBtn}>
					<Logo className={styles.logo} />
				</button>
				<button className={styles.userButton} onClick={handleUserMenuBtn}>
					<UserIcon className={styles.userIcon} />
				</button>
			</div>
			<div className={styles.main}>
				<div className={styles.dashboard}></div>
				<div className={styles.vertical}>
					{activeMenu === 'app' ? (
						<LiteMenu
							activePage={activePage}
							handleInvoicesBtn={handleInvoicesBtn}
						/>
					) : (
						<UserMenu
							activePage={activePage}
							handleUserAccountBtn={handleUserAccountBtn}
							handleSettingsBtn={handleSettingsBtn}
							handleLogoutBtn={handleLogoutBtn}
						/>
					)}
					{activePage === 'invoices' ? (
						<Invoices />
					) : (
						<Settings />
					)}
				</div>
			</div>
			<div className={styles.footer}>
				<p>Copyright &copy; 2025 All Rights Reserved</p>
			</div>
		</div>
	);
};

export default DashboardLite;
