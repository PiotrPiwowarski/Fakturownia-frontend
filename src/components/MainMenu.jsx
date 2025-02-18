import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const MainMenu = ({visibility, setMenuVisibility}) => {

    const navigate = useNavigate();
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
    }, [visibility]);

    const handleCreateInvoiceBtn = () => {
        navigate('/createInvoice');
        setMenuVisibility(false);
    }

    const handleYourInvoicesBtn = () => {
        navigate('/myInvoices');
        setMenuVisibility(false);
    }

    return (
        <div className={`app-form ${visibility}`}>
            <p className='app-error'>{error}</p>
            <button className="app-button menu-button" onClick={handleCreateInvoiceBtn}>Nowa faktura</button>
            <button className="app-button menu-button" onClick={handleYourInvoicesBtn}>Moje faktury</button>
        </div>
    );
}

export default MainMenu;