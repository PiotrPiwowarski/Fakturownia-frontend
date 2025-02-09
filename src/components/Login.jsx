import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from './useStore';
import axios from 'axios';

const Login = () => {
	const navigate = useNavigate();
	const {url} = useStore();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const onInputEmail = (e) => {
		setEmail(e.target.value);
	}

	const onInputPassword = (e) => {
		setPassword(e.target.value);
	}

	const onClickHeader = () => {
		navigate('/');
	}

	const onClickLogin = async () => {
		if(email.length === 0 || password.length === 0) {
			setError('Należy wypełnić wszystkie pola oznaczone jako obowiązkowe');
		} else {
			setError('');
			try {
				const loginDto = {
					email,
					password
				}
				const response = await axios.post(`${url}/api/users/login`, loginDto, {
                    headers: {
                        'Content-Type': 'application/json'
                    }});
					localStorage.setItem('jwt', response.data.token);
					localStorage.setItem('userId', response.data.userId);
					localStorage.setItem('role', response.data.role)
				navigate('/yourInvoices');
			} catch(e) {
				setError(e.response.data);
			}
		}
	}

	return (
		<div className='app'>
			<button className='app-h1-button' onClick={onClickHeader}>FAKTUROWNIA</button>
			<div className='app-form'>
				<h2>Zaloguj się</h2>
				<p className='app-error'>{error}</p>
				<label className='app-label'>
					* email
					<input
						className='app-input'
						type='email'
						value={email}
						placeholder=''
						onChange={onInputEmail}
					/>
				</label>
				<label className='app-label'>
					* hasło
					<input
						className='app-input'
						type='password'
						value={password}
						placeholder=''
						onChange={onInputPassword}
					/>
				</label>
				<p className='app-paragraph'>* wymagane pola</p>
                <button className='app-button' onClick={onClickLogin}>zaloguj się</button>
			</div>
		</div>
	);
};

export default Login;
