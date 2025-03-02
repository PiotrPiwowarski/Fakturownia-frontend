import styles from './Dashboard.module.css';
import { useState, useEffect } from 'react';
import { useUrlStore } from '../useStore';
import axios from 'axios';

const Statistics = () => {
	const { url } = useUrlStore();
	const [amount, setAmount] = useState('');
	const [sumNettoValue, setSumNettoValue] = useState('');
	const [averageInvoiceValue, setAverageInvoiceValue] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const jwt = localStorage.getItem('jwt');
				if (jwt === null) {
					setError('Błąd pobierania statystyk');
					return;
				}
				const response = await axios.get(`${url}/api/invoices/amount`, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${jwt}`,
					},
				});
				setAmount(response.data.amount);
				setSumNettoValue(response.data.sumNettoValue);
				setAverageInvoiceValue(response.data.averageInvoiceValue);
			} catch (e) {
				setError('Błąd pobierania statystyk');
			}
		};
		fetchData();
	}, [url]);

	return (
		<div className={styles.vertical}>
			<div className={styles.sectionHead}>
				<h1>Statystyki.</h1>
				<p className={styles.error}>{error}</p>
			</div>
			<div className={styles.content}>
				<div className={styles.tile}>
					<div className={styles.statisticHeader}>
						<h2>Ilość faktur</h2>
					</div>
					<div className={styles.statistic}>
						<p>{amount}</p>
					</div>
				</div>
				<div className={styles.tile}>
					<div className={styles.statisticHeader}>
						<h2>Sumaryczna wartość netto</h2>
					</div>
					<div className={styles.statistic}>
						<p>{sumNettoValue} zł</p>
					</div>
				</div>
				<div className={styles.tile}>
					<div className={styles.statisticHeader}>
						<h2>Średnia wartość faktury</h2>
					</div>
					<div className={styles.statistic}>
						<p>{averageInvoiceValue} zł</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Statistics;
