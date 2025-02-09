import {useState} from 'react';
import Invoice from './Invoice';
import MenuBar from './MenuBar';

const YourInvoices = () => {

    const [menuVisibility, setMenuVisibility] = useState(false);

    const onClickMenu = () => {
        setMenuVisibility(prev => !prev);
    }

	return (
		<div  className="app main">
			<MenuBar />
			<h2>Twoje faktury</h2>
            
            <Invoice />

		</div>
	);
};

export default YourInvoices;
