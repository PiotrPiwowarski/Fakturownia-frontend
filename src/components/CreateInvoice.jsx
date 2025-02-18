import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddCompany from './AddCompany';
import AddInvoicePosition from './AddInvoicePosition';
import axios from 'axios';
import useStore from './useStore';
import MainBar from './MainBar';

const CreateInvoice = () => {
	const navigate = useNavigate();
	const {url} = useStore();

	const [error, setError] = useState('');
	const [sellerCompanyVisibility, setSellerCompanyVisibility] = useState(false);
	const [buyerCompanyVisibility, setBuyerCompanyVisibility] = useState(false);
	const [positionVisibility, setPositionVisibility] = useState(false);

	const [dateOfIssue, setDateOfIssue] = useState('');
	const [dateOfSale, setDateOfSale] = useState('');
	const [originality, setOriginality] = useState('ORIGINAL');
	const [methodOfPayment, setMethodOfPayment] = useState('TRANSFER');
	const [deadlineOfPayment, setDeadlineOfPayment] = useState('');

	const [sellerCompanyName, setSellerCompanyName] = useState('');
	const [sellerCompanyStreet, setSellerCompanyStreet] = useState('');
	const [sellerCompanyBuildingNumber, setSellerCompanyBuildingNumber] = useState('');
	const [sellerCompanyPostCode, setSellerCompanyPostCode] = useState('');
	const [sellerCompanyCity, setSellerCompanyCity] = useState('');
	const [sellerCompanyNip, setSellerCompanyNip] = useState('')
	const [sellerCompanyBankName, setSellerCompanyBankName] = useState(null);
	const [sellerCompanyBankAccountNumber, setSellerCompanyBankAccountNumber] = useState(null);

	const [buyerCompanyName, setBuyerCompanyName] = useState('');
	const [buyerCompanyStreet, setBuyerCompanyStreet] = useState('');
	const [buyerCompanyBuildingNumber, setBuyerCompanyBuildingNumber] = useState('');
	const [buyerCompanyPostCode, setBuyerCompanyPostCode] = useState('');
	const [buyerCompanyCity, setBuyerCompanyCity] = useState('');
	const [buyerCompanyNip, setBuyerCompanyNip] = useState('')
	const [buyerCompanyBankName, setBuyerCompanyBankName] = useState(null);
	const [buyerCompanyBankAccountNumber, setBuyerCompanyBankAccountNumber] = useState(null);

	const [newInvoicePositionList, setNewInvoicePositionList] = useState([]);

	const handleSellerCompanyVisibilityBtn = () => {
		setSellerCompanyVisibility((prev) => !prev);
	};

	const handleBuyerCompanyVisibilityBtn = () => {
		setBuyerCompanyVisibility((prev) => !prev);
	};

	const handlePositionVisibilityBtn = () => {
		setPositionVisibility(prev => !prev);
	}

	const handleCreateInvoiceBtn = async () => {
		setError('asdfjhalsdkjfhlajdhfklsa')
		if(
			dateOfIssue === '' || 
			dateOfSale === '' || 
			originality === '' || 
			methodOfPayment === '' ||
			deadlineOfPayment === '' ||
	
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
			const token = localStorage.getItem('jwt');
			if(!token) {
				setError('Brak tokenu autoryzacyjnego');
				return;
			}
            try {
                const invoice = {
					dateOfIssue,
					dateOfSale,
					originality,
					methodOfPayment,
					deadlineOfPayment,
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
					buyerCompanyBankAccountNumber,
					newInvoicePositionList
				}
    
                const response = await axios.post(`${url}/api/invoices/add`, invoice, {
                    headers: {
                        'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`
                    }
                });

                console.log(response);
    
                setError('');
                navigate('/yourInvoices');
            } catch(e) {
                setError(e.response.data);
            }
		}
	};

	return (
		<div className='app'>
			<MainBar />
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
						<option value='ORIGINAL'>oryginał</option>
						<option value='COPY'>kopia</option>
					</select>
				</label>
				<label className='app-label'>
					* sposób zapłaty
					<select
						className='app-input'
						type='text'
						value={methodOfPayment}
						onChange={(e) => setMethodOfPayment(e.target.value)}>
						<option value='CASH'>gotówka</option>
						<option value='CARD'>karta</option>
						<option value='TRANSFER'>przelew</option>
					</select>
				</label>
				<label className='app-label'>
					* termin zapłaty
					<input
						className='app-input'
						type='date'
						value={deadlineOfPayment}
						placeholder=''
						onChange={(e) => setDeadlineOfPayment(e.target.value)}
					/>
				</label>
				<div className='app-input-button-div'>
					<label>* dane sprzedawcy</label>
					<button
						className='app-input-button'
						onClick={handleSellerCompanyVisibilityBtn}>
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
						onClick={handleBuyerCompanyVisibilityBtn}>
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
					<button className='app-input-button' onClick={handlePositionVisibilityBtn}>otwórz listę pozycji</button>
				</div>
				<AddInvoicePosition visibility={positionVisibility ? 'app-visible' : 'app-hidden'} setNewInvoicePositionList={setNewInvoicePositionList} />
				<p className='app-paragraph'>* wymagane pola</p>
				<button className='app-button'  onClick={handleCreateInvoiceBtn}>
					stwórz nową fakturę
				</button>
			</div>
		</div>
	);
};

export default CreateInvoice;
