import { useState } from 'react';

const AddCompany = ({
	visibility,
	sectionHeader,
	companyName,
	setCompanyName,
	street,
	setStreet,
	buildingNumber,
	setBuildingNumber,
	postCode,
	setPostCode,
	city,
	setCity,
	nip,
	setNip,
	bankName,
	setBankName,
	bankAccountNumber,
	setBankAccountNumber,
}) => {
	const [buttonUnderline, setButtonUnderline] = useState('enter-manually');

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

	const onClickEnterManually = () => {
		setButtonUnderline('enter-manually');
	};

	const onClickChooseFrom = () => {
		setButtonUnderline('choose-from');
	};

	return (
		<div className={`app-form ${visibility}`}>
			<h3>{sectionHeader}</h3>
			<div>
				<button
					className={`app-font-button ${
						buttonUnderline === 'enter-manually'
							? 'app-font-button-underline'
							: ''
					}`}
					onClick={onClickEnterManually}>
					wprowadź ręcznie
				</button>
				<button
					className={`app-font-button ${
						buttonUnderline === 'choose-from' ? 'app-font-button-underline' : ''
					}`}
					onClick={onClickChooseFrom}>
					wybierz spośród
				</button>
			</div>
			<label className='app-label'>
				* nazwa firmy
				<input
					className='app-input'
					type='text'
					value={companyName}
					placeholder=''
					onChange={onInputCompanyName}
					required
				/>
			</label>
			<label className='app-label'>
				* ulica
				<input
					className='app-input'
					type='text'
					value={street}
					placeholder=''
					onChange={onInputStreet}
					required
				/>
			</label>
			<label className='app-label'>
				* numer domu
				<input
					className='app-input'
					type='text'
					value={buildingNumber}
					placeholder=''
					onChange={onInputBuildingNumber}
					required
				/>
			</label>
			<label className='app-label'>
				* kod pocztowy
				<input
					className='app-input'
					type='text'
					value={postCode}
					placeholder=''
					onChange={onInputPostCode}
					required
				/>
			</label>
			<label className='app-label'>
				* miasto
				<input
					className='app-input'
					type='text'
					value={city}
					placeholder=''
					onChange={onInputCity}
					required
				/>
			</label>
			<label className='app-label'>
				* nip
				<input
					className='app-input'
					type='text'
					value={nip}
					placeholder=''
					onChange={onInputNip}
					required
				/>
			</label>
			<label className='app-label'>
				&nbsp;&nbsp;nazwa banku
				<input
					className='app-input'
					type='text'
					value={bankName}
					placeholder=''
					onChange={onInputBankName}
				/>
			</label>
			<label className='app-label'>
				&nbsp;&nbsp;numer konta
				<input
					className='app-input'
					type='text'
					value={bankAccountNumber}
					placeholder=''
					onChange={onInputBankAccountNumber}
				/>
			</label>
		</div>
	);
};

export default AddCompany;
