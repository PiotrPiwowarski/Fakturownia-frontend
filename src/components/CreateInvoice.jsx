import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCompany from './AddCompany';
import AddInvoicePosition from './AddInvoicePosition';

const CreateInvoice = () => {
	const navigate = useNavigate();

	const [error, setError] = useState('');
	const [sellerCompanyVisibility, setSellerCompanyVisibility] = useState(false);
	const [buyerCompanyVisibility, setBuyerCompanyVisibility] = useState(false);
	const [positionVisibility, setPositionVisibility] = useState(false);

	const [dateOfIssue, setDateOfIssue] = useState('');
	const [dateOfSale, setDateOfSale] = useState('');
	const [originality, setOriginality] = useState('original');
	const [methodOfPayment, setMethodOfPayment] = useState('transfer');

	const [sellerCompanyName, setSellerCompanyName] = useState('');
	const [sellerCompanyStreet, setSellerCompanyStreet] = useState('');
	const [sellerCompanyBuildingNumber, setSellerCompanyBuildingNumber] = useState('');
	const [sellerCompanyPostCode, setSellerCompanyPostCode] = useState('');
	const [sellerCompanyCity, setSellerCompanyCity] = useState('');
	const [sellerCompanyNip, setSellerCompanyNip] = useState('')
	const [sellerCompanyBankName, setSellerCompanyBankName] = useState('');
	const [sellerCompanyBankAccountNumber, setSellerCompanyBankAccountNumber] = useState('');

	const [buyerCompanyName, setBuyerCompanyName] = useState('');
	const [buyerCompanyStreet, setBuyerCompanyStreet] = useState('');
	const [buyerCompanyBuildingNumber, setBuyerCompanyBuildingNumber] = useState('');
	const [buyerCompanyPostCode, setBuyerCompanyPostCode] = useState('');
	const [buyerCompanyCity, setBuyerCompanyCity] = useState('');
	const [buyerCompanyNip, setBuyerCompanyNip] = useState('')
	const [buyerCompanyBankName, setBuyerCompanyBankName] = useState('');
	const [buyerCompanyBankAccountNumber, setBuyerCompanyBankAccountNumber] = useState('');

	const onClickHeader = () => {
		navigate('/yourInvoices');
	};

	const onClickSellerCompanyVisibility = () => {
		setSellerCompanyVisibility((prev) => !prev);
	};

	const onClickBuyerCompanyVisibility = () => {
		setBuyerCompanyVisibility((prev) => !prev);
	};

	const onClickPositionVisibility = () => {
		setPositionVisibility(prev => !prev);
	}

	const onClickCreateInvoice = () => {
		setError('asdfjhalsdkjfhlajdhfklsa')
		if(
			dateOfIssue === '' || 
			dateOfSale === '' || 
			originality === '' || 
			methodOfPayment === '' ||
	
			sellerCompanyName === '' || 
			sellerCompanyStreet === '' || 
			sellerCompanyBuildingNumber === '' || 
			sellerCompanyPostCode === '' || 
			sellerCompanyCity === '' || 
			sellerCompanyNip === '' || 
	
			buyerCompanyName === '' || 
			buyerCompanyStreet === '' || 
			buyerCompanyBuildingNumber === '' || 
			buyerCompanyPostCode === '' || 
			buyerCompanyCity === '' || 
			buyerCompanyNip === ''
		) {
			setError('Należy wypełnić wszystkie pola oznaczone jako obowiązkowe');
		} else {
			const invoice = {
				dateOfIssue,
				dateOfSale,
				originality,
				methodOfPayment,
				sellerCompanyName,
				sellerCompanyStreet,
				sellerCompanyBuildingNumber,
				sellerCompanyPostCode,
				sellerCompanyCity,
				sellerCompanyNip,
				sellerCompanyBankName,
				sellerCompanyBankAccountNumber,
				buyerCompanyName,
				buyerCompanyStreet,
				buyerCompanyBuildingNumber,
				buyerCompanyPostCode,
				buyerCompanyCity,
				buyerCompanyNip,
				buyerCompanyBankName,
				buyerCompanyBankAccountNumber
			}
		}
	};

	return (
		<div className='app'>
			<button className='app-h1-button' onClick={onClickHeader}>
				FAKTUROWNIA
			</button>
			<div className='app-form'>
				<h2>Utwórz fakturę</h2>
				<p className='app-error'>{error}</p>
				<label className='app-label'>
					* data wystawienia
					<input
						className='app-input'
						type='date'
						value={dateOfIssue}
						placeholder=''
						onChange={(e) => setDateOfIssue(e.target.value)}
					/>
				</label>
				<label className='app-label'>
					* data sprzedaży
					<input
						className='app-input'
						type='date'
						value={dateOfSale}
						placeholder=''
						onChange={(e) => setDateOfSale(e.target.value)}
					/>
				</label>
				<label className='app-label'>
					* oryginalność
					<select
						className='app-input'
						name='originality'
						value={originality}
						onChange={(e) => setOriginality(e.target.value)}>
						<option value='original'>oryginał</option>
						<option value='copy'>kopia</option>
					</select>
				</label>
				<label className='app-label'>
					* sposób zapłaty
					<select
						className='app-input'
						type='text'
						value={methodOfPayment}
						onChange={(e) => setMethodOfPayment(e.target.value)}>
						<option value='transfer'>przelew</option>
						<option value='cash'>gotówka</option>
					</select>
				</label>
				<label className='app-label'>
					* termin zapłaty
					<input
						className='app-input'
						type='date'
						value={dateOfSale}
						placeholder=''
						onChange={(e) => setDateOfSale(e.target.value)}
					/>
				</label>
				<div className='app-input-button-div'>
					<label>* dane sprzedawcy</label>
					<button
						className='app-input-button'
						onClick={onClickSellerCompanyVisibility}>
						otwórz dane sprzedawcy
					</button>
				</div>
				<AddCompany
					visibility={sellerCompanyVisibility ? 'app-visible' : 'app-hidden'}
					sectionHeader='Dane sprzedawcy'
					companyName={sellerCompanyName}
					setCompanyName={setSellerCompanyName}
					street={sellerCompanyStreet}
					setStreet={setSellerCompanyStreet}
					buildingNumber={sellerCompanyBuildingNumber}
					setBuildingNumber={setSellerCompanyBuildingNumber}
					postCode={sellerCompanyPostCode}
					setPostCode={setSellerCompanyPostCode}
					city={sellerCompanyCity}
					setCity={setSellerCompanyCity}
					nip={sellerCompanyNip}
					setNip={setSellerCompanyNip}
					bankName={sellerCompanyBankName}
					setBankName={setSellerCompanyBankName}
					bankAccountNumber={sellerCompanyBankAccountNumber}
					setBankAccountNumber={setSellerCompanyBankAccountNumber}
				/>
				<div className='app-input-button-div'>
					<label>* dane nabywcy</label>
					<button
						className='app-input-button'
						onClick={onClickBuyerCompanyVisibility}>
						otwórz dane nabywcy
					</button>
				</div>
				<AddCompany
					visibility={buyerCompanyVisibility ? 'app-visible' : 'app-hidden'}
					sectionHeader='Dane nabywcy'
					companyName={buyerCompanyName}
					setCompanyName={setBuyerCompanyName}
					street={buyerCompanyStreet}
					setStreet={setBuyerCompanyStreet}
					buildingNumber={buyerCompanyBuildingNumber}
					setBuildingNumber={setBuyerCompanyBuildingNumber}
					postCode={buyerCompanyPostCode}
					setPostCode={setBuyerCompanyPostCode}
					city={buyerCompanyCity}
					setCity={setBuyerCompanyCity}
					nip={buyerCompanyNip}
					setNip={setBuyerCompanyNip}
					bankName={buyerCompanyBankName}
					setBankName={setBuyerCompanyBankName}
					bankAccountNumber={buyerCompanyBankAccountNumber}
					setBankAccountNumber={setBuyerCompanyBankAccountNumber}
				/>
				<div className='app-input-button-div'>
					<label>* lista pozycji</label>
					<button className='app-input-button' onClick={onClickPositionVisibility}>otwórz listę pozycji</button>
				</div>
				<AddInvoicePosition visibility={positionVisibility ? 'app-visible' : 'app-hidden'} />
				<p className='app-paragraph'>* wymagane pola</p>
				<button className='app-button'  onClick={onClickCreateInvoice}>
					stwórz nową fakturę
				</button>
			</div>
		</div>
	);
};

export default CreateInvoice;
