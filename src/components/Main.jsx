import Menu from './Menu';
import {useState} from 'react';
import Invoice from './Invoice';

const Main = () => {

    const [menuVisibility, setMenuVisibility] = useState(false);

    const onClickMenu = () => {
        setMenuVisibility(prev => !prev);
    }

	return (
		<div  className="app main">
			<h1>FAKTUROWNIA</h1>
            <button className="app-button main-button" onClick={onClickMenu}>Menu</button>
            <Menu visibility={menuVisibility ? 'app-visible' : 'app-hidden'} />
			<h2>Twoje faktury</h2>
            
            <Invoice />

		</div>
	);
};

export default Main;
