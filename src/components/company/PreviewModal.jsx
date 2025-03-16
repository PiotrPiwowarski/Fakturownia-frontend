import styles from './Company.module.css';
import XIcon from '../../img/XIcon';
import {useState} from 'react';
import EditCompanyModal from './EditCompanyModal';

const PreviewModal = ({ company, setIsPreviewModalOpen, fetchData }) => {

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const handleXIconBtn = () => {
		setIsPreviewModalOpen(false);
	};

    const handleEditBtn = () => {
        setIsEditModalOpen(true);
    }

	return (
		<div className={styles.modalBgc}>
			<div className={styles.modalContent}>
				<button className={styles.xIcon} onClick={handleXIconBtn}>
					<XIcon />
				</button>
				<h2>{company.name}</h2>
				<dl>
					<dt>Ulica</dt>
					<dd>{company.street}</dd>
					<dt>Numer budynku</dt>
					<dd>{company.buildingNumber}</dd>
					<dt>Kod pocztowy</dt>
					<dd>{company.postCode}</dd>
					<dt>Miejscowość</dt>
					<dd>{company.city}</dd>
					<dt>NIP</dt>
					<dd>{company.nip}</dd>
					{company.bankName && (
						<>
							<dt>Nazwa banku</dt>
							<dd>{company.bankName}</dd>
						</>
					)}
					{company.accountNumber && (
						<>
							<dt>Numer konta</dt>
							<dd>{company.accountNumber}</dd>
						</>
					)}
				</dl>
				<button  className={styles.previewButton} onClick={handleEditBtn}>Edytuj</button>
                {isEditModalOpen && <EditCompanyModal setIsEditModalOpen={setIsEditModalOpen} company={company} fetchData={fetchData} />}
			</div>
		</div>
	);
};

export default PreviewModal;
