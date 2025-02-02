import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CompanyRegister = () => {
	const navigate = useNavigate();

	const [companyName, setCompanyName] = useState('');
	const [street, setStreet] = useState('');
	const [buildingNumber, setBuildingNumber] = useState('');
	const [postCode, setPostCode] = useState('');
	const [city, setCity] = useState('');
	const [nip, setNip] = useState('');
	const [bankName, setBankName] = useState('');
	const [bankAccountNumber, setBankAccountNumber] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [password, setPassword] = useState('');

	const onInputCompanyName = (e) => {
		setCompanyName(e.target.value);
	};

	const onInputStreet = (e) => {
		setStreet(e.target.value);
	};

	const onInputBuildingNumber = (e) => {
		setBuildingNumber(e.target.value);
	};

	const onInputPostCode = (e) => {
		setPostCode(e.target.value);
	};

	const onInputCity = (e) => {
		setCity(e.target.value);
	};

	const onInputNip = (e) => {
		setNip(e.target.value);
	};

	const onInputBankName = (e) => {
		setBankName(e.target.value);
	};

	const onInputBankAccountNumber = (e) => {
		setBankAccountNumber(e.target.value);
	};

	const onInputEmail = (e) => {
		setEmail(e.target.value);
	};

	const onInputPhoneNumber = (e) => {
		setPhoneNumber(e.target.value);
	};

	const onInputPassword = (e) => {
		setPassword(e.target.value);
	};

	const onClickHeader = () => {
		navigate('/');
	}

	const onClickLogin = () => {
		navigate('/');
	};

	return (
		<div className='app'>
			<button className='app-h1-button' onClick={onClickHeader}>FAKTUROWNIA</button>
			<div className='app-form'>
				<h2>Zarejestruj się</h2>
				<label className='app-label'>
					nazwa firmy
					<input
						className='app-input'
						type='text'
						value={companyName}
						placeholder=''
						onChange={onInputCompanyName}
					/>
				</label>
				<label className='app-label'>
					ulica
					<input
						className='app-input'
						type='text'
						value={street}
						placeholder=''
						onChange={onInputStreet}
					/>
				</label>
				<label className='app-label'>
					numer domu
					<input
						className='app-input'
						type='text'
						value={buildingNumber}
						placeholder=''
						onChange={onInputBuildingNumber}
					/>
				</label>
				<label className='app-label'>
					kod pocztowy
					<input
						className='app-input'
						type='text'
						value={postCode}
						placeholder=''
						onChange={onInputPostCode}
					/>
				</label>
				<label className='app-label'>
					miasto
					<input
						className='app-input'
						type='text'
						value={city}
						placeholder=''
						onChange={onInputCity}
					/>
				</label>
				<label className='app-label'>
					nip
					<input
						className='app-input'
						type='text'
						value={nip}
						placeholder=''
						onChange={onInputNip}
					/>
				</label>
				<label className='app-label'>
					nazwa banku
					<input
						className='app-input'
						type='text'
						value={bankName}
						placeholder=''
						onChange={onInputBankName}
					/>
				</label>
				<label className='app-label'>
					numer konta
					<input
						className='app-input'
						type='text'
						value={bankAccountNumber}
						placeholder=''
						onChange={onInputBankAccountNumber}
					/>
				</label>
				<label className='app-label'>
					email
					<input
						className='app-input'
						type='email'
						value={email}
						placeholder=''
						onChange={onInputEmail}
					/>
				</label>
				<label className='app-label'>
					numer telefonu
					<input
						className='app-input'
						type='text'
						value={phoneNumber}
						placeholder=''
						onChange={onInputPhoneNumber}
					/>
				</label>
				<label className='app-label'>
					hasło
					<input
						className='app-input'
						type='password'
						value={password}
						placeholder=''
						onChange={onInputPassword}
					/>
				</label>
				<button className='app-button' onClick={onClickLogin}>
					zarejestruj się
				</button>
			</div>
		</div>
	);
};

export default CompanyRegister;
