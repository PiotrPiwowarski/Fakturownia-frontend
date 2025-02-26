import {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useStore from './useStore';

const UserMenu = ({visibility, setMenuVisibility}) => {
    const navigate = useNavigate();
    const {url} = useStore();
    const [error, setError] = useState('');

    useEffect(() => {
        setError('');
    }, [visibility]);

    const handleYourAccountBtn = () => {
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

    const handleDeleteBtn = async () => {
        try {
            const token = localStorage.getItem('jwt');
            if (!token) {
                setError('Usunięcie konta się nie powiodło');
                return;
            }
			await axios.delete(
                `${url}/api/users`,
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
            setError('Usunięcie konta się nie powiodło');
        }
    }

    return (
        <div className={`app-form ${visibility}`}>
            <p className='app-error'>{error}</p>
            <button className="app-button menu-button" onClick={handleYourAccountBtn}>Moje konto</button>
            <button className="app-button menu-button" onClick={onClickLogout}>Wyloguj się</button>
            <button className="app-button menu-button delete-button" onClick={handleDeleteBtn}>Usuń konto</button>
        </div>
    );
}

export default UserMenu;