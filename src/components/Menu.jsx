import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useStore from './useStore';

const Menu = ({visibility}) => {

    const navigate = useNavigate();
    const {url} = useStore();
    const [error, setError] = useState('');

    const onClickLogout = async () => {
        try {
            const token = localStorage.getItem('jwt');
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
			navigate('/');
            setError('');
        } catch(e) {
            setError("Błąd wylogowania");
        }
    } 

    return (
        <div className={`app-form ${visibility}`}>
            <p className='app-error'>{error}</p>
            <button className="app-button menu-button">Stwórz fakturę</button>
            <button className="app-button menu-button">Dodaj firmę</button>
            <button className="app-button menu-button">Twoje konto</button>
            <button className="app-button menu-button" onClick={onClickLogout}>Wyloguj się</button>
        </div>
    );
}

export default Menu;