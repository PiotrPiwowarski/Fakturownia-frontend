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
        navigate('/myInvoices');
        setMenuVisibility(false);
    }

    const onClickYourAccount = () => {
        navigate('/myAccount');
        setMenuVisibility(false);
    }

    const onClickLogout = async () => {
        try {
            const token = localStorage.getItem('jwt');
            if (!token) {
                navigate('/');
                setError('');
                return;
            }
			await axios.post(
                `${url}/api/users/logout`,
                {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }
            );
			localStorage.removeItem('jwt');
			localStorage.removeItem('role');
			navigate('/');
            setError('');
        } catch(e) {
            localStorage.removeItem('jwt');
			localStorage.removeItem('role');
            navigate('/');
        }
    }

    return (
        <div className={`app-form ${visibility}`}>
            <p className='app-error'>{error}</p>
            <button className="app-button menu-button" onClick={onClickCreateInvoice}>Nowa faktura</button>
            <button className="app-button menu-button" onClick={onClickYourInvoices}>Moje faktury</button>
            <button className="app-button menu-button" onClick={onClickYourAccount}>Moje konto</button>
            <button className="app-button menu-button" onClick={onClickLogout}>Wyloguj się</button>
        </div>
    );
}

export default Menu;