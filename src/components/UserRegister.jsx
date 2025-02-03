import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useStore from './useStore';

const UserRegister = () => {
    const navigate = useNavigate();
    const {url} = useStore();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const [error, setError] = useState('');

    const onInputFirstName = (e) => {
		setFirstName(e.target.value);
	}

    const onInputLastName = (e) => {
		setLastName(e.target.value);
	}

    const onInputPhoneNumber = (e) => {
		setPhoneNumber(e.target.value);
	}

	const onInputEmail = (e) => {
		setEmail(e.target.value);
	}

	const onInputPassword = (e) => {
		setPassword(e.target.value);
	}

    const onInputRepeatedPassword = (e) => {
        setRepeatedPassword(e.target.value);
    }

	const onClickHeader = () => {
		navigate('/');
	}

	const onClickRegister = async () => {
        if(firstName.length === 0 || lastName.length === 0 || email.length === 0 || password.length === 0) {
            setError('Wymagane pola muszą być wypełnione');
        } else if(password !== repeatedPassword) {
            setError('Powtórzone hasło musi być takie jak pierwotne');
        } else {
            setError('');
            try {
                const newUserDto = {
                    firstName,
                    lastName,
                    phoneNumber,
                    email,
                    password
                }
    
                const response = await axios.post(`${url}/api/users/register`, newUserDto, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                console.log(response);
    
                setError('');
                navigate('/login');
            } catch(e) {
                setError(e.response.data);
            }
        }
	}

    return (
        <div className='app'>
			<button className='app-h1-button' onClick={onClickHeader}>FAKTUROWNIA</button>
			<div className='app-form'>
				<h2>Zarejestruj się</h2>
                <p className='app-error'>{error}</p>
                <label className='app-label'>
					* imię
					<input
						className='app-input'
						type='text'
						value={firstName}
						placeholder=''
						onChange={onInputFirstName}
					/>
				</label>
                <label className='app-label'>
					* nazwisko
					<input
						className='app-input'
						type='text'
						value={lastName}
						placeholder=''
						onChange={onInputLastName}
					/>
				</label>
                <label className='app-label'>
					nr. telefonu
					<input
						className='app-input'
						type='text'
						value={phoneNumber}
						placeholder=''
						onChange={onInputPhoneNumber}
					/>
				</label>
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
                <label className='app-label'>
					* powtórz hasło
					<input
						className='app-input'
						type='password'
						value={repeatedPassword}
						placeholder=''
						onChange={onInputRepeatedPassword}
					/>
				</label>
                <p className='app-paragraph'>* wymagane pola</p>
                <button className='app-button' onClick={onClickRegister}>zarejestruj się</button>
			</div>
		</div>
    );
}

export default UserRegister;