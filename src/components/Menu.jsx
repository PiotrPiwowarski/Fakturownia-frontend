import {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useStore from './useStore';

const Menu = ({visibility, setMenuVisibility}) => {

    const navigate = useNavigate();
    const {url} = useStore();
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
    }, [visibility]);

    const onClickCreateInvoice = () => {
        navigate('/createInvoice');
        setMenuVisibility(false);
    }

    const onClickYourInvoices = () => {
        navigate('/yourInvoices');
        setMenuVisibility(false);
    }

    const onClickYourAccount = () => {
        navigate('/addCompany');
        setMenuVisibility(false);
    }

    const onClickLogout = async () => {
        try {
            const token = localStorage.getItem('jwt');
            if (!token) {
                navigate('/');
                return;
            }
			await axios.post(
				`${url}/api/users/logout`,
				{},
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);
			localStorage.removeItem('jwt');
			localStorage.removeItem('userId');
			localStorage.removeItem('role');
			navigate('/yourCompanies');
            setError('');
        } catch(e) {
            setError("Błąd wylogowania");
        }
    }

    return (
        <div className={`app-form ${visibility}`}>
            <p className='app-error'>{error}</p>
            <button className="app-button menu-button" onClick={onClickCreateInvoice}>Utwórz fakturę</button>
            <button className="app-button menu-button" onClick={onClickYourInvoices}>Twoje faktury</button>
            <button className="app-button menu-button" onClick={onClickYourAccount}>Twoje konto</button>
            <button className="app-button menu-button" onClick={onClickLogout}>Wyloguj się</button>
        </div>
    );
}

export default Menu;