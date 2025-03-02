import styles from './Dashboard.module.css';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { useState } from 'react';
import UserIcon from '../../img/UserIcon';
import MenuIcon from './../../img/MenuIcon';
import Statistics from './Statistics';
import Invoices from './Invoices';
import Companies from './Companies';
import UserMenu from '../menu/UserMenu';
import AppMenu from '../menu/AppMenu';
import UserAccount from '../user/UserAccount';
import Settings from '../user/Settings';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	const navigate = useNavigate();
	const [activeMenu, setActiveMenu] = useState('app');
	const [activePage, setActivePage] = useState('statistics');
	const [error, setError] = useState('');

	const handleAppMenuBtn = () => {
		setActiveMenu('app');
	};

	const handleUserMenuBtn = () => {
		setActiveMenu('user');
	};

	const handleStatisticsBtn = () => {
		setActivePage('statistics');
	};

	const handleInvoicesBtn = () => {
		setActivePage('invoices');
	};

	const handleCompaniesBtn = () => {
		setActivePage('companies');
	};

	const handleUserAccountBtn = () => {
		setActivePage('userAccount');
	};

	const handleSettingsBtn = () => {
		setActivePage('settings');
	};

	const handleLogoutBtn = () => {
		try {

		} catch(e) {
			setError();
		}
		navigate('/');
	};

	const handleLogoBtn = () => {
		setActivePage('statistics');
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
						<AppMenu
							activePage={activePage}
							handleStatisticsBtn={handleStatisticsBtn}
							handleInvoicesBtn={handleInvoicesBtn}
							handleCompaniesBtn={handleCompaniesBtn}
						/>
					) : (
						<UserMenu
							activePage={activePage}
							handleUserAccountBtn={handleUserAccountBtn}
							handleSettingsBtn={handleSettingsBtn}
							handleLogoutBtn={handleLogoutBtn}
						/>
					)}
					{activePage === 'statistics' ? (
						<Statistics />
					) : activePage === 'invoices' ? (
						<Invoices />
					) : activePage === 'companies' ? (
						<Companies />
					) : activePage === 'userAccount' ? (
						<UserAccount />
					) : (
						<Settings />
					)}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
