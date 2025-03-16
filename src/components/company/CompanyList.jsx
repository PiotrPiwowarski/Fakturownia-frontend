import Company from './Company';
import styles from './Company.module.css';

const CompanyList = ({error, setError, companies, fetchData}) => {

	return (
		<div className={styles.contener}>
			<p className={styles.error}>{error}</p>
			<div className={`${styles.component} ${styles.marginBottom}`}>
				<div className={styles.name}>
					<p>Nazwa</p>
				</div>
				<div className={styles.nip}>
					<p>NIP</p>
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
					return <Company key={company.id} company={company} onDeleteSuccess={fetchData} setError={setError} fetchData={fetchData} />;
				})
			)}
		</div>
	);
};

export default CompanyList;