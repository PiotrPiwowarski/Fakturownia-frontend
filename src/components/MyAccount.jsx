import useStore from './useStore';
import MainBar from './MainBar';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MyAccount = () => {
	const { url } = useStore();
	const [error, setError] = useState('');
	const [userData, setUserData] = useState('');

	useEffect(() => {
		const fetchUserData = async () => {
			const token = localStorage.getItem('jwt');
			if (!token) {
				setError('Brak tokenu autoryzacyjnego');
				return;
			}
			try {
				const response = await axios.get(`${url}/api/users`, {
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
				});
				setUserData(response.data);
				console.log(response.data);
				setError('');
			} catch (e) {
				setError('Wystąpił błąd podczas pobierania danych konta');
			}
		};

		fetchUserData();
	}, [url]);

	return (
		<div className='app main'>
			<MainBar />
			<div className='app-form'>
				<h2>Moje konto</h2>
				<p className='app-error'>{error.message}</p>
				<div className='user-data'>
					<div>
						<p className='invoice-font'>imię</p>
                        <p className='invoice-font'>nazwisko</p>
                        <p className='invoice-font'>numer telefonu</p>
                        <p className='invoice-font'>email</p>
                        <p className='invoice-font'>hasło</p>
					</div>
					<div>
						<p className='invoice-font'>{userData.firstName}</p>
                        <p className='invoice-font'>{userData.lastName}</p>
                        <p className='invoice-font'>{userData.phoneNumber !== null ? userData.phoneNumber : 'brak danych'}</p>
                        <p className='invoice-font'>{userData.email}</p>
                        <p className='invoice-font'>*****</p>
					</div>
				</div>
                <button className='app-button'>zmień dane</button>
			</div>
		</div>
	);
};

export default MyAccount;
