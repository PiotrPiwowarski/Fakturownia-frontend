import Menu from './Menu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../img/UserIcon';

const MainBar = () => {
	const navigate = useNavigate();
	const [menuVisibility, setMenuVisibility] = useState(false);

	const onClickMenu = () => {
		setMenuVisibility((prev) => !prev);
	};

	const onClickHeader = () => {
		navigate('/myInvoices');
	};

	return (
		<div className='menu-bar'>
			<div className='app-menu-bar-positioning'>
				<div className='app-header-positioning'>
					<button className='app-h1-button' onClick={onClickHeader}>
						FAKTUROWNIA
					</button>
				</div>
				<div className='app-user-icon-positioning'>
					<UserIcon />
				</div>
			</div>
			<button className='app-button main-button' onClick={onClickMenu}>
				Menu
			</button>
			<Menu
				visibility={menuVisibility ? 'app-visible' : 'app-hidden'}
				setMenuVisibility={setMenuVisibility}
			/>
		</div>
	);
};

export default MainBar;
