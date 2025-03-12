import styles from './Dashboard.module.css';
import CompanyList from '../company/CompanyList';
import {useState, useEffect} from 'react';
import AddNewCompanyModal from '../company/AddNewCompanyModal';
import { useUrlStore } from '../useStore';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Companies = () => {
	const [isAddModalOpen, setIsAddModalOpen] = useState(false);

	const handleAddCompanyBtn = () => {
		setIsAddModalOpen(true);
	}

	const { url } = useUrlStore();
	const navigate = useNavigate();
	const [companies, setCompanies] = useState([]);
	const [error, setError] = useState('');

	const fetchData = async () => {
		try {
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
			setError('');
		} catch (e) {
			console.log(e.message);
			setError('Błąd pobierania firm');
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className={styles.vertical}>
			<div className={styles.sectionHead}>
				<h1>Firmy.</h1>
			</div>
			<button className={styles.createInvoiceButton} onClick={handleAddCompanyBtn}>Dodaj nową firmę</button>
			<CompanyList companies={companies} error={error} setError={setError} fetchData={fetchData} />
			{isAddModalOpen && <AddNewCompanyModal setIsAddModalOpen={setIsAddModalOpen}  fetchData={fetchData} onDeleteSuccess={fetchData} />}
		</div>
	);
};

export default Companies;
