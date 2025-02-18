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

	const handleCompanyNameInput = (e) => {
		setCompanyName(e.target.value);
	};

	const handleStreetInput = (e) => {
		setStreet(e.target.value);
	};

	const handleBuildingNumberInput = (e) => {
		setBuildingNumber(e.target.value);
	};

	const handlePostCodeInput = (e) => {
		setPostCode(e.target.value);
	};

	const handleCityInput = (e) => {
		setCity(e.target.value);
	};

	const handleNipInput = (e) => {
		setNip(e.target.value);
	};

	const handleBankNameInput = (e) => {
		setBankName(e.target.value);
	};

	const handleBankAccountNumberInput = (e) => {
		setBankAccountNumber(e.target.value);
	};

	const handleEnterManuallyBtn = () => {
		setButtonUnderline('enter-manually');
	};

	const handleChooseFromBtn = () => {
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
					onClick={handleEnterManuallyBtn}>
					wprowadź ręcznie
				</button>
				<button
					className={`app-font-button ${
						buttonUnderline === 'choose-from' ? 'app-font-button-underline' : ''
					}`}
					onClick={handleChooseFromBtn}>
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
					onChange={handleCompanyNameInput}
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
					onChange={handleStreetInput}
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
					onChange={handleBuildingNumberInput}
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
					onChange={handlePostCodeInput}
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
					onChange={handleCityInput}
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
					onChange={handleNipInput}
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
					onChange={handleBankNameInput}
				/>
			</label>
			<label className='app-label'>
				&nbsp;&nbsp;numer konta
				<input
					className='app-input'
					type='text'
					value={bankAccountNumber}
					placeholder=''
					onChange={handleBankAccountNumberInput}
				/>
			</label>
		</div>
	);
};

export default AddCompany;
