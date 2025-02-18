import MainMenu from './MainMenu';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../img/UserIcon';
import MenuIcon from '../img/MenuIcon';
import UserMenu from './UserMenu';

const MainBar = () => {
	const navigate = useNavigate();
	const [mainMenuVisibility, setMainMenuVisibility] = useState(false);
	const [userMenuVisibility, setUserMenuVisibility] = useState(false);

	const handleClickMainMenuBtn = () => {
		setUserMenuVisibility(false);
		setMainMenuVisibility((prev) => !prev);
	};

	const handleClickUserMenuBtn = () => {
		setMainMenuVisibility(false);
		setUserMenuVisibility((prev) => !prev);
	};

	const handleClickHeader = () => {
		navigate('/myInvoices');
	};

	return (
		<div className='menu-bar'>
			<div className='app-menu-bar-positioning'>
				<div>
					<button className='svg-button' onClick={handleClickMainMenuBtn}>
						<MenuIcon />
					</button>
				</div>
				<button className='app-h1-button' onClick={handleClickHeader}>
					FAKTUROWNIA
				</button>
				<button className='svg-button' onClick={handleClickUserMenuBtn}>
					<UserIcon />
				</button>
			</div>
			<MainMenu
				visibility={mainMenuVisibility ? 'app-visible' : 'app-hidden'}
				setMenuVisibility={setMainMenuVisibility}
			/>
			<UserMenu
				visibility={userMenuVisibility ? 'app-visible' : 'app-hidden'}
				setMenuVisibility={setUserMenuVisibility}
			/>
		</div>
	);
};

export default MainBar;
