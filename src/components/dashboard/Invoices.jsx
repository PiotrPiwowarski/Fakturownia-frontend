import styles from './Dashboard.module.css';
import InvoiceList from '../invoice/InvoiceList';
import AddNewInvoiceModal from '../modals/AddNewInvoiceModal';
import {useState, useEffect} from 'react';
import { useUrlStore } from '../useStore';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Invoices = () => {

	const [isAddModalOpen, setIsAddModalOpen] = useState(false);
	const [error, setError] = useState('');
	const [invoices, setInvoices] = useState('');

	const { url } = useUrlStore();
	const navigate = useNavigate();

	const handleAddNewInvoiceBtn = () => {
		setIsAddModalOpen(true);
	}

	const fetchData = async () => {
		try {
			const jwt = localStorage.getItem('jwt');
			const paymentPlan = localStorage.getItem('paymentPlan');
			if (!jwt) {
				navigate('/');
				return;
			}
			if(!paymentPlan) {
				setError('Brak danych o planie płatnicznym');
			}
			const response = await axios.get(`${url}/api/invoices`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			setInvoices(response.data);
			setError('');
		} catch (e) {
			console.log(e.message);
			setError('Błąd pobierania faktur');
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className={styles.vertical}>
			<div className={styles.sectionHead}>
				<h1>Faktury.</h1>
			</div>
			<button className={styles.createInvoiceButton} onClick={handleAddNewInvoiceBtn}>Dodaj nową fakturę</button>
			{isAddModalOpen && <AddNewInvoiceModal setIsAddModalOpen={setIsAddModalOpen} reloadData={fetchData} />}
			<InvoiceList error={error} setError={setError} invoices={invoices} fetchData={fetchData} />
		</div>
	);
};

export default Invoices;
