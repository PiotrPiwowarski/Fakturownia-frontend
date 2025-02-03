import Menu from './Menu';
import {useState} from 'react';

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
			<div className="app-form">
				<h2>Twoje faktury</h2>
			</div>
		</div>
	);
};

export default Main;
