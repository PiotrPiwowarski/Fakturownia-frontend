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
				console.log(e.message);
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
							<h2>{statistics.amount}</h2>
							<p>Ilość wystawionych faktur</p>
						</div>
						<div className={styles.tile}>
						<h2>{statistics.sumNettoValue} zł</h2>
							<p>Przychód netto</p>
						</div>
						<div className={styles.tile}>
						<h2>{statistics.averageInvoiceValue} zł</h2>
							<p>Średnia wartość faktury</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Statistics;
