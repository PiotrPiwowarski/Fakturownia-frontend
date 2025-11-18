import styles from './Modals.module.css';
import { useState, useRef } from 'react';
import XIcon from '../../img/XIcon';

const AddNewInvoiceModal = ({ setIsAddModalOpen }) => {
	const modalRef = useRef(null);
	const [displayedStep, setDisplayedStep] = useState('first');
	const [secondStep, setSecondStep] = useState(false);
	const [thirdStep, setThirdStep] = useState(false);

	const [sumNetto, setSumNetto] = useState(0);
	const [sumBrutto, setSumBrutto] = useState(0);
	const [sumVat, setSumVat] = useState(0);

	const [invoiceNumber, setInvoiceNumber] = useState('');
	const [dateOfIssue, setDateOfIssue] = useState('');
	const [dateOfSale, setDateOfSale] = useState('');
	const [originality, setOriginality] = useState('ORIGINAL');
	const [methodOfPayment, setMethodOfPayment] = useState('TRANSFER');
	const [deadlineOfPayment, setDeadlineOfPayment] = useState('');

	const [sellerCompanyName, setSellerCompanyName] = useState('');
	const [sellerCompanyStreet, setSellerCompanyStreet] = useState('');
	const [sellerCompanyBuildingNumber, setSellerCompanyBuildingNumber] =
		useState('');
	const [sellerCompanyPostCode, setSellerCompanyPostCode] = useState('');
	const [sellerCompanyCity, setSellerCompanyCity] = useState('');
	const [sellerCompanyNip, setSellerCompanyNip] = useState('');
	const [sellerCompanyBankName, setSellerCompanyBankName] = useState('');
	const [sellerCompanyBankNumber, setSellerCompanyBankNumber] = useState('');

	const [buyerCompanyName, setBuyerComanyName] = useState('');
	const [buyerCompanyStreet, setBuyerCompanyStreet] = useState('');
	const [buyerCompanyBuildingNumber, setBuyerCompanyBuildingNumber] =
		useState('');
	const [buyerCompanyPostCode, setBuyerCompanyPostCode] = useState('');
	const [buyerCompanyCity, setBuyerCompanyCity] = useState('');
	const [buyerCompanyNip, setBuyerCompanyNip] = useState('');
	const [buyerCompanyBankName, setBuyerCompanyBankName] = useState('');
	const [buyerCompanyBankNumber, setBuyerCompanyBankNumber] = useState('');

	const [invoicePositions, setInvoicePositions] = useState([]);

	const [error, setError] = useState('');

	const scrollToTop = () => {
		if (modalRef.current) {
			modalRef.current.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const handleXIconBtn = () => {
		setSumNetto('');
		setSumBrutto('');
		setSumVat('');

		setInvoiceNumber('');
		setDateOfIssue('');
		setDateOfSale('');
		setOriginality('');
		setMethodOfPayment('');
		setDeadlineOfPayment('');

		setSellerCompanyName('');
		setSellerCompanyStreet('');
		setSellerCompanyBuildingNumber('');
		setSellerCompanyPostCode('');
		setSellerCompanyCity('');
		setSellerCompanyNip('');
		setSellerCompanyBankName('');
		setSellerCompanyBankNumber('');

		setBuyerComanyName('');
		setBuyerCompanyStreet('');
		setBuyerCompanyBuildingNumber('');
		setBuyerCompanyPostCode('');
		setBuyerCompanyCity('');
		setBuyerCompanyNip('');
		setBuyerCompanyBankName('');
		setBuyerCompanyBankNumber('');
		setInvoicePositions([]);

		setError('');

		setIsAddModalOpen(false);
	};

	const handleAddInvoiceBtn = () => {
		if (
			invoicePositions.length === 0 ||
			sumNetto === '' ||
			sumBrutto === '' ||
			sumVat === '' ||
			invoiceNumber === '' ||
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
			sellerCompanyBankName === '' ||
			sellerCompanyBankNumber === '' ||
			buyerCompanyName === '' ||
			buyerCompanyStreet === '' ||
			buyerCompanyBuildingNumber === '' ||
			buyerCompanyPostCode === '' ||
			buyerCompanyCity === '' ||
			buyerCompanyNip === '' ||
			buyerCompanyBankName === '' ||
			buyerCompanyBankNumber === ''
		) {
			setError('Wypełnij wszystkie pola formularza');
			scrollToTop();
		} else {
			setIsAddModalOpen(false);
		}
	};

	return (
		<div className={styles.background}>
			<div
				className={styles.component}
				ref={modalRef}>
				<button
					className={styles.xBtn}
					onClick={handleXIconBtn}>
					<XIcon />
				</button>
				<h2>Stwórz fakturę</h2>

				<div className={styles.multiStepContainer}>
					<div className={styles.center}>
						<div className={`${styles.circle} ${styles.green}`}>1</div>
						Dane faktury
					</div>
					<div className={styles.center}>
						<div className={`${styles.circle} ${secondStep && styles.green}`}>
							2
						</div>
						Dane firm
					</div>
					<div className={styles.center}>
						<div className={`${styles.circle} ${thirdStep && styles.green}`}>
							3
						</div>
						Pozycje faktury
					</div>
				</div>
				{error && <p className={styles.error}>{error}</p>}

				{displayedStep === 'first' ? (
					<FirstStep
						setSecondStep={setSecondStep}
						setDisplayedStep={setDisplayedStep}
						scrollToTop={scrollToTop}
						invoiceNumber={invoiceNumber}
						setInvoiceNumber={setInvoiceNumber}
						dateOfIssue={dateOfIssue}
						setDateOfIssue={setDateOfIssue}
						dateOfSale={dateOfSale}
						setDateOfSale={setDateOfSale}
						originality={originality}
						setOriginality={setOriginality}
						methodOfPayment={methodOfPayment}
						setMethodOfPayment={setMethodOfPayment}
						deadlineOfPayment={deadlineOfPayment}
						setDeadlineOfPayment={setDeadlineOfPayment}
						sumNetto={sumNetto}
						setSumNetto={setSumNetto}
						sumBrutto={sumBrutto}
						setSumBrutto={setSumBrutto}
						sumVat={sumVat}
						setSumVat={setSumVat}
					/>
				) : displayedStep === 'second' ? (
					<SecondStep
						setSecondStep={setSecondStep}
						setThirdStep={setThirdStep}
						setDisplayedStep={setDisplayedStep}
						scrollToTop={scrollToTop}
						sellerCompanyName={sellerCompanyName}
						setSellerCompanyName={setSellerCompanyName}
						sellerCompanyStreet={sellerCompanyStreet}
						setSellerCompanyStreet={setSellerCompanyStreet}
						sellerCompanyBuildingNumber={sellerCompanyBuildingNumber}
						setSellerCompanyBuildingNumber={setSellerCompanyBuildingNumber}
						sellerCompanyPostCode={sellerCompanyPostCode}
						setSellerCompanyPostCode={setSellerCompanyPostCode}
						sellerCompanyCity={sellerCompanyCity}
						setSellerCompanyCity={setSellerCompanyCity}
						sellerCompanyNip={sellerCompanyNip}
						setSellerCompanyNip={setSellerCompanyNip}
						sellerCompanyBankName={sellerCompanyBankName}
						setSellerCompanyBankName={setSellerCompanyBankName}
						sellerCompanyBankNumber={sellerCompanyBankNumber}
						setSellerCompanyBankNumber={setSellerCompanyBankNumber}
						buyerCompanyName={buyerCompanyName}
						setBuyerComanyName={setBuyerComanyName}
						buyerCompanyStreet={buyerCompanyStreet}
						setBuyerCompanyStreet={setBuyerCompanyStreet}
						buyerCompanyBuildingNumber={buyerCompanyBuildingNumber}
						setBuyerCompanyBuildingNumber={setBuyerCompanyBuildingNumber}
						buyerCompanyPostCode={buyerCompanyPostCode}
						setBuyerCompanyPostCode={setBuyerCompanyPostCode}
						buyerCompanyCity={buyerCompanyCity}
						setBuyerCompanyCity={setBuyerCompanyCity}
						buyerCompanyNip={buyerCompanyNip}
						setBuyerCompanyNip={setBuyerCompanyNip}
						buyerCompanyBankName={buyerCompanyBankName}
						setBuyerCompanyBankName={setBuyerCompanyBankName}
						buyerCompanyBankNumber={buyerCompanyBankNumber}
						setBuyerCompanyBankNumber={setBuyerCompanyBankNumber}
					/>
				) : (
					<ThirdStep
						setThirdStep={setThirdStep}
						setDisplayedStep={setDisplayedStep}
						scrollToTop={scrollToTop}
						invoicePositions={invoicePositions}
						setInvoicePositions={setInvoicePositions}
						handleAddInvoiceBtn={handleAddInvoiceBtn}
						setError={setError}
					/>
				)}
			</div>
		</div>
	);
};

export default AddNewInvoiceModal;

const FirstStep = ({
	setSecondStep,
	setDisplayedStep,
	scrollToTop,
	invoiceNumber,
	setInvoiceNumber,
	dateOfIssue,
	setDateOfIssue,
	dateOfSale,
	setDateOfSale,
	originality,
	setOriginality,
	methodOfPayment,
	setMethodOfPayment,
	deadlineOfPayment,
	setDeadlineOfPayment,
	sumNetto,
	setSumNetto,
	sumBrutto,
	setSumBrutto,
	sumVat,
	setSumVat,
}) => {
	const handleNextStepBtn = () => {
		setSecondStep('true');
		setDisplayedStep('second');
		setTimeout(scrollToTop, 0);
	};

	return (
		<div className={styles.subContent}>
			<h3>Dane faktury</h3>
			<div className={styles.formPosition}>
				<label>
					Numer faktury
					<input
						type='text'
						value={invoiceNumber}
						onChange={(e) => setInvoiceNumber(e.target.value)}
					/>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Data wystawienia
					<input
						type='date'
						value={dateOfIssue}
						onChange={(e) => setDateOfIssue(e.target.value)}
					/>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Data sprzedaży
					<input
						type='date'
						value={dateOfSale}
						onChange={(e) => setDateOfSale(e.target.value)}
					/>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Oryginalność
					<select
						onChange={(e) => setOriginality(e.target.value)}
						value={originality}>
						<option
							selected
							value='ORIGINAL'>
							Oryginał
						</option>
						<option value='COPY'>Kopia</option>
					</select>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Metoda płatności
					<select
						onChange={(e) => setMethodOfPayment(e.target.value)}
						value={methodOfPayment}>
						<option
							selected
							value='TRANSFER'>
							Przelew
						</option>
						<option value='CASH'>Gotówka</option>
						<option value='CARD'>Karta</option>
					</select>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Termin zapłaty
					<input
						type='date'
						value={deadlineOfPayment}
						onChange={(e) => setDeadlineOfPayment(e.target.value)}
					/>
				</label>
			</div>
			{/*<div className={styles.formPosition}>
				<label>
					Suma netto
					<input
						type='text'
						value={sumNetto}
						onChange={(e) => setSumNetto(e.target.value)}
					/>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Suma brutto
					<input
						type='text'
						value={sumBrutto}
						onChange={(e) => setSumBrutto(e.target.value)}
					/>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Suma VAT
					<input
						type='text'
						value={sumVat}
						onChange={(e) => setSumVat(e.target.value)}
					/>
				</label>
			</div>*/}
			<div className={styles.btns}>
				<button
					className={styles.yesBtn}
					onClick={handleNextStepBtn}>
					Dalej
				</button>
			</div>
		</div>
	);
};

const SecondStep = ({
	setSecondStep,
	setThirdStep,
	setDisplayedStep,
	scrollToTop,
	sellerCompanyName,
	setSellerCompanyName,
	sellerCompanyStreet,
	setSellerCompanyStreet,
	sellerCompanyBuildingNumber,
	setSellerCompanyBuildingNumber,
	sellerCompanyPostCode,
	setSellerCompanyPostCode,
	sellerCompanyCity,
	setSellerCompanyCity,
	sellerCompanyNip,
	setSellerCompanyNip,
	sellerCompanyBankName,
	setSellerCompanyBankName,
	sellerCompanyBankNumber,
	setSellerCompanyBankNumber,
	buyerCompanyName,
	setBuyerComanyName,
	buyerCompanyStreet,
	setBuyerCompanyStreet,
	buyerCompanyBuildingNumber,
	setBuyerCompanyBuildingNumber,
	buyerCompanyPostCode,
	setBuyerCompanyPostCode,
	buyerCompanyCity,
	setBuyerCompanyCity,
	buyerCompanyNip,
	setBuyerCompanyNip,
	buyerCompanyBankName,
	setBuyerCompanyBankName,
	buyerCompanyBankNumber,
	setBuyerCompanyBankNumber,
}) => {
	const handleNextStepBtn = () => {
		setDisplayedStep('third');
		setThirdStep(true);
		setTimeout(scrollToTop, 0);
	};

	const handlePreviewStepBtn = () => {
		setDisplayedStep('first');
		setSecondStep(false);
		setTimeout(scrollToTop, 0);
	};

	return (
		<div className={styles.subContent}>
			<h3>Dane firm</h3>
			<div className={styles.formPosition}>
				<h4>Sprzedawca</h4>
				<label>
					Nazwa firmy
					<input
						type='text'
						onChange={(e) => setSellerCompanyName(e.target.value)}
						value={sellerCompanyName}
					/>
				</label>
				<label>
					Ulica
					<input
						type='text'
						onChange={(e) => setSellerCompanyStreet(e.target.value)}
						value={sellerCompanyStreet}
					/>
				</label>
				<label>
					Numer budynku
					<input
						type='text'
						onChange={(e) => setSellerCompanyBuildingNumber(e.target.value)}
						value={sellerCompanyBuildingNumber}
					/>
				</label>
				<label>
					Kod pocztowy
					<input
						type='text'
						onChange={(e) => setSellerCompanyPostCode(e.target.value)}
						value={sellerCompanyPostCode}
					/>
				</label>
				<label>
					Miejscowość
					<input
						type='text'
						onChange={(e) => setSellerCompanyCity(e.target.value)}
						value={sellerCompanyCity}
					/>
				</label>
				<label>
					NIP
					<input
						type='text'
						onChange={(e) => setSellerCompanyNip(e.target.value)}
						value={sellerCompanyNip}
					/>
				</label>
				<label>
					Nazwa banku
					<input
						type='text'
						onChange={(e) => setSellerCompanyBankName(e.target.value)}
						value={sellerCompanyBankName}
					/>
				</label>
				<label>
					Numer konta
					<input
						type='text'
						onChange={(e) => setSellerCompanyBankNumber(e.target.value)}
						value={sellerCompanyBankNumber}
					/>
				</label>
				<h4>Kupujący</h4>
				<label>
					Nazwa firmy
					<input
						type='text'
						onChange={(e) => setBuyerComanyName(e.target.value)}
						value={buyerCompanyName}
					/>
				</label>
				<label>
					Ulica
					<input
						type='text'
						onChange={(e) => setBuyerCompanyStreet(e.target.value)}
						value={buyerCompanyStreet}
					/>
				</label>
				<label>
					Numer budynku
					<input
						type='text'
						onChange={(e) => setBuyerCompanyBuildingNumber(e.target.value)}
						value={buyerCompanyBuildingNumber}
					/>
				</label>
				<label>
					Kod pocztowy
					<input
						type='text'
						onChange={(e) => setBuyerCompanyPostCode(e.target.value)}
						value={buyerCompanyPostCode}
					/>
				</label>
				<label>
					Miejscowość
					<input
						type='text'
						onChange={(e) => setBuyerCompanyCity(e.target.value)}
						value={buyerCompanyCity}
					/>
				</label>
				<label>
					NIP
					<input
						type='text'
						onChange={(e) => setBuyerCompanyNip(e.target.value)}
						value={buyerCompanyNip}
					/>
				</label>
				<label>
					Nazwa banku
					<input
						type='text'
						onChange={(e) => setBuyerCompanyBankName(e.target.value)}
						value={buyerCompanyBankName}
					/>
				</label>
				<label>
					Numer konta
					<input
						type='text'
						onChange={(e) => setBuyerCompanyBankNumber(e.target.value)}
						value={buyerCompanyBankNumber}
					/>
				</label>
			</div>

			<div className={styles.btns}>
				<button
					className={styles.yesBtn}
					onClick={handlePreviewStepBtn}>
					Wróć
				</button>
				<button
					className={styles.yesBtn}
					onClick={handleNextStepBtn}>
					Dalej
				</button>
			</div>
		</div>
	);
};

const ThirdStep = ({
	setThirdStep,
	setDisplayedStep,
	scrollToTop,
	invoicePositions,
	setInvoicePositions,
	handleAddInvoiceBtn,
	setError
}) => {
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');
	const [unitOfMeasure, setUnitOfMeasure] = useState('');
	const [unitPrice, setUnitPrice] = useState('');
	const [nettoValue, setNettoValue] = useState(0);
	const [vatPercent, setVatPercent] = useState(0);
	const [vatValue, setVatValue] = useState(0);
	const [bruttoValue, setBruttoValue] = useState(0);

	const handlePreviewStepBtn = () => {
		setThirdStep(false);
		setDisplayedStep('second');
		setTimeout(scrollToTop, 0);
	};

	const handleAddPositionButton = () => {
		if(name === '' || amount === '' || unitOfMeasure === '' || unitPrice === '' || nettoValue === '' || vatPercent === '' || vatValue === '' || bruttoValue === '') {
			setError('Wypełnij wszystkie pola formularza');
		} else {
setInvoicePositions((prev) => [
			...prev,
			{
				name: name,
				amount: amount,
				unitOfMeasure: unitOfMeasure,
				unitPrice: unitPrice,
				nettoValue: nettoValue,
				vatPercent: vatPercent,
				vatValue: vatValue,
				bruttoValue: bruttoValue,
			},
		]);
		setName('');
		setAmount('');
		setUnitOfMeasure('');
		setUnitPrice('');
		setNettoValue(0);
		setVatPercent(0);
		setVatValue(0);
		setBruttoValue(0);
		}
		setTimeout(scrollToTop, 0);
	};

	const handleDeletePosition = (indexToDelete) => {
		setInvoicePositions((prev) => {
			const newArr = [...prev];
			newArr.splice(indexToDelete, 1);
			return newArr;
		});
	};

	return (
		<div className={styles.subContent}>
			<h3>Pozycje faktury</h3>
			{invoicePositions.length === 0 ? (
				<p>Brak pozycji do wyświetlenia</p>
			) : (
				invoicePositions.map((singlePosition, index) => {
					return (
						<div
							key={index}
							className={styles.invoicePosition}>
							<div>{index}.</div>
							<div>{singlePosition.name}</div>
							<button
								className={styles.deleteBtn}
								onClick={() => handleDeletePosition(index)}>
								Usuń
							</button>
						</div>
					);
				})
			)}
			<h3>Nowa pozycja</h3>
			<div className={styles.formPosition}>
				<label>
					Nazwa
					<input
						type='text'
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Ilość
					<input
						type='text'
						onChange={(e) => setAmount(e.target.value)}
						value={amount}
					/>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Jednostka miary
					<select
						onChange={(e) => setUnitOfMeasure(e.target.value)}
						value={unitOfMeasure}>
						<option
							selected
							value='L'>
							Litry
						</option>
						<option value='KG'>Kilogramy</option>
						<option value='PCS'>Sztuki</option>
						<option value='THOUSAND_PCS'>Tysiące sztuk</option>
					</select>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Cena jednostkowa
					<input
						type='text'
						onChange={(e) => setUnitPrice(e.target.value)}
						value={unitPrice}
					/>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Wartość netto
					<input
						type='text'
						onChange={(e) => setNettoValue(e.target.value)}
						value={nettoValue}
					/>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Procent vat
					<input
						type='text'
						onChange={(e) => setVatPercent(e.target.value)}
						value={vatPercent}
					/>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Wartość vat
					<input
						type='text'
						onChange={(e) => setVatValue(e.target.value)}
						value={vatValue}
					/>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Wartość brutto
					<input
						type='text'
						onChange={(e) => setBruttoValue(e.target.value)}
						value={bruttoValue}
					/>
				</label>
			</div>
			<div className={styles.btns}>
				<button
					className={styles.yesBtn}
					onClick={handleAddPositionButton}>
					Dodaj
				</button>
			</div>
			<div className={styles.btns}>
				<button
					className={styles.yesBtn}
					onClick={handlePreviewStepBtn}>
					Wróć
				</button>
				<button
					className={styles.yesBtn}
					onClick={handleAddInvoiceBtn}>
					Stwórz
				</button>
			</div>
		</div>
	);
};
