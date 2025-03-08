import styles from './Company.module.css';
import { useUrlStore } from '../useStore';
import {useState} from 'react';
import axios from 'axios';
import DeleteCompanyModal from './DeleteCompanyModal';


const Company = ({company, setError, onDeleteSuccess}) => {
	const { url } = useUrlStore();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleDeleteBtn = () => {
		setIsModalOpen(true);
	}

    return (
		<div className={styles.component}>
			<div className={styles.name}>
				<p>{company.name}</p>
			</div>
			<div className={styles.nip}>
				<p>{company.nip}</p>
			</div>
			<div className={styles.preview}>
				<button className={styles.previewButton}>Podgląd</button>
			</div>
			<div className={styles.delete}>
				<button className={styles.deleteButton} onClick={handleDeleteBtn}>Usuń</button>
			</div>
			{isModalOpen && <DeleteCompanyModal invoice={company} setError={setError} onDeleteSuccess={onDeleteSuccess} setIsModalOpen={setIsModalOpen} />}
		</div>
	);
}

export default Company;