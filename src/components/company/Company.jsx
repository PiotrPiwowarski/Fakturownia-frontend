import styles from './Company.module.css';
import {useState} from 'react';
import DeleteCompanyModal from './DeleteCompanyModal';


const Company = ({company, setError, onDeleteSuccess}) => {
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

	const handleDeleteBtn = () => {
		setIsDeleteModalOpen(true);
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
			{isDeleteModalOpen && <DeleteCompanyModal company={company} setError={setError} onDeleteSuccess={onDeleteSuccess} setIsModalOpen={setIsDeleteModalOpen} />}
		</div>
	);
}

export default Company;