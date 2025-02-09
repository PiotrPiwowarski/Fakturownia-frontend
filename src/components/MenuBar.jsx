import Menu from './Menu';
import {useState} from 'react';

const MenuBar = () => {
	const [menuVisibility, setMenuVisibility] = useState(false);

	const onClickMenu = () => {
		setMenuVisibility((prev) => !prev);
	};

	return (
		<div className='menu-bar'>
			<h1>FAKTUROWNIA</h1>
			<button className='app-button main-button' onClick={onClickMenu}>
				Menu
			</button>
			<Menu visibility={menuVisibility ? 'app-visible' : 'app-hidden'} setMenuVisibility={setMenuVisibility} />
		</div>
	);
};

export default MenuBar;
