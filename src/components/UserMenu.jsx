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

    return (
        <div className={`app-form ${visibility}`}>
            <p className='app-error'>{error}</p>
            <button className="app-button menu-button" onClick={handleYourAccountBtn}>Moje konto</button>
            <button className="app-button menu-button" onClick={onClickLogout}>Wyloguj się</button>
        </div>
    );
}

export default UserMenu;