import styles from './Modals.module.css';
import { useState, useRef } from 'react';
import XIcon from '../../img/XIcon';

const AddNewInvoiceModal = ({ setIsAddModalOpen }) => {
	const modalRef = useRef(null);
	const [displayedStep, setDisplayedStep] = useState('first');
	const [secondStep, setSecondStep] = useState(false);
	const [thirdStep, setThirdStep] = useState(false);

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
	const [sellerCompanyBankName, setSellerCompanyBankName] = useState(null);
	const [sellerCompanyBankNumber, setSellerCompanyBanknumber] = useState(null);

	const [buyerCompanyName, setBuyerComanyName] = useState('');
	const [buyerCompanySteet, setBuyerCompanyStreet] = useState('');
	const [buyerCompanyBuildingNumber, setBuyerCompanyBuilginNumber] =
		useState('');
	const [buyerCompanyPostCode, setBuyerCompanyPostCode] = useState('');
	const [buyerCompanyCity, setBuyerCompanyCity] = useState('');
	const [buyerCompanyNip, setBuyerCompanyNip] = useState('');
	const [buyerCompanyBankName, setBuyerCompanyBankName] = useState('');
	const [buyerCompanyBankNumber, setBuyerCompanyBankNumber] = useState('');

	const scrollToTop = () => {
		if (modalRef.current) {
			modalRef.current.scrollTo({ top: 0, behavior: 'smooth' });
		}
	};

	const handleXIconBtn = () => {
		setIsAddModalOpen(false);
	};

	const handleAddBtn = () => {};

	return (
		<div className={styles.background}>
			<div className={styles.component} ref={modalRef}>
				<button className={styles.xBtn} onClick={handleXIconBtn}>
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

				{displayedStep === 'first' ? (
					<FirstStep
						setSecondStep={setSecondStep}
						setDisplayedStep={setDisplayedStep}
						scrollToTop={scrollToTop}
						setInvoiceNumber={setInvoiceNumber}
						setDateOfIssue={setDateOfIssue}
						setDateOfSale={setDateOfSale}
						setOriginality={setOriginality}
						setMethodOfPayment={setMethodOfPayment}
						setDeadlineOfPayment={setDeadlineOfPayment}
					/>
				) : displayedStep === 'second' ? (
					<SecondStep
						setSecondStep={setSecondStep}
						setThirdStep={setThirdStep}
						setDisplayedStep={setDisplayedStep}
						scrollToTop={scrollToTop}
					/>
				) : (
					<ThirdStep
						setThirdStep={setThirdStep}
						setDisplayedStep={setDisplayedStep}
						setIsModalOpen={setIsAddModalOpen}
						scrollToTop={scrollToTop}
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
	setInvoiceNumber,
	setDateOfIssue,
	setDateOfSale,
	setOriginality,
	setMethodOfPayment,
	setDeadlineOfPayment,
}) => {
	const handleNextStepBtn = () => {
		setSecondStep('true');
		setDisplayedStep('second');
		scrollToTop();
	};

	return (
		<div className={styles.subContent}>
			<h3>Dane faktury</h3>
			<div className={styles.formPosition}>
				<label>
					Numer faktury
					<input
						type='text'
						placeholder='nr. faktury'
						onChange={(e) => setInvoiceNumber(e.target.value)}
					/>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Data wystawienia
					<input type='date' onChange={(e) => setDateOfIssue(e.target.value)} />
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Data sprzedaży
					<input type='date' onChange={(e) => setDateOfSale(e.target.value)} />
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Oryginalność
					<select onChange={(e) => setOriginality(e.target.value)}>
						<option selected>Oryginał</option>
						<option>Kopia</option>
					</select>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Metoda płatności
					<select onChange={(e) => setMethodOfPayment(e.target.value)}>
						<option selected>Przelew</option>
						<option>Gotówka</option>
						<option>Karta</option>
					</select>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Termin zapłaty
					<input
						type='date'
						onChange={(e) => setDeadlineOfPayment(e.target.value)}
					/>
				</label>
			</div>
			<div className={styles.btns}>
				<button className={styles.yesBtn} onClick={handleNextStepBtn}>
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
}) => {
	const handleNextStepBtn = () => {
		setDisplayedStep('thrid');
		setThirdStep(true);
		scrollToTop();
	};

	const handlePreviewStepBtn = () => {
		setDisplayedStep('first');
		setSecondStep(false);
		scrollToTop();
	};

	return (
		<div className={styles.subContent}>
			<h3>Dane firm</h3>
			<div className={styles.formPosition}>
				<label>
					Numer faktury
					<input type='text' placeholder='nr. faktury' />
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Data wystawienia
					<input type='date' />
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Data sprzedaży
					<input type='date' />
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Oryginalność
					<select>
						<option>Oryginał</option>
						<option>Kopia</option>
					</select>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Metoda płatności
					<select>
						<option>Przelew</option>
						<option>Gotówka</option>
						<option>Karta</option>
					</select>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Termin zapłaty
					<input type='date' />
				</label>
			</div>
			<div className={styles.btns}>
				<button className={styles.yesBtn} onClick={handlePreviewStepBtn}>
					Wróć
				</button>
				<button className={styles.yesBtn} onClick={handleNextStepBtn}>
					Dalej
				</button>
			</div>
		</div>
	);
};

const ThirdStep = ({
	setThirdStep,
	setDisplayedStep,
	setIsModalOpen,
	scrollToTop,
}) => {
	const handlePreviewStepBtn = () => {
		setThirdStep(false);
		setDisplayedStep('second');
		scrollToTop();
	};

	const handleAddInvoiceBtn = () => {
		setIsModalOpen(false);
	};

	return (
		<div className={styles.subContent}>
			<h3>Pozycje faktury</h3>
			<div className={styles.formPosition}>
				<label>
					Numer faktury
					<input type='text' placeholder='nr. faktury' />
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Data wystawienia
					<input type='date' />
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Data sprzedaży
					<input type='date' />
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Oryginalność
					<select>
						<option>Oryginał</option>
						<option>Kopia</option>
					</select>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Metoda płatności
					<select>
						<option>Przelew</option>
						<option>Gotówka</option>
						<option>Karta</option>
					</select>
				</label>
			</div>
			<div className={styles.formPosition}>
				<label>
					Termin zapłaty
					<input type='date' />
				</label>
			</div>
			<div className={styles.btns}>
				<button className={styles.yesBtn} onClick={handlePreviewStepBtn}>
					Wróć
				</button>
				<button className={styles.yesBtn} onClick={handleAddInvoiceBtn}>
					Stwórz fakture
				</button>
			</div>
		</div>
	);
};
