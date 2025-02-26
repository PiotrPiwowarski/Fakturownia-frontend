import { useState } from 'react';
import EnterCompanyManually from './EnterCompanyManually';
import ChooseCompanyFromList from './ChooseCompanyFromList';

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

	const [error, setError] = useState('');

	const handleEnterManuallyBtn = () => {
		setButtonUnderline('enter-manually');
	};

	const handleChooseFromBtn = () => {
		setButtonUnderline('choose-from');
	};

	return (
		<div className={`app-form ${visibility}`}>
			<h3>{sectionHeader}</h3>
			<p className='app-error'>{error}</p>
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
			{
				buttonUnderline === 'enter-manually' ? <EnterCompanyManually
				setCompanyName={setCompanyName}
				setStreet={setStreet}
				setBuildingNumber={setBuildingNumber}
				setPostCode={setPostCode}
				setCity={setCity}
				setNip={setNip}
				setBankName={setBankName}
				setBankAccountNumber={setBankAccountNumber}
				companyName={companyName}
				street={street}
				buildingNumber={buildingNumber}
				postCode={postCode}
				city={city}
				nip={nip}
				bankName={bankName}
				bankAccountNumber={bankAccountNumber}
				setError={setError}
			/> : <ChooseCompanyFromList setError={setError} />
			}
		</div>
	);
};

export default AddCompany;
