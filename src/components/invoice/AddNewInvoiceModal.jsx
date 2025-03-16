import styles from './Invoice.module.css';
import { useState, useRef } from 'react';
import XIcon from '../../img/XIcon';

const AddNewInvoiceModal = ({ setIsAddModalOpen }) => {
	const modalRef = useRef(null);
	const [displayedStep, setDisplayedStep] = useState('first');
	const [secondStep, setSecondStep] = useState(false);
	const [thirdStep, setThirdStep] = useState(false);

	const [invoice, setInvoice] = useState({
		invoiceNumbe: '',
		dateOfIssue: '',
		dateOfSale: '',
		originality: 'ORIGINAL',
		paymentMethod: 'TRANSFER',
		paymentDeadline: '',
	});

	const scrollToTop = () => {
		if(modalRef.current) {
			modalRef.current.scrollTo({top: 0, behavior: 'smooth'});
		}
	}

	const handleXIconBtn = () => {
		setIsAddModalOpen(false);
	};

	return (
		<div className={styles.modalBgc}>
			<div className={styles.modalContent} ref={modalRef}>
				<button className={styles.xIcon} onClick={handleXIconBtn}>
					<XIcon />
				</button>
				<h2>Stwórz fakturę</h2>

				<div className={styles.multiStepContener}>
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

const FirstStep = ({ setSecondStep, setDisplayedStep, scrollToTop }) => {
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
			<button className={styles.previewButton} onClick={handleNextStepBtn}>
				Dalej
			</button>
		</div>
	);
};

const SecondStep = ({ setSecondStep, setThirdStep, setDisplayedStep, scrollToTop }) => {
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
			<div>
				<button className={styles.previewButton} onClick={handlePreviewStepBtn}>
					Wróć
				</button>
				<button className={styles.previewButton} onClick={handleNextStepBtn}>
					Dalej
				</button>
			</div>
		</div>
	);
};

const ThirdStep = ({ setThirdStep, setDisplayedStep, setIsModalOpen, scrollToTop }) => {

	const handlePreviewStepBtn = () => {
		setThirdStep(false);
		setDisplayedStep('second');
		scrollToTop();
	}

	const handleAddInvoiceBtn = () => {
		setIsModalOpen(false);
	}

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
			<div>
				<button className={styles.previewButton} onClick={handlePreviewStepBtn}>
					Wróć
				</button>
				<button className={styles.createInvoiceButton} onClick={handleAddInvoiceBtn}>
					Stwórz fakture
				</button>
			</div>
		</div>
	);
};
