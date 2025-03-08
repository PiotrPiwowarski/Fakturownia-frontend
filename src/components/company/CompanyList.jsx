import Company from './Company';
import styles from './Company.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useUrlStore } from '../useStore';
import { useNavigate } from 'react-router-dom';

const CompanyList = () => {
    const { url } = useUrlStore();
	const navigate = useNavigate();
	const [companies, setCompanies] = useState([]);
	const [error, setError] = useState('');

	const fetchData = async () => {
		try {
			setError('');
			const jwt = localStorage.getItem('jwt');
			if (jwt === null) {
				navigate('/');
				return;
			}
			const response = await axios.get(`${url}/api/companies`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			setCompanies(response.data);
		} catch (e) {
			setError('Błąd pobierania firm');
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className={styles.contener}>
			<p className={styles.error}>{error}</p>
			<div className={`${styles.component} ${styles.marginBottom}`}>
				<div className={styles.name}>
					<p className={styles.underline}>Nazwa</p>
				</div>
				<div className={styles.nip}>
					<p className={styles.underline}>NIP</p>
				</div>
				<div className={styles.preview}>
					
				</div>
				<div className={styles.delete}>
					
				</div>
			</div>
			{companies.length === 0 ? (
				<p>Brak firm do wyświetlenia.</p>
			) : (
				companies.map((company) => {
					return <Company company={company} onDeleteSuccess={fetchData} setError={setError} />;
				})
			)}
		</div>
	);
};

export default CompanyList;