import styles from './Modals.module.css';
import XIcon from '../../img/XIcon';
import { useState } from 'react';
import EditCompanyModal from './EditCompanyModal';

const CompanyModal = ({ company, setIsPreviewModalOpen, fetchData }) => {
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const handleXIconBtn = () => {
		setIsPreviewModalOpen(false);
	};

	const handleEditBtn = () => {
		setIsEditModalOpen(true);
	};

	return (
		<div className={styles.background}>
			<div className={styles.component}>
				<button className={styles.xBtn} onClick={handleXIconBtn}>
					<XIcon />
				</button>
				<div className={styles.header}>
					<h2>{company.name}</h2>
				</div>
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
				<button className={styles.yesBtn} onClick={handleEditBtn}>
					Edytuj
				</button>
				{isEditModalOpen && (
					<EditCompanyModal
						setIsEditModalOpen={setIsEditModalOpen}
						company={company}
						fetchData={fetchData}
					/>
				)}
			</div>
		</div>
	);
};

export default CompanyModal;
