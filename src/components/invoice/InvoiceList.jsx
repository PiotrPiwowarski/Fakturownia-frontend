import Invoice from './Invoice';
import styles from './Invoice.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useUrlStore } from '../useStore';
import { useNavigate } from 'react-router-dom';

const InvoiceList = () => {
	const { url } = useUrlStore();
	const navigate = useNavigate();
	const [invoices, setInvoices] = useState([]);
	const [error, setError] = useState('');

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
		<div className={styles.contener}>
			<p className={styles.error}>{error}</p>
			<div className={`${styles.component} ${styles.marginBottom}`}>
				<div className={styles.number}>
					<p>Numer</p>
				</div>
				<div className={styles.dateOfIssue}>
					<p>Data wystawienia</p>
				</div>
				<div className={styles.customer}>
					<p>Klient</p>
				</div>
				<div className={styles.nettoValue}>
					<p>Wartość netto</p>
				</div>
				<div className={styles.preview}></div>
				<div className={styles.delete}></div>
			</div>
			{invoices.length === 0 ? (
				<p>Brak faktur do wyświetlenia.</p>
			) : (
				invoices.map((invoice) => {
					return <Invoice key={invoice.id} invoice={invoice} setError={setError} fetchData={fetchData} />;
				})
			)}
		</div>
	);
};

export default InvoiceList;
