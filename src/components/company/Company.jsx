import styles from './Company.module.css';
import { useState } from 'react';
import AcceptModal from '../modals/AcceptModal';
import PreviewModal from './PreviewModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUrlStore } from '../useStore';

const Company = ({ company, fetchData }) => {
	const navigate = useNavigate();
	const { url } = useUrlStore();

	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

	const handleDeleteBtn = () => {
		setIsDeleteModalOpen(true);
	};

	const deleteCompany = async (setError) => {
		const jwt = localStorage.getItem('jwt');
		if (!jwt) {
			navigate('/');
			return;
		}
		try {
			await axios.delete(`${url}/api/companies/${company.id}`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${jwt}`,
				},
			});
			fetchData();
			setIsDeleteModalOpen(false);
		} catch (e) {
			setError('Usuwanie firmy zakończone niepowodzeniem');
		}
	};

	const handlePreviewBtn = () => {
		setIsPreviewModalOpen(true);
	};

	return (
		<div className={styles.component}>
			<div className={styles.name}>
				<p>{company.name}</p>
			</div>
			<div className={styles.nip}>
				<p>{company.nip}</p>
			</div>
			<div className={styles.preview}>
				<button className={styles.previewButton} onClick={handlePreviewBtn}>
					Podgląd
				</button>
			</div>
			<div className={styles.delete}>
				<button className={styles.deleteButton} onClick={handleDeleteBtn}>
					Usuń
				</button>
			</div>
			{isDeleteModalOpen && (
				<AcceptModal
					title='Czy na pewno chcesz usunąć firmę'
					onYesFunction={deleteCompany}
					onNoFunction={() => setIsDeleteModalOpen(false)}
				/>
			)}
			{isPreviewModalOpen && (
				<PreviewModal
					company={company}
					setIsPreviewModalOpen={setIsPreviewModalOpen}
					fetchData={fetchData}
				/>
			)}
		</div>
	);
};

export default Company;
