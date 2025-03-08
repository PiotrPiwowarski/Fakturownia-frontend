import styles from './Dashboard.module.css';
import { useState, useEffect } from 'react';
import { useUrlStore } from '../useStore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Statistics = () => {
	const navigate = useNavigate();
	const { url } = useUrlStore();
	const [statistics, setStatistics] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const jwt = localStorage.getItem('jwt');
				if (!jwt) {
					navigate('/');
					return;
				}
				const response = await axios.get(`${url}/api/invoices/statistics`, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${jwt}`,
					},
				});
				setStatistics(response.data);
			} catch (e) {
				setError('Błąd pobierania statystyk');
			}
		};
		fetchData();
	}, [url, navigate]);

	return (
		<div className={styles.vertical}>
			<div className={styles.sectionHead}>
				<h1>Statystyki.</h1>
			</div>
			<p className={styles.error}>{error}</p>
			{statistics === '' ? (
				<p>Brak statystyk do wyświetlenia.</p>
			) : (
				<div className={styles.statisticsSection}>
					<h2>W liczbach</h2>
					<div className={styles.statistics}>
						<div className={styles.tile}>
							<h2>Ilość wystawionych faktur</h2>
							<p>{statistics.amount}</p>
						</div>
						<div className={styles.tile}>
							<h2>Przychód netto</h2>
							<p>{statistics.sumNettoValue} zł</p>
						</div>
						<div className={styles.tile}>
							<h2>Średnia wartość faktury</h2>
							<p>{statistics.averageInvoiceValue} zł</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Statistics;
